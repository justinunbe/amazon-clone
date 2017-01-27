angular.module("app").directive("sliderDirective", function() {
    return {
        restrict: "EA",
        templateUrl: "slick.html",
        link: function(scope, element, attribute) {
            $(document).ready(function() {
                $('.single-item').slick({
                    infinite: false
                });
            });
        }
    };




});
