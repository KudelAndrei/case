import React, { Component } from 'react';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';
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

    componentDidMount(){
        const script = document.createElement("script");
        this.location = document.getElementsByClassName('location-line__map');
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9fc47051c356781cc290d25496190f976a229112982bf1587aec61f5794bf6f4&amp;amp;height=100%&amp;scroll=false;zoom=false;amp;lang=ru_RU";
        script.async = true;
        this.location[0].appendChild(script);  
    }

    goIndexSlick(index) {
        this.SliderStore.slickGoTo(index);
    }

    render(){
        return(
            <div className="location-line">
                {this.props.children}
                <div className="location-line__wrap">
                    <div className="location-line__map"></div>
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