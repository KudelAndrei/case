import React from 'react';
import Form from '../Form/index';
import Input from '../Input/index';
import "./style.css";

import logo from './images/director.jpg';


function Callback(){
    return(
        <div className="callback-line">
            <h3 className="title-accent">Вам что-то не понравилось? <br/> Напишите напрямую директору!</h3>
            <div className="callback-line__wrap">
                <div className="callback-line__text">
                    <p>Ян Ярош, директор компании «Софатэкс», лично решит вашу проблему. Не бойтесь написать ему, не думайте, что он оставит решение вопроса на потом, или передаст вашу проблему рядовому менеджеру.</p>
                    <p>Как связаться? Напишите Яну напрямую, на адрес <a href="mailto:y.yarosh@e-chehol.by">y.yarosh@e-chehol.by</a> и ждите ответа. Также можете написать Яну, если у вас есть предложение о сотрудничестве или просто благодарность!</p>
                </div>
                <div className="callback-line__form">
                    <Form type="callback" inputs={['name','phone', 'text']} />
                </div>
            </div>
            <div className="director">
                <div className="director__img"><img src={logo} alt="Director"/></div>
                <div className="director__content">
                    <div className="director__name">Ян Ярош,</div>
                    <div className="director__post">директор компании «Софатэкс»</div>
                    <div className="director__text"><i>Здравствуйте!</i> <br/> Я лично отвечаю за качество обслуживания в магазине <br/> «Софатэкс». Если у вас есть что мне рассказать, то напишите <br/> на <a href="mailto:y.yarosh@e-chehol.by">y.yarosh@e-chehol.by</a>  и я быстро решу вашу проблему!</div>
                </div>
            </div>
        </div>
    );
}

export default Callback;