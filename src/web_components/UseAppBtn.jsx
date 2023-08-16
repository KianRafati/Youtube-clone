import React from "react";
import styled from "styled-components";
import { websiteMainFont } from "../constants";

const UseAppComponent = ({height , index}) => {

    const UseAppBtn = styled.button`
        width: 100%;
        height: ${height};
        font-size: large;
        grid-column: ${index}/span 2;
        font-family: ${websiteMainFont};

        border-radius: 10px;
        background-color: aqua ;
        color: dark;
        border: transparent;

        &:hover {
            background-color: #4f4f4f;
            color: white;
            border: 1px solid white;
        }
    `

    return (
        <UseAppBtn id="CineProBtn">
            Use App
        </UseAppBtn>
    )
}

export default UseAppComponent