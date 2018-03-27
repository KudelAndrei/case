import React, { Component } from 'react';
import Slider from 'react-slick';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import LazyLoad from 'react-lazyload';

import Country from '../children/Country';
import Price from '../children/Price';
import Popup from '../../Popup';
import Form from '../../Form';
import Svg from '../../Svg';
import DescriptionCollection from '../../DescriptionCollection/';
import ModelsCollection from '../../ModelsCollection/';
import Advantages from '../../Advantages/';
import SelfSelection from '../../SelfSelection';
import ContainerReview from '../../ReviewCollection/ContainerReview';
import PersonalSelection from '../../DragDrop';
import Location from '../../Location';
import Callback from '../../Callback';

import "./style.css";


export default class FullCollection extends Component{
    static propTypes = {

    };
    constructor(props){
        super(props);
        this.state = { option: 1, activeImage: 0, hoverTexture: null, viewport: {} };
        this.handleOption = this.handleOption.bind(this);
        this.goIndexSlick = this.goIndexSlick.bind(this);
        this.getCategoryId = this.getCategoryId.bind(this);
        this.getModelId = this.getModelId.bind(this);
        this.convertTitleModel = this.convertTitleModel.bind(this);
        this.convertTitleCategory = this.convertTitleCategory.bind(this);
        this.getModel = this.getModel.bind(this);
        this.getCountry = this.getCountry.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.hoverTexture = this.hoverTexture.bind(this);
        this.hoverTextureOut = this.hoverTextureOut.bind(this);
        this.resizeMixin = this.resizeMixin.bind(this);
        this.setSliderCollection = {};
        this.setSliderTexture = {};
        this.setLinkInner = {};
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        scrollSpy.update();
        window.addEventListener('load', this.resizeMixin);
        window.addEventListener('resize', this.resizeMixin);
    }

