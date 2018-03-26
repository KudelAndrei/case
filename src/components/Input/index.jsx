import React, { Component } from 'react';
import Svg from '../Svg';
// import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import "./style.css";

export default class Input extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        icon: PropTypes.string,
        className: PropTypes.string,
        valid: PropTypes.bool,
        placeholder: PropTypes.string
    };

    constructor(props){
        super(props);
        this.state = { value: '', focus: false };
        this.toggleInput = this.toggleInput.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    toggleInput(){
        this.setState({ focus: !this.state.focus });
    }

    clearInput(){
        this.setState({ value: '' });
    }

    changeInput(event){
        this.setState({ value: event.target.value }, () => {
            this.props.onInput(this.state.value, this.props.type);
        });
    }

    render(){
        const focusClass = this.state.focus ? 'focus' : '';
        return(
            <label className={`label-wrap label-${this.props.className} ${focusClass} ${this.props.valid ? 'valid': ''}`}>
                {
                    this.props.icon && <Svg icon={this.props.icon} />
                }
                {/* <MaskedInput 
                    {...this.props} 
                    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    type={this.props.type}
                    onFocus={this.toggleInput}
                    onBlur={this.toggleInput}
                    onInput={this.changeInput} /> */}
                    {
                        this.props.type !== 'text' ?
                        <input 
                            type={this.props.type}
                            value={this.state.value}
                            onInput={this.changeInput}
                            onFocus={this.toggleInput}
                            onBlur={this.toggleInput}
                            className={`input-${this.props.className}`}
                            placeholder={this.props.placeholder}
                            required />
                            :
                        <textarea
                            name={this.props.type}
                            type={this.props.type}
                            value={this.state.value}
                            onInput={this.changeInput}
                            onFocus={this.toggleInput}
                            onBlur={this.toggleInput}
                            className={`textarea-${this.props.className}`}
                            placeholder={this.props.placeholder}
                            required ></textarea>
                    }
                
            </label>
        );
    }
}