import React from 'react';
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>Скачать CV</a>
      <a className="btn btn-primary" href="#contact">Связаться со мной</a>
    </div>
  )
}

export default CTA