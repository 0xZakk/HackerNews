import React from 'react';
import styled from 'react-emotion';

const Card = styled('section')`
  background-color: white;
  border-radius: 5px;
  padding: 1rem 1.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function Item({ data }) {
  console.log('here', data);
  return (
    <Card>
      <h2>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          {data.title}
        </a>
      </h2>
      <p>Owner: {data.owner}</p>
    </Card>
  );
}

Item.defaultProps = {
  data: {
    url: '',
    title: '',
    owner: ''
  }
};

export default Item;
