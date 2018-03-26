import React from 'react';
import Review from './Review';
import Popup from '../Popup/';
import Form from '../Form/';
import "./style.css";

export default function ContainerReview(props){
    const { path } = props;
    const model = props.models.find(model => model.id === props.options.id);
    return(
        <div className="review-line">
            <div className="review-line__head">
                <h2 className="title-accent">Отзывы</h2>
                <div className="review-line__title">
                    <h3 className="review-line__discount">Оставьте свой отзыв с фотографией нам, и мы подарим вам <span>скидку 5%</span> на следующую покупку в нашем магазине!</h3>
                    <Popup link={<button className="btn">Оставить отзыв</button>} className="popup-review-send">
                        <Form type="review" inputs={['name','text']}>
                            <h3 className="title-accent">Оставить отзыв</h3>
                        </Form>
                    </Popup>
                </div>
            </div>
            <div className="review-grid">
                {
                    model.reviews.length > 0 ?
                    model.reviews.map(review => (
                        <Review key={review.id} review={review} path={path} />
                    ))
                    :
                    <div>Комментариев нет</div>
                }
            </div>
        </div>
    );
}