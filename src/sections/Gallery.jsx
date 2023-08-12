import React from 'react';
import '../styles/Gallery.scss';

import ImageGallery from 'react-image-gallery';

// import images from '../data/images';
import One from '../assets/front1.jpg';
import Two from '../assets/front2.jpg';
import Four from '../assets/front4.jpg';
import Five from '../assets/front5.jpg';
import Six from '../assets/garage1.jpg';
import Seven from '../assets/garage2.jpg';
import Eight from '../assets/truck1.jpg';
import Nine from '../assets/truck2.jpg';
import ThumbThree from '../assets/front33.jpg';
import { Row } from 'react-bootstrap';

const Gallery = () => {
  const images = [
    {
      original: One,
      thumbnail: One,
    },
    {
      original: Two,
      thumbnail: Two,
    },
    {
      original: ThumbThree,
      thumbnail: ThumbThree,
    },
    {
      original: Four,
      thumbnail: Four,
    },
    {
      original: Five,
      thumbnail: Five,
    },
    {
      original: Six,
      thumbnail: Six,
    },
    {
      original: Seven,
      thumbnail: Seven,
    },
    {
      original: Eight,
      thumbnail: Eight,
    },
    {
      original: Nine,
      thumbnail: Nine,
    },
  ];
  return (
    <section className='py-5 gallery' id='gallery'>
      <div className='gallery__container container pb-5'>
        <h1 className='section__title py-5 display-2'>Galeria</h1>
        <Row className='gy-5 pb-5 d-flex justify-content-center m-auto gallery__wrapper'>
          <div className='slide-container slider'>
            <div className='slider__wrapper'>
              <ImageGallery items={images} className='slider__images' />
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Gallery;
