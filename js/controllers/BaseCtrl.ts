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
			this._$scope = $scope;
			
			$scope.$on('$destroy', this.destruct);
		}
		
		// #region private helpers
		private _$scope: IDspScope;
		
		private destruct() {
			this._$scope = null;
		}
		// #endregion
	}
}
