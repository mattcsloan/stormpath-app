angular.module('ProfileCtrl', []).controller('ProfileController', function($http, Page) {
  var vm = this;

  Page.setTitle('Profile');   
  vm.title = 'Profile';

  $http.get('/auth/user')
    .success(function (res) {
      vm.user = res;
    })
    .error(function (res) {
      console.log('not logged in');
    });

});