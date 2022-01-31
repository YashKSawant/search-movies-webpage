import React from 'react';
import { SiNetlify } from 'react-icons/si';
const Footer = () => {
  return (
    <p className="footer">
      Powered by
      <span className="netlify-logo">
        <SiNetlify size={28} className="icon" />
      </span>
      Netlify
    </p>
  );
};
export default Footer;
