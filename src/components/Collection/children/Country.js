import React  from 'react';
import Lazyload from 'react-lazyload';
import PropType from 'prop-types';

export default function Country(props){
    return(
        <React.Fragment>
            <div className="country-line">
                <Lazyload height={200} once>
                    <img src={props.country.img} alt={props.country.name} />
                </Lazyload>
                <span>{props.country.name}</span>
            </div>
        </React.Fragment>
    );
}

Country.propTypes = {
    country: PropType.object.isRequired
};