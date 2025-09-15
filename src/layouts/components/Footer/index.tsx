import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub
} from "react-icons/fa";
import "./Footer.scss";

// type cho các icon SVG (react-icons tạo ra SVG components)
type IconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { size?: string | number }
>;

type SocialIcon = {
  Icon: IconComponent;
  label: string;
  href: string;
};

const socialIcons: SocialIcon[] = [
  { Icon: FaFacebook as IconComponent, label: "Facebook", href: "#!" },
  { Icon: FaTwitter as IconComponent, label: "Twitter", href: "#!" },
  { Icon: FaInstagram as IconComponent, label: "Instagram", href: "#!" },
  { Icon: FaLinkedin as IconComponent, label: "LinkedIn", href: "#!" },
  { Icon: FaYoutube as IconComponent, label: "YouTube", href: "#!" },
  { Icon: FaGithub as IconComponent, label: "GitHub", href: "#!" },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        {socialIcons.map(({ Icon, label, href }) => (
          <a key={label} href={href} aria-label={label}>
            <Icon size={20} /> <span>{label}</span>
          </a>
        ))}
      </div>
      <div className="footer__copy">
        © {new Date().getFullYear()} My Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
