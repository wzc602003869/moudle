/**
 * Created by Administrator on 2014/7/31.
 */

myappmoudle = angular.module('myapp',[]);
myappmoudle.controller("controller",function controller($scope){
    $scope.pages=[
        {img:"1.jpg"},
        {img:"2.jpg"},
        {img:"3.jpg"}
    ]
})
