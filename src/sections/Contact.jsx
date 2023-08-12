import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <section id='contact' className='py-5  container-fluid contact'>
      <div className='container '>
        <h1 className='section__title py-5 my-5 display-2'>Zapraszamy</h1>
        <Row className='py-5 d-flex justify-content-center gap-5'>
          <Col lg={5} className='contact__tile'>
            <h1>Adres:</h1>
            <br />
            <h2>Wola Rzędzińska 70B</h2>
            <h2>33-150 Wola Rzędzińska</h2>
            <br />
            <h2>Tel.: 606 159 169</h2>
            <br />
            <hr />
            <br />
            <h2>Laweta:</h2>
            <h2>Tel.: 784 384 827</h2>
          </Col>
          <Col lg={5} className='contact__tile'>
            <iframe
              className='contact__map'
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20504.82283812194!2d21.0368064!3d50.0281685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d9cfecb6e9c63%3A0x6a7d89cdf4d8f696!2sNosek%20Jan%20Klimatyzacje%20samochodowe!5e0!3m2!1spl!2spl!4v1691852930131!5m2!1spl!2spl'
              //   width='600'
              //   height='450'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
