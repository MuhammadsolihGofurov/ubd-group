import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import ImageComponent from '../ImageComponent/ImageComponent';

const ProductGallery = ({ data, showGallery, setShowGallery, imageId }) => {
    console.log(showGallery, imageId)

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowGallery(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const galleryRef = useRef(null);
    useOutsideAlerter(galleryRef);

    return (
        <>
            {
                data[0].img ? (
                    <div className={`product-gallery__container ${showGallery === true ? '' : 'product-gallery__isHidden'}`} >
                        <div className='product-gallery__content'>
                            <Swiper
                                initialSlide={`${imageId}`}
                                navigation={true}
                                modules={[Navigation]}
                                className="product-gallery__swiper"
                                ref={galleryRef}
                            >
                                {
                                    data.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <ImageComponent src={item.img} />
                                            {/* <div className="product-gallery__image" style={{ backgroundImage: `url(${item.img})` }}></div> */}
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <svg
                                viewBox="0 0 24 24"
                                width={32}
                                fill="white"
                                onClick={() => setShowGallery(false)}
                            >
                                <use xlinkHref="#close"></use>
                            </svg>
                        </div>
                    </div >
                ) : null
            }
        </>
    );
}

export default ProductGallery;