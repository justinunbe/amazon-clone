angular.module("app").directive("multiSliderDirective", function() {
    return {
        restrict: "EA",
        templateUrl: "multiSlick.html",
        link: function(scope, element, attribute) {
            $(document).ready(function() {
                $('.multiple-items').slick({
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 4
                });
            });
        }
    };




});
