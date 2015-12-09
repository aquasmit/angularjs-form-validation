
var myApp = angular.module('myApp',[]);

myApp.controller('RegistrationCtrl',['$scope',function($scope){

  $scope.register = function(){
    if($scope.myform.$valid) {
      $scope.message = 'Welcome ' + $scope.user.fname;
    } else {
      alert('Please enter required fields.');
    }


  };

}]);
