import React, { useState } from 'react';
import * as St from './style';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <St.MainWrapper>
            <St.ProductImage
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
            />
            <St.ArrowsWrapper>
                <St.ArrowButton onClick={goToPrev}>
                    &lt;
                </St.ArrowButton>
                <St.ArrowButton onClick={goToNext}>
                    &gt;
                </St.ArrowButton>
            </St.ArrowsWrapper>
        </St.MainWrapper>
    );
};

export default ImageCarousel;