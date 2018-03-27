import React, { Component } from 'react';
import "./style.css";

export default class Popup extends Component {
    constructor(props){
        super(props);
        this.state = { toggle: false };
        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup(){
        this.setState({ toggle: !this.state.toggle }, () => {
            this.state.toggle ? document.body.classList.add('popup-open') : document.body.classList.remove('popup-open');
        });
    }

    render() {
        return (
            <React.Fragment>
                <span className="popup-link" onClick={this.togglePopup}>{this.props.link}</span>
                {
                    this.state.toggle ?
                        <div className="popup-wrap">
                            <div className="popup-bg" onClick={this.togglePopup}></div>
                            <div className="popup__content">
                                <div className={`popup ${this.props.className}`}>
                                    <div className="popup-close" onClick={this.togglePopup}>+</div>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
            </React.Fragment>
        );
    }
}