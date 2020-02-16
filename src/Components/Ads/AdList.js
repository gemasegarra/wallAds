import React, { Component } from 'react';

import axios from 'axios';


import { AdCard, AdContent, CardTitle, Price, Picture, Button, NoAds } from './StyledComponents';
class AdList extends Component {
  state = {
    ads: []
  }
  componentDidMount() {
    axios.get('http://34.89.93.186:8080/apiv1/anuncios', {
      withCredentials: true,
    })
      .then(res => {
        console.log(res);
        this.setState({
          ads: res.data
        })
      })
  } // not working yet. throws error 500 
  render() {

    const { ads } = this.state;
    const allAds = ads.length ? (ads.map(ad => {
      return (
        <AdCard key={ad._id}>
          <AdContent>
            <CardTitle>{ad.name}</CardTitle>
            <div>Want to {ad.type}</div>
            <Price>{ad.price}€</Price>
            <Picture alt='product photo' src={ad.photo}></Picture>
            <Button>More info</Button>
          </AdContent>
        </AdCard>
      )
    })) : (<NoAds>No ads yet</NoAds>)
    return (

      <div>
        {allAds}
      </div>
    )
  }
}

export default AdList;
