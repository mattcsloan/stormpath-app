angular.module('MainCtrl', []).controller('MainController', function($scope, $http, Page) {

  $scope.Page = Page;
  
  $scope.tagline = 'main';  

  $http.get('api/navigation')
    .success(function (res) {
      $scope.navigation = res
    });

  $scope.$on('$routeChangeSuccess', function (event, data) {
    $scope.errormessage = '';
    $scope.pageTitle = data.title + ' | MEAN Boilerplate by Matt Sloan';
  });

});