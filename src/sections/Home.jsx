import React from 'react';
import '../styles/Home.scss';
import Hero from '../assets/hero.mp4';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__container container-fluid  mx-md-5 px-md-5'>
        <video autoplay='true' muted loop className='hero'>
          <source src={Hero} type='video/mp4' />
        </video>
        <div className='home__info '>
          <h1 className='home__info-h1'>JAN NOSEK</h1>
          <div className='home__info-services'>
            <div className='home__info-service'>
              <h2 className='home__info-btn'>KLIMATYZACJA</h2>
            </div>
            <div className='home__info-service'>
              <h2 className='home__info-btn'>STACJA KONTROLI POJAZDÓW</h2>
            </div>
            <div className='home__info-service'>
              <h2 className='home__info-btn'>MECHANIKA</h2>
            </div>
          </div>
          {/* <button className='home__info-btn'>Szczególy</button> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
