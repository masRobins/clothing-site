import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../component-styles/clothing-site-styles/homepage/_menu-item.scss';

const MenuItem = ({title, imageUrl, history, linkUrl, match}) => (
    <div 
        className='homepage-menu-item'
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
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
export default withRouter(MenuItem);