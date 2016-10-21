window.eva_lib = {};

window.onload = function() {
	for ( var key in window.eva_lib ) {
		console.log('Initialisation de l\'objet: ' + key);
		window.eva_lib[key].init();
	}
};

// window.eva_lib.init_array_form = function() {
// 	console.log('Init array form');
// 	 window.eva_lib.array_form.init();
// }
