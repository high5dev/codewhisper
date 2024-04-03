import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="http://github.com/superstar951220"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" size={30}/>
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/kenny-stacker-92b5602bb/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" size={30} />
        </a>
      </li>
      {/* <li className="social-icons">
        <a
          href="https://www.instagram.com/sunil.yadav84/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li> */}
      <li className="social-icons">
        <a
          href="mailto:mr.stacker0424@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" size={30}/>
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
