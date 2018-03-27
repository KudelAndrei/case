import React, { Component } from 'react';
import Input from '../Input';
import Svg from '../Svg';
import axios from 'axios';
import PropTypes from 'prop-types';
import Placeholder from '../Placeholder/';
import "./style.css";

export default class Form extends Component {
    static propTypes = {
        popup: PropTypes.bool,
        type: PropTypes.string.isRequired,
        order: PropTypes.object
    };

    constructor(props){
        super(props);
        this.state = { 
            inputName: '',
            inputNameValid: false,
            inputPhone: '',
            inputPhoneValid: false,
            inputText: '',
            inputTextValid: false,
            inputMail: '',
            inputMailValid: false,
            formValid: true, 
            load: false, 
            sent: false 
        };

        this.inputChange = this.inputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.formClear = this.formClear.bind(this);
        this.initializeInput = this.initializeInput.bind(this);
        this.initializeButton = this.initializeButton.bind(this);
        this.messageText = '';
        this.url = 'https://api.telegram.org/bot';
        this.token = '465765796:AAHA5-w2EGDhAtllvFcn6ng6izCYsJg9aqA';
        this.chatID = '-303313856';
    }

    initializeInput({ inputs }){
        let isExistInput = [];

        for (const input in inputs) {
            if (inputs.hasOwnProperty(input)) {
                const element = inputs[input];
                switch(element){
                    case 'name':
                        isExistInput.push(<Input 
                                            type={element}
                                            icon={element}
                                            className={element}
                                            ref={(input) => (this[element] = input)}
                                            valid={this.state.inputNameValid}
                                            placeholder="Имя"
                                            onInput={this.inputChange}
                                        />);
                        break;
                    case 'phone':
                        isExistInput.push(<Input 
                                            type={element}
                                            icon={element}
                                            className={element}
                                            ref={(input) => (this[element] = input)}
                                            valid={this.state.inputPhoneValid}
                                            placeholder="+375 (__) ___-__-__"
                                            onInput={this.inputChange}
                                        />);
                        break;
                    case 'text':
                        isExistInput.push(<Input 
                                            type={element}
                                            icon={element}
                                            className={element}
                                            ref={(input) => (this[element] = input)}
                                            valid={this.state.inputTextValid}
                                            placeholder="Оставьте ваше сообщение"
                                            onInput={this.inputChange}
                                        />);
                        break;
                    case 'email':
                        isExistInput.push(<Input 
                                            type={element}
                                            icon={element}
                                            className={element}
                                            ref={(input) => (this[element] = input)}
                                            valid={this.state.inputMailValid}
                                            placeholder="Введите ваш e-mail"
                                            onInput={this.inputChange}
                                        />);
                        break;
                    default:
                        console.log(`Поля ${element} не существует или проверте правильно ли вы его ввели!`);
                        break;
                }
            }
        }
        
        return (
            isExistInput.map((input, index) => {
                return <React.Fragment key={index}>{input}</React.Fragment>
            })
        );
    }

    initializeButton({ type }){
        let button;

        switch(type){
            case 'buy':
                button = <button
                            className={`btn btn-${type}`}
                            disabled={this.state.formValid ? '' : 'disabled'}
                            type="submit"
                        >
                            {
                                this.state.load ?
                                <Placeholder />
                                :
                                <React.Fragment>
                                    <Svg icon='basket' />
                                    <span>Заказать</span>
                                </React.Fragment>
                            }
                        </button>;
                break;
            case 'callme':
            case 'viber':
                button = <button
                            className={`btn btn-${type}`}
                            disabled={this.state.formValid ? '' : 'disabled'}
                            type="submit"
                        >
                            {
                                this.state.load ?
                                <Placeholder />
                                :
                                <span>Перезвоните мне</span>
                            }
                        </button>;
                break;
            case 'callback':
            case 'review':
                button = <button
                            className={`btn btn-${type}`}
                            disabled={this.state.formValid ? '' : 'disabled'}
                            type="submit"
                        >
                            {
                                this.state.load ?
                                <Placeholder />
                                :
                                <span>Отправить</span>
                            }
                        </button>;
                break;
            case 'subscribe':
                button = <button
                            className={`btn-${type}`}
                            disabled={this.state.formValid ? '' : 'disabled'}
                            type="submit"
                        >
                            {
                                this.state.load ?
                                <Placeholder />
                                :
                                <span>Подписаться</span>
                            }
                        </button>;
                break;
        }

        return (
            <React.Fragment>{ button }</React.Fragment>
        );
    }

    inputChange(value, type){
        if (type === 'name'){
            this.setState({ inputName: value });
        }
        else if (type === 'phone'){
            this.setState({ inputPhone: value });
        }
        else if (type === 'email'){
            this.setState({ inputMail: value });
        }
        else {
            this.setState({ inputText: value });
        }
    }

    formClear(){
        this.setState({
            inputName: '',
            inputNameValid: false,
            inputPhone: '',
            inputPhoneValid: false,
            inputText: '',
            inputTextValid: false,
            inputMail: '',
            inputMailValid: false,
            formValid: true, 
            load: false, 
            sent: false 
        });
    }

    formSubmit(e) {
        e.preventDefault();
        let label = '';
        switch(this.props.type){
            case 'buy':
                label = 'Заказ чехла';
                break;
            case 'callme':
                label = 'Перезвоните мне';
                break;
            case 'callback':
                label = 'Сообщение директору';
                break;
            case 'subscribe':
                label = 'Подписка на рассылку';
                break;
            case 'review':
                label = 'Отправить отзыв';
                break;
            default:
                label = 'Обратный звонок'
                break;
        }

        // console.log(this.props.order.type)

        this.setState({ load: true });

        this.messageText = `Заявка, с пометкой "${label}", `;
        this.state.inputName ? this.messageText += `Имя: ${this.state.inputName}; ` : '';
        this.state.inputPhone ? this.messageText += `Номер телефона: ${this.state.inputPhone}; ` : '';
        this.props.order ? this.messageText += `Чехол - "${this.props.order.name}", тип "${this.props.order.type}", текстура "${this.props.order.name_texture}", цена ${this.props.order.price} руб; ` : '';
        this.state.inputText ? this.messageText += `Сообщение: ${this.state.inputText}; ` : '';
        this.state.inputMail ? this.messageText += `Email: ${this.state.inputMail}; ` : '';

        axios.get(this.url + this.token + '/sendMessage?chat_id=' + this.chatID + '&text=' + this.messageText)
            .then(res => {
                setTimeout(() => {
                    this.setState({ load: false, sent: true });
                }, 500);
                
                setTimeout(() => {
                    this.formClear();
                }, 2000);
            })
            .catch(err => {
                console.log(err);
            });    
    }

    render(){
        const defaultClass = this.props.default ? 'default' : '';
        const popupClass = this.props.popup ? 'form-popup' : '';
        return(
            <React.Fragment>
                {
                    this.state.sent ?
                        <div className="form-success">
                            <div className="form-success__icon"><Svg icon="check" /></div>
                            <h3 className="form-success__title">Спасибо, Ваша заявка успешно отправлена!</h3>
                        </div>
                        :
                        <form className={`form form-${this.props.type} ${popupClass} `} onSubmit={this.formSubmit}>
                            {this.props.children}
                            <div className="form-wrap">
                                {this.initializeInput(this.props)}
                                {this.initializeButton(this.props)}
                            </div>
                        </form>
                }
                
            </React.Fragment>
        );
    }
}