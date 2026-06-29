import { Component } from 'react'
import { SiTelegram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./SocialFooter.css"

export default class SocialFooter extends Component {

  render() {
    return (
      <>
        <div className="SocialFooterContainer">

          <span className="SocialFooterSpan">Fallow us
          </span>

          <div className="SocialFooterLinkContainer">

            <a href="https://t.me/erfanroozbahanii" className="SocialFooterLink"><SiTelegram className='Svg'/></a>

            <a href="https://github.com/xrfanx" className="SocialFooterLink"><FaGithub className='Svg'/></a>
            
            <a href="https://www.youtube.com/" className="SocialFooterLink"><FaYoutube className='Svg'/></a>

          </div>
         

        </div>
      </>
    )
  }
}
