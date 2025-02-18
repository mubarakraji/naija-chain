
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false); 

  

  return (
    <header className="rn-header header-default black-logo-version header--fixed header--sticky">
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <div className="logo-thumbnail logo-custom-css">
              <a rel="preload" className="logo-light" href="/">
                <Image
                  alt="NaijaChain logo light"
                  src=""
                  width={106}
                  height={35}
                  className="text-transparent"
                />
              </a>
              <a rel="preload" className="logo-dark" href="/">
                <Image
                  alt="NaijaChain logo dark"
                  src=""
                  width={106}
                  height={35}
                  className="text-transparent"
                />
              </a>
            </div>
            <div className="mainmenu-wrapper">
              <nav id="sideNav" className="mainmenu-nav hidden xl:block">
                <ul className="mainmenu">
                  <li><a rel="preload" className="its_new" href="/">Home</a></li>
                  <li><a rel="preload" className="its_new" href="/about">About</a></li>
                  <li><a className="its_new" href="#!">Explore</a></li>
                  <li><a rel="preload" className="its_new" href="/blog">Blog</a></li>
                  <li><a rel="preload" className="its_new" href="/contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-right">
            <div className="setting-option hidden lg:block">
              <form className="search-form-wrapper" action="#">
                <input type="search" placeholder="Search Here" aria-label="Search" />
                <div className="search-icon">
                  <button type="button">
                    <i className="feather-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="setting-option rn-icon-list block lg:hidden">
              <div className="icon-box search-mobile-icon">
                <button type="button" aria-label="Click here to open search form">
                  <i className="feather-search"></i>
                </button>
              </div>
              <form id="header-search-1" action="#" method="GET" className="large-mobile-blog-search">
                <div className="rn-search-mobile form-group">
                  <button type="submit" className="search-button">
                    <i className="feather-search"></i>
                  </button>
                  <input type="text" placeholder="Search ..." />
                </div>
              </form>
            </div>
            <div className="setting-option header-btn">
              <div className="icon-box">
                <button className="connectBtn btn btn-small btn-primary-alta" type="button">
                  <span>Connect Wallet</span>
                </button>
              </div>
            </div>
            <div className="setting-option rn-icon-list notification-badge">
              <div className="icon-box">
                <a rel="preload" href="/activity">
                  <i className="feather-bell"></i>
                  <span className="badge">6</span>
                </a>
              </div>
            </div>
            <div className="setting-option mobile-menu-bar block xl:hidden">
              <div className="hamberger">
                <button type="button" className="hamberger-button">
                  <i className="feather-menu"></i>
                </button>
              </div>
            </div>
            <div id="my_switcher" className="setting-option my_switcher">
              <div className="setColor">
                <button type="button" className="light switch-btn">
                  <img
                    alt="Sun images"
                    src=""
                    width={16}
                    height={16}
                    loading="lazy"
                  />
                </button>
                <button type="button" className="dark switch-btn">
                  <img
                    alt="Vector Images"
                    src=""
                    width={16}
                    height={16}
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
