import SocialLinks from './SocialLinks';
import { footerSection } from '../utils/portfolio';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto text-center font-mono mb-5 text-xs">
      <SocialLinks className="flex justify-center gap-3 mb-3" />
      <a
        href={footerSection.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        {footerSection.title}
      </a>
      <br />
      <a
        href={footerSection.link2}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        {footerSection.title2}
      </a>
      <br />
      <a
        href={footerSection.link3}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        {footerSection.title3}: primavita19@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
