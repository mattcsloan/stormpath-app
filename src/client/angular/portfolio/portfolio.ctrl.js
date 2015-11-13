angular.module('PortfolioCtrl', []).controller('PortfolioController', function($scope, $http, Page) {

  Page.setTitle('Portfolio');  

  $http.get('api/portfolio')
    .success(function (res) {
      $scope.portfolioList = res;
    });

  $scope.$on('$routeChangeSuccess', function (event, data) {
    $scope.errormessage = '';
    $scope.pageTitle = data.title + ' | MEAN Boilerplate by Matt Sloan';
  });
});
