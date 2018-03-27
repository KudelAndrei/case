import React, { Component } from 'react';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import "./style.css";

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';

export default class Location extends Component {
    constructor(props){
        super(props);
        this.state = { activeImage: 0 };
        this.goIndexSlick = this.goIndexSlick.bind(this);
        this.imagesSlider = [];
    }

    componentWillMount(){
        this.imagesSlider.push(image1, image2, image3, image4, image5, image6);
        this.setSliderStore = {
            className: 'location-slider',
            dots: false,
            centerMode: true,
            infinite: true,
            speed: 200,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            beforeChange: (prevIndex, nextIndex) => {
                this.setState({ activeImage: nextIndex });
            }
        };
    }

    goIndexSlick(index) {
        this.SliderStore.slickGoTo(index);
    }

    render(){
        return(
            <div className="location-line">
                {this.props.children}
                <div className="location-line__wrap">
                    <div className="location-line__map">
                        <Map center={[53.91859557061552, 27.579050932540895]} style={{width: '100%', height: '100%' }} zoom={15}>
                            <Marker lat={53.91859557061552} lon={27.579050932540895} />
                        </Map>
                    </div>
                    <div className="location-slider__wrap">
                        <div className="location-slider__image">
                            <LazyLoad height={200} onec>
                                <img src={this.imagesSlider[this.state.activeImage]} alt="Софатекс" />
                            </LazyLoad>
                        </div>
                        <Slider {...this.setSliderStore} ref={SliderStore => this.SliderStore = SliderStore} >
                            {
                                this.imagesSlider.map((image, index) => {
                                    return (
                                        <div key={index} onClick={() => this.goIndexSlick(index)} className="location-slider__slide">
                                            <LazyLoad height={200} once>
                                                <img src={image} alt="Софатекс" />
                                            </LazyLoad>
                                        </div> 
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}