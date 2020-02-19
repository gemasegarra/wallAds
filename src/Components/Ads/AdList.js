import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';


import { AdCard, AdContent, CardTitle, Price, Picture, Button, NoAds, StyledLink } from '../StyledComponents/Ads';
import Header from '../Layout/Header';
import GoUpButton from '../UI/BackToTopButton';

class AdList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ads: []
    }
  }
    componentDidMount() {
      axios.get('http://34.89.93.186:8080/apiv1/anuncios', {
        withCredentials: true,
      })
        .then(res => {
          console.log(res.data.results);
          this.setState({
            ads: res.data.results
          })
        })
    }
    render() {

      const { ads } = this.state;
      const allAds = ads.length ? (ads.map(ad => {
        return (
          <AdCard key={ad._id}>
            <AdContent>
              <CardTitle>{ad.name}</CardTitle>
              <div>Want to {ad.type}</div>
              <Price>Price: {ad.price}€</Price>
              <Picture alt='product photo' src={ad.photo}></Picture>
              <StyledLink to={`/addetail/${ad._id}`}>
                <Button>More info</Button></StyledLink>
              <StyledLink to={`/editad/${ad._id}`}>
                <Button>Edit ad</Button></StyledLink>
            </AdContent>
          </AdCard>
        )
      })) : (<NoAds>You need to <Link to='/SignIn'> sign in</Link> to see our ads!</NoAds>)
      return (

        <>
          <Header></Header>
          {allAds}
          <GoUpButton></GoUpButton>
        </>
      )
    }
  }

  export default AdList;
