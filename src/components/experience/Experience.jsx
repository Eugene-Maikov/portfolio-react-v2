import React from 'react';
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Что я умею</h5>
      <h2>Мои навыки</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
          </div>
        </div>
        {/* end Frontend */}

        <div className="experience__backend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">опытный</small>
              </div>
            </article>
          </div>
        </div>
        {/* end Backend */}
      </div>

    </section>
  )
}

export default Experience