import React from 'react';
import './slider.css';
import leftArrow from './icons/leftArrow.png';
import rightArrow from './icons/rightArrow.png';

export default function BtnSlider({ moveSlide, direction }) {
    console.log(moveSlide, direction)
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
        </button>
    )
}
