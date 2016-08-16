angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.reservar', {
    url: '/reservar',
    views: {
      'tab1': {
        templateUrl: 'templates/reservar.html',
        controller: 'reservarCtrl'
      }
    }
  })

  .state('tabsController.pendentes', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/pendentes.html',
        controller: 'pendentesCtrl'
      }
    }
  })

  .state('tabsController.cardPio', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cardPio.html',
        controller: 'cardPioCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.sobre', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/sobre.html',
        controller: 'sobreCtrl'
      }
    }
  })

  .state('tabsController.envio', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/envio.html',
        controller: 'envioCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/reservar')

  

});