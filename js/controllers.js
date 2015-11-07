angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, $ionicPlatform) {

$ionicPlatform.ready(function () {
        
        document.addEventListener('PaypalPaymentEvent.Success',function(){
            alert('game coins purchased, enjoy gaming.');
        });

        document.addEventListener('PaypalPaymentEvent.Failed',function(){
            alert('sorry that payment failed, please try again later.');
        });
        
        if( window.plugins && window.plugins.PayPalMPL ) {
    var ppm = window.plugins.PayPalMPL;

            var isTesting = false;
            var appID = isTesting ? 'APP-80W284485P519543T' : 'APP-0HN45655HA567492N';
            var appEnv = isTesting ? ppm.PaymentEnv.ENV_SANDBOX : ppm.PaymentEnv.ENV_LIVE;
            
            ppm.initWithAppID( {
                  'appId': appID,
                  'appEnv': appEnv,
                  }, function(){
                      window.plugins.PayPalMPL.isReady = true;
                  }, function(){
                  });
        }
    })
    
 $scope.buyGameCoin=function () {
        if( window.plugins && window.plugins.PayPalMPL ) {
            var ppm = window.plugins.PayPalMPL;
            ppm.setPaymentInfo({
                'lang' : 'en_US',
                'paymentType' : ppm.PaymentType.TYPE_GOODS,
                'showPayPalButton': -1,
                'paymentCurrency' : 'USD',
                'subTotal' : 1.99,
                'recipient' : 'rjfun.mobile@gmail.com',
                'description' : 'game coins',
                'merchantName' : 'rjfun'
            }, function() {
                ppm.pay({}, function() {
                    // alert( 'paypal pay done' );
                }, function() {
                    alert('paypal pay failed');
                });
            }, function() {
                alert('paypal setPaymentInfo failed');
            });
        } else {
            alert( 'PayPalMPL plugin not loaded.' );
        }
    }

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
