<?php

/*
  Plugin Name: Custom Gutenberg Block Plugin
  Version: 1.0
  Author: Memoress Digital
  Author URI: https://memorres.com
  */
 use \Shortcode\Controller\ShowPost\ShowPostBlockController as ShowPostBlockController;
if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

// if(file_exists( dirname(__FILE__) . '/inc/shortcodes2/index.php')) {
//   require_once(dirname(__FILE__) . '/inc/shortcodes2/index.php');
// }
if(file_exists( dirname(__FILE__) . '/inc/ShowPostWp/index.php')) {
  require_once(dirname(__FILE__) . '/inc/ShowPostWp/index.php');
}
if(file_exists( dirname(__FILE__) . '/inc/ShowPostWp/shortcode.php')) {
  require_once(dirname(__FILE__) . '/inc/ShowPostWp/shortcode.php');
}

if(file_exists( dirname(__FILE__) . 'inc/ShowPostWp/controller-classes/ShowPostShortcodeController.class.php')) {
  require_once(dirname(__FILE__) . 'inc/ShowPostWp/controller-classes/ShowPostShortcodeController.class.php');
}
// if(file_exists( dirname(__FILE__) . '/inc/shortcodes2/js/enqueue-scripts.php')) {
//   require_once(dirname(__FILE__) . '/inc/shortcodes2/js/enqueue-scripts.php');
// }


class GridBlock {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('customGutenbergBlockScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('customGutenbergBlockStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_enqueue_script( 'custom-script', plugin_dir_url(__FILE__) . '/inc/ShowPostWp/js/load_more.js', array('jquery'), time(), true );
    wp_enqueue_script( 'images-loaded', plugin_dir_url(__FILE__) . '/inc/ShowPostWp/js/imagesloaded.pkgd.min.js', array(), time(), true);
    wp_enqueue_script( 'masnory-grid', plugin_dir_url(__FILE__) . '/inc/ShowPostWp/js/masonry.pkgd.min.js', array('images-loaded'), time(), true);
        $script_data_array = array(
        	  	'ajaxurl' => admin_url( 'admin-ajax.php' ),
        	 	'security' => wp_create_nonce( 'load_more_posts' ),
        	   );
           
    wp_localize_script( 'custom-script', 'products', $script_data_array );
           
    wp_enqueue_style( 'load_more_style', plugin_dir_url(__FILE__) . '/inc/ShowPostWp/css/show-post.css', false, rand(111, 9999));
           
            register_block_type('gutenberg/custom-block', array(
              'render_callback' => array($this, 'renderCallback'),
              'editor_script' => 'customGutenbergBlockScript',
              'editor_style' => 'customGutenbergBlockStyle'
    ));
  }

  

  function renderCallback($attributes) {
    

    ob_start();
    //var_dump($attributes);
        //$attr = shortcode_atts($attributes, $atts);

          // $logic = new InitShortcode();
          //   //var_dump($attributes);
          //  $logic -> load_more_logic($attributes);
            
          $gridInstance = new ShowPostBlockController();
          $gridInstance->showPostBlockCallback($attributes);


  

// if(!function_exists("init_shortcode")) {
//   function init_show_post_shortcode( ) {
    
    
//     return $gridInstance;
//   }
// }

// if(!function_exists("run")) {
//   function run() {
//     return init_show_post_shortcode();
//   }
// }

//run();

return ob_get_clean();

  }

}

$GridBlock = new GridBlock();