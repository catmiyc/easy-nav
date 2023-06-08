import React from 'react';
import heroImg from './assets/hero-code.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>知行合一</h1>
          <p>知止而后有定；定而后能静；静而后能安；安而后能虑；虑而后能得</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero img" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
