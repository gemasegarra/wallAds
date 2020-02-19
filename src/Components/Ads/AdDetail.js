import React from 'react';
import axios from 'axios';
import { AdCard, AdContent, CardTitle, Price, Picture, Description, Button, StyledLink } from '../StyledComponents/Ads';
import Header from '../Layout/Header';
import GoUpButton from '../UI/BackToTopButton';


class AdDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: Number,
      description: '',
      tags: [],
      type: '',
      photo: ''
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${params.id}`, {
      withCredentials: true,
    })
      .then(res => {

        console.log(res.data.result);
        this.setState(
          res.data.result
        )
        console.log(this.state)
      })
  }

  render() {
    const { name, price, description, tags, type, photo, id } = this.state;

    return (
      <> 
      <Header></Header>
      <AdCard key={id}>
        <AdContent>
          <CardTitle>{name}</CardTitle>
          <div>Want to {type}</div>
          <Price>Price: {price}€</Price>
          <Description>Description: {description}</Description>
          <p>Tags: {tags}</p>
          <Picture alt='product photo' src={photo}></Picture>
          <StyledLink to='/adlist'>
<Button>Go back to ad list</Button></StyledLink>
        </AdContent>
      </AdCard>
      <GoUpButton></GoUpButton></>
    );
  }
}


export default AdDetail;
