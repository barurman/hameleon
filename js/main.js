$(document).ready(function() {
    console.log("Dom is ready");

    // var
    var dop_menu_lvl_1 = $('.dop-lvl-1'),
        dop_menu_link = $('.dop-link'),
        close_link = $('.exit_link');

    // function

    if (dop_menu_lvl_1.is('visible') === false) {
        dop_menu_link.mouseover(function() {
            dop_menu_lvl_1.removeClass('slideOutDown animated');
            dop_menu_lvl_1.addClass('block slideInUp animated ');
        });
    } 

    close_link.click(function() {

        if (dop_menu_lvl_1.hasClass('block') === true) {
            dop_menu_lvl_1.removeClass('slideOutDown animated');
        }

        dop_menu_lvl_1.removeClass('slideInUp');
        dop_menu_lvl_1.addClass('slideOutDown animated');

    });
});
