import {Offer} from "../Offer/Offer";

export const OffersList = function ({offers, setOffers}) {

    return(
      <>
          {offers.map(offer => <Offer key={offer.id} offer={offer} />)}
      </>
    );
}