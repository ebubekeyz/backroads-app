import React from 'react';
import aboutImg from '../images/about.jpeg';
import Title from '../components/Title';

const About = () => {
  const title = 'About';
  const subtitle = 'us';
  return (
    <section className="section" id="about">
      <Title title={title} subtitle={subtitle} />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <button className="btn">read more</button>
        </article>
      </div>
    </section>
  );
};

export default About;
