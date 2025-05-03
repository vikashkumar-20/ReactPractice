
import React from 'react';
import { useParams } from 'react-router-dom';

function ParamComp () {
    const {id} = useParams();
    return (
        <div>Student id: {id}</div>
    )
}

export default ParamComp