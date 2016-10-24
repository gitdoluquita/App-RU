
angular.module('app.controllers', [])

.controller('reservarCtrl', ['$scope', '$stateParams','$http',// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
$scope.today= new Date();
$scope.today.setDate($scope.today.getDate($scope.today));
$scope.weekFirst= new Date();
$scope.weekLast= new Date();
var DAY_IN_MILIS= 86400000;

if($scope.today.getDay()<4||($scope.today.getDay()===4&&$scope.today.getHours()<=16))
  $scope.weekFirst.setTime($scope.today.getTime()+(8-$scope.today.getDay())*DAY_IN_MILIS);
else
  $scope.weekFirst.setTime($scope.today.getTime()+(15-$scope.today.getDay())*DAY_IN_MILIS);

 $scope.weekFirst.setHours(7);
 $scope.weekFirst.setMinutes(30);
 $scope.weekFirst.setSeconds(0);
 $scope.weekLast.setTime($scope.weekFirst.getTime()+(4*DAY_IN_MILIS));
 $scope.timeLeft=($scope.weekFirst.getTime()-$scope.today.getTime()-(7*DAY_IN_MILIS))/1000;
 //$scope.timeLeft=30;

  $scope.dclass = ["button-stable button-outline","button-stable button-outline",
                    "button-stable button-outline","button-stable button-outline",
                    "button-stable button-outline"];
    $scope.selectDay = function(i){
      if ($scope.dclass[i] === "button-stable button-outline")
        $scope.dclass[i] = "button-positive";
      else
        $scope.dclass[i] = "button-stable button-outline";
    };

    $scope.doLogin=function(){
      console.log("CPF: "+$scope.requiredCpf + "Nº do Cartão: "+$scope.numCartao);
      $http({
            method: 'POST',
            url: 'https://sistemas.fc.unesp.br/ru/reserva.confirmacao.action',
            headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Content-Length': '90'
            },
            data: 'tipoPeriodoReserva=SUBSIDIO'+
                  '&txt_dias=' + '04%2F11%2F2016' +
                  '&txt_cartao=' + $scope.numCartao +
                  '&txt_cpf=' + '456.020.068-85'+''//$scope.requiredCpf

      }).then(function mySucces(response) {
          console.log(response.data);
      }, function myError(response) {
          console.log("Deu ruim!")
          });
    }

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
