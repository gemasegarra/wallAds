import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdCard = styled.div`
  margin: 1rem 5rem;   
`

export const AdContent = styled.div`
  border: 1px solid #8e3b56;
  padding: 1rem;
  background: #F6F6F6;
`

export const CardTitle = styled.h1`
  font-size: 1.8rem;
  color: #8e3b56;
`

export const Description = styled.p`
  font-size: 1.3rem;`

export const Price = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`

export const Picture = styled.img`
  max-height: 30%;
  max-width: 30%;
  margin: 0.5rem 0;
`

export const Button = styled.button`
  display: flex;
  align-items: flex-start;
  color: #db7093;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  margin: 0.5rem 0;
  border: 1px solid #db7093;
  border-radius: 3px;
  &:hover {
    background-color: #f8e5eb;
  }
`

export const NoAds = styled.div`
  margin: 1rem 6rem;
`
export const StyledLink = styled(Link)`
margin-right: auto;
margin-left: 6rem;
font-size: 2.5rem;
text-decoration: none;
color: #db7093;
`