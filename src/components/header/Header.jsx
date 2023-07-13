import React from 'react';
import './header.css';
import CTA from "./CTA";
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Привет, меня зовут</h5>
        <h1>Евгений Майков</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Евгений Майков фото"/>
        </div>

        <a className="scroll__down" href="#contact">Вниз</a>
      </div>
    </header>
  )
}

export default Header