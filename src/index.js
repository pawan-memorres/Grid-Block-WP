import "./index.scss"
import logo from './assets/wpgl-logo.png';
import {InspectorControls, useBlockProps} from '@wordpress/block-editor';
import {Panel, PanelBody, Dropdown, Button, SelectControl} from '@wordpress/components';
import PostTypeSelect from './PostTypeSelect.js';
import NumberOfPosts from './NumberOfPosts.js';
import PostLayout from './PostLayout.js';
import PostCategory from './PostCategory.js';
import CategoryFilter from './CategoryFilter.js';
import SelectTaxonomy from './SelectTaxonomy.js';
import SortSelect from './SortSelect.js';


const { RichText, MediaUpload, PlainText } = wp.editor;




wp.blocks.registerBlockType("gutenberg/custom-block", {
  title: "WPGL Grid Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    post_type: {
      type: 'string',
      default: 'posts'
    },
    category_name: {
      type: 'string',
      default: 'uncategorized'
    },
    posts_per_page:
    { type: 'integer',
     default: 1
    },
    layout:{
      type:"string",
      default: 'Single'
    },
    category_filter:{
      type:"string",
      default: 'no'
    },
    order:{
      type:"string",
      default: 'asc'
    },
    taxonomy:{
      type: 'string',
      default: 'uncategorized'
    }
    
  },
  edit: EditComponent,
  save: function () {
    return null
  }
})

function EditComponent(props) {
  
  
  return (
    <>
    
    <InspectorControls>
      <Panel>
        
        <PostTypeSelect {...props} />
        <NumberOfPosts {...props} />
        <PostLayout {...props} />
        <PostCategory {...props}/>
        <SelectTaxonomy {...props}/>
        <CategoryFilter {...props}/>
        <SortSelect {...props}/>
      
      </Panel>
    </InspectorControls>
    <div className="WPGL__Container">
      <h1 className="">WPGL POSTS</h1>
      <h3 className="">Post Type: {props.attributes.post_type}      </h3>
      <h3 className="">Number of Post Per Page:{props.attributes.posts_per_page} </h3>
      <h3 className="">Post Layout:  {props.attributes.layout}    </h3>
      <h3 className="">Category: {props.attributes.category_name}      </h3>
      <h3 className="">Taxomony: {props.attributes.taxonomy}      </h3>
      <h3 className="">Show Filter: {props.attributes.category_filter}      </h3>
      <h3 className="">Order: {props.attributes.order}      </h3>
    </div>
    </>
  )
}

