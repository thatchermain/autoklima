import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import Logo from '../assets/logo-no-text.png';
// import Logo from '../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const changeNavbar = () => {
    window.scrollY >= 200 ? setIsScrolled(true) : setIsScrolled(false);
  };
  useEffect(() => {
    changeNavbar();
    window.addEventListener('scroll', changeNavbar);
  });
  return (
    <nav>
      <div
        className={`container-fluid px-md-5' ${
          isScrolled ? 'nav__color' : 'nav'
        }`}
      >
        <div className='nav__wrapper py-3 px-2  px-md-5'>
          <div className='nav__logo' onClick={() => setIsOpen(false)}>
            <a href='#home'>
              <img src={Logo} alt='Logo' />
            </a>
          </div>

          <ul
            className={`${
              isOpen ? 'nav__links-visible' : 'nav__links'
            }  d-md-flex `}
          >
            <li className='nav__item' onClick={() => setIsOpen(false)}>
              <a href='#about' className='nav__link p-2'>
                O nas
              </a>
            </li>
            <li className='nav__item' onClick={() => setIsOpen(false)}>
              <a href='#services' className='nav__link p-2'>
                Usługi
              </a>
            </li>
            <li className='nav__item' onClick={() => setIsOpen(false)}>
              <a href='#gallery' className='nav__link p-2'>
                Galeria
              </a>
            </li>
            <li className='nav__item' onClick={() => setIsOpen(false)}>
              <a href='#contact' className='nav__link p-2'>
                Kontakt
              </a>
            </li>
          </ul>

          <div
            className='nav__mobile-toggler d-md-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