    componentWillMount(){
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        window.removeEventListener('resize', this.resizeMixin);

        this.setSliderCollection = {
            className: 'slider-collection',
            dots: false,
            infinite: false,
            lazyLoad: true,
            speed: 200,
            arrows: false,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (prevIndex, nextIndex) => {
                this.setState({ activeImage: nextIndex });
            }
        };

        this.setSliderTexture = {
            className: 'slider-texture',
            dots: false,
            infinite: true,
            arrows: false,
            centerMode: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            beforeChange: (prevIndex, nextIndex) => {
                this.setState({ activeImage: nextIndex });
            }
        };

        this.setLinkInner = {
            className: 'inner-menu__link',
            activeClass: 'active',
            spy: true,
            smooth: true,
            offset: 0,
            duration: 200,
            onSetActive: () => {
                this.handleSetActive;
            }
        };
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    hoverTexture(index){
        this.state.viewport.width > 1000 && this.setState({ hoverTexture: index });
    }

    hoverTextureOut(){
        this.setState({ hoverTexture: null });
    }

    handleOption(id){
        this.setState({ option: id, activeImage: 0 }, () => {
            this.goIndexSlick(this.state.activeImage);
            scrollSpy.update();
        });
        scrollSpy.update();
    }

    goIndexSlick(index) {
        this.SliderCollection.slickGoTo(index);
        this.SliderTexture !== null && this.SliderTexture.slickGoTo(index);
    }

    resizeMixin() {
        this.setState({
            viewport: {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        });
    }

    getCategoryId(title){
        const thisCategory = this.props.data.categorys.find(category => category.name_eng === title);
        return thisCategory.id;
    }

    getModelId(title){
        const model = this.props.data.models.find(model => model.name_eng === title);
        if (model){
            return model.id;
        }
        return null;
    }

    getModel(id){
        return this.props.data.models.find(model => model.id === id);
    }

    convertTitleModel(title, type){
        let model = {};
        if (type === 'eng'){
            model = this.props.data.models.find(model => model.name_eng === title);
        } else {
            model = this.props.data.models.find(model => model.name_ru === title);
        }
        return model;
    }

    convertTitleCategory(title, type){
        let category = {};
        if (type === 'eng'){
            category = this.props.data.categorys.find(category => category.name_eng === title);
        } else {
            category = this.props.data.categorys.find(category => category.name_ru === title)
        }
        return category;
    }

    getCountry(id){
        return this.props.data.countrys.find(country => country.id === id);
    }

    render(){
        const { collections, models, categorys } = this.props.data;
        const { model, category } = this.props.match.params;
        const collection = collections.find(collection => collection.model === this.getModelId(model) && collection.category === this.getCategoryId(category));
        const optionCollection = collection ? collection.options.find(option => (option.id === this.state.option)) : null;
        const optionsLenght = collection ? collection.options.length : null;
        let path = `images/collections/${model}/${category}`;

        return(
            <React.Fragment>
            {
                collection !== undefined && collection !== null ?
                <main>
                    <section className="wrapper_inner">
                        <div className="content_1_wrapper">
                            <div className="content_left">
                                <div className="content_left-slider">
                                    <div className="content_left-slider-inner">
                                        <Slider {...this.setSliderCollection} ref={SliderCollection => this.SliderCollection = SliderCollection} >
                                            {
                                                optionCollection.images.map((slide, index) => (
                                                    <div className={`${this.setSliderCollection.className}-slide`} key={index}>
                                                        <LazyLoad height={400}>
                                                            <img src={require(`../../../${path}/${slide.main_url}`)} alt={slide.title} />
                                                        </LazyLoad>
                                                    </div>
                                                ))
                                            }
                                        </Slider>

                                        {
                                            optionCollection.images.length > 1 ?
                                            <Slider {...this.setSliderTexture} ref={SliderTexture => this.SliderTexture = SliderTexture} >
                                                {
                                                    optionCollection.images.map((slide, index) => (
                                                        <div className={`${this.setSliderTexture.className}-slide`} key={index} onClick={() => this.goIndexSlick(index)}>
                                                            <LazyLoad height={200}>
                                                                <img src={require(`../../../${path}/${slide.main_url}`)} alt={slide.title} />
                                                            </LazyLoad>
                                                        </div>
                                                    ))
                                                }
                                            </Slider>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="content_right">
                                <div className="content_product_info">
                                    <div className="content_product_info__head">
                                        <h2 className="content_product_info__title">«{this.convertTitleModel(model, 'eng').name_ru}»</h2>
                                        <Popup
                                            className="country"
                                            link={<Country country={this.getCountry(collection.country)} />}
                                        >
                                            <h3 className="title-accent">{this.getCountry(collection.country).name}</h3>
                                            <p>{this.getCountry(collection.country).description}</p>
                                        </Popup>
                                    </div>
                                    <div className="content_product_info__sub-wrapper">
                                        <h3 className="content_product_info__sub">Чехол на <span className="content_product_info__sub--blue">{this.convertTitleCategory(category, 'eng').name_ru}</span></h3>
                                        <div className="content_product_info__avail">{collection.available ? 'В наличии' : 'Нет в наличии'}</div>
                                    </div>
                                    <div className="content_product_info__price">
                                        <Price price={optionCollection.price} />
                                    </div>
                                    <div className="content_product_info__variant">Варианты: <span className="content_product_info__variant-var">{optionCollection.images[this.state.activeImage].title}</span></div>
                                    <div className="content_product_info__variant-textures">
                                        {
                                            optionCollection.images.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`content_product_info-texture ${this.state.activeImage === index ? 'active' : ''}`}
                                                    onClick={() => this.goIndexSlick(index)}
                                                    onMouseMove={() => this.hoverTexture(index)}
                                                    onMouseOut={this.hoverTextureOut}
                                                >
                                                    <Svg icon="check" />
                                                    <div className="texture__wrap">
                                                        <LazyLoad height={100}>
                                                            <img src={require(`../../../images/collections/${model}/textures/${image.texture_url}`)} alt={image.title} />
                                                        </LazyLoad>
                                                    </div>
                                                    {
                                                        this.state.hoverTexture === index ?
                                                        <div className="tolltip-texture">
                                                            <img src={require(`../../../images/collections/${model}/textures/${image.texture_url}`)} alt={image.title} />
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="content_product_info__options">
                                        {
                                            optionsLenght > 1 &&
                                            collection.options.map(option => (
                                                <button
                                                    key={option.id}
                                                    className={`btn-state ${option.id === this.state.option ? 'active' : ''}`}
                                                    disabled={`${option.id === this.state.option ? 'disabled' : ''}`}
                                                    onClick={() => (this.handleOption(option.id))}
                                                >
                                                    {option.title}
                                                    {option.id === this.state.option ? <Svg icon="check" /> : ''}
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <Form 
                                        type="buy" 
                                        inputs={['phone']} 
                                        order={{
                                            'name' : this.convertTitleModel(model, 'eng').name_ru,
                                            'type' : optionCollection.title,
                                            'name_texture' : optionCollection.images[this.state.activeImage].title,
                                            'price' : optionCollection.price
                                        }} 
                                    />
                                    <Advantages />
                                </div>
                            </div>
                        </div>              
                    </section>
                    <section className="wrapper_inner">
                        <div className="content_1_wrapper">
                            <StickyContainer className="content_left">
                                <Sticky>
                                    {
                                        ({style, isSticky, wasSticky, distanceFromTop, distanceFromBottom, calculatedHeight}) => {
                                            return (
                                                <div className="image-fixed" style={style}>
                                                    <LazyLoad height={400}>
                                                        <img src={require(`../../../${path}/${optionCollection.images[this.state.activeImage].main_url}`)} alt={optionCollection.images[this.state.activeImage].title} />
                                                    </LazyLoad>
                                                </div>
                                            )
                                        }
                                    }
                                </Sticky>
                            </StickyContainer>
                            <div className="content_right">
                                <DescriptionCollection 
                                    options={this.getModel(collection.model)}
                                    model={this.getModelId(model)}
                                    models={models}
                                    category={category}
                                    categorys={categorys}
                                    collections={collections} />
                                <Form type="callme" inputs={['phone']} default>
                                    <h3>Я не знаю <br/> подойдет ли чехол к  моему дивану! <br/> Перезвоните мне!</h3>
                                </Form>
                                <ModelsCollection options={this.getModel(collection.model)} models={models} />
                            </div>
                        </div>
                    </section>
                    <section className="wrapper_inner">
                        <div className="content_2_wrapper">
                            <StickyContainer className="content_2_left">
                                <Sticky>
                                    {
                                        ({style, isSticky, wasSticky, distanceFromTop, distanceFromBottom, calculatedHeight}) => {
                                            return (
                                                <div className="inner-menu" style={style}>
                                                    <Link to="review-line" {...this.setLinkInner}>Отзывы</Link>
                                                    <Link to="self-selection" {...this.setLinkInner}>Как подобрать чехол <br/> самостоятельно</Link>
                                                    <Link to="personal-selection" {...this.setLinkInner}>Как правильно <br/> надеть чехол</Link>
                                                    <Link to="location-line" {...this.setLinkInner}>Расположение <br/> магазина</Link>
                                                    <Link to="callback-line" {...this.setLinkInner}>Обратная связь</Link>
                                                    <a className="inner-menu__link inner-menu__link--top" onClick={this.scrollToTop}><span>↑</span>Вверх</a>
                                                </div>
                                            )
                                        }
                                    }
                                </Sticky>
                            </StickyContainer>
                            <div className="content_2_right">
                                <ContainerReview
                                    options={this.getModel(collection.model)}
                                    models={models}
                                    path={`images/collections/${model}`}
                                />
                                <SelfSelection />
                                <PersonalSelection />
                                <Location >
                                    <h3 className="title-accent">А хотите в гости ?</h3>
                                    <p className="location-line__desc">Если вам обязательно нужно посмотреть на чехлы в живую и потрогать руками — мы ждем вас!</p>
                                </Location>
                                <Callback />
                            </div>
                        </div>
                    </section>
                </main>
                :
                <Route render={() => (
                    <div className="container-wrap content-height">
                        <h2>Извините, но такого чехла в нашем каталоге не существует!</h2>
                    </div>
                )} />
            }
            </React.Fragment>
        );
    }
}