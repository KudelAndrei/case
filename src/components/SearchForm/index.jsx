import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Svg from '../Svg';
import "./style.css";

export default class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = { value: '', focus: false, result: [], resize: false };

        this.models = this.props.models;
        this.collections = this.props.collections;
        this.categorys = this.props.categorys;

        this.inputChange = this.inputChange.bind(this);
        this.focusSearch = this.focusSearch.bind(this);
        this.blurSearch = this.blurSearch.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.getModel = this.getModel.bind(this);
    }

    getCategory(id) {
       return this.categorys.find(category => category.id === id);
    }

    getModel(id) {
        return this.models.find(model => model.id === id);
    }

    inputChange(event){
        this.setState({ value: event.target.value }, () => {
            if (this.state.value.length > 1){
                const filterModel = this.models.find(model =>
                    model.name_ru.includes(this.state.value)
                    // || model.description.includes(this.state.value)
                    && model) || {};
                const filterCollections = this.collections.filter(collection => collection.model === filterModel.id);
                this.setState({ result: filterCollections });
            } else {
                this.setState({ result: [] });
            }
        });
    }

    focusSearch() {
        this.props.mobile ? 
        this.setState({ focus: true, resize: true }, () => {
            document.querySelector('.navigation__top').classList.add('focus-search');
        }) 
        : 
        this.setState({ focus: true });
    }

    blurSearch(clear){
        setTimeout(() => {
            if (clear === true){
                this.setState({ value: '', result: [] });
            }
            this.setState({ focus: false, resize: false }, () => {
                document.querySelector('.navigation__top').classList.remove('focus-search');
            });
        }, 150)
    }

    render() {
        return (
            <div className={`search-form__wrap ${this.props.className} ${this.props.mobile ? 'mobile' : ''}`}>
                <form className="search-form" onClick={this.focusSearch}>
                    <label className={`label-wrap label-search ${this.state.focus ? 'focus' : ''}`}>
                        <Svg icon="search" />
                        <input
                            type="text"
                            value={this.state.value}
                            ref={input => this.phone = input}
                            onInput={this.inputChange}
                            onBlur={this.blurSearch}
                            placeholder="Поиск..."
                            required />
                    </label>
                </form>
                {
                    this.state.focus ?
                    <div className="search-form__result">
                        {
                            this.state.result.length !== 0 ?
                                this.state.result.map(rez => {
                                    return (
                                        <Link
                                            key={rez.id}
                                            to={`/collections/${this.getCategory(rez.category).name_eng}/${this.getModel(rez.model).name_eng}`}
                                            className="search-result-item"
                                            onClick={() => this.blurSearch(true)}
                                        >
                                            <table >
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h2 className="search-result-item__model">
                                                                коллекция "{this.getModel(rez.model).name_ru}"
                                                            </h2>
                                                            <h3 className="search-result-item__category">
                                                                на {this.getCategory(rez.category).name_ru} диван
                                                            </h3>
                                                        </td>
                                                        <td className="search-result-item__icon"><Svg icon={this.getCategory(rez.category).icon} /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Link>
                                    );
                                })
                                :
                                this.state.value.length > 1 &&
                                <div className="search-form__null">
                                    <h3>По Вашему запросу "<span>{this.state.value}</span>" ничего не найдено!</h3>
                                </div>
                        }
                    </div>
                        :
                    null
                }
            </div>
        );
    }
}