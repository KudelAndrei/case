import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Lazyload from 'react-lazyload';

import Country from '../children/Country';
import Price from '../children/Price';
import Stars from '../children/Stars';
import Svg from '../../Svg';

import "./styel.css";

export default class Collection extends Component {
    static propTypes = {
        collection: PropTypes.shape({
            id: PropTypes.number.isRequired,
            model: PropTypes.number.isRequired,
            category: PropTypes.number.isRequired,
            country: PropTypes.number.isRequired,
        }).isRequired,
        models: PropTypes.array.isRequired,
        model: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        countrys: PropTypes.array.isRequired
    }

    constructor(props){
        super(props);

        this.state = { option: 1, hover: 0 };

        this.getModel = this.getModel.bind(this);
        this.getCountry = this.getCountry.bind(this);
        this.hoverImage = this.hoverImage.bind(this);
        this.cropText = this.cropText.bind(this);
    }

    getModel(id){
        return this.props.models.find(model => model.id === id) || {};
    }

    getCountry(id){
        return this.props.countrys.find(country => country.id === id) || {};
    }

    hoverImage(index){
        this.setState({ hover: index });
    }

    cropText(text){
        return text.length > 250 ? text.substring(0, 240) + '...' : text;
    }

    render(){
        const { collection, model, models, category } = this.props;
        const initOptionCollection = collection.options.find(option => option.id === this.state.option) || {};
        const initTexture = initOptionCollection.images[this.state.hover] || '';
        let path = `images/collections/${this.getModel(model).name_eng}/${category}`;

        return(
            <Link to={`/collections/${category}/${this.getModel(model).name_eng}`} className="catalog-item">
                <div className="catalog-item__img " style={{backgroundImage: `url(${require(`../../../${path}/${initTexture.main_url}`)})`}}>
                    <div className="catalog-item__img-color">
                        <h4>{initTexture.title}</h4>
                        <div className="catalog-item-img-wrapper">
                            <Lazyload height={300} offset={200} once>
                                <img src={require(`../../../images/collections/${this.getModel(model).name_eng}/textures/${initTexture.texture_url}`)} alt={initTexture.title} />
                            </Lazyload>
                        </div>
                    </div>
                </div>
                <div className="catalog-item__content">
                    <div className="catalog-item__top-col">
                        <div className="catalog-item__top-left">
                            <div className="catalog-item__top-left-top">
                                <div className="catalog-item__head-wrap">
                                    <h3 className="catalog-item__title">{this.getModel(collection.model).name_ru}</h3>
                                    <div className="catalog-item__country">
                                        <Country country={this.getCountry(collection.country)} />
                                    </div>
                                </div>
                                <p className="catalog-item__desc">{this.cropText(models[collection.model].description)}</p>
                            </div>
                            <div className="catalog-item__top-left-bottom">
                                <Price price={initOptionCollection.price} />
                            </div>
                        </div>
                        <div className="catalog-item__top-right">
                            <div className="catalog-item__characteristics">
                                {
                                    models[collection.model].propertys.map((prop, index) => (
                                        <div key={index} className="catalog-item__characteristic">
                                            <span>{prop.name}:</span>
                                            <span className="catalog-item__characteristic-stars"><Stars value={prop.value} /></span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="catalog-item__bottom-col">
                        {
                            initOptionCollection.images.map((image, index) => (
                                <div 
                                    key={index} 
                                    className={`catalog-item__color ${index === this.state.hover ? 'hover' : ''}`} 
                                    onMouseEnter={() => this.hoverImage(index)}
                                >
                                    <h4>{image.title}</h4>
                                    <div className="catalog-item-img-wrapper">
                                        <Svg icon="check" />
                                        <Lazyload height={300} offset={200} once>
                                            <img src={require(`../../../images/collections/${this.getModel(model).name_eng}/textures/${image.texture_url}`)} alt={image.title} />
                                        </Lazyload>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Link>
        );
    }
}