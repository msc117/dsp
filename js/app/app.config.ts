/// <reference path='../_all.ts' />

module dsp {
    'use strict';
	
    // define app routes
    export class Config {
        // #region initiation and destruction
        constructor(
            private $routeProvider: ng.route.IRouteProvider,
            private $locationProvider: ng.ILocationProvider,
            private $mdThemingProvider: angular.material.IThemingProvider
        ) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'templates/home.html',
                    controller: 'baseCtrl'
                })
                .when('/about', {
                    templateUrl: 'templates/about.html'
                })
                .when('/faq', {
                    templateUrl: 'templates/faq.html'
                })
                .when('/404', {
                    templateUrl: 'templates/404.html'
                })
                .when('/500', {
                    templateUrl: 'templates/500.html'
                })
                .when('/', {
                    redirectTo: '/home'
                })
                .otherwise({
                    redirectTo: '/404'
                });

            $locationProvider.html5Mode(true);
            
            // #region angular material theming
            var customPrimary = {
                '50': '#59d893',
                '100': '#44d386',
                '200': '#31cd78',
                '300': '#2cb86c',
                '400': '#27a460',
                '500': '#228F54',
                '600': '#1d7a48',
                '700': '#18663c',
                '800': '#135130',
                '900': '#0e3d24',
                'A100': '#6edca0',
                'A200': '#82e1ae',
                'A400': '#97e6bb',
                'A700': '#0a2817'
            };
            $mdThemingProvider
                .definePalette('customPrimary',
                customPrimary);

            var customAccent = {
                '50': '#03b788',
                '100': '#039e75',
                '200': '#028563',
                '300': '#026c50',
                '400': '#01533e',
                '500': '#013A2B',
                '600': '#012118',
                '700': '#000806',
                '800': '#000000',
                '900': '#000000',
                'A100': '#04d09a',
                'A200': '#04e9ad',
                'A400': '#0cfbbc',
                'A700': '#000000'
            };
            $mdThemingProvider
                .definePalette('customAccent',
                customAccent);

            var customWarn = {
                '50': '#ffb280',
                '100': '#ffa266',
                '200': '#ff934d',
                '300': '#ff8333',
                '400': '#ff741a',
                '500': '#ff6400',
                '600': '#e65a00',
                '700': '#cc5000',
                '800': '#b34600',
                '900': '#993c00',
                'A100': '#ffc199',
                'A200': '#ffd1b3',
                'A400': '#ffe0cc',
                'A700': '#803200'
            };
            $mdThemingProvider
                .definePalette('customWarn',
                customWarn);

            var customBackground = {
                '50': '#616161',
                '100': '#545454',
                '200': '#474747',
                '300': '#3a3a3a',
                '400': '#2e2e2e',
                '500': '#212121',
                '600': '#141414',
                '700': '#070707',
                '800': '#000000',
                '900': '#000000',
                'A100': '#6d6d6d',
                'A200': '#7a7a7a',
                'A400': '#878787',
                'A700': '#000000'
            };
            $mdThemingProvider
                .definePalette('customBackground',
                customBackground);
			
            // define default theme
            $mdThemingProvider.theme('default')
                .primaryPalette('customPrimary')
                .accentPalette('customAccent')
                .warnPalette('customWarn');
            // #endregion
        }

        public static init() {
            var config = ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider, $mdThemingProvider: angular.material.IThemingProvider) => {
                return new Config($routeProvider, $locationProvider, $mdThemingProvider);
            }
            config.$inject = ['$routeProvider', '$locationProvider', '$mdThemingProvider'];
            return config;
        }
        // #endregion
		
        // #region private helpers
        // #endregion
    }
}
