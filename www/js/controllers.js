angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope','UserPosts', function($scope, UserPosts) {
  $scope.posts = UserPosts.posts;
}])


.controller('cameraCtrl', ['$scope','CameraFactory', function($scope, CameraFactory) {

  // var picture = CameraFactory.imgURI;
  // console.log(picture);
  $scope.$watch('picture', function(newValue, oldValue){
    console.log('its running');
    // $scope.picture = newValue;
  });

  $scope.takePicture = function(){
    CameraFactory.takePhoto()
      .then(function (imageData) {
        $scope.image = "data:image/jpeg;base64," + imageData;
          console.log($scope.image);
          }, function (err) {
            // An error occured. Show a message to the user
            console.log('error', err);
      });
  };


  // console.log('imgURI: ',typeof $scope.picture);

  // $scope.takePhoto = function (){

  //   var options = {
  //     quality: 75,
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     //setting source type to 'Camera.PictureSourceType.CAMERA' uses the devices native camera
  //     sourceType: Camera.PictureSourceType.CAMERA,
  //     allowEdit: true,
  //     encodingType: Camera.EncodingType.JPEG,
  //     targetWidth: 300,
  //     targetHeight: 300,
  //     popoverOptions: CameraPopoverOptions,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true
  //   };

  //   $cordovaCamera.getPicture(options)
  //     .then(function (imageData) {
  //       $scope.imgURI = "data:image/jpeg;base64," + imageData;
  //         }, function (err) {
  //           // An error occured. Show a message to the user
  //           console.log('error', err);
  //     });
  // };

  //functionality to retreive photos from photo library
  // $scope.choosePhoto = function () {

  //   var options = {
  //     quality: 75,
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     //selects an image from the photo library
  //     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
  //     allowEdit: true,
  //     encodingType: Camera.EncodingType.JPEG,
  //     targetWidth: 300,
  //     targetHeight: 300,
  //     popoverOptions: CameraPopoverOptions,
  //     saveToPhotoAlbum: false
  //   };

  //   $cordovaCamera.getPicture(options)
  //     .then(function (imageData) {
  //       $scope.imgURI = "data:image/jpeg;base64," + imageData;
  //     }, function (err) {
  //         // An error occured. Show a message to the user
  //         console.log('error: ', err);
  //        });
  // };

}])

.controller('commentsCtrl',[
  '$scope',
   function($scope) {

}])

.controller('mapCtrl',[
  '$scope',
   function($scope) {

}])

//for future start up page
.controller('startUpCtrl',[
  '$scope',
   function($scope) {

}]);
