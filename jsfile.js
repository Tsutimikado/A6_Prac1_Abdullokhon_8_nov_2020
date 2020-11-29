function pumba(){
	console.log ("akuna matata");
}

var progValue = 0;
const plus3=3;
const plus5=5;
const plus7=7;

// BUTTON_3
$(".btn3").mouseover(function() {
	if (progValue<98)
	$( ".prog-preview").innerWidth(plus3+"%");
});

$(".btn3").click(function() {
	progValue+=plus3;
	const now=progValue+"%";
	$( ".prog-js").innerWidth(now);
	console.log(now);
	$( ".prog-preview").innerWidth(0);

});

$(".btn3").mouseout(function() {
	$( ".prog-preview").innerWidth(0);
});

// BUTTON_5

$(".btn5").mouseover(function() {
	if (progValue<96)
	$( ".prog-preview").innerWidth(plus5+"%");
});

$(".btn5").click(function() {
	progValue+=plus5;
	const now=progValue+"%";
	$( ".prog-js").innerWidth(now);
	console.log(now);
	$( ".prog-preview").innerWidth(0);
});

$(".btn5").mouseout(function() {
	$( ".prog-preview").innerWidth(0);
});

// BUTTON_7

$(".btn7").mouseover(function() {
	if (progValue<94)
	$( ".prog-preview").innerWidth(plus7+"%");
});

$(".btn7").click(function() {
	progValue+=plus7;
	const now=progValue+"%";
	$( ".prog-js").innerWidth(now);
	console.log(now);
	$( ".prog-preview").innerWidth(0);
});

$(".btn7").mouseout(function() {
	$( ".prog-preview").innerWidth(0);
});

// BUTTON_RES
$(".btn-res").mouseover(function() {
	$( ".prog-js" ).toggleClass( "red-prog" );
	$( ".prog-js" ).toggleClass( "bg-success" );
});

$(".btn-res").mouseout(function() {
	$( ".prog-js" ).toggleClass( "red-prog" );
	$( ".prog-js" ).toggleClass( "bg-success" );
});

$(".btn-res").click(function() {
	progValue=0;
	$( ".prog-js").innerWidth( progValue );
	console.log(progValue);
});
	
pumba();
