/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CategoryFilter.js":
/*!*******************************!*\
  !*** ./src/CategoryFilter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class CategoryFilter extends React.Component {
  componentDidMount() {}

  render() {
    const {
      category_filter
    } = this.props.attributes;

    const setCategoryFilter = category_filter => {
      this.props.setAttributes({
        category_filter
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Category Filter"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: "Select Category Filter",
      value: category_filter,
      options: [{
        label: 'Yes',
        value: 'yes'
      }, {
        label: 'No',
        value: 'no'
      }],
      onChange: setCategoryFilter,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (CategoryFilter);

/***/ }),

/***/ "./src/NumberOfPosts.js":
/*!******************************!*\
  !*** ./src/NumberOfPosts.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class NumberOfPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      posts_per_page
    } = this.props.attributes;

    const setNumberOfPosts = posts_per_page => {
      this.props.setAttributes({
        posts_per_page
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Number of posts"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalNumberControl"], {
      isShiftStepEnabled: true,
      onChange: setNumberOfPosts,
      shiftStep: 1,
      value: posts_per_page
    })));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (NumberOfPosts);

/***/ }),

/***/ "./src/PostCategory.js":
/*!*****************************!*\
  !*** ./src/PostCategory.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class PostCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorySelection: [{
        label: 'Select Category',
        value: 0
      }]
    };
  }

  componentDidMount() {
    fetch("http://localhost:83/wp-json/wp/v2/categories").then(res => res.json()).then(json => {
      const categorySelection = Object.keys(json).map(key => ({
        label: json[key].name,
        value: json[key].slug
      }));
      console.log(categorySelection);
      this.setState({
        categorySelection
      });
    });
  }

  render() {
    const {
      categorySelection
    } = this.state;
    const {
      category_name
    } = this.props.attributes;

    const setCategory = category_name => {
      this.props.setAttributes({
        category_name
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Category"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: "Select Category",
      value: category_name,
      options: categorySelection,
      onChange: setCategory,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (PostCategory);

/***/ }),

/***/ "./src/PostLayout.js":
/*!***************************!*\
  !*** ./src/PostLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class PostLayout extends React.Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         postLayoutSelection : "Single",
  //       }
  // };
  componentDidMount() {}

  render() {
    //const { postLayoutSelection } = this.state;
    const {
      layout
    } = this.props.attributes;

    const setPostLayout = layout => {
      this.props.setAttributes({
        layout
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Post Layout"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: "Select Post Layout",
      value: layout,
      options: [{
        label: 'Single',
        value: 'Single'
      }, {
        label: '2-Grid',
        value: 'two-post-layout'
      }, {
        label: '3-Grid',
        value: 'three-post-layout'
      }, {
        label: 'Masonry Grid',
        value: 'masonry-layout'
      }],
      onChange: setPostLayout,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (PostLayout);

/***/ }),

/***/ "./src/PostTypeSelect.js":
/*!*******************************!*\
  !*** ./src/PostTypeSelect.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class PostTypeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postSelection: [{
        label: 'Select post',
        value: 0
      }],
      value: 0
    };
  }

  componentDidMount() {
    fetch("/wp-json/wp/v2/types").then(res => res.json()).then(json => {
      const postSelection = Object.keys(json).map(key => ({
        label: json[key].name,
        value: json[key].slug
      }));
      console.log(postSelection);
      this.setState({
        postSelection
      });
    });
  }

  render() {
    const {
      postSelection,
      value
    } = this.state;
    const {
      post_type
    } = this.props.attributes;

    const setPostType = post_type => {
      this.props.setAttributes({
        post_type
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Post Type"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: "Select Post Type",
      value: post_type,
      options: postSelection,
      onChange: setPostType,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (PostTypeSelect);

/***/ }),

