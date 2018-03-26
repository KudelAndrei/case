import React from 'react';
import Form from '../Form/index';
import "./style.css";
import image from './images/chehol.png';

export default function SelfSelection() {
    return(
        <div className="self-selection">
            <h3 className="title-accent">Подберите чехол <br/> самостоятельно!</h3>
            <div className="self-selection__wrap">
                <div className="self-selection__left">
                    <p className="self-selection__text">Чтобы подобрать размер чехла, измерьте спинку вашего дивана, как показано на схеме. Соотнесите длину спинки дивана с параметрами растяжимости чехла.</p>
                    <div className="self-selection__img"><img src={image} alt="Подберите чехол самостоятельно!"/></div>
                </div>
                <div className="self-selection__center">
                    <span>или</span>
                </div>
                <div className="self-selection__right">
                    <Form type="callme" inputs={['phone']} >
                        <h3>Оставьте нам свой номер телефона, <br/> мы спишемся с вами в viber, и подскажем, <br/> как измерить ДИВАН (динамика)!</h3>
                    </Form>
                </div>
            </div>
        </div>
    );
}