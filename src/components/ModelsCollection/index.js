import React from 'react';
import LazyLoad from 'react-lazyload';
import "./style.css";

import divan1 from './images/divan1.png';
import divan2 from './images/divan2.png';
import divan3 from './images/divan3.png';
import divan4 from './images/divan4.png';
import divan5 from './images/divan5.png';
import divan6 from './images/divan6.png';
import divan7 from './images/divan7.png';
import divan8 from './images/divan8.png';
import divan9 from './images/divan9.png';


function ModelsCollection(props){
    let images = [];
    images.push(divan1, divan2, divan3, divan4, divan5, divan6, divan7, divan8, divan9);

    return(
        <div className='models-line'>
            <h3 className="models-line title-accent">Типы диванов, к которым подходит чехол «{props.options.name_ru}» </h3>
            <div className="models-line__wrap">
                {
                    images.map((image, index) => {
                        return (
                            <div key={index} className="models-line__img">
                                <LazyLoad height={100}>
                                    <img src={image} alt="Чехлы Софатекс" />
                                </LazyLoad>
                            </div>
                        );
                    })
                }
                
            </div>
        </div>
    );
}

export default ModelsCollection;