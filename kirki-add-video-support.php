<?php
/*
Plugin Name: Kirki add video support
Description: Adds a video support to kirki background overlay
Version: 1.0.2
*/

add_action( 'wp_enqueue_scripts', function(){
    wp_enqueue_script( 'kirki-video-support', plugin_dir_url(__FILE__) . 'kirki-video-support.js', array('jquery'), time(), true);
    wp_enqueue_style('kirki-video-support', plugin_dir_url(__FILE__) . 'kirki-video-support.css');
});
