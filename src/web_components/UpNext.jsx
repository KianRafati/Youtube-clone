import React from "react";
import styled from "styled-components";
import { ReactComponent as Wobble1 } from '../assets/Animations/Wobble1.svg';
import { ReactComponent as Wobble2 } from '../assets/Animations/Wobble2.svg';
import { websiteMainFont } from "../constants";

const UpnextComponent = ({ height, index }) => {

    const UpNextDiv = styled.div`
        width: 80%;
        background-color: gray;
        margin-top: 100px;
        margin-left: auto;
        margin-right: auto;
    `;

    const FrameDiv = styled.div`
        position: relative;
        width: 620px;
        height: 360px;
        background-color: white;
    `;

    const Wobble1Style = {
        position: 'absolute',
        bottom: '0',  // Aligns the SVG to the bottom of the frame
        left: '50%',  // Centers the SVG horizontally
        transform: 'translateX(-50%)', // Adjusts the centering after translation
    };

    return (
        <UpNextDiv>
            <FrameDiv>
                <Wobble1 style={Wobble1Style} />
                <Wobble2 style={Wobble1Style} />
            </FrameDiv>
        </UpNextDiv>
    );
}

export default UpnextComponent;
