	'use strict';

/* Controllers */

angular.module('myApp.controllers')

  .controller('ProductOrderCtrl', ['$scope', 'ProductOrders', function($scope, ProductOrders) {

    // Instantiate an object to store scope data
    $scope.myData = {};

    ProductOrders.query(function(data) {
      console.log(data);
      $scope.myData.orderList = data;	
    });

    $scope.setCurrentOrderById = function(id) {
      ProductOrders.getOrder({id: id}, function(data){
        console.log(data);
        $scope.myData.currentOrder = data;
      });
    };

    $scope.saveCurrentOrderById = function(id) {
      ProductOrders.saveOrder({id: id}, function(data){
        console.log(data);
        $scope.myData.currentOrder = data;
      });
    };

    $scope.setCurrentOrderByName = function(name) {
      ProductOrders.getOrder({name: name}, function(data){
        console.log(data);
        $scope.myData.currentOrder = data;
      });
    };

    $scope.showAll = function() {      
      $scope.myData.currentOrder = null;
    };
  }])

  .controller('ProductOfferingCtrl', ['$scope', 'ProductOfferings',function($scope, ProductOfferings) {

    // Instantiate an object to store scope data
    $scope.myData = {};

    ProductOfferings.query(function(data) {
      console.log(data);
      $scope.myData.offeringList = data;	
    });

    $scope.setCurrentOfferingById = function(id) {
      ProductOfferings.getOffering({id: id}, function(data){
        console.log(data);
        $scope.myData.currentOffering = data;
      });
    };

    $scope.setCurrentOfferingByName = function(name) {
      ProductOfferings.getOffering({name: name}, function(data){
        console.log(data);
        $scope.myData.currentOffering = data;
      });
    };

    $scope.setCurrentSpecificationById = function(id) {
      ProductSpecifications.getSpecification({id: id}, function(data){
        console.log(data);
        $scope.myData.currentSpecification = data;
        $location.path(view3);
      });
    };

    $scope.showAll = function() {
      $scope.myData.currentOffering = null;
    };
  }])

  .controller('ProductSpecificationCtrl', ['$scope', 'ProductSpecifications',function($scope, ProductSpecifications) {

    // Instantiate an object to store scope data
    $scope.myData = {};

    ProductSpecifications.query(function(data) {
      console.log(data);
      $scope.myData.specificationList = data;	
    });

    $scope.setCurrentSpecificationById = function(id) {
      ProductSpecifications.getSpecification({id: id}, function(data){
        console.log(data);
        $scope.myData.currentSpecification = data;
      });
    };

    $scope.setCurrentSpecificationByName = function(name) {
      ProductSpecifications.getSpecification({name: name}, function(data){
        console.log(data);
        $scope.myData.currentSpecification = data;
      });
    };

    $scope.showAll = function() {
      $scope.myData.currentSpecification = null;
    };
  }]);
