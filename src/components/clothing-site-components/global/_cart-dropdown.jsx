import React from 'react';

import CustomButton from './_custom-button.jsx';

import '../../component-styles/clothing-site-styles/global/_cart-dropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;