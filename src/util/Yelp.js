import React from 'react';

const apiKey = '36W6k-D3RuVIJKv5_MEXuwRd06JROCYR3MMhAD5mRsG9OAFi0ROLxrLwD-_abspWGvmqWWKXaWJU4Q6X2aAc1eCfqjmgHEq2CFGwpHVBHd8-Ai7N0rmVsaRlE4_rWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
          return response.json();
      }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
        })
        );
      }
    })
  }
};

export default Yelp;
