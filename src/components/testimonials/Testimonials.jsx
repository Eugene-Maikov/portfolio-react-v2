import React from 'react';
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Имя Клиента 1',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda eos, est facere, fugit natus nesciunt nulla numquam odit quidem ratione, sequi sit veritatis. Commodi culpa nisi numquam voluptas voluptate.\n'
  },
  {
    avatar: AVTR2,
    name: 'Имя Клиента 2',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda eos, est facere, fugit natus nesciunt nulla numquam odit quidem ratione, sequi sit veritatis. Commodi culpa nisi numquam voluptas voluptate.\n'
  },
  {
    avatar: AVTR3,
    name: 'Имя Клиента 3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda eos, est facere, fugit natus nesciunt nulla numquam odit quidem ratione, sequi sit veritatis. Commodi culpa nisi numquam voluptas voluptate.\n'
  },
  {
    avatar: AVTR4,
    name: 'Имя Клиента 4',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda eos, est facere, fugit natus nesciunt nulla numquam odit quidem ratione, sequi sit veritatis. Commodi culpa nisi numquam voluptas voluptate.\n'
  },
]

const Testimonials = () => {
  return (<section id="testimonials">
    <h5>Мои последние проекты</h5>
    <h2>Портфолио</h2>

    <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable: true}}
    >
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt={name}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  </section>)
}

export default Testimonials