import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import { ThemeSwitch } from '../../theme/ThemeSwitch';

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    /* add show-header class to a tag with the header tag
    if scroll is higher than 200 viewport height */
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  /*=============== Toggle Menu ===============*/
  const [toggle, showMenu] = useState(false);

  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          JS
        </a>
        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/"
                onClick={() => setActiveNav('/')}
                className={
                  activeNav === '/'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-estate nav__icon"></i> About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="teaching"
                onClick={() => setActiveNav('/teaching')}
                className={
                  activeNav === '/teaching'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-user nav__icon"></i> Teaching
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="impressum"
                onClick={() => setActiveNav('/impressum')}
                className={
                  activeNav === '/impressum'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-user nav__icon"></i> Impressum
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => showMenu(!toggle)}
        >
          <i className="uil uil-apps"></i>
        </div>

        {!toggle && <ThemeSwitch />}
      </nav>
    </header>
  );
};

export { Header };
