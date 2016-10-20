
angular.module('app.controllers', [])

.controller('reservarCtrl', ['$scope', '$stateParams',// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$scope.today= new Date();
$scope.today.setDate($scope.today.getDate($scope.today));
$scope.weekFirst= new Date();
$scope.weekLast= new Date();
$scope.canTime= false;
$scope.setTimeBol= function(){
  canTime=true;
}
if($scope.today.getDay()<5&&$scope.today.getHours()<=16)
  $scope.weekFirst.setTime($scope.today.getTime()+(1-$scope.today.getDay())*86400000);
else
  $scope.weekFirst.setTime($scope.today.getTime()+(8-$scope.today.getDay())*86400000);

 $scope.weekFirst.setHours(7);
 $scope.weekFirst.setMinutes(30);
 $scope.weekFirst.setSeconds(0);
 $scope.weekLast.setTime($scope.weekFirst.getTime()+(4*86400000));
 $scope.timeLeft=($scope.weekFirst.getTime()-$scope.today.getTime())/1000;

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
