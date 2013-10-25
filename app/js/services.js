'use strict';

/* Services */

angular.module('myApp.services', ['ngResource'])

  .factory('ProductOrders', function($resource){
//    return $resource('http://64.103.39.150\\:4848/cisco/tmf/productOrder/:id',
    return $resource('http://tmforum-test.apigee.net/v1/tm-forum-product-order-api/:id',
      {id: '@id'},
      {getOrder: {method: 'GET', params: {id: 0}}},
      {queryOrder: {method: 'GET', isArray:true, params: {id: 0}}}
    )
  })

  .factory('ProductOfferings', function($resource){
//    return $resource('http://64.103.39.150\\:4848/cisco/tmf/productOffering/:id',
    return $resource('http://tmforum-test.apigee.net/v1/tm-forum-product-offering-api/:id',
      {id: '@id'},
      {getOffering: {method: 'GET', params: {id: 0}}},
      {queryOffering: {method: 'GET', isArray:true, params: {id: 0}}}
    )
  })

  .factory('ProductSpecifications', function($resource){
//    return $resource('http://64.103.39.150\\:4848/cisco/tmf/productSpecification/:id',
    return $resource('http://tmforum-test.apigee.net/v1/tm-forum-product-specification-api/:id',
      {id: '@id'},
      {getSpecification: {method: 'GET', params: {id: 0}}},
      {querySpecification: {method: 'GET', isArray:true, params: {id: 0}}}
    )
  })

  .value('version', '0.1');

"http://server:port/", {port:":4848"}