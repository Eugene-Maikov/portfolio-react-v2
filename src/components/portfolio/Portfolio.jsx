import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Заголовок 1',
    github: 'https://github.com/Eugene-Maikov',
    demo: 'https://github.com/Eugene-Maikov'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Заголовок 2',
    github: 'https://github.com/Eugene-Maikov',
    demo: 'https://github.com/Eugene-Maikov'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Заголовок 3',
    github: 'https://github.com/Eugene-Maikov',
    demo: 'https://github.com/Eugene-Maikov'
  },
]

const Portfolio = () => {
  return (<section id="portfolio">
    <h5>Мои последние проекты</h5>
    <h2>Портфолио</h2>

    <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live
                  Demo</a>
              </div>
            </article>
          )
        })
      }
    </div>
  </section>)
}

export default Portfolio