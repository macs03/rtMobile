angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.search', {
    url: '/',
    views: {
      'side-menu21': {
        templateUrl: 'templates/search.html',
        controller: 'SearchController',
        controllerAs: 'search'
      }
    }
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      }
    }
  })

  .state('menu.register', {
    url: '/signup',
    views: {
      'side-menu21': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/')

  

});