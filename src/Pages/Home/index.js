import React from 'react';
import { Link } from 'react-router-dom';
import Svg from '../../components/Svg/';
import "./style.css";

import armchairs from './images/armchairs.png';
import sofa from './images/sofa.png';
import chairs from './images/chairs.png';
import akapulko from '../../images/collections/akapulko/chehly-na-dvuhmestnye-divany/азул.jpg';
import alaska from '../../images/collections/alaska/chehly-na-trehmestnye-divany/аро.jpg';
import ibica from '../../images/collections/ibica/chehly-dlya-uglovogo-divana/беж-ЛУ.jpg';
import greciya from '../../images/collections/greciya/chehly-dlya-kresel/марон.jpg';

function Home(props){
    (() => window.scrollTo(0, 0))();
    return(
        <div className="container-wrap">
            <section className="home content-height">
                <h3 className="home-title"><span>Выберите категорию</span></h3>
                <div className="home-category">
                {
                    props.categorys.map((category, index) => {
                        return(
                            <Link key={index} to={`/collections/${category.name_eng}`} className="home-link" >
                                <div className="home-link__img"><Svg icon={category.icon} /></div>
                                <span>{category.name_ru}</span>
                            </Link>
                        );
                    })
                } 
                </div>
                <div className="home-grid">
                    <div className="left-grid">
                        <Link to="/collections/chehly-na-dvuhmestnye-divany/akapulko" style={{backgroundImage: `url('${akapulko}')`}}>
                            <span>Коллекция Акапулько</span>
                        </Link>
                    </div>
                    <div className="right-grid">
                        <div className="right-grid__top">
                            <div className="right-grid__top-left">
                                <Link to="/collections/chehly-na-trehmestnye-divany/alaska" style={{backgroundImage: `url('${alaska}')`}}>
                                    <span>Коллекция Аляска</span>
                                </Link>
                            </div>
                            <div className="right-grid__top-right">
                                <Link to="/collections/chehly-dlya-kresel/greciya" style={{backgroundImage: `url('${greciya}')`}}>
                                    <span>Коллекция Греция</span>
                                </Link>
                            </div>
                        </div>
                        <div className="right-grid__bottom">
                            <Link to="/collections/chehly-dlya-uglovogo-divana/ibica" style={{backgroundImage: `url('${ibica}')`}}>
                                <span>Коллекция Ибица</span>
                            </Link>
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