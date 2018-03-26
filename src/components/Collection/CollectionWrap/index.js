import React from 'react';
import Collection from '../SmallCollection';

import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import "./style.css";

export default function CollectionWrap(props){
    const { collections, categorys, countrys, models } = props.data;
    const { category } = props.match.params;
    const filterCollections = collections.filter(collection => getCategory(collection.category).name_eng === category);

    function getCategory(id){
        const category = categorys.find(category => category.id === id);
        if (category){
            return category;
        }
        return null;
    }

    function convertTitleCategory(title, type){
        if (type === 'eng'){
            const categoryTitle = categorys.find(category => category.name_eng === title);
            if (categoryTitle){
                return categoryTitle.name_ru;
            }
            return null;
        }
        const categoryTitle = categorys.find(category => category.name_eng === title);
        if (categoryTitle){
            return categoryTitle.name_ru;
        }
        return null;
    }

    return(
        <React.Fragment>
            {
                filterCollections.length ?
                <section className="catalog">
                    <div className="catalog__top">
                        <h1 className="catalog__head">Коллекции</h1>
                        <p className="catalog__text">на <strong>{convertTitleCategory(category, 'eng')}</strong></p>
                    </div>
                    <div className="catalog__bottom">
                    {
                        filterCollections.map(collection => (
                            <Collection
                                key={collection.id}
                                collection={collection}
                                model={collection.model}
                                models={models}
                                category={category}
                                categorys={categorys}
                                countrys={countrys} />
                        ))
                    } 
                    </div>
                </section>
                :
                <Route render={() => (
                    <div className="container-wrap content-height">
                        <h2>Извините, но такой категории в нашем каталоге не существует или же данная категория пуста!</h2>
                    </div>
                )} />
            }
        </React.Fragment>
    );
}

CollectionWrap.propTypes = {
    // collections: PropTypes.array.isRequired,
    // categorys: PropTypes.array.isRequired,
    // countrys: PropTypes.array.isRequired,
    // models: PropTypes.array.isRequired,
    // category: PropTypes.string.isRequired
};