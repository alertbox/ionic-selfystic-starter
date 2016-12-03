// Ionic Selfystic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Selfystic', ['ionic', 'ionic.contrib.ui.cards'])

.run(function ($ionicPlatform) {

  $ionicPlatform.ready(onDeviceReady);

  function onDeviceReady($cordovaKeyboard, $cordovaStatusBar) {

    if (ionic.Platform.isIOS()) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      $cordovaKeyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      $cordovaKeyboard.disableScroll(true);
    }

    $cordovaStatusBar.styleDefault();
  }
})

.directive('noScroll', function ($document) {

  return {
    restrict: 'A',
    link: function ($scope, $element, $attr) {

      $document.on('touchmove', function (e) {
        e.preventDefault();
      });
    }
  };
})

.controller('Cards', function ($scope, $ionicSwipeCardDelegate) {

  var cardTypes = [{
    title: 'Swipe down to clear the card',
    image: 'img/pic.png'
  }, {
    title: 'Where is this?',
    image: 'img/pic.png'
  }, {
    title: 'What kind of grass is this?',
    image: 'img/pic2.png'
  }, {
    title: 'What beach is this?',
    image: 'img/pic3.png'
  }, {
    title: 'What kind of clouds are these?',
    image: 'img/pic4.png'
  }];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = onCardSwiped;
  $scope.cardDestroyed = onCardDestroyed;
  $scope.addCard = onAddCard;

  function onCardSwiped(index) {
    $scope.addCard();
  }

  function onCardDestroyed(index) {
    $scope.cards.splice(index, 1);
  }

  function onAddCard() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }

})

.controller('Card', function ($scope, $ionicSwipeCardDelegate) {

  $scope.like = onLike;
  $scope.share = onShare;

  function onLike() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  }

  function onShare() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  }
});
