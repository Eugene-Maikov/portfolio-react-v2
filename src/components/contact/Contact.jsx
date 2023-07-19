import React from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { LiaTelegramPlane } from 'react-icons/lia'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Связаться</h5>
      <h2>Написать мне</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>eugene-maikov2000@yandex.ru</h5>
            <a href="mailto:eugene-maikov2000@yandex.ru">Отправить сообщение</a>
          </article>
          <article className="contact__option">
            <LiaTelegramPlane className="contact__option-icon"/>
            <h4>Телеграмм</h4>
            <h5>@eugene_maikov2000</h5>
            <a href="https://t.me/eugene_maikov2000">Отправить сообщение</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>Whatsapp</h5>
            <a href="https://t.me/eugene_maikov2000">Отправить сообщение</a>
          </article>
        </div>
      {/*  End Contact Options */}
        <form action="">
          <input type="text" placeholder="Ваше имя" required/>
          <input type="email" placeholder="Ваша почта" required/>
          <textarea name="message" row="7" placeholder="Ваше сообщение" rows="10"required></textarea>
          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
      </div>
    </section>
  )
}

export default Contact