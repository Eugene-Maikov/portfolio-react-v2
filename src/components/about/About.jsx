import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Узнать</h5>
      <h2>Обо мне</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Обо мне - фото"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Опыт работы</h5>
              <small>Больше 2 лет</small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon"/>
              <h5>Клиенты</h5>
              <small>200+ Довольных</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Проекты</h5>
              <small>80+ Завершенных</small>
            </article>
          </div>
          <p>
            Я Frontend-разработчик из Нижнего Новгорода. Активно изучаю новые технологии для повышения качества моих
            проектов и оптимизации рабочего процесса. Занимаюсь версткой и программированием коммерческих проектов.
            Отлично работаю в команде и всегда открыт для обсуждения любых рабочих моментов.
          </p>

          <a className="btn btn-primary" href="#contact">Связаться со мной</a>
        </div>
      </div>
    </section>
  )
}

export default About