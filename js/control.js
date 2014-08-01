/**
 * Created by Administrator on 2014/7/31.
 */

//var myappmoudle = angular.module('myapp',[]);
//myappmoudle.controller("controllertest",function($scope){
//    $scope.pages=[
//        {img:'1.jpg'},
//        {img:'2.jpg'},
//        {img:'3.jpg'}
//    ]
//})
var myAppModule = angular.module('myapp', []);
myAppModule.controller('controllertest',
    function($scope) {
        var pages = [
            {img:'1.jpg'},
            {img:'2.jpg'},
            {img:'3.jpg'}
        ];

        $scope.pages = pages;
    });