
angular.module('app.controllers', [])

.controller('reservarCtrl', ['$scope', '$stateParams','$http',// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
$scope.today= new Date();
$scope.today.setDate($scope.today.getDate($scope.today));
$scope.weekFirst= new Date();
$scope.weekLast= new Date();
$scope.weekDays= [{},{},{},{},{}];
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
 for(i=0;i<5;i++){
   $scope.weekDays[i].date=new Date();
   $scope.weekDays[i].date.setTime($scope.weekFirst.getTime()+i*DAY_IN_MILIS);
   $scope.weekDays[i].dClass = "button-stable button-outline";
   $scope.weekDays[i].dStr = "";
 }
    $scope.selectDay = function(i){
      if ($scope.weekDays[i].dClass === "button-stable button-outline"){
                $scope.weekDays[i].dClass = "button-positive";
                $scope.weekDays[i].dStr=($scope.weekDays[i].date.getDate()<10?'&txt_dias=0':'&txt_dias=')
                                          +$scope.weekDays[i].date.getDate()+'%2F'+
                                        ($scope.weekDays[i].date.getMonth()+1)+'%2F'+
                                        $scope.weekDays[i].date.getFullYear();
               console.log($scope.weekDays[i].dStr);
              }
    else{
        $scope.weekDays[i].dClass = "button-stable button-outline";
        $scope.weekDays[i].dStr='';
    }
    };

    $scope.doLogin=function(){
      var txtCpf= $scope.requiredCpf.substr(0,3)+'.'+$scope.requiredCpf.substr(3,3)+
                  '.'+$scope.requiredCpf.substr(6,3)+'-'+$scope.requiredCpf.substr(9,2);
      console.log("CPF: "+txtCpf + "Nº do Cartão: "+$scope.numCartao);
      $http({
            method: 'POST',
            url: 'https://sistemas.fc.unesp.br/ru/reserva.confirmacao.action',
            headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Content-Length': '90'
            },
            data:   'tipoPeriodoReserva=SUBSIDIO'+
                     $scope.weekDays[0].dStr + $scope.weekDays[1].dStr +
                     $scope.weekDays[2].dStr + $scope.weekDays[3].dStr +
                     $scope.weekDays[4].dStr +
                    '&txt_cartao=' + $scope.numCartao +
                    '&txt_cpf=' + txtCpf

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
