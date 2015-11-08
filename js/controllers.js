angular.module('paypal.controllers', ['ionic'])

.controller('PayPalBuy', function($scope, PaypalService, $ionicPopup) {

	$scope.nGettoni = 0;

$scope.buy = function(nGettoni, via, citta, cp, provincia, paese){

if(via==undefined||citta==undefined||cp==undefined||provincia==undefined||paese==undefined||via==''||citta==''||cp==''||provincia==''||paese==''){
	$ionicPopup.alert({
              title: '<span class="assertive">ATTENZIONE</span>',
              template: 'Compila tutti i campi!'
              });
	}
	console.log(nGettoni/5+nGettoni+via+citta+cp+provincia+paese)
    PaypalService.initPaymentUI().then(function () {
          PaypalService.makePayment(nGettoni/5, "Gettoni GiftShop (x"+nGettoni+")", '', via, '', citta, provincia.toUpperCase(), cp, paese.toUpperCase())
          .then(function(){
              $ionicPopup.alert({
              title: '<span class="assertive">CONGRATULAZIONI</span>',
              template: 'Il pagamento è stato effettuato con successo!'
              }); //on successful
          });
    }); 
  }
});
