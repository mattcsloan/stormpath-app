angular.module('PostsCreateCtrl', []).controller('PostsCreateController', function(Page, Post) {
  var vm = this;

  Page.setTitle('Create New Post');   
  vm.title = 'Create New Post';

  vm.addPost = addPost;

  vm.postTitle;
  vm.postContent;

  function addPost() {

    var newPost = new Post.post( 
      { 
       name: vm.postTitle,
       content: vm.postContent
      }); 
    newPost.$save(); 

  }


});