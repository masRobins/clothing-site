  
import React from 'react';

import CollectionItem from './_collections-item.jsx';

import '../../component-styles/clothing-site-styles/shopping-page/_collection-preview.scss'

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;