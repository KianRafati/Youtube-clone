import React from "react";
import adImage from "../assets/your_ad_here.png"; // Import the image
import styled from "styled-components";

const AdvertisementContainer = styled.a`
    display: block; /* Set to block-level for margin:auto to work */
    margin: 0 auto; /* Center horizontally */
    text-decoration: none; /* Remove default underline from link */
    position: relative; /* Needed for positioning the label */
    width: 300px; /* Adjust image width as needed */
`;

const AdImage = styled.img`
    display: block;
    width: 300px; /* Adjust image width as needed */
    margin: 0 auto; /* Center horizontally */
`;

const ImageText = styled.label`
    position: absolute;
    bottom: 0; /* Adjust the position from the bottom */
    right: 0; /* Adjust the position from the right */
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
`;

const AdvertisementComponent = () => {
    return (
        <AdvertisementContainer href="https://your-link-here.com">
            <AdImage src={adImage} alt="Advertisement" />
            <ImageText>
                Sponsored
            </ImageText>
        </AdvertisementContainer>
    );
}

export default AdvertisementComponent;
