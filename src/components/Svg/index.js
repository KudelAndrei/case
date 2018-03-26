import React from 'react';
import "./style.css";
import sprite from "./images/sprite.svg";

export default function Svg(props){
    const dopClassName = props.dopClassName ? props.dopClassName : '';
    return(
        <svg className={`svg-icon svg-icon-${props.icon} ${dopClassName}`}>
            <use xlinkHref={`${sprite}#${props.icon}`} />
        </svg>
    );
}