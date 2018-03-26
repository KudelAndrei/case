import React from 'react';
import "./style.css";

export default function Delivery(){
    (() => window.scrollTo(0, 0))();
    return(
        <div className="container-wrap">
            <section className="delivery content-height">
                <h2 className="delivery__head">Доставка</h2>
                <strong className="delivery__text">Самовывоз</strong>
                <table className="delivery__table">
                    <tbody>
                        <tr>
                            <td><strong>Адрес</strong></td>
                            <td><strong>Время работы</strong></td>
                            <td><strong>Примерка</strong></td>
                            <td><strong>Отказ от заказа</strong></td>
                            <td><strong>Оплата</strong></td>
                        </tr>
                        <tr>
                            <td>М. Площадь Якуба Коласа, В.Хоружей 6, ТЦ ЗЕРКАЛО. <br/> МАГАЗИН Софатэкс <br/> <a href="tel:+375 33 333 00 66">+375 33 333 00 66</a> </td>
                            <td>Ежедневно с 10-00 до 20-00</td>
                            <td>возможна на демонстрационной мебели</td>
                            <td>частичный или полный</td>
                            <td>безналичные способы оплаты, наличными, рассрочка.</td>
                        </tr>
                    </tbody>
                </table>
                <strong className="delivery__text">Белпочтой</strong>
                <p className="delivery__text--small">Для Вашего удобства мы можем отправить Ваш заказ Белпочтой. Вы можете получить его в любом отделении Белпочты.</p>
                <p className="delivery__text--small">Проверить статус Вашей посылки Вы можете на сайте <a href="http://belpost.by" target="_blank">Belpost.by</a>, либо позвонив в интернет-магазин по номеру <a href="tel:+375 33 333 00 66">+375 33 333 00 66</a>. Номер отправления Вы также можете узнать у менеджеров интернет-магазина.</p>
                <p className="delivery__text--small">Срок хранения посылки в отделении – <strong>30 дней</strong>.</p>
                <table className="delivery__table">
                    <tbody>
                        <tr>
                            <td><strong>Регион</strong></td>
                            <td><strong>Примерка</strong></td>
                            <td><strong>Отказ от заказа</strong></td>
                            <td><strong>Оплата</strong></td>
                            <td><strong>Стоимость</strong></td>
                            <td><strong>Доставка заказа</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Беларусь</strong></td>
                            <td>отсутствует</td>
                            <td>отсутствует возможность частичного отказа</td>
                            <td>Оплата при получении в отделении почты.</td>
                            <td>от 6 до 14 рублей (в зависимости от кол-ва ед. в заказе)</td>
                            <td>до 5 дней с момента заказа</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}