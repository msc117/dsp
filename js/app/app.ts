/// <reference path='../_all.ts' />

// typed application setup
module dsp {
	'use strict';
	
	var app = angular.module('dsp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngRoute'])
		.config(Routes.generate());
}