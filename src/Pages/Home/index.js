import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import armchairs from './images/armchairs.png';
import sofa from './images/sofa.png';
import chairs from './images/chairs.png';

function Home(){
    (() => window.scrollTo(0, 0))();
    return(
        <div className="container-wrap">
            <section className="home content-height">
                <h3 className="home-title"><span>Выберите категорию</span></h3>
                <div className="home-category">
                    <Link to='/collections/chehly-dlya-kresel' className="home-link" >
                        <div className="home-link__img"><img src={armchairs} alt="" /></div> 
                        <span>Кресла</span>
                    </Link>
                    <Link to='/collections/chehly-na-dvuhmestnye-divany' className="home-link" >
                        <div className="home-link__img"><img src={sofa} alt="" /></div> 
                        <span>Диваны</span>
                    </Link>
                    <Link to='/collections/chehly-dlya-stulev' className="home-link" >
                        <div className="home-link__img"><img src={chairs} alt="" /></div> 
                        <span>Стулья</span>
                    </Link>
                </div>
                <div className="home-grid">
                    <div className="left-grid">left</div>
                    <div className="right-grid">
                        <div className="right-grid__top">
                            <div className="right-grid__top-left">Top</div>
                            <div className="right-grid__top-right">Right</div>
                        </div>
                        <div className="right-grid__bottom">
                            bottom
                        </div>
                    </div>
                </div>
                <div className="home-why">
                    <h2 className="home-why__title">ПОЧЕМУ «Софатэкс»?</h2>
                    <p className="home-why__desc">Вы захотели купить чехлы на мягкую мебель? Сделайте это в магазине “Софатэкс”! Мы предлагаем чехлы высочайшего качества по разумной цене, и да, с нами приятно сотрудничать!</p>
                    <ul className="home-why__wrap">
                        <li>Простое оформление заказов</li>
                        <li>Популярные модели всегда есть на складе</li>
                        <li>Наши консультанты подберут вам подходящий чехол, которым вы останетесь довольны!</li>
                        <li>Удобные условия доставки по всей Беларуси!</li>
                        <li>Оплачивайте как вам удобно! У нас есть рассрочка на три месяца.</li>
                        <li>А оптом у нас покупать - дешевле!</li>
                    </ul>
                    <p className="home-why__dop">Смотрите наш интернет-каталог, чтобы выбрать чехол по душе и делайте заказ онлайн или по телефону: <a href="tel:+375 33 333 00 66">+375 33 333 00 66</a>! Или приходите в наш магазин по ул. В. Хоружей, 6, чтобы посмотреть на чехлы своими глазами!</p>
                </div>
            </section>
        </div>
    );
}

export default Home;