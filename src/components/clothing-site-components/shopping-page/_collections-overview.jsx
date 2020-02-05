import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from './_collections-preview';

import {selectCollectionsForPreview} from '../../../redux/shop/shop-selectors';

import '../../component-styles/clothing-site-styles/shopping-page/_collection-overview.scss'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);