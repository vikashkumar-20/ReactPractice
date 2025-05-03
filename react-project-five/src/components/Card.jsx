import React from 'react';

const Card = function(props) {
    return (
        <div>
            <input type="text" onChange={(e) => props.setName(e.target.value)} />
            <p>Name State Variable: {props.name} </p>
        </div>
    )
}

export default Card