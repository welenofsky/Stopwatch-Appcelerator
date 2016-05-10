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

timeView.add(label);
win.add(timeView);

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

buttonsView.add(buttonStopReset);
buttonsView.add(buttonStartLap);
win.add(buttonsView);

var table = Ti.UI.createTableView({
	width: '100%',
	height: Ti.UI.FILL,
	backgroundColor: '#C0BFBF'	
});

win.add(table);

var isRunning = false;
buttonStartLap.addEventListener('click', function(e) {
	if(isRunning) {
		// If the timer is running, we add a new lap
		var row = Ti.UI.createTableViewRow({
			title: stopWatch.toString(),
			color: '#404040',
			// Classname must be same for all of type
			// is for performance for table rows
			className: 'lap',
			leftImage: '/images/lap.png',
			font: {
				fontSize: '24sp',
				fontWeight: 'bold'
			}
		});
		table.appendRow(row);
	} else {
		// Otherwise we start the clock
		isRunning = true;
		buttonStartLap.title = 'LAP!';
		buttonStopReset.title = 'STOP';
		stopWatch.start();
	}
	stopWatch.start();
});

buttonStopReset.addEventListener('click', function(e) {
	isRunning = false;
	stopWatch.stop();
	label.text = 'READY?';
});

win.open();