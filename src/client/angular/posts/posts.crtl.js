angular.module('PostsCtrl', []).controller('PostsController', function(Page, Post) {
  var vm = this;

  Page.setTitle('All Posts');   
  vm.title = 'All Posts';

  Post.getAll(function(data) {
    vm.posts = data;
  });


});