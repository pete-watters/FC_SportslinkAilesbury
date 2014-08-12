'use strict';

/**
 * @ngdoc function
 * @name fcSportslinkAilesburyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fcSportslinkAilesburyApp
 */
angular.module('fcSportslinkAilesburyApp')
  .controller('MainCtrl', function ($scope , localStorageService) {
    $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];


        /* START: Read ToDos from LocalStorage */
        var todosInStore = localStorageService.get('todos');

        $scope.todos = todosInStore && todosInStore.split('\n') || [];

        $scope.$watch('todos', function () {
          localStorageService.add('todos', $scope.todos.join('\n'));
        }, true);
        /* END: Read ToDos from LocalStorage */

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
