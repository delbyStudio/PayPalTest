angular.module('starter.controllers', ['ionic', "firebase"])

.controller('DashCtrl', function($scope, PaypalService, $ionicPopup) {

var ref = new Firebase("https://seguimi.firebaseio.com");
ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    // the access token will allow us to make Open Graph API calls
    $scope.email = authData.facebook.email;
  }
}, {
  scope: "email" // the permissions requested
});



$scope.buy = function(){
    PaypalService.initPaymentUI().then(function () {
          PaypalService.makePayment(1.00, "Gettoni GiftShop (x10)", 'del Buono', 'Via A.Sottile, n.11', null, 'San Severo', 'FG', '71016', 'IT').then(function(){
              $ionicPopup.alert({
              title: '<span class="assertive">CONGRATULAZIONI</span>',
              template: 'Il pagamento è stato effettuato con successo!'
              }); //on successful
          });
    }); 
  }
});
