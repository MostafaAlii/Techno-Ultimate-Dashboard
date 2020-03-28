$(function (){
    'use strict';
    // Nice Scroll Active
    $('html').niceScroll({
        cursorwidth: '8px',
        cursorborder:'1px solid',
        cursorborderradius: 0,
        railalign: 'left',
    });
    
    // Sidebar & Content bar Toggle
    $('.toggle-sidebar').on('click', function (){
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });

    // Toggle Submenu
    $(".toggle-submenu").on("click", function(){
        $(this).find(".fa-caret-left").toggleClass("down");
        $(this).next(".child-links").slideToggle();
    });
});
const mySet = new Set();
const myMap = new Map();