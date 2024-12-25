import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/populars/popular';
import Offers from '../Components/Offers/offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

export const Shop = () => {
  return (
    <div>
      <Hero />
     <Popular />
     <Offers />
     <NewCollections />
     
     <NewsLetter />
    </div>
  );
}
export default Shop;