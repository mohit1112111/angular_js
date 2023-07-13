var app = angular.module('app', ['ngRoute']);

app.controller('indexController', function ($scope) {

  $scope.isMenuOpen = false;
  $scope.isMenu = true;

  $scope.toggleMenu = function () {
    $scope.isMenuOpen = !$scope.isMenuOpen;
    $scope.isMenu = !$scope.isMenu;
  };
  $scope.currentYear = new Date().getFullYear();
});
app.controller('landingController',function($scope,$location){
  $scope.getSingup=function(){
    $location.path('/signup')
  }
  $scope.getLogin=function(){
    $location.path('/login')
  }
})

app.controller('SignupController', function ($scope, $http, $location) {
  $scope.signup = (user) => {

    $http.post('http://localhost:3000/users', user)
      .then((response) => {
        console.log("Registration is successfull")
        console.log(response)
        $location.path('/login');
      })
      .catch((error) => {
        console.error('Error in signing up:', error);
      });
  };
})

app.controller('LoginController', function ($scope, $http, $location) {
  $scope.login = (credentials) => {
    console.log(credentials);
    $http.get('http://localhost:3000/users')
      .then((response) => {
        console.log(response.data)
        var users = response.data;
        console.log(users)
        for (var user of users) {
          if (user.email === credentials.username && user.password === credentials.password) {
            console.log('Login successful');
            $location.path('/home');
            
          }
        }
        // console.log("nvalid credentials");
        
      });
      alert("Username or password is wrong please try again!")
      $location.path('/signup');
    };
});

app.controller('HomeController', function ($scope, NewsService) {

  $scope.headlines = [];

  NewsService.getTopHeadlines()
    .then((response) => {
      $scope.headlines = response.data.articles;
      // console.log($scope.headlines)
    })
    .catch((error) => {
      console.error('Error fetching headlines:', error);
    });
});


app.controller('CategoryController', function ($scope, $routeParams, NewsService) {
  $scope.category = $routeParams.cat;
  // var category = $routeParams.cat;
  console.log($scope.category);

  // console.log("Hi");

  $scope.articles = [];

  NewsService.getNewsByCategory($scope.category)
    .then((response) => {
      $scope.articles = response.data.articles;
      // console.log(articles)
    })
    .catch((error) => {
      console.error('Error fetching news:', error);
    });
});

app.controller('countryController', function ($scope, $location, NewsService) {
  $scope.getNews = function () {
    $scope.articles = [];
    // $scope.category = $routeParams.country;
    $scope.country = $scope.countryName;
    console.log($scope.country)


    NewsService.searchNewsByCountry($scope.country)
      .then(function (response) {
        $scope.articles = response.data.articles;
        $location.path('/country');
        console.log($scope.articles)
      })
      .catch(function (error) {
        console.log('Error:', error);
      });
  };
});


