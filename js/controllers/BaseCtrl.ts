/// <reference path='../_all.ts' />

module dsp {
	'use strict';
	
	// typed base controller
	export class BaseCtrl {
		public static $inject = [
			'$scope'
		];
		
		constructor(
			$scope: IDspScope
		) {
			console.log('in base ctrl');
		}
		
		// #region private helpers
		private _$scope: IDspScope;
		// #endregion
	}
}
