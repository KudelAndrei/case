import React from 'react';
import Svg from '../Svg/index';
import Form from '../Form/index';
import { Link } from 'react-router-dom';
import "./style.css";

export default function Footer(props){
    return(
        <footer className="footer">
            <div className="subscribe">
                <div className="container-wrap">
                    <Form inputs={['email']} type="subscribe">
                        <span>Подпишитесь на наши новости и акции</span>
                    </Form>
                </div>
            </div>
            <div className="footer-center">
                <div className="container-wrap">
                    <div className="footer-wrap">
                        <h4><span>Информация</span></h4>
                        <div className="footer-menu">
                            <Link to="/rassrochka" className="footer-link" >Рассрочка</Link>
                            <Link to="/o-nas" className="footer-link" >О нас</Link>
                            <Link to="/dostavka" className="footer-link" >Доставка</Link>
                            <Link to="/o-produkcii" className="footer-link" >О продукции</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container-wrap">
                    <div className="copyright">
                        <p>2018 © Все права защищены</p>
                        <p>© ООО «Еврочехол», 220100, РБ г. Минск, ул. В.Хоружей 6 пом. 1 УНП: 192958555.</p>
                        <p>Дата регистрации в Торговом реестре РБ: 15.09.2017 г.</p>
                        <p>Номер регистрации в Торговом реестре: 392476</p>
                        <p>Регистрирующий орган: Минский горисполком.</p>
                        <p>По вопросам размещения рекламы на сайте «Софатэкс» звонить по телефону: +375 33 3330066</p>
                        <p>Режим работы: пн-вс с 10-00 до 20-00.</p>
                    </div>
                    <div className="soc-menu">
                        <a href="https://vk.com/club157203178" target="_blank" className="soc-link"><Svg icon="vk" /></a>
                        <a href="https://ok.ru/group/53508109435026" target="_blank" className="soc-link"><Svg icon="ok" /></a>
                        <a href="https://www.instagram.com/evrochehol_by/" target="_blank" className="soc-link"><Svg icon="inst" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}