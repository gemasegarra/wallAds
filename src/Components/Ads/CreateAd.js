import React, { Component } from 'react';
import axios from 'axios';


class CreateAd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      description: '',
      tags: [],
      type: '',
      photo: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('http://34.89.93.186:8080/apiv1/anuncios', this.state,
        {
          withCredentials: true,
        }).then(res => {
          console.log(res)
        })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    const { name, price, description, tags, type, photo } = this.state;

    return (

      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type='text' name='name' value={name} onChange={this.handleChange} placeholder='Name' />
          </div>
          <div>
            <input type='number' name='price' value={price} onChange={this.handleChange} placeholder='Price' />
          </div>
          <div>
            <input type='text' name='description' value={description} onChange={this.handleChange} placeholder='description' />
          </div>
          <div>
          <input type='text' name='type' value={type} onChange={this.handleChange} placeholder='buy or sell' />
          </div>
          <div>
            <input type='text' name='tags' value={tags} onChange={this.handleChange} placeholder='Tags' />
          </div>
          <div>
            <input type='text' name='photo' value={photo} onChange={this.handleChange} />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </>
    )
  }
}


export default CreateAd;
