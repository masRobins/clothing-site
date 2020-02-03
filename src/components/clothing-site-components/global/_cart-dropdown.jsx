import React from 'react';
import {connect} from 'react-redux';

import CustomButton from './_custom-button.jsx';
import CartItem from './_cart-item.jsx';
import {selectCartItems} from '../../../redux/cart/cart-selectors';

import '../../component-styles/clothing-site-styles/global/_cart-dropdown.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
        ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);
  
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);