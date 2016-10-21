window.eva_lib = {};
window.app = {};

window.onload = function() {
	for ( var key in window.eva_lib ) {
		window.eva_lib[key].init();
	}
};
