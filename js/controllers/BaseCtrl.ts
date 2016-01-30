/// <reference path='../_all.ts' />

module dsp {
	'use strict';
	
	// typed base controller
	export class BaseCtrl {
		public static $inject = [
			'$scope',
            '$rootScope'
		];
		
		constructor(
			private $scope: IDspScope,
            private $rootScope: IDspRoot
		) {
            $rootScope.hideFooter = true;
			console.log('in base ctrl');
		}
		
		// #region private helpers
		// #endregion
	}
}
