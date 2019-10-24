import React, { Component } from 'react';
import { Link } from 'gatsby';
import netlify from '../../content/thumbnails/netlify.svg';
import gatsby from '../../content/thumbnails/gatsby.webp';
/* import github from '../../content/images/github.png'; */

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          {/* <a href="https://ko-fi.com/taniarascia" target="_blank" rel="noopener noreferrer">
            Ko-Fi
          </a>
          <a href="https://patreon.com/taniarascia" target="_blank" rel="noopener noreferrer">
            Patreon
          </a> */}
          <Link to="/newsletter">النشرة البريدية</Link>
          <Link to="/privacy-policy">سياسة الخصوصية</Link>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
        </div>
        <div>
          <a href="https://www.netlify.com/" title="مستضاف من طرف Netlify">
            <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="مبني بواسطة Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
        </div>
      </footer>
    );
  }
}
