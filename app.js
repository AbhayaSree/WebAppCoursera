(function (){
'use strict';
  angular.module('myFirstApp',[])
  .controller('MyFirstController',function($scope){
    $scope.name="Angular";
    $scope.sayHello=function(){
      return "Coursera"
    };
  });
})();
