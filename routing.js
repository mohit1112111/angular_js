app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'landingPage.html',
            controller: 'landingController'
        })
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/category/:cat', {
            templateUrl: 'category.html',
            controller: 'CategoryController'
        }).when('/signup', {
            templateUrl: 'signup.html',
            controller: 'SignupController'
        })
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        })
      
        .otherwise({
            redirectTo: '/home'
        });
});
