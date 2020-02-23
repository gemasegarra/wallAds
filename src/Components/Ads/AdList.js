import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';


import { Grid, AdCard, AdContent, CardTitle, Price, Picture, Button, NoAds, StyledLink } from '../StyledComponents/Ads';
import Header from '../Layout/Header';
import SearchBar from './FilterBar';
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
            <Picture alt='product photo' src={ad.photo}></Picture>
              <CardTitle>{ad.name}</CardTitle>
              <div>Want to {ad.type}</div>
              <Price>{ad.price}€</Price>
              <StyledLink to={`/addetail/${ad._id}`}>
                <Button>Details</Button></StyledLink>
              <StyledLink to={`/editad/${ad._id}`}>
                <Button>Edit</Button></StyledLink>
            </AdContent>
          </AdCard>
        )
      })) : (<NoAds>You need to <Link to='/SignIn'> sign in</Link> to see our ads!</NoAds>)
      return (

        <>
          <Header></Header>
          <SearchBar></SearchBar>
          <Grid>
          {allAds}
          </Grid>
          <GoUpButton></GoUpButton>
        </>
      )
    }
  }

  export default AdList;
