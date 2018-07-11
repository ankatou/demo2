
/// <reference path="angular.js" />

var app = angular.module("myapp", ['ui.router', 'ngAnimate','ui.bootstrap']).config(['$stateProvider', '$locationProvider',
    function ($stateProvider, $locationProvider, $location, $anchorScroll) {

        $locationProvider.hashPrefix('');
        $stateProvider
            .state("about", {
                url: "/about",
                templateUrl: "Tamplates/about.html",
                controller: "aboutcontroller as abtcnrt",
               
                
            })
            .state("page-top", {
                url: "/page-top",
                templateUrl: "Tamplates/page-top.html",
                controller: "homecontroller as hcnrt",
            })
            .state('services', {
                url: '/services',
                templateUrl: 'Tamplates/services.html',
                controller: 'servicescontroller as srvcntrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'Tamplates/contact.html',
                controller: 'contactcontroller as cntcntrl'
            })
        
    }])
    .controller("aboutcontroller", function ($location, $anchorScroll) {
        $location.hash('');
        })
   
    .controller("servicescontroller", function ($location, $anchorScroll) {
        $location.hash('/about');
        $anchorScroll();
        $location.hash('');
    })
    .controller("contactcontroller", function ($location, $anchorScroll) {
        $location.hash('/about');
        $anchorScroll();
        $location.hash('');
    })
    .controller("homecontroller", function () { })
   // for image slider
    .controller("mycontroller", function ($scope, $interval, $anchorScroll, $location) {
        
        $scope.photos = [
            { src: '/images/7.jpg', desc: 'Image 01' },
            { src: '/images/i4.jpeg', desc: 'Image 01' },
            { src: '/images/8.jpg', desc: 'Image 01' },
 { src: '/images/2.jpg', desc: 'Image 03' },

            { src: ' /images/4.jpg', desc: 'Image 04' }

           
        ];
        $scope.Index = 0;
        $scope.isActive = function (index) {

            return $scope.Index === index;

        };
        var showNext = function () {

            $scope.Index = ($scope.Index < $scope.photos.length - 1) ? ++$scope.Index : 0;

        };
     
        $interval(showNext, 5000);
       
        $scope.navbarbutton = function () {
            var x = document.getElementById("divshow");
           
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }


    });
