import { motion, MotionConfig } from 'framer-motion';
import { personalData } from './data/personalData';
import Header from './components/Header';
import Hero from './components/Hero';
import Arc from './components/Arc';
import Flagship from './components/Flagship';
import SelectedWork from './components/SelectedWork';
import ExperienceEducation from './components/ExperienceEducation';
import About from './components/About';
import Contact from './components/Contact';

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

function App() {
  const { name, nav, hero, proof, arc, flagship, work, github, experience, education, about, contact } = personalData;
  return (
    <MotionConfig reducedMotion="user">
    <div className="page">
      <Header name={name} nav={nav} resumeUrl={contact.resumeUrl} />
      <main className="container">
        <Hero hero={hero} proof={proof} contact={contact} />
        <motion.div {...reveal}><Arc arc={arc} /></motion.div>
        <motion.div {...reveal}><Flagship flagship={flagship} /></motion.div>
        <motion.div {...reveal}><SelectedWork work={work} github={github} /></motion.div>
        <motion.div {...reveal}><ExperienceEducation experience={experience} education={education} /></motion.div>
        <motion.div {...reveal}><About about={about} /></motion.div>
        <motion.div {...reveal}><Contact contact={contact} /></motion.div>
      </main>
    </div>
    </MotionConfig>
  );
}

export default App;
