import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Photo Flip</title>
        <meta
          name="description"
          content="Transform bookshelf photos into profitable insights with PhotoFlip. AI-powered tool for book resellers to maximize Amazon FBA profits."
        />
        <meta property="og:title" content="Photo Flip" />
        <meta
          property="og:description"
          content="Transform bookshelf photos into profitable insights with PhotoFlip. AI-powered tool for book resellers to maximize Amazon FBA profits."
        />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <span className="home-text">PhotoFlip</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-right">
                <div className="home-button">
                  <a
                    href="https://form.jotform.com/231205226401136"
                    autoFocus
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-work-with-us button"
                  >
                    <span className="home-text01">Early Access </span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="home-image"
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <span className="home-text02">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="home-work-with-us1 button">
                  <span className="home-text03">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-header">
          <h1 className="home-text04">
            <span className="home-text05">Photo to profit</span>
            <br></br>
            <span>in an instant,</span>
            <br></br>
            <span>powered by AI</span>
            <br></br>
          </h1>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1568667256531-7d5ac92eaa7a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGJvb2slMjBzaGVsZnxlbnwwfHx8fDE2ODM1OTUwNjI&amp;ixlib=rb-4.0.3&amp;w=1000"
            className="home-image1"
          />
        </div>
        <div className="home-hero-image">
          <iframe
            src="https://www.youtube.com/embed/ybL3m_0pGvo?autoplay=1"
            className="home-iframe"
          ></iframe>
        </div>
        <div className="home-hero-image1">
          <h1 className="home-text11">
            PhotoFlip turns phone snaps into Amazon FBA insights, boosting your
            book flipping profits swiftly.
          </h1>
        </div>
      </div>
      <div className="home-who">
        <div className="home-header1">
          <div className="home-heading">
            <h2 className="home-text12">
              We are a technology-driven company, specializing in helping you
              spend less time scanning
            </h2>
          </div>
          <a
            href="https://form.jotform.com/231205226401136"
            autoFocus
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3 button"
          >
            <span>Request Early Access </span>
            <svg viewBox="0 0 1024 1024" className="home-icon2">
              <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </a>
        </div>
        <div className="home-preview">
          <div className="home-image2">
            <img alt="image" src="/preview.svg" className="home-image3" />
          </div>
          <div className="home-video">
            <video
              poster="https://images.unsplash.com/photo-1601469090980-fc95e8d95544?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxib29rc3RvcmV8ZW58MHx8fHwxNjgzNjc4Mjgw&amp;ixlib=rb-4.0.3&amp;w=1200"
              preload="none"
              className="home-video1"
            ></video>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-header2">
          <div className="home-socials"></div>
        </div>
        <div className="home-locations">
          <div className="home-location">
            <span className="home-details">hello@photoflip.ai</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
