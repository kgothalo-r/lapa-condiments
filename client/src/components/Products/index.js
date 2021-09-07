import React from 'react';
import { Wrapper, Button, Element, Card } from './Products.styles';
import { Grid } from '@material-ui/core';

const Products = ({products, addToCart, totalCost}) => {

    const execute = (product) => {
      addToCart(product);
      totalCost(product.cost);
    }
    
    return (
    <Wrapper container md={12}>
      <h1>Latest Products</h1>
      <Grid container className='products'>
        {products.map((product) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={Math.random()}>
              <Card image={product.image}>
              <Element className='details'>
                <h3>{product.product_name}</h3>
                <h4>R{product.cost}</h4>
                <Button onClick={() => execute(product)}>Add to cart</Button>
              </Element>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>)
}

export default Products;