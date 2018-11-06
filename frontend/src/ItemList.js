import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const Container = styled('div')`
  background-color: white;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0 1rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const ItemList = ({ items }) => (
  <section>
    {items.map(({ id, title, url, owner }, i) => (
      <Container key={i}>
        <Link to={`/item/${id}`}>
          {title} - ({owner})
        </Link>
      </Container>
    ))}
  </section>
);

export default ItemList;
