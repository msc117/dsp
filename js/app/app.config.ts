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
            
            // TODO correct colors
            // #region angular material theming
            var customPrimary = {
                '50': '#2afffe',
                '100': '#11fffe',
                '200': '#00f6f5',
                '300': '#00dddc',
                '400': '#00c3c2',
                '500': '#00aaa9',
                '600': '#009090',
                '700': '#007776',
                '800': '#005d5d',
                '900': '#004444',
                'A100': '#44fffe',
                'A200': '#5dfffe',
                'A400': '#77fffe',
                'A700': '#002a2a',
                'contrastDefaultColor': 'light'
            };
            $mdThemingProvider
                .definePalette('customPrimary',
                customPrimary);

            var customAccent = {
                '50': '#c2accf',
                '100': '#b79cc6',
                '200': '#ab8cbd',
                '300': '#9f7cb3',
                '400': '#936baa',
                '500': '#875ca0',
                '600': '#795390',
                '700': '#6c4980',
                '800': '#5e406f',
                '900': '#50375f',
                'A100': '#cebcd9',
                'A200': '#dacde2',
                'A400': '#e6ddeb',
                'A700': '#432d4f'
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
                '50': '#626b8d',
                '100': '#58607e',
                '200': '#4d546f',
                '300': '#434960',
                '400': '#383d51',
                '500': '#2E3242',
                '600': '#242733',
                '700': '#191b24',
                '800': '#0f1015',
                '900': '#040406',
                'A100': '#6f779a',
                'A200': '#7e85a5',
                'A400': '#8d94af',
                'A700': '#000000',
                'contrastDefaultColor': 'light'
            };
            $mdThemingProvider
                .definePalette('customBackground',
                customBackground);
				
            // define dark theme
            // TODO better color contrast with background color
            $mdThemingProvider.theme('dark')
                .primaryPalette('customPrimary')
                .accentPalette('customAccent')
                .warnPalette('customWarn')
                .backgroundPalette('customBackground');
			
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
