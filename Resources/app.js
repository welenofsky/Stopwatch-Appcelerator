var win = Ti.UI.createWindow({
	backgroundColor: '#fff',
	layout: 'vertical',
});

var timeView = Ti.UI.createView({
	top: '0',
	height: '30%',
	width: '100%',
	backgroundColor: '#1C1C1C'
});

var label = Ti.UI.createLabel({
	color: '#404040',
	text: 'READY?',
	// left, right fixes jumping text.
	left: 0,
	right: 0,
	height: Ti.UI.SIZE,
	textAlign: 'center',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	font: {
		fontSize: '55sp',
		fontWeight: 'bold'
	}
});

var Stopwatch = require('stopwatch');
var stopWatch = new Stopwatch(stopwatchListener, 10);

function stopwatchListener(watch) {
	label.text = watch.toString();
}

var buttonsView = Ti.UI.createView({
     left: 0,
     right: 0,
     height: '10%',
     layout: 'horizontal',
     horizontalWrap: false
});

var buttonStartLap = Ti.UI.createButton({
     title: 'GO!',
     color: '#C0BFBF',
     width: '50%',
     height: Ti.UI.FILL,
     backgroundColor: '#727F7F',
     font: {
       fontSize: '25sp',
       fontWeight: 'bold'
     }
});

var buttonStopReset = Ti.UI.createButton({
     title: 'STOP',
     color: '#C0BFBF',
     width: '50%',
     height: Ti.UI.FILL,
     backgroundColor: '#404040',
     font: {
       fontSize: '25sp',
       fontWeight: 'bold'
     }
});

timeView.add(label);
win.add(timeView);
buttonsView.add(buttonStopReset);
buttonsView.add(buttonStartLap);
win.add(buttonsView);

buttonStartLap.addEventListener('click', function(e) {
	stopWatch.start();
});

buttonStopReset.addEventListener('click', function(e) {
	stopWatch.stop();
	label.text = 'READY?';
});

win.open();