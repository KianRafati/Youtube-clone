import React from "react";
import styled from "styled-components";
import { websiteMainFont } from "../constants";

const CineProComponent = ({height}) => {

    const CineProStyle = {
        color: 'aqua',
        fontWeight: 'bold',
    }

    const CineProButton = styled.button`
        width: 100%;
        height: ${height};
        font-size: 70%;
        grid-column: 10/span 2;
        font-family: ${websiteMainFont};

        border-radius: 10px;
        background-color: transparent ;
        color: aliceblue;
        border: transparent;

        &:hover {
            background-color: #4f4f4f;
            color: white;
            border: 1px solid white;
        }
    `

    return (
        <CineProButton id="CineProBtn">
            Cine<span style={CineProStyle}>PRO</span>
        </CineProButton>
    )
}

export default CineProComponent