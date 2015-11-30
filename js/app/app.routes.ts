/// <reference path='../_all.ts' />

module dsp {
	'use strict';
	
	// define app routes
	export class Routes {
		// #region initiation and destruction
		constructor(
			$routeProvider: ng.route.IRouteProvider,
			$locationProvider: ng.ILocationProvider
		) {
			this._$routeProvider = $routeProvider;
			this._$locationProvider = $locationProvider;

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
		}
		
		public static generate() {
			var routes = ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
				return new Routes($routeProvider, $locationProvider);
			}
			routes.$inject = ['$routeProvider', '$locationProvider'];
			return routes;
		}

		private destruct() {
			this._$routeProvider = null;
			this._$locationProvider = null;
		}
		// #endregion
		
		// #region private helpers
		private _$routeProvider: ng.route.IRouteProvider;
		private _$locationProvider: ng.ILocationProvider;
		private _$q: ng.IQService;
		private _$http: ng.IHttpService;
		// #endregion
	}
}
