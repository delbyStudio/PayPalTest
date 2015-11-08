angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, $ionicPlatform) {

   // Application Constructor
   $scope.initialize = function() {
       $scope.bindEvents();
   }
   // Bind Event Listeners
   //
   // Bind any events that are required on startup. Common events are:
   // 'load', 'deviceready', 'offline', and 'online'.
   $scope.bindEvents = function() {
       document.addEventListener('deviceready', this.onDeviceReady, false);
   }
   // deviceready Event Handler
   //
   // The scope of 'this' is the event. In order to call the 'receivedEvent'
   // function, we must explicity call 'app.receivedEvent(...);'
   $scope.onDeviceReady = function() {
       $scope.receivedEvent('deviceready');
   }

   // Update DOM on a Received Event
   $scope.receivedEvent = function(id) {
       var parentElement = document.getElementById(id);
       var listeningElement = parentElement.querySelector('.listening');
       var receivedElement = parentElement.querySelector('.received');

       listeningElement.setAttribute('style', 'display:none;');
       receivedElement.setAttribute('style', 'display:block;');

       console.log('Received Event: ' + id);

       // start to initialize PayPalMobile library
       $scope.initPaymentUI();
   }

   $scope.initPaymentUI = function () {
     var clientIDs = {
       "PayPalEnvironmentProduction": "ARg9zpxtPzJBg3iP-0NanqLHlY1pXiNhIUXt9HHnQIJgkicE5hFZM1PL5BN1tr8H9aZIsCMiqLOzZgWo",
       "PayPalEnvironmentSandbox": "ARAw-jmuQrKB8F8qaJIQMVuhMsRVP817c489PgjUFNE4dnMp83xms_tBjCA8-eNgdGTK-akbs0u-E8d2"
     };
     PayPalMobile.init(clientIDs, $scope.onPayPalMobileInit());

   }

   $scope.onSuccesfulPayment = function(payment) {
     console.log("payment success: " + JSON.stringify(payment, null, 4));
   }

   $scope.onAuthorizationCallback = function(authorization) {
     console.log("authorization: " + JSON.stringify(authorization, null, 4));
   }

   $scope.createPayment = function () {
     // for simplicity use predefined amount
     // optional payment details for more information check [helper js file](https://github.com/paypal/PayPal-Cordova-Plugin/blob/master/www/paypal-mobile-js-helper.js)
     var paymentDetails = new PayPalPaymentDetails("50.00", "0.00", "0.00");
     var payment = new PayPalPayment("50.00", "USD", "Awesome Sauce", "Sale", paymentDetails);
     return payment;
   }

   $scope.configuration = function () {
     // for more options see `paypal-mobile-js-helper.js`
     var config = new PayPalConfiguration({merchantName: "My test shop", merchantPrivacyPolicyURL: "https://mytestshop.com/policy", merchantUserAgreementURL: "https://mytestshop.com/agreement"});
     return config;
   }

   $scope.onPrepareRender = function() {
     $scope.buy = function(e) {
       // single payment
       PayPalMobile.renderSinglePaymentUI($scope.createPayment(), $scope.onSuccesfulPayment, $scope.onUserCanceled);
     };
   }

   $scope.onPayPalMobileInit = function() {
     // must be called
     // use PayPalEnvironmentNoNetwork mode to get look and feel of the flow
     PayPalMobile.prepareToRender("PayPalEnvironmentSandbox", $scope.configuration(), $scope.onPrepareRender);
   }

   $scope.onUserCanceled = function(result) {
     console.log(result);
   }

   $scope.initialize();

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
