import React from 'react';

import '../../component-styles/clothing-site-styles/homepage/_menu-item.scss';

const MenuItem = ({title, imageUrl}) => (
    <div className='homepage-menu-item'>
        <div 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            class="homepage-menu-item-bg" 
        />
        <div className='homepage-menu-item-content'>
            <div className='homepage-menu-item-content-title'>
                {title}
            </div>
            <div className='homepage-menu-item-content-subtitle'>
                SHOP NOW
            </div>
        </div>
    </div>
);
export default MenuItem;