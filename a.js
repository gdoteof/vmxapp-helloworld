VMX.callback = function(detections){
  console.log("inside the callback");
  console.log(detections);

  //This comment should have more info
  //document.body.style.backgroundColor="#f3f3f3";
  var x0 = detections[0].bb[0];
  var x1 = detections[0].bb[2];
  var y0 = detections[0].bb[1];
  var y1 = detections[0].bb[3];
  var dw = Math.round(x1 - x0); //detection width
  var dh = Math.round(y1 - y0); //detection height
  canvasWidth = 320;
  canvasHeight = 240;
  var scalew = document.body.clientWidth / canvasWidth;
  var scaleh = document.body.clientHeight / canvasHeight;


  x = x0 * scalew;
  y = y0 * scaleh;

  var mc = VMX.getMagicCanvas();
  var mcc = mc.getContext('2d');
  
  VMX.drawer = {};

  if(!VMX.drawer.started){
    VMX.drawer.started = true;
    mcc.beginPath();
    mcc.moveTo(x,y);
    return;
  }

  //already in middle of draw, so.
  mcc.lineTo(x,y);
  mcc.closePath();
  mcc.lineWidth = 5;
  mcc.fillStyle = '#8ED6FF';
  mcc.fill();
  mcc.strokeStyle = '#0000ff';
  mcc.stroke();
  mcc.moveTo(x,y);
  
}


VMX.config.useMagicCanvas = true;