/***/ "./src/SelectTaxonomy.js":
/*!*******************************!*\
  !*** ./src/SelectTaxonomy.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class SelectTaxonomy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taxonomySelection: [{
        label: 'Select Category',
        value: 0
      }]
    };
  }

  componentDidMount() {
    fetch("http://localhost:83/wp-json/wp/v2/taxonomies").then(res => res.json()).then(json => {
      const taxonomySelection = Object.keys(json).map(key => ({
        label: json[key].name,
        value: json[key].slug
      }));
      console.log(taxonomySelection);
      this.setState({
        taxonomySelection
      });
    });
  }

  render() {
    const {
      taxonomySelection
    } = this.state;
    const {
      taxonomy
    } = this.props.attributes;

    const setTaxonomy = taxonomy => {
      this.props.setAttributes({
        taxonomy
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Taxomony"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: "Select Taxomony",
      value: taxonomy,
      options: taxonomySelection,
      onChange: setTaxonomy,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (SelectTaxonomy);

/***/ }),

/***/ "./src/SortSelect.js":
/*!***************************!*\
  !*** ./src/SortSelect.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class SortSelect extends React.Component {
  componentDidMount() {}

  render() {
    const {
      order
    } = this.props.attributes;

    const setSortSelect = order => {
      this.props.setAttributes({
        order
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Order"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: "Select Order",
      value: order,
      options: [{
        label: 'Ascending',
        value: 'asc'
      }, {
        label: 'Descending',
        value: 'desc'
      }],
      onChange: setSortSelect,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (SortSelect);

/***/ }),

/***/ "./src/assets/wpgl-logo.png":
/*!**********************************!*\
  !*** ./src/assets/wpgl-logo.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/wpgl-logo.511582df.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _assets_wpgl_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/wpgl-logo.png */ "./src/assets/wpgl-logo.png");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostTypeSelect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostTypeSelect.js */ "./src/PostTypeSelect.js");
/* harmony import */ var _NumberOfPosts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NumberOfPosts.js */ "./src/NumberOfPosts.js");
/* harmony import */ var _PostLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostLayout.js */ "./src/PostLayout.js");
/* harmony import */ var _PostCategory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCategory.js */ "./src/PostCategory.js");
/* harmony import */ var _CategoryFilter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CategoryFilter.js */ "./src/CategoryFilter.js");
/* harmony import */ var _SelectTaxonomy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SelectTaxonomy.js */ "./src/SelectTaxonomy.js");
/* harmony import */ var _SortSelect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SortSelect.js */ "./src/SortSelect.js");












const {
  RichText,
  MediaUpload,
  PlainText
} = wp.editor;
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
    posts_per_page: {
      type: 'integer',
      default: 1
    },
    layout: {
      type: "string",
      default: 'Single'
    },
    category_filter: {
      type: "string",
      default: 'no'
    },
    order: {
      type: "string",
      default: 'asc'
    },
    taxonomy: {
      type: 'string',
      default: 'uncategorized'
    }
  },
  edit: EditComponent,
  save: function () {
    return null;
  }
});

function EditComponent(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_PostTypeSelect_js__WEBPACK_IMPORTED_MODULE_5__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_NumberOfPosts_js__WEBPACK_IMPORTED_MODULE_6__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_PostLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_PostCategory_js__WEBPACK_IMPORTED_MODULE_8__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SelectTaxonomy_js__WEBPACK_IMPORTED_MODULE_10__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_CategoryFilter_js__WEBPACK_IMPORTED_MODULE_9__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SortSelect_js__WEBPACK_IMPORTED_MODULE_11__["default"], props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "WPGL__Container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: ""
  }, "WPGL POSTS"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: ""
  }, "Post Type: ", props.attributes.post_type, "      "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: ""
  }, "Number of Post Per Page:", props.attributes.posts_per_page, " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: ""
  }, "Post Layout:  ", props.attributes.layout, "    "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: ""
  }, "Category: ", props.attributes.category_name, "      "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: ""
  }, "Taxomony: ", props.attributes.taxonomy, "      "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: ""
  }, "Show Filter: ", props.attributes.category_filter, "      "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: ""
  }, "Order: ", props.attributes.order, "      ")));
}

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map