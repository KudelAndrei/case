import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Svg from '../Svg';

export default function Menu({categorys, slideUp}){
     return(
        <nav className="nav">
            {
                categorys.map(category => (
                    <NavLink
                        key={category.id}
                        to={`/collections/${category.name_eng}`}
                        onClick={slideUp}
                        className="nav__link"
                        activeClassName="active"
                    >
                        <Svg icon={category.icon} />
                        <span className="nav__link-text">{category.name_ru}</span>
                    </NavLink>
                ))
            }
        </nav>
    );
}

Menu.propTypes = {
    categorys: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name_ru: PropTypes.string.isRequired,
        name_eng: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    })).isRequired,
};