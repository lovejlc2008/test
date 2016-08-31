$(function(){
	var defaultTheme = 'cerulean';

	var currentTheme = $.cookie('currentTheme') == null ? defaultTheme : $.cookie('currentTheme');
	switchTheme(currentTheme);
	
	$('#themes a').click(function (e) {
        e.preventDefault();
        currentTheme = $(this).attr('data-value');
        $.cookie('currentTheme', currentTheme, {expires: 365});
        switchTheme(currentTheme);
    });
});
function switchTheme(themeName) {
    if (themeName == 'classic') {
        $('#bs-css').attr('href', 'bower_components/bootstrap/dist/css/bootstrap.min.css');
    } else {
        $('#bs-css').attr('href', 'css/bootstrap-' + themeName + '.min.css');
    }

    $('#themes i').removeClass('glyphicon glyphicon-ok whitespace').addClass('whitespace');
    $('#themes a[data-value=' + themeName + ']').find('i').removeClass('whitespace').addClass('glyphicon glyphicon-ok');
}