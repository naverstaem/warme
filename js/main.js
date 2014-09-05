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
                hintContent: 'Москва, ул. Западная, д. 6, стр. 19',
                balloonContent: 'Москва, ул. Западная, д. 6, стр. 19'
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
