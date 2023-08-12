import React from 'react';
import '../styles/Footer.scss';
import { Col, Row } from 'react-bootstrap';
import Klauzula from '../assets/Klauzula.pdf';

const Footer = () => {
  return (
    <footer className='py-4  container-fluid footer'>
      <div className='container'>
        <Row className='gap-5 d-flex justify-content-center align-items-end'>
          <Col lg={5}>
            <h5>
              <a
                className='footer__link'
                href='https://www.facebook.com/people/Klimatyzacja-samochodowa-Nosek-JanStacja-kontroli-pojazd%C3%B3w/100063636245332/'
              >
                Odwiedź nas na FB
              </a>
            </h5>
            <br />

            <h5>
              <a
                className='footer__link'
                href={Klauzula}
                download='Klauzula'
                target='_blank'
                rel='noopener noreferrer'
              >
                Klauzula informacyjna
              </a>
            </h5>
          </Col>
          <Col lg={5}>
            <h5>Jan Nosek - serwis klimatyzacji samochodowej</h5>
            <br />
            <h5>Copyright (c)2023 </h5>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
