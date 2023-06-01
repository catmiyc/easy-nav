import React from 'react';
import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            aliquam!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero img" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
