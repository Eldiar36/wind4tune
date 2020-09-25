$('.burger-menu_button').on('click',function () {
    $('.burger-menu').toggleClass('burger-menu_active')
    $('.burger-menu_nav').toggleClass('burger-menu_active')
})
$('.burger-menu_link').on('click',function () {
    $('.burger-menu').removeClass('burger-menu_active')
    $('.burger-menu_nav').removeClass('burger-menu_active')
})
$(document).ready(function () {
    setTimeout(function() {
        if ($('#popup').length) {
            $.magnificPopup.open({
                items: {
                    src: '#popup'
                },
                type: 'inline'
            });
        }
    }, 5000);
});
$(document).ready( function() {
    $("#fl_inp").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#fl_nm").html(filename);
    });
});
