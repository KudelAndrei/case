import React from 'react';
import Popup from '../Popup/';
import Stars from '../Collection/children/Stars';

export default function Review(props){
    const { review, path } = props;
    const imageUrl = require(`../../${path}/reviews/${review.image}`);
    return(
        <React.Fragment>
            <Popup link={
                <div  className="review-item">
                    <div className="review-item__img"><img src={imageUrl} alt="review" /></div>
                    <div className="review-item__content">
                        <h4 className="review-item__name">{review.name}</h4>
                        <div className="review-item__rating"><Stars value={review.rating} /></div>
                        <p className="review-item__text">{review.text}</p>
                    </div>
                </div>
            } className="popup-review" >
                <div className="popup-review__wrap">
                    <div className="popup-review__img">
                        <img src={imageUrl} alt={review.name} />
                    </div>
                    <div className="popup-review__content">
                        <h4 className="popup-review__name">{review.name}</h4>
                        <Stars value={review.rating} />
                        <p className="popup-review__text">{review.text}</p>
                    </div>
                </div>
            </Popup>

        </React.Fragment>
   );
}