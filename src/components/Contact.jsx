import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Youtube, Globe } from 'lucide-react';
import { emailConfig } from '../data/personalData';

const Contact = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      // Initialize EmailJS with public key
      emailjs.init(emailConfig.publicKey);

      // Send email
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'No Subject',
          message: formData.message,
          to_name: data.name,
        }
      );

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  const socialIcons = {
    github: <Github className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    youtube: <Youtube className="w-5 h-5" />,
    website: <Globe className="w-5 h-5" />,
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative ideas, or how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Email */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <a
                  href={`mailto:${data.email}`}
                  className="text-gray-800 dark:text-white hover:text-primary-500 transition-colors"
                >
                  {data.email}
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            {data.phone && (
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a
                    href={`tel:${data.phone}`}
                    className="text-gray-800 dark:text-white hover:text-primary-500 transition-colors"
                  >
                    {data.phone}
                  </a>
                </div>
              </motion.div>
            )}

            {/* Location */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="text-gray-800 dark:text-white">{data.location}</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Connect with me</p>
              <div className="flex gap-3 flex-wrap">
                {Object.entries(data.socials).map(([platform, url]) => {
                  if (!url) return null;
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      {socialIcons[platform]}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Let's work together!"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Hi! I'd like to discuss..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
