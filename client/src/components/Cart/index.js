import React from 'react';
import { Wrapper,Empty, Button, Image, Element, Checkout } from './Cart.styles';
import { Grid } from '@material-ui/core';

const Cart =({cart, removeFromCart, submitOrder, totalCost, setPromo}) => (
    <Wrapper>
        <h1>Cart</h1>
        {cart.length !== 0 ? (
        <Grid container className='products'>
            <Grid item xs={12} sm={12} md={8} lg={8}>
            {cart.map((product) => (
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button onClick={() =>  removeFromCart(product)}>Remove</Button>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Image src={product.image} alt=''/>
                    </Grid>
                    <Grid  item xs={8} sm={8} md={8} lg={8}>
                        <div key={Math.random()}>
                        <Element>
                            <h3>{product.product_name}</h3>
                            <p>R{product.cost}</p>
                        </Element>
                        </div>
                    </Grid>               
                </Grid>
            ))
            }
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Checkout>
                    <h1>Checkout</h1>
                    <p>Number of Items: {cart.length}</p>
                    <p>Cost: R{totalCost.toFixed(2)}</p>
                    <p>Discount:</p>
                    <input type='text' placeholder='Enter Promo Code' onChange={
                        (e) => {
                            setPromo(e.target.value);
                        }}>
                    </input>
                    <button onClick={submitOrder}>Checkout</button>
                </Checkout>
            </Grid>
        </Grid>)
        :
        (
            <Grid container className='products'>
                <Grid item  xs={12} md={12} lg={12} sm={12} xl={12}>
                <Empty>You have an empty Cart</Empty>
                </Grid>
            </Grid>)
        }
    </Wrapper>
)

export default Cart;