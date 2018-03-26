import React from 'react';
import Lazyload from 'react-lazyload';
import Svg from '../../components/Svg';
import "./style.css";

import review1 from './images/review1.jpg';
import review2 from './images/review2.jpg';
import review3 from './images/review3.jpg';

export default function AboutUs(){
    (() => window.scrollTo(0, 0))();
    return(
        <div className="container-wrap">
            <section className="aboutus content-height">
                <h2 className="aboutus__head">О нас</h2>
                <div className="aboutus__desc">Софатэкс - первая белорусская компания, <br/> которая в 2010 году предложила рынку домашнего текстиля чехлы для мягкой мебели</div>
                <div className="aboutus-wrap">
                    <div className="aboutus__item">
                        <Svg icon="star" />
                        <h3 className="aboutus__item-title">Дизайн</h3>
                        <p className="aboutus__item-desc">Мы предлагаем более 130 расцветок чехлов для воплощения любой дизайнерской идеи</p>
                    </div>
                    <div className="aboutus__item">
                        <Svg icon="star" />
                        <h3 className="aboutus__item-title">Универсальность</h3>
                        <p className="aboutus__item-desc">Ровно 1 минута требуется для того,  чтобы одеть диван в чехол. Специальные навыки не требуются</p>
                    </div>
                    <div className="aboutus__item">
                        <Svg icon="star" />
                        <h3 className="aboutus__item-title">Качество</h3>
                        <p className="aboutus__item-desc">Мы несем ответственность за качество  каждого чехла, подвергая изделия многоступенчатой системе проверки</p>
                    </div>
                </div>
                <h3 className="aboutus__subtitle">Почему стоит выбрать нас</h3>
                <p className="aboutus__subdescq">В чем главное преимущество чехлов? Оно заключено в уникальной технологии производства</p>
                <div className="aboutus__text">
                    <div className="aboutus__wrap">
                        <div className="aboutus__col">Софатэкс стоит гораздо меньше, чем один визит в мастерскую по перетяжке обивки или новый диван, а пользоваться им вы сможете неоднократно. К тому же, вы можете менять чехлы в зависимости от настроения и тенденций в дизайне интерьера.</div>
                        <div className="aboutus__col">Вторая сильная сторона – конструктивное решение. Раньше чехлы для мебели не были универсальными и сложно было подобрать то, что смотрелось бы на мебели, как "новая обивка". Мы разработали универсальную модель, которая подойдет даже самой нестандартной мебели.</div>
                    </div>
                    <div className="aboutus__col">Чехлы идеально садятся практически на все виды мебели: клик-кляк, тахта, софа, угловые диваны и т.д. Такая универсальность достигается благодаря уникальной технологии Bielastico. Материал хорошо держит форму и быстро ее восстанавливает, а значит чехол будет идеально облегать мебель, а не топорщиться, как это бывает с другими чехлами. А также он абсолютно экологичен и безвреден.</div>
                </div>
                <div className="aboutus-paralax">
                    <div className="aboutus-paralax__item">
                        <Svg icon="star" />
                        <div className="aboutus-paralax__count">96</div>
                        <div className="aboutus-paralax__head">Розничных Магазинов</div>
                    </div>
                    <div className="aboutus-paralax__item">
                     <Svg icon="star" />
                        <div className="aboutus-paralax__count">6</div>
                        <div className="aboutus-paralax__head">Лет опыта работы</div>
                    </div>
                    <div className="aboutus-paralax__item">
                        <Svg icon="star" />
                        <div className="aboutus-paralax__count">750000</div>
                        <div className="aboutus-paralax__head">Счастливых клиентов</div>
                    </div>
                    <div className="aboutus-paralax__item">
                        <Svg icon="star" />
                        <div className="aboutus-paralax__count">85</div>
                        <div className="aboutus-paralax__head">Специалистов в штате</div>
                    </div>
                </div>
                <h3 className="aboutus__subtitle">Что говорят о нас</h3>
                <div className="aboutus-reviews">
                    <div className="aboutus-reviews__item">
                        <div className="aboutus-reviews__img">
                            <Lazyload height={200} once><img src={review1} alt="" /></Lazyload>
                        </div>
                        <div className="aboutus-reviews__desc"><span>Заказывала комплект: чехлы на два кресла+ на 3-местный диван. Понравилась оперативная работа менеджеров и службы доставки. При подтверждении заказа менеджер дала четкие пояснения на все мои вопросы, с точностью до рубля указала стоимость доставки заказа (я заказала курьера до двери). После этого я ежедневно получала смс о статусе моего заказа - это очень удобно. Боялась, что не угадаю с цветом чехлов (цветопередача любой картинки на экране не всегда совпадает с реальностью)..., но напрасно - ожидания оправдались. Оттенки цвета очень зависят от освещения - так что есть место для импровизации☺! Текстура -приятная. Шитье и строчка аккуратные. Одела чехлы, действительно, за пару минут - оказалось проще простого!</span> <h4 className="aboutus-reviews__name">Скворцова Любовь</h4> </div>
                    </div>
                    <div className="aboutus-reviews-wrap">
                        <div className="aboutus-reviews__item">
                            <div className="aboutus-reviews__img">
                                <Lazyload height={200} once><img src={review2} alt="" /></Lazyload>
                            </div>
                            <div className="aboutus-reviews__desc"><span>Заказывали 2 чехла: одно на кресло и одно на 2хместный диван без подлокотников, каждый чехол был в индивидуальной упаковке(сумке).</span> <h4 className="aboutus-reviews__name">Копылова Марина</h4></div>
                        </div>
                        <div className="aboutus-reviews__item">
                            <div className="aboutus-reviews__img">
                                <Lazyload height={200} once><img src={review3} alt="" /></Lazyload>
                            </div>
                            <div className="aboutus-reviews__desc"><span>Любимый котик привел в негодность диван дочери. Чехол пришёлся, как нельзя к стати. Теперь диван, как новый, и на котика никто не ругается, т.к об чехол когти не поточишь( натяжки нет, и кайфа тоже). Спасибо, вы очень нас выручили. Идеально подошли, смотрятся как новая мебель.</span> <h4 className="aboutus-reviews__name">Рога Светлана</h4></div>
                        </div>
                    </div>
                </div>
                <h3 className="aboutus__subtitle">Наши поставщики</h3>
                <p className="aboutus__suppliers">За 6 лет работы мы исследовали все предложения фабрик, занимающихся производством чехлов для мягкой мебели от Китая до Бангладеша через Америку и Европу. Для своих клиентов мы выбрали лучших из них. </p>
                <p className="aboutus__suppliers">Наши поставщики специализируются только на производстве чехлов для мягкой мебели. Их продукция производится на самом современном оборудовании с соблюдением европейских стандартов качества. </p>
                <p className="aboutus__suppliers">Благодаря прямым поставкам от производителя и статусу эксклюзивного представителя в Беларуси, даже в период экономической турбулентности, нам удается сохранять привлекательные цены на наш товар. </p>
            </section>
        </div>
    );
}