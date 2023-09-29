import { useEffect, useState } from 'react';
import { Swiper } from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

function ProductGallery() {
  let swiper: Swiper;

  useEffect(() => {
    swiper = new Swiper('.swiper', {
      modules: [
        Autoplay,
        EffectFade,
        Pagination,
      ],
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  }, []);

  useEffect(() => {
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div className="product-gallery-container">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="https://ik.imagekit.io/9mx5jcsss/product-1.webp" width="300" height="300" alt="avatar" />
            </div>
            <div className="swiper-slide">
              <img src="https://ik.imagekit.io/9mx5jcsss/product-2.webp" width="300" height="300" alt="avatar" />
            </div>
            <div className="swiper-slide">
              <img src="https://ik.imagekit.io/9mx5jcsss/product-3.webp" width="300" height="300" alt="avatar" />
            </div>
            <div className="swiper-slide">
              <img src="https://ik.imagekit.io/9mx5jcsss/product-4.webp" width="300" height="300" alt="avatar" />
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>

    </>
  );
}

export default ProductGallery;
