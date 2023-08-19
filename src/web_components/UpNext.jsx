import React from "react";
import styled from "styled-components";
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
        border: #000 solid ;
        width: 620px;
        height: 360px;
        background-color: white;
    `;

    const Wobble1Style = {
        position: 'absolute',
        bottom: '0',  // Aligns the SVG to the bottom of the frame
        left: '50%',  // Centers the SVG horizontally
        transform: 'translateX(-50%)', // Adjusts the centering after translation
        zIndex: '1',
    };

    const Wobble2Style = {
        position: 'absolute',
        bottom: '0',  // Aligns the SVG to the bottom of the frame
        left: '50%',  // Centers the SVG horizontally
        transform: 'translateX(-50%)', // Adjusts the centering after translation
        zIndex: '0',
    };

    return (
        <UpNextDiv>
            <FrameDiv>
                <svg width="622" height="150" preserveAspectRatio="none" viewBox="0 0 622 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={Wobble1Style} >
                    <path fill="black" stroke="black">
                        <animate attributeName="d"
                            dur='10s'
                            repeatCount='indefinite'
                            values="
                                 M156 114.591C85.5839 115.828 1 108 1 108V169.591H621V2C621 2 586.288 59.1536 571 54C544.678 45.127 526.21 19.7838 499 25.5502C466.416 32.4556 467.986 44.7999 436 54C381.958 69.5438 348.799 78.2647 292.47 78.4631C247.707 78.6208 200.756 113.805 156 114.591Z;
                                 M156 114.591C85.5839 115.828 1 97 1 97V169.591H621V25.5502C621 25.5502 601.288 7.15356 586 2C559.678 -6.87298 529.21 48.2336 502 54C469.416 60.9054 428.986 24.7999 397 34C342.958 49.5438 348.799 78.2647 292.47 78.4631C247.707 78.6207 200.756 113.805 156 114.591Z;
                                 M156 115.556C85.5839 116.793 1 115.556 1 115.556V170.556H621V54.5C621 54.5 601.288 8.11827 586 2.9647C559.678 -5.90827 521.21 20.7485 494 26.5149C461.416 33.4203 428.986 25.7646 397 34.9647C342.958 50.5085 334.329 90.3017 278 90.5C233.237 90.6577 200.756 114.769 156 115.556Z;
                                 M156 114.591C85.5839 115.828 1 97 1 97V169.591H621V25.5502C621 25.5502 601.288 7.15356 586 2C559.678 -6.87298 529.21 48.2336 502 54C469.416 60.9054 428.986 24.7999 397 34C342.958 49.5438 348.799 78.2647 292.47 78.4631C247.707 78.6207 200.756 113.805 156 114.591Z;
                                 M156 114.591C85.5839 115.828 1 108 1 108V169.591H621V2C621 2 586.288 59.1536 571 54C544.678 45.127 526.21 19.7838 499 25.5502C466.416 32.4556 467.986 44.7999 436 54C381.958 69.5438 348.799 78.2647 292.47 78.4631C247.707 78.6208 200.756 113.805 156 114.591Z">
                        </animate>
                    </path>
                </svg>
                <svg width="622" height="150" preserveAspectRatio="none" viewBox="0 0 622 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={Wobble2Style} >
                    <path fill="gray" stroke="gray">
                    <animate attributeName="d"
                            dur='10s'
                            repeatCount='indefinite'
                            values="
                                 M153.5 88.5C83.0839 89.737 1 133 1 133V194.591H621V27C621 27 584.288 12.1536 569 6.99999C542.678 -1.87298 524.21 1.23362 497 7C464.416 13.9054 426.986 41.3502 395 50.5502C340.958 66.094 348.799 103.265 292.47 103.463C247.707 103.621 198.256 87.7138 153.5 88.5Z;
                                 M155 69.5C84.5839 70.737 1 91.5555 1 91.5555V146.555H621V2.51489C621 2.51489 602.288 7.66845 587 2.51489C560.678 -6.35808 529.21 25.1983 502 30.9647C469.416 37.8701 456.986 21.7646 425 30.9647C370.958 46.5085 347.829 69.3016 291.5 69.5C246.737 69.6576 199.756 68.7138 155 69.5Z;
                                 M143 110.5C72.5839 111.737 1 66.3277 1 66.3277V146.383H621V30.3277C621 30.3277 584.288 19.6536 569 14.5C542.678 5.62703 521.21 -3.42381 494 2.34257C461.416 9.24797 449.486 42.8 417.5 52C363.458 67.5438 335.829 39.8017 279.5 40C234.737 40.1577 187.756 109.714 143 110.5Z;
                                 M155 69.5C84.5839 70.737 1 91.5555 1 91.5555V146.555H621V2.51489C621 2.51489 602.288 7.66845 587 2.51489C560.678 -6.35808 529.21 25.1983 502 30.9647C469.416 37.8701 456.986 21.7646 425 30.9647C370.958 46.5085 347.829 69.3016 291.5 69.5C246.737 69.6576 199.756 68.7138 155 69.5Z;
                                 M153.5 88.5C83.0839 89.737 1 133 1 133V194.591H621V27C621 27 584.288 12.1536 569 6.99999C542.678 -1.87298 524.21 1.23362 497 7C464.416 13.9054 426.986 41.3502 395 50.5502C340.958 66.094 348.799 103.265 292.47 103.463C247.707 103.621 198.256 87.7138 153.5 88.5Z">
                        </animate>
                    </path>
                </svg>
            </FrameDiv>
        </UpNextDiv>
    );
}

export default UpnextComponent;