$(document).ready(function() {
    var yandexMapInit = function() {
        ymaps.ready(init);
        var myMap,
            myPlacemark;
        function init(){
            myMap = new ymaps.Map("map", {
                center: [55.7163911,37.4314895],
                zoom: 17,
                controls: []
            });

            myPlacemark = new ymaps.Placemark([55.7163911,37.4314895], {
                hintContent: 'Москва, ул. Петра Алексеева,  д.12., стр. 2, оф. 104',
                balloonContent: 'Москва, ул. Петра Алексеева,  д.12., стр. 2, оф. 104'
            });

            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
    };

    yandexMapInit();

    $(".fancybox").fancybox();

    $(".menu a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500
        });
        return false;
    });

});
