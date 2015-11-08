angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, $ionicPlatform) {


$ionicPlatform.ready(function(){
$scope.click = function(){

var clientIDs = {
       "PayPalEnvironmentProduction": "ARg9zpxtPzJBg3iP-0NanqLHlY1pXiNhIUXt9HHnQIJgkicE5hFZM1PL5BN1tr8H9aZIsCMiqLOzZgWo",
       "PayPalEnvironmentSandbox": "ARAw-jmuQrKB8F8qaJIQMVuhMsRVP817c489PgjUFNE4dnMp83xms_tBjCA8-eNgdGTK-akbs0u-E8d2"
     };

var config = new PayPalConfiguration({merchantName: "My test shop", merchantPrivacyPolicyURL: "https://mytestshop.com/policy", merchantUserAgreementURL: "https://mytestshop.com/agreement"});

PayPalMobile.init(clientIDs, function(){
  PayPalMobile.prepareToRender("PayPalEnvironmentSandbox", config, function(){
      PayPalMobile.renderSinglePaymentUI(function(){
        var paymentDetails = new PayPalPaymentDetails("50.00", "0.00", "0.00");
        var payment = new PayPalPayment("50.00", "USD", "Awesome Sauce", "Sale", paymentDetails);
        return payment;
        }, 
        function(){
          console.log("payment success: " + JSON.stringify(payment, null, 4));
        }, 
        function(){
          console.log(result);
        })
    })
})

}

})

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
