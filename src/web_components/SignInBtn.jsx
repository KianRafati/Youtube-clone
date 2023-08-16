import React from "react";
import styled from "styled-components";
import { websiteMainFont } from "../constants";

const SignInComponent = ({height , index}) => {

    const SignInButton = styled.button`
        width: 100%;
        height: ${height};
        font-size: 70%;
        grid-column: ${index}/span 2;
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
        <SignInButton id="CineProBtn">
            Sign in
        </SignInButton>
    )
}

export default SignInComponent