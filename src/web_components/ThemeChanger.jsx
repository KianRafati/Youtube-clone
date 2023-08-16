import React from "react";
import styled from "styled-components";
import ToggleSwitch from '@trendmicro/react-toggle-switch';
import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';
import { websiteMainFont } from "../constants";

const HorizontalSlider = ({ min, max, value, onChange, height, index }) => {
    const SliderContainer = styled.div`
        width: 40%;
        height: ${height};
        font-size: 70%;
        grid-column: ${index}/span 2;
        font-family: ${websiteMainFont};

        border-radius: 10px;
        background-color: transparent;
        border: transparent;
        margin: 0 auto;
    `;

    return (
        <SliderContainer>
            <ToggleSwitch/>
        </SliderContainer>
    );
};

export default HorizontalSlider;
