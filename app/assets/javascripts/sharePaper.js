// $("#s3-uploader").S3Uploader();




// var desiredWidth;
 
// $(document).ready(function() {
//   console.log('onReady');
//   $("#takePictureField").on("change",gotPic);
//   desiredWidth = window.innerWidth;
    
//   if(!("url" in window) && ("webkitURL" in window)) {
//         window.URL = window.webkitURL;   
//   } 
// });
  
// //Credit: https://www.youtube.com/watch?v=EPYnGFEcis4&feature=youtube_gdata_player
// function gotPic(event) {
//   if(event.target.files.length == 1 && 
//     event.target.files[0].type.indexOf("image/") == 0) {
//       $("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
//   }
// }





// var sharePaperApp = angular.module('sharePaper', []);

// sharePaperApp.controller('Ctrl', ['$scope', 'fileUpload', function($scope, fileUpload){
//     $scope.uploadFile = function(){
//         var file = $scope.myFile;
//         console.log('file is ' + JSON.stringify(file));
//         var uploadUrl = "/site";
//         fileUpload.uploadFileToUrl(file, uploadUrl);
//     };
// }]);

// sharePaperApp.service('fileUpload', ['$http', function ($http) {
//   this.uploadFileToUrl = function(file, uploadUrl){
//     var fd = new FormData();
//     fd.append('file', file);
//     $http.post(uploadUrl, fd, {
//         transformRequest: angular.identity,
//         headers: {'Content-Type': undefined, 'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')}
//     })
//     .success(function(){
//       console.log("Success!");
//     })
//     .error(function(){
//       console.log("Oh Pisser!");
//     });
//   };
// }]);

// sharePaperApp.directive('fileModel', ['$parse', function ($parse) {
//   return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//         var model = $parse(attrs.fileModel);
//         var modelSetter = model.assign;
        
//         element.bind('change', function(){
//             scope.$apply(function(){
//                 modelSetter(scope, element[0].files[0]);
//             });            
//         });
//     }
//   };
// }]);


// sharePaper.controller('Ctrl', ['$scope', "$http", function ($scope, $http) {
// //            $scope.image = "";
// }]);

        // sharePaper.directive('myUpload', [function () {
        //     return {
        //         restrict: 'A',
        //         link: function ($scope, elem, attrs) {
        //             var reader = new FileReader();
        //             reader.onload = function (e) {
        //                 $scope.image = e.target.result;
        //                 $scope.$apply();
        //                 //post
        //                 // $http.post("/site", $scope.image, {
        //                 //   withCredentials: true,
        //                 //   headers: {'Content-Type': undefined, 'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')  },
        //                 //   transformRequest: angular.identity
        //                 //   }).success(console.log("yeah!")).error(console.log("damn!"));
        //                 // };
        //             };

        //             elem.on('change', function() {
        //                 reader.readAsDataURL(elem[0].files[0]);
        //             });
        //         }
        //     };
        // }]);
