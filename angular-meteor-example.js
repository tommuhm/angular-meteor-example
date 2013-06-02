if (Meteor.isClient) {
  app = angular.module('meteorapp', ['meteor']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {controller: 'MeteorCtrl'});
  }]);

  app.controller('MeteorCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
    $scope.Todos = $meteor("todos");
    $scope.todos = $meteor("todos").find({});
  }]);
}

if (Meteor.isServer) {
  Todos = new Meteor.Collection('todos');

  Meteor.startup(function () {
    if (Todos.find().count() === 0) {
      Todos.insert({name: 'Task 1'})
      Todos.insert({name: 'Task 2'})
      Todos.insert({name: 'Task 3'})
    }
  });
}
