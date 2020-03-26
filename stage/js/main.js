$(function (){
    'use strict';
    // Sidebar & Content bar Toggle
    $('.toggle-sidebar').on('click', function (){
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });
});