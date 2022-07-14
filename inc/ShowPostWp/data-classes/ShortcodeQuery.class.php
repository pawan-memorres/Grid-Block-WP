<?php
namespace Shortcode\Data\Model;


class ShortcodeQuery {
    private string $post_type;
    private int $posts_per_page;
    private string $category_name;
    private string $taxonomy;
    private string $order;
    private string $category_filter;
    private int $page_number;
    private string $layout;
    private array $terms;

    //------------Set Atttributes---------------
    function setPostType( string $type ) {
        $this -> post_type = $type;
        echo "<script>console.log('post type set');</script>";
    }

    function setPostPerPage( int $ppp ) {
        $this -> posts_per_page = $ppp;
        echo "<script>console.log('post setPostPerPage set');</script>";
    }
    function setCategoryName( string $category_name ) {
        $this -> category_name = $category_name;
        echo "<script>console.log('post setCategoryName set');</script>";
    }

    function setTaxonomy( string $taxonomy) {
        $this -> taxonomy = $taxonomy;
        echo "<script>console.log('post setTaxonomy set');</script>";
    }

    function setOrder( string $order) {
        $this -> order = $order;
        echo "<script>console.log('post setOrder set');</script>";
    }

    function setCategoryFilter( string $set) {
        $this -> category_filter = $set;
        echo "<script>console.log('post setCategoryFilter set');</script>";
    }

    function setPageNumber( int $page_no ) {
        $this -> page_number = $page_no;
        echo "<script>console.log('post setPageNumber set');</script>";
    }

    function setLayout( string $layout ) {
        $this -> layout = $layout;
        echo "<script>console.log('post setLayout set');</script>";
    }
    



    //-------------End of Set Attributes---------------


    //--------------Get Attributes--------------------
    function getPostType() {
        echo "<script>console.log('GET getPostType');</script>";
        return $this -> post_type;
        

    }

    function getPostPerPage() {
        echo "<script>console.log('GET getPostPerPage');</script>";
        return $this -> posts_per_page;

    }

    function getCategoryName() {
        echo "<script>console.log('GET getCategoryName');</script>";
        return $this -> category_name;

    }

    function getTaxonomy() {
        echo "<script>console.log('GET getTaxonomy');</script>";
        return $this -> taxonomy;

    }

    function getOrder() {
        echo "<script>console.log('GET getOrder');</script>";
        return $this -> order;

    }

    function getCategoryFilter() {
        echo "<script>console.log('GET getCategoryFilter');</script>";
        return $this -> category_filter;

    }

    function getPageNumber() {
        echo "<script>console.log('GET getPageNumber');</script>";
        return $this -> page_number;
    }

    function getLayout() {
        echo "<script>console.log('GET getLayout');</script>";
        return $this -> layout;
    }

    function getTerms() {
        $terms = get_terms( array(
            'taxonomy' => $this -> getTaxonomy(),
            'parent' => 0,
        ));
        return $terms;
    }

    //----------------End of Get Attributes----------------


    //Return WP_Query object
    function fulfill( Array $params) {

        $args = $params;

        $query = new \WP_Query( $args );
        return $query;

    }
}