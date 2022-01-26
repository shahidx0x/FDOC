import React from 'react';

const MUC = (props) => {
    console.log(props.url);
    return (
        <div>
            <img src={props.url} alt=""  width="400px" height="400"/>
        </div>
    );
};

export default MUC;