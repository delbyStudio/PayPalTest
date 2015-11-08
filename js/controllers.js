angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, PaypalService) {

$scope.buy = function(){
    PaypalService.initPaymentUI().then(function () {
          PaypalService.makePayment(1.00, "Gettoni GiftShop (x10)").then(function(){
            window.alert("Pagamento Effettuato!");
          });
    }); 
  }
});
