<script>
    jQuery(function($) {
        $(function() {
            $(window).on("load resize scroll", function() {
                var windowTop = $(window).scrollTop();
                if ($(window).scrollTop() > 20) {
                    $("#dc-header").addClass("persist");
                }
                if ($(window).scrollTop() <= 20) {
                    $("#dc-header").removeClass("persist");
                }
            })
            // mobile nav initialization, previously slicknav.io
            $('#mobile-menu').dc_mobile({
                duration: 200,
                easingOpen: 'swing',
                easingClose: 'swing',
                closedSymbol: "",
                openedSymbol: "",
                prependTo:'#header-nav'
            });
            $("#mobile-menu").remove();
            $('.dc_mobile_btn').click(function(){
                $('.dc_mobile_btn').parent().toggleClass('opened', 200, 'swing');
                $("#dc-header").toggleClass("mobile-open");
            })
        })
    })
</script>