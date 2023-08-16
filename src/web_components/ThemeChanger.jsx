import React, { useState } from "react";
import styled from "styled-components";
import { websiteMainFont } from "../constants";


const HorizontalSlider = ({ min, max, value, onChange, height ,index }) => {

    const SliderContainer = styled.div`
    width: 40%;
    height: ${height};
    font-size: 70%;
    grid-column: ${index}/span 2;
    font-family: ${websiteMainFont};

    border-radius: 10px;
    background-color: transparent ;
    border: transparent;
    margin: 0 auto;
`;

    const SliderInput = styled.input`
        width: 100%;
        color: black;
`;

    return (
        <SliderContainer>
            <SliderInput
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
            />
        </SliderContainer>
    );
};

export default HorizontalSlider;
