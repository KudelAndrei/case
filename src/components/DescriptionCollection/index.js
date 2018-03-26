import React from 'react';
import Svg from '../Svg';

import "./style.css";

export default function DescriptionCollection(props){
    const { characteristics, description, name_ru } = props.options;
    const { collections, category, categorys, model, models } = props;
    const collectionsFilter = collections.filter(collection => collection.model === model);
    const modelFilter = collectionsFilter.map(thisCollection => {
        return models.filter(thisModel => thisModel.id === thisCollection.model)
    })

    console.log(modelFilter)

    return(
        <div className="options-line">
            <h2 className="options-line__head title-accent">Коллекция «{name_ru}»</h2>
            <table className="advantage-line">
                <tbody>
                    {
                        characteristics.map((characteristic, index) => (
                            <tr key={index}>
                                <td><div className="advantage-line__title">{characteristic.name}:</div></td>
                                <td><div className="advantage-line__text">{characteristic.value}</div></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <p className="options-line__desc">{description}</p>
            <div className="assortment-line">
                <h3 className="assortment-line__title">В ассортименте чехлы для:</h3>
                <div className="assortment-line__wrap">
                    {
                        categorys.map(thisCategory => {
                            return  <Svg key={thisCategory.id} icon={thisCategory.icon} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}