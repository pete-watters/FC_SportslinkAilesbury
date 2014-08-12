'use strict';

/**
 * @ngdoc function
 * @name fcSportslinkAilesburyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fcSportslinkAilesburyApp
 */
angular.module('fcSportslinkAilesburyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];

    $scope.todos = [];

    /* function run when addTodo() pressed */
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    /* function to remove toDos */
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
