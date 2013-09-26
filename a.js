VMX.callback = function(detections){
  console.log("inside the callback");
  console.log(detections);
}

VMX.config.useMagicCanvas = true;


VMX.on_leave("fist", function(detection){

});

