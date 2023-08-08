import React from "react";

const CineProComponent = () => {

    const CineProStyle = {
        color: 'aqua',
        fontWeight : 'bold',
    }
    
    return(
        <button id="CineProBtn">
            Cine<span style={CineProStyle}>PRO</span>
        </button>
    )
}

export default CineProComponent