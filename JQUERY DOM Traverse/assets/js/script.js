// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.

$('#root').children('ul').children('li').css('background-color', "white")
// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

$('#root').children().eq(1).children().eq(0).append('O')
$('#root').children().eq(3).children().eq(0).append('O')