import React, { Component } from 'react';
import Form from '../Form/index';
import "./style.css";

class PersonalSelection extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(    
            <div className="personal-selection">
                <h3 className="title-accent">Персональный подбор!</h3>
                <div className="personal-selection__desc">Хотите персональный подбор чехла под ваш диван? <br/> Да! Вам даже не придется выходить из дома!</div>
                <div className="personal-selection__wrap">
                    <Form type="callme" inputs={['phone']} >  
                        <p className="personal-selection__strong">Сфотографируйте диван</p>
                        <div className="personal-selection__icon"></div>
                        <p className="personal-selection__strong">Загрузите фото</p>
                        <div className="drop-zone" id="drop-zone">
                            <span className="drop-zone__message"></span>
                            <p className="drop-zone__text">
                                <a href="#" id="fileSelect">Выберите файл</a>
                                <span> или перетяните его сюда</span>
                            </p>
                            <div className="drop-zone__img"></div>
                        </div>
                        <div className="personal-selection__icon"></div>
                        <p className="personal-selection__strong">Ждите в Telegram или Viber персональную подборку <br/>  чехлов,  подходящих к вашему <span>НАЗВАНИЕ КАТЕГОРИИ</span></p>
                        <p className="personal-selection__text">Оставьте ваш номер телефона</p>
                    </Form>
                    <p className="personal-selection__free">*Услуга бесплатна!</p>
                </div>
            </div>
        );
    }
}

export default PersonalSelection;