angular.module('app').directive('customModal', function () {
    return {
        restrict: "E",
        templateUrl: "customModal.html",
        transclude: true,
        replace: true,
        scope: {
            okText: "@",
            cancelText: "@",
            header: "=",
            show: "=",
            oncancel: "&",
            onok: "&onsubmit",
        },
        controller: function ($scope, $element) {
            $scope.crossClick = function() {
                $scope.show = false;
            };
            
            $scope.cancelClick = function() {
                $scope.oncancel();
                $scope.show = false;
            };
            
            $scope.okClick = function() {
                $scope.onok();
                $scope.show = false;
            }
        }
    };
});