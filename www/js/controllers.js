angular.module('app.controllers', [])

.controller('reservarCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.dclass = ["button-stable button-outline","button-stable button-outline","button-stable button-outline","button-stable button-outline","button-stable button-outline"];
    $scope.selectDay = function(i){
      if ($scope.dclass[i] === "button-stable button-outline")
        $scope.dclass[i] = "button-positive";
      else
        $scope.dclass[i] = "button-stable button-outline";
    };

}])

.controller('pendentesCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cardPioCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('sobreCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('envioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
