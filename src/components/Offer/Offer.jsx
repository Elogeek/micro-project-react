import "./Offer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';

export const Offer = function ({offer}) {

    return (
        <div className="containerOffer">
            <div className="offer_top">
                <p>{offer.name}</p>
            </div>
            <div className="offer_middle">
                <p className="size_100"><sup>$</sup>{offer.price}<sup>99</sup></p>
                <p className="monthly">monthly</p>
                <p className="grey">Billed monthly or ${offer.priceYear} per year via links in chat</p>
            </div>
            <div className="offer_bottom">
                <p><FontAwesomeIcon icon={faCheck} className="green" />Up to <span className="pink">{offer.orders}</span> orders per month</p>
                <p><FontAwesomeIcon icon={faCheck} className="green" />Orders notifications</p>
                <p><FontAwesomeIcon icon={faCheck} className="green" />Statistics data</p>
                <p><FontAwesomeIcon icon={faCheck} className="green" />Daily reports</p>
            </div>
        </div>
    );
}