import React from 'react';
import '../styles/Services.scss';
import services1 from '../assets/front5.jpg';
import { Col, Row } from 'react-bootstrap';
import { BsSnow } from 'react-icons/bs';
import { FaListCheck, FaScrewdriverWrench } from 'react-icons/fa6';

const Services = () => {
  return (
    <section className='container-fluid services' id='services'>
      <div className='services__container container'>
        <h1 className='section__title py-5 display-2'>Nasze usługi</h1>
        <Row className=' gy-5  d-flex justify-content-center'>
          <Col md={6} xl={4} className=' d-flex justify-content-center'>
            <div className='services__tile flex-column'>
              <div className='services__tile-image d-flex align-self-center p-3'>
                <BsSnow size={60} />
              </div>
              <div className='services__tile-text d-flex flex-column '>
                <h2 className='services__tile-text-h1 d-flex align-self-center p-3'>
                  Klimatyzacja
                </h2>
              </div>

              <ul className='services__list'>
                <li className='services__list__item services__list__item-snow'>
                  kompleksowa obsługa klimatyzacji
                </li>
                <li className='services__list__item services__list__item-snow'>
                  naprawa kompresorów klimatyzacji
                </li>
                <li className='services__list__item services__list__item-snow'>
                  naprawa węży klimatyzacji
                </li>
                <li className='services__list__item services__list__item-snow'>
                  naprawa sprężarek klimatyzacji
                </li>
                <li className='services__list__item services__list__item-snow'>
                  oczyszczanie układu z wody i czynnika
                </li>
                <li className='services__list__item services__list__item-snow'>
                  uzupełnianie czynnika chłodzącego
                </li>
                <li className='services__list__item services__list__item-snow'>
                  dezynfekcja, odgrzybianie klimatyzacji ozonem, ultradźwiękami
                  i czynnikami chemicznymi
                </li>
                <li className='services__list__item services__list__item-snow'>
                  test szczelności układu
                </li>
                <li className='services__list__item services__list__item-snow'>
                  kontrola / uzupełnienie ilości oleju i czynnika chłodniczego w
                  układzie
                </li>
                <li className='services__list__item services__list__item-snow'>
                  pomiar efektywności chłodzenia
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} xl={4} className=' d-flex justify-content-center'>
            <div className='services__tile flex-column'>
              <div className='services__tile-image d-flex align-self-center p-3'>
                <FaListCheck size={60} />
              </div>
              <div className='services__tile-text d-flex flex-column '>
                <h2 className='services__tile-text-h1 d-flex align-self-center  text-center p-3'>
                  Stacja Kontroli
                </h2>
              </div>

              <ul className='services__list'>
                <li className='services__list__item services__list__item-check'>
                  przeglądy rejestracyjne
                </li>
                <li className='services__list__item services__list__item-check'>
                  badania techniczne
                </li>
                <li className='services__list__item services__list__item-check'>
                  badania okresowe
                </li>
                <li className='services__list__item services__list__item-check'>
                  badania samochodów z instalacją LPG
                </li>
                <li className='services__list__item services__list__item-check'>
                  ustawianie zbieżności
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} xl={4} className=' d-flex justify-content-center'>
            <div className='services__tile flex-column'>
              <div className='services__tile-image d-flex align-self-center p-3'>
                <FaScrewdriverWrench size={60} />
              </div>
              <div className='services__tile-text d-flex flex-column '>
                <h2 className='services__tile-text-h1 d-flex align-self-center p-3'>
                  Mechanika
                </h2>
              </div>

              <ul className='services__list'>
                <li className='services__list__item services__list__item-tool'>
                  wymiana oleju silnikowego
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana klocków i tarczy hamulcowych
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana płynu hamulcowego
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana płynów chłodzących
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana filtrów
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana pasek rozrządu
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana elementów zawieszenia
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana elementów układu kierowniczego
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana elementów układu wydechowego
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana świec żarowych i zapłonowych oraz przewodów
                </li>
                <li className='services__list__item services__list__item-tool'>
                  wymiana opon
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <br />
        <Row className='py-5 text-center'>
          <br />
          <br />
          <br />
          <h3>
            Nowość w naszej ofercie to USŁUGA HOLOWANIA SAMOCHODU na terenie
            Tarnowa i okolic!
          </h3>
          <h4>Ceny ustalamy indywidualnie podczas rozmowy telefonicznej.</h4>
        </Row>
      </div>
    </section>
  );
};

export default Services;
