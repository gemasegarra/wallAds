import React, { Component } from 'react';

import axios from 'axios';

class AdList extends Component {
  state = {
    ads: [ ]
  }
  componentDidMount() {
    axios.get('http://34.89.93.186:8080/apiv1/anuncios')
    .then(res => {
      console.log(res);
      this.setState({
        posts: res.data
      })
    })
  } // not working yet. throws error 500 
  render() {

    const { ads } = this.state;
    const allAds = ads.length ? (ads.map(ad => {
      return (
        <div className='ad card' key={ad._id}>
          <div className='ad content'>
            <span className='card-title'>{ad.name}</span>
            <p className='description'>{ad.description}</p>
          </div>
        </div>
      )
    })) : (<div>No ads yet</div>)
    return (
      
      <div>
        {allAds}
      </div>
    )
  }
}

export default AdList;
