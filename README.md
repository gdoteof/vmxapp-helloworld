Only javascript files will be loaded from the repo.

Files are taken from master.

Interface with the VMX api by using the VMX object.

Define VMX.callback to provide the callback that will be fired for each detection.

All helper functions should be attached to VMX object to avoid clobbering.

DO NOT DO THIS:

function myFunction(foo){
  ....
}


INSTEAD DO THIS:

VMX.myFunction = function(foo){
  ....
}


