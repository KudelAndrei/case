import React from 'react';
import Svg from '../../components/Svg';
import "./style.css";
import Location from '../../components/Location';


export default function AboutStore(){
    (() => window.scrollTo(0, 0))();
    return(
        <div className="container-wrap">
            <Location >
                <h2 className="about-store__head">Магазин</h2>
                <p className="about-store__desc">Компания "Софатэкс" уже несколько лет спасает российские диваны, стулья и кресла от изнашивания, грязи и потертостей. Пришло время спасать белорусские!</p>
                <p className="about-store__desc">Мы предлагаем большой выбор коллекций и расцветок чехлов, чтобы вы смогли подобрать именно ту модель, которая подойдет в ваш интерьер! Приходите в наш официальный магазин чтобы примерить, потрогать и купить чехол в ваш дом!</p>
                <div className="about-store__wrap">
                    <div className="about-store__item">
                        <Svg icon="clock" />
                        <strong className="about-store__item-title">10:00 - 20:00 <span>(Ежедневно)</span></strong>
                    </div>
                    <div className="about-store__item">
                        <Svg icon="phone" />
                        <a href="tel:+375 (33) 333-00-66" className="about-store__item-title"><strong>+375 (33) 333-00-66</strong></a>
                    </div>
                    <div className="about-store__item">
                        <Svg icon="map" />
                        <strong className="about-store__item-title">г. Минск, В.Хоружей 6 <span>(ТЦ Зеркало, розовая вывеска «Софатэкс»)</span></strong>
                    </div>
                </div>
            </Location>
        </div>
    );
}