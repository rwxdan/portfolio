import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import './nav.css';
import logo from '/src/assets/logo.svg';
import { Menu, Close } from '../../assets/icons';
import { navLinks } from '../../constants';
const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const a_links = useSpring({
    from: {
      x: 100,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
    config: {
      tension: 180,
      friction: 14,
    },
  });

  const a_logo = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      tension: 180,
      friction: 14,
    },
  });

  const [Open, setOpen] = useState(false);
  return (
    <nav id="nav" className={`nav ${scrollPosition && 'blur-bg'}`}>
      <animated.div style={a_logo} className="nav-logo-box">
        <a href={`${location}`} onClick={() => location.reload()}>
          <img src={logo} alt="rwxdan" className="nav-logo" />
        </a>
      </animated.div>
      <div>
        <img
          src={Open ? Close : Menu}
          alt="Menu"
          className="nav-menu"
          onClick={() => setOpen((prev) => !prev)}
        />
        <animated.div style={a_links}>
          <ul
            className={`nav-links-box ${Open && 'expanded'} ${
              scrollPosition && 'fix'
            }`}
          >
            {navLinks.map((item, index) => (
              <li key={item.id}>
                <a
                  target={`${
                    index === navLinks.length - 1 ? '_blank' : '_self'
                  }`}
                  href={`${
                    index === navLinks.length - 1
                      ? '/resume.pdf'
                      : `#${item.id}`
                  }`}
                  className={` ${
                    index === navLinks.length - 1
                      ? 'nav-links resume'
                      : 'nav-links'
                  }  `}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </animated.div>
      </div>
    </nav>
  );
};

export default Nav;
