import React from 'react';
import Features from './Features';

function Choices(props) {

    return (

        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features format={props.format} selected={props.selected} updateFeature={props.updateFeature} />
        </form>

    );
    
};

export default Choices;