import styled from 'styled-components';

export const AdCard = styled.div`
  margin: 1rem 6rem;
`

export const AdContent = styled.div`
  border: 1px solid #8e3b56		;
  padding: 1rem;
  background: #F6F6F6		
`

export const CardTitle = styled.h1`
  font-size: 1.7rem;
  color: #427e8e;
`

export const Description = styled.p`
`

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
