import React from 'react';
import Popup from '../Popup/';
import Form from '../Form/';
import "./style.css";

import karta_pokupok from './images/karta_pokupok.png';
import halva from './images/halva.png';
import cards from './images/cards.png';


function Advantages(){
    return(
        <React.Fragment>
            <div className="advantage-content">
                <h4 className="advantage-line__head"><span>Наши преимущества</span></h4>
                <table className="advantage-line">
                    <tbody>
                        <tr>
                            <td><div className="advantage-line__title">доставка:</div></td>
                            <td><div className="advantage-line__text">Бесплатная доставка почтой по Беларуси в течение 2-3 дней.</div></td>
                        </tr>
                        <tr>
                            <td><div className="advantage-line__title">Viber-консультация</div></td>
                            <td><div className="advantage-line__text">Закажите Viber - консультацию, как подобрать чехол под ваш <span className="divan">диван</span>.<br />
                                    <Popup
                                        className="viber"
                                        link={<div className="advantage-line__popup">Заказать звонок</div>}
                                    >
                                        <Form type="viber" inputs={['name','phone']} popup>
                                            <h3 className="title-accent">Заказать Viber консультацию</h3>
                                        </Form>
                                    </Popup>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><div className="advantage-line__title">Возврат товара:</div></td>
                            <td><div className="advantage-line__text">Если чехол не подходит к вашему <span className="divanu">дивану</span>, или вам не нравится, как он смотрится в интерьере, вы можете вернуть покупку в наш магазин, мы вернем вам деньги.</div></td>
                        </tr>
                        <tr>
                            <td><div className="advantage-line__title">Оплата:</div></td>
                            <td>
                                <ul className="advantage-line__cards">
                                    <li><img src={karta_pokupok} alt="Карта покупок" className=" b-loaded" /></li>
                                    <li><img src={halva} alt="Халва" className=" b-loaded" /></li>
                                    <li><img src={cards} alt="Пластиковые карты" className=" b-loaded" /></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Advantages;