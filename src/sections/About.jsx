import React from 'react';
import '../styles/About.scss';
import About1 from '../assets/front5.jpg';
import { Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <section className='container-fluid about' id='about'>
      <div className='about__container container'>
        <h1 className='section__title py-5 my-5 display-2'>Kim jesteśmy</h1>
        <Row className='g-5 pb-5'>
          <Col lg={6} className=' px-5'>
            <div className='about__photo'>
              <img src={About1} alt='' />
            </div>
          </Col>
          <Col
            lg={6}
            className='px-5 d-flex justify-content-center align-items-start flex-column'
          >
            <p className='h4'>Nasza firma istnieje od 2006 roku.</p>
            <br></br>

            <p className='h4'>
              Zajmujemy się montażem i serwisem klimatyzacji samochodowych, a
              także mechaniką oraz elektromechaniką pojazdową.
            </p>
            <br></br>

            <p className='h4'>
              Posiadamy również Stację Kontroli Pojazdów, gdzie wykonujemy
              przeglądy rejestracyjne, a także ustawiamy zbieżność kół.
            </p>
          </Col>
        </Row>
        <Row className='g-5 py-5 text-center'>
          <h3>GODZINY OTWARCIA WARSZTATU I STACJI KONTROLI</h3>
          <h2>Pon. - Pt.: 8:00 - 18:00</h2>
          <h2>Sob.: 8:00 - 13:00</h2>
        </Row>
      </div>
    </section>
  );
};

export default About;
