window.eva_lib.global = {};

window.eva_lib.global.init = function() {}


window.eva_lib.global.download_file = function( url_to_file, filename ) {
	var url = jQuery('<a href="' + url_to_file + '" download="' + filename + '"></a>');
	jQuery('.wrap').append(url);
	url[0].click();
	url.remove();
};

window.eva_lib.global.remove_diacritics = function( input ) {
  var output = "";

  var normalized = input.normalize("NFD");
  var i=0;
  var j=0;

  while (i<input.length)
  {
      output += normalized[j];

      j += (input[i] == normalized[j]) ? 1 : 2;
      i++;
  }

  return output;
};
