angular.module('app.routes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('main', {
      url: '/main',
      abstract:true,
      templateUrl: 'templates/main.html'
    })


    .state('main.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl', //why is the resolve useful?
          //resolve allows us to provide our controller with data before it gets loaded. This saves you the burden of asynchronously making $http calls (and even service calls) inside your controller and promotes a separation of concerns. Added benefit of resolve, if I try to make a url request that doesn't exist from my current page, resolve will only change the view if the request url exists.
          resolve: {
            getPosts: ['LoadPostsFactory', function(LoadPostsFactory){
              return LoadPostsFactory.getPosts();
            }],
            //just checking here for the location to ensure the http request is going through
            // getLongLat: ['LoadPostsFactory', function(LoadPostsFactory) {
            //   return LoadPostsFactory.getLongLat();
            // }]
          }
        }
      }
    })


    .state('comments', {
      url: '/posts/{id}/comments', //{} is a route paramater (https://goo.gl/5cXZEu) that will be made available to our controller. Why: Since the posts page is about viewing the comments on a particular post, we need to use the id route parameter to grab the post and associated information.
      templateUrl: 'templates/comments.html',
      controller: 'commentsCtrl',
      resolve: { //singlePost gets resolved to a value. To access the resolved value, add single post to controller
        singlePost: ['$stateParams','LoadPostsFactory', function($stateParams, LoadPostsFactory){
          console.log('$stateParams.id', $stateParams.id); //grabbing stateparam from URL in comments view
          return LoadPostsFactory.getSinglePost($stateParams.id);
        }]
      }
    })

    .state('main.camera', {
      url: '/camera',
      views: {
        'camera-tab': {
          templateUrl: 'templates/camera.html',
          controller: 'cameraCtrl'
        }
      }
    })



    .state('main.map', {
      url: '/map',
      views: {
        'map-tab': {
          templateUrl: 'templates/map.html',
          controller: 'mapCtrl'
        }
      }
    })



    .state('splashPage', {
      url: '/splashPage',
      templateUrl: 'templates/splashPage.html',
      controller: 'splashPageCtrl'
    });




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/home');

}]);
