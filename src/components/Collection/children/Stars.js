import React, { Component } from 'react';
import Svg from '../../Svg';

export default class Stars extends Component{
    constructor(props){
        super(props);
        this.stars = [];
    }

    componentWillMount(){
        for(let i = 1; i <= 5; i++){
            const dopClassName = this.props.value >= i ? 'star-yellow' : '';
            this.stars.push(<Svg key={i} icon='star' dopClassName={dopClassName} />);
        }
    }

    render(){
        return(
            <div className="stars-line">
                {this.stars.map((star, index) => (
                    star
                ))}
            </div>
        );
    }
}