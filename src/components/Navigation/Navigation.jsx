import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Svg from '../Svg';
import Menu from './Menu';
import Form from '../Form';
import Popup from '../Popup';
import SearchForm from '../SearchForm';
import "./Navigation.css";

export default class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = { toggleMenu: false, viewport: {}, slideMenu: false, searchMobile: false };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.resizeMixin = this.resizeMixin.bind(this);
        this.slideMenu = this.slideMenu.bind(this);
        this.renderSlideMenu = this.renderSlideMenu.bind(this);
    }

    componentDidMount(){
        window.addEventListener('load', this.resizeMixin);
        window.addEventListener('resize', this.resizeMixin);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.resizeMixin);
    }

    resizeMixin(){
        this.setState({
            viewport: {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }, () => {
            this.state.viewport.width < 500 ?
            this.setState({ searchMobile: true }):
            this.setState({ searchMobile: false });
        });
    }

    toggleMenu(){
        this.setState({ toggleMenu: !this.state.toggleMenu });
    }

    slideMenu(){
        this.setState({ slideMenu: !this.state.slideMenu }, () => {
            this.state.slideMenu ? document.querySelector('body').classList.add('open') : document.querySelector('body').classList.remove('open');
        });
    }

    renderSlideMenu(){
        return (
            <div className="slide-menu__wrap">
                <div className="slide-menu__bg" onClick={this.slideMenu}></div>
                <div className="slide-menu__content">
                    <div className="slide-menu__close" onClick={this.slideMenu}><Svg icon="close" /></div>
                    <Link onClick={this.slideMenu} to="/" className="slide-menu__logo"><Svg icon="logo" /></Link>
                    <div className="slide-menu__mobile">
                        <div className="slide-menu">
                            <Menu {...this.props} slideUp={this.slideMenu} />
                            <NavLink onClick={this.slideMenu} to='/dostavka' activeClassName="active" className="slide-menu__link" ><span>Доставка</span></NavLink>
                            <NavLink onClick={this.slideMenu} to='/rassrochka' activeClassName="active" className="slide-menu__link" ><span>Рассрочка</span></NavLink>
                            <NavLink onClick={this.slideMenu} to='/o-nas' activeClassName="active" className="slide-menu__link" ><span>О нас</span></NavLink>
                            <NavLink onClick={this.slideMenu} to='/o-produkcii' activeClassName="active" className="slide-menu__link" ><span>О продукции</span></NavLink>
                            <NavLink onClick={this.slideMenu} to='/o-produkcii' activeClassName="active" className="slide-menu__link" ><span>О магазине</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        const desktopWidth = 1100;
        const searchMobileWidth = 600;
        return(
            <header className={`navigation navigation--small ${this.state.viewport.width > desktopWidth ? '' : 'navigation-mobile'}`}>
                <div className="navigation__top">
                    <div className="navigation__top-left">
                        <Link to='/' className={`logo navigation__logo ${this.state.toggleMenu ? 'toggle-menu--open' : ''}`}><Svg icon="logo" /></Link>
                        {
                            this.state.viewport.width > desktopWidth &&
                            <React.Fragment>
                                <div className="navigation__phone">
                                    <span>Телефон:</span>
                                    <a href="tel:8(033)333-00-66" className="navigation__phone-tel">8 (033) 333-00-66</a>
                                    <div className={`toggle-menu ${this.state.toggleMenu ? 'toggle-menu--open' : ''}`} id="toggle-menu">
                                        <div className="toggle-menu__text">
                                            <Link to='/dostavka' className="toggle-menu__link" ><span>Доставка</span></Link>
                                            <Link to='/rassrochka' className="toggle-menu__link" ><span>Рассрочка</span></Link>
                                            <Link to='/o-nas' className="toggle-menu__link" ><span>О нас</span></Link>
                                        </div>
                                        <div className="toggle-menu__btn" onClick={this.toggleMenu}>
                                            <div className="toggle-menu__btn-arrow"><Svg icon="angle-right" /></div>
                                        </div>
                                    </div>
                                    <Popup
                                        className="callback"
                                        link={<span className="navigation__phone-callback">обратный звонок</span>}
                                    >
                                        <Form type="callback" inputs={['name','phone']} popup>
                                            <h3 className="title-accent">Заказать Звонок</h3>
                                        </Form>
                                    </Popup>
                                </div>
                                <div className="navigation__schedule">
                                    <span>График работы</span>
                                    <strong>10:00-20:00</strong>
                                    <span>ежедневно</span>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                    <div className={`navigation__top-right ${this.state.searchMobile ? 'mobile' : ''}`}>
                        <SearchForm {...this.props} mobile={this.state.searchMobile} className={`${this.state.viewport.width < searchMobileWidth ? 'search-form-mobile' : ''}`} />
                        {
                            this.state.viewport.width < desktopWidth &&
                            <button className="btn-hamburger" onClick={this.slideMenu}><Svg icon="burger" /></button>
                        }
                    </div>
                </div>
                {
                    this.state.viewport.width > desktopWidth &&
                    <div className="navigation__bottom">
                        <Menu {...this.props} />
                    </div>
                }
                {  this.state.slideMenu ? this.renderSlideMenu() : null }
            </header>
        );
    }
}