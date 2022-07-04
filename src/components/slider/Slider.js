import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { useState } from "react";
import './slider.css'
import { sliderItems } from "../../data";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition : all 1.5s ease;
    transform: translateX(${(props=>props.slideIndex * -100)}vw);
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className="slider-container">
            <div className="arrow-left" onClick={()=>handleClick("left")}>
                <KeyboardArrowLeft />
            </div>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <div className="slide" key={item.id}>
                    <div className="img-container">
                        <img className='slider-img' src={item.img}></img>
                    </div>
                    <div className="info-container">
                        <h1 className="info-title">{item.title}</h1>
                        <p className="info-desc">{item.desc}</p>
                        <button className="info-button">SHOP NOW</button>
                    </div>
                </div>
                ))}
            </Wrapper>
            <div className="arrow-right" onClick={()=>handleClick("right")}>
                <KeyboardArrowRight />
            </div>
        </div>
    )
}

export default Slider;
