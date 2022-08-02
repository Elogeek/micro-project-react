import "./Home.css";
import {OffersList} from "../OffersList/OffersList";

export const Home = function ({offers, setOffers}) {

    return (
        <main className="Home">
            <h1>PRICING AND PLANS</h1>
            <p className="grey">Risk free, 30 days trial period, 30-day money back guarantee, no hidden fees</p>
            <div className="width_70">
                <OffersList offers={offers} setOffers={setOffers} />
            </div>
            <p id="contact" className="grey"><span className="blue">Contact us</span> if your online store operating more than 100 orders per month</p>
            <h1 className="pink">30-DAY FREE TRIAL</h1>
            <p className="grey">Try the product absolutely free for the first month. No risk. No hidden fees. After that
            you will get a payment link inside product chat in application.</p>
            <div className="margin_30">
                <a href="" id="buttonBlue">SIGN IN</a>
            </div>
        </main>
    );
}