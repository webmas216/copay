'use strict';

angular.module('copayApp.controllers').controller('buyandsellController', function($scope, $ionicHistory, buyAndSellService, lodash) {

  $scope.$on("$ionicView.beforeEnter", function(event, data) {
    // $scope.services = buyAndSellService.get();

    // if (lodash.isEmpty($scope.services))
    //   $ionicHistory.goBack();

    $scope.services = [
      {
        url : 'https://www.southxchange.com/Market/Book/POLIS/BTC',
        caption : 'Southxchange'
      },
      {
        url : 'https://stocks.exchange/trade/POLIS/BTC',
        caption : 'Stocks.exchange'
      },
      {
        url : 'https://www.cryptopia.co.nz/',
        caption : 'Cryptopia'
      }
    ]
  });
});
