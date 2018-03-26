import React from 'react';
import PropTypes from 'prop-types';

function Price(props){
    return(
        <div className="price-line">
            <div className="price-line__part-price"><span>Рассрочка на 3 платежа</span> <strong>{(props.price/3).toFixed(2)} р. в мес</strong></div>
            <div className="price-line__full-price"><span>Полная стоимость</span> <p>{props.price} р.</p></div>
        </div>
    );
}

Price.propTypes = {
    options: PropTypes.object,
};

export default Price;