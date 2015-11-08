// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('paypal', ['ionic', 'paypal.controllers', 'paypal.services'])

.constant('shopSettings',{   
   payPalSandboxId : 'ARAw-jmuQrKB8F8qaJIQMVuhMsRVP817c489PgjUFNE4dnMp83xms_tBjCA8-eNgdGTK-akbs0u-E8d2', //PayPalEnvironmentSandbox for testing
   payPalProductionId : 'ARg9zpxtPzJBg3iP-0NanqLHlY1pXiNhIUXt9HHnQIJgkicE5hFZM1PL5BN1tr8H9aZIsCMiqLOzZgWo', //PayPalEnvironmentProduction for production
   payPalEnv: 'PayPalEnvironmentSandbox',
   payPalShopName : 'GiftShop',
   payPalMerchantPrivacyPolicyURL : 'https://giftshop.com/policy',
   payPalMerchantUserAgreementURL : 'https://giftshop.com/agreement'   
});
