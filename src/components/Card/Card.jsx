import React from "react";
import {NavLink} from 'react-router-dom';

function Card(props) {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink>
        </div>
    );
}

export default Card;