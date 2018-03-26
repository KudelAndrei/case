import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import Svg from '../../components/Svg';

import "./style.css";
import banner from './images/banner.jpg'; 
import halva from './images/halva.png';
import karta_pokupok from './images/karta_pokupok.png';
import cherepaha from './images/cherepaha.png';
import smart_karta from './images/smart_karta.png';

function toggleItem(event){
    const thisNode = event.target;
    thisNode.parentNode.classList.toggle('installment__show--open');
}

export default function InstallmentPlan(){
    (() => window.scrollTo(0, 0))();
    return(
        <div className="container-wrap">
            <section className="installment content-height">
                <h2 className="installment__head">Рассрочка</h2>
                <div className="installment__banner">
                    <Lazyload height={200}>
                        <img src={banner} alt="Рассрочка без переплат!" className="b-loaded" />
                    </Lazyload>
                    </div>
                <p className="installment__desc">Вы можете купить любой чехол из нашего магазина <br/> <strong>в рассрочку на 3 месяца!!!</strong></p>
                <div className="installment-wrap">
                    <div className="installment__item">
                        <p className="installment__item-text">Без переплат</p>
                    </div>
                    <div className="installment__item">
                        <p className="installment__item-text">Без справки о доходах</p>
                    </div>
                    <div className="installment__item">
                        <p className="installment__item-text">Без поручителей</p>
                    </div>
                </div>
                <div className="installment__toggle">
                    <div className="installment__show">
                        <div className="installment__show-head" onClick={toggleItem}>Как оформить рассрочку на чехол без справок и поручителей?</div>
                        <ul className="installment__show-text">
                            <li>Прийти в магазин Софатэкс по адресу ул. В. Хоружей 6, пом. 1(ТЦ Зеркало) в рабочее время. Перед этим позвоните по номеру <a href="tel:375 (33) 333-00-66">+375 33 333 00 66</a>.</li>
                            <li>Возьмите с собой паспорт гражданина РБ или вид на жительство в РБ, если вы иностранный гражданин.</li>
                            <li>Подготовьте первый взнос за покупку. Составляет ⅓ от общей суммы.</li>
                        </ul>
                    </div>
                    <div className="installment__show">
                        <div className="installment__show-head" onClick={toggleItem}>Как оплачивать купленный в рассрочку чехол?</div>
                        <ol className="installment__show-text">
                            <li>Сумма оплаты делится на 3 равные части.</li>
                            <li>Первый взнос оплачивается на месте, в магазине по ул. В. Хоружей.</li>
                            <li>Оплата остальных взносов производится каждый месяц в день покупки через кассу магазина, либо через систему ЕРИП.</li>
                            <li>Чтобы Вы не забыли о том, что следует вовремя оплатить оставшиеся части рассрочки, мы пришлем вам sms - оповещение!</li>
                        </ol>
                    </div>
                </div>
                <div className="installment__cards">
                    <h3 className="installment__cards-title">Мы принимаем оплату картами рассрочки <br/><strong>«Халва»</strong>, 
                        <strong>«Карта покупок»</strong>, <strong>«Черепаха»</strong> и <strong>«Smart карта»</strong>! 
                        <br/> По этим картам рассрочка так же дается на 3 месяца!</h3>
                    <div className="installment__cards-wrap">
                        <div className="installment__card">
                            <div className="installment__card-header">
                                <Lazyload height={200}>
                                    <img src={halva} alt="Халва" className=" b-loaded" />
                                </Lazyload>
                            </div>
                            <div className="installment__card-body">
                                Рассрочка по карте <br/>"Халва":
                                <p><b>3 месяца</b></p>
                            </div>
                        </div>
                        <div className="installment__card">
                            <div className="installment__card-header">
                                <Lazyload height={200}>
                                    <img src={karta_pokupok} alt="Карта покупок" className=" b-loaded" />
                                </Lazyload>
                            </div>
                            <div className="installment__card-body">
                                Рассрочка по карте <br/>"Карта покупок":
                                <p><b>3 месяца</b></p>
                            </div>
                        </div>
                        <div className="installment__card">
                            <div className="installment__card-header">
                                <Lazyload height={200}>
                                    <img src={cherepaha} alt="Черепаха" className=" b-loaded" />
                                </Lazyload>
                            </div>
                            <div className="installment__card-body">
                                Рассрочка по карте <br/>"Черепаха":
                                <p><b>3 месяца</b></p>
                            </div>
                        </div>
                        <div className="installment__card">
                            <div className="installment__card-header">
                                <Lazyload height={200}>
                                    <img src={smart_karta} alt="Смарт карта" className=" b-loaded" />
                                </Lazyload>
                            </div>
                            <div className="installment__card-body">
                                Рассрочка по карте <br/>"Smart карта":
                                <p><b>3 месяца</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/o-magazine" className="about__link"><span>О магазине</span><Svg icon="angle-right" /></Link>
            </section>
        </div>
    );
}