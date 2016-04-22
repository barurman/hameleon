$(document).ready(function() {
    console.log("Dom is ready");

    // var
    var dop_menu_lvl_1 = $('.dop-lvl-1'),
        dop_menu_link = $('.dop-link'),
        close_link = $('.exit_link'),
        dop_tab_link = $(".tab-menu .col-4"),
        dop_tab = $(".dop-menu-tab"),
        dop_menu = $('.dop-wrapper');

    // function

    if (dop_menu_lvl_1.is('visible') === false) {
        dop_menu_link.mouseover(function() {
            dop_menu_lvl_1.removeClass('slideOutDown animated');
            dop_menu_lvl_1.addClass('block slideInUp animated');
        });
    }

    close_link.click(function() {

        if (dop_menu_lvl_1.hasClass('block') === true) {
            dop_menu_lvl_1.removeClass('slideOutDown animated');
        }


        dop_menu_lvl_1.removeClass('slideInUp');


        if (dop_menu.css('display') != "none") {
            dop_menu_lvl_1.addClass('slideOutDown animated');
        }

        dop_menu.css('display', 'block');
        dop_tab.removeClass('active');

    });


    // tab - switcher

    dop_tab_link.click(function() {
        dop_menu.css('display', 'none');
        dop_tab.removeClass('active');
        var id_link = $(this).attr("tab-data");
        $(id_link).toggleClass('active');
    });











});

// not ready
