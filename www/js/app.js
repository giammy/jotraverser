(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      ons.notification.alert({message: 'Hello, World!'});
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;

    $scope.backReset = function(index) {
	var pages = $scope.navi.getPages();
	var i = 1;
	/* console.log("pages.length=%i", pages.length); */
	while (pages.length > 2) {
 	  pages[pages.length - 1].destroy();
	}
	$scope.navi.popPage();
    };

    $scope.showReplaceDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;

      var pages = $scope.navi.getPages();
      /*
      console.log("pages.length=%i", pages.length);
      console.log("pages = %s", pages);
      */
      
      if (pages.length > 3) {
 	pages[pages.length - 2].destroy();
      }

      $scope.navi.pushPage('detail.html', {title : selectedItem.title});

    };

    $scope.showReplaceRandomDetail = function() {
      var selectedItem = $data.items[Math.floor(Math.random() * 153)];
      $data.selectedItem = selectedItem;
      /* $scope.navi.replacePage('detail.html', {title : selectedItem.title}); */

      var pages = $scope.navi.getPages();      
      if (pages.length > 3) {
 	pages[pages.length - 2].destroy();
      }
      
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
      /* $scope.navi.resetToPage('detail.html', {title : selectedItem.title}); */
    };

  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = [

      ]; 
      
      return data;
  });
})();
