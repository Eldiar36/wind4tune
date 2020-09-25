
/*$('.white-popup-block').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});*/
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