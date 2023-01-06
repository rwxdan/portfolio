import { motion } from 'framer-motion';
import { Gh, In } from '../../globals/constants';
import { GitHub, Linkedin } from '../../assets/icons';
import './anchor_links.css';
const AnchorLinks = () => {
  return (
    <motion.aside
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="anchor-links"
    >
      <div className="links-box">
        <a href={Gh} target="_blank" className="link">
          <img src={GitHub} alt="GitHub" />
        </a>
        <a href={In} target="_blank" className="link">
          <img src={Linkedin} alt="LinkedIn" />
        </a>
      </div>
      <div className="decoration"></div>
    </motion.aside>
  );
};

export default AnchorLinks;
