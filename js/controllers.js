angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, PaypalService, $ionicPopup) {

$scope.buy = function(){
    PaypalService.initPaymentUI().then(function () {
          PaypalService.makePayment(1.00, "Gettoni GiftShop (x10)").then(function(){
              $ionicPopup.alert({
              title: '<span class="assertive">CONGRATULAZIONI</span>',
              template: 'Il pagamento è stato effettuato con successo!'
              }); //on successful
          });
    }); 
  }
});
