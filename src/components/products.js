// src/components/CategoriesWithProducts.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CATEGORIES_WITH_PRODUCTS = gql`
  {
    categories {
      name
      products {
        id
        name
        description
        price
        stock
        state
      }
    }
  }
`;

const CategoriesWithProducts = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES_WITH_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Categories with Products</h2>
      {data.categories.map((category) => (
        <div key={category.name}>
          <h3>{category.name}</h3>
          <ul>
            {category.products.map((product) => (
              <li key={product.id}>
                <h4>{product.name}</h4>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>State: {product.state}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoriesWithProducts;
