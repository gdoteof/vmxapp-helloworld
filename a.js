VMX.callback = function(detections){
  console.log("inside the callback");
  console.log(detections);
}


vmx.enter("fist").moveto({region}).moveto({otherregion});

vmx.on_leave("fist", function(detection){

});

