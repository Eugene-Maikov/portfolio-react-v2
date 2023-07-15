import React from 'react';
import './services.css'
import {BiCheck} from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Что я предлагаю</h5>
      <h2>Услуги</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
          </ul>
        </article>
      {/*  End UI/UX */}
        <article className="services">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
          </ul>
        </article>
      {/*  End UI/UX */}
        <article className="services">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </li>
          </ul>
        </article>
        {/*  End UI/UX */}
      </div>
    </section>
  )
}

export default Services