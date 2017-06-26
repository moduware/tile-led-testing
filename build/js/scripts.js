function updateLED() {
  // Get R,G,B values
  var R = parseInt(document.getElementById('R_value').value) || 0;
  var G = parseInt(document.getElementById('G_value').value) || 0;
  var B = parseInt(document.getElementById('B_value').value) || 0;
  if (status) {
		Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'SetRGB', [R,G,B]);
  } else {
		Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'SetRGB', [0,0,0]);
  }
}

function updateFlashTorch() {
  var LED1 = parseInt(document.getElementById('LED1_value').value) || 0;
  var LED2 = parseInt(document.getElementById('LED2_value').value) || 0;
  if (status) {
    Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'SetFlashes', [LED1,LED2]);
  } 
}

function updateFlash() {
  var modeValue = parseInt(document.getElementById('mode_value').value) || 0;
  if (status) {
  	Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'SetFlashes', [mode_value, 1000]);
  } 
}

/* =========== ON PAGE LOAD HANDLER */
document.addEventListener("DOMContentLoaded", function(event) {
	status = false;
	Nexpaq.Header.create('LED');
	Nexpaq.Header.addEventListener('BackButtonClicked', function(e) {
  	Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'TurnOffLeds', []);
    Nexpaq.API.Exit();
	});

	document.getElementById('turnLEDOn').addEventListener('click', function() {
		status = true;
		updateLED();
	});

	document.getElementById('turnLEDOff').addEventListener('click', function() {
  	Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'TurnOffLeds', []);
		status = false;
	});
	document.getElementById('flash').addEventListener('click', function() {
		status = true;
		updateFlash();
	});
	
	document.getElementById('flashOff').addEventListener('click', function() {
		status = false;
    Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'TurnOffFlashs', []);
	});
	document.getElementById('flashTorchOff').addEventListener('click', function() {
		status = false;
    Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'TurnOffFlashs', []);
	});
	document.getElementById('flashTorch').addEventListener('click', function() {
		status = true;
		updateFlashTorch();
	});

});
