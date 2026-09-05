gdjs.Online_32Mode_32PrepCode = {};
gdjs.Online_32Mode_32PrepCode.localVariables = [];
gdjs.Online_32Mode_32PrepCode.idToCallbackMap = new Map();
gdjs.Online_32Mode_32PrepCode.GDSignUpObjects1= [];
gdjs.Online_32Mode_32PrepCode.GDSignUpObjects2= [];
gdjs.Online_32Mode_32PrepCode.GDLogInObjects1= [];
gdjs.Online_32Mode_32PrepCode.GDLogInObjects2= [];
gdjs.Online_32Mode_32PrepCode.GDEmailObjects1= [];
gdjs.Online_32Mode_32PrepCode.GDEmailObjects2= [];
gdjs.Online_32Mode_32PrepCode.GDPasswordObjects1= [];
gdjs.Online_32Mode_32PrepCode.GDPasswordObjects2= [];
gdjs.Online_32Mode_32PrepCode.GDGuestObjects1= [];
gdjs.Online_32Mode_32PrepCode.GDGuestObjects2= [];
gdjs.Online_32Mode_32PrepCode.GDGoogleObjects1= [];
gdjs.Online_32Mode_32PrepCode.GDGoogleObjects2= [];


gdjs.Online_32Mode_32PrepCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Logos", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SignUp"), gdjs.Online_32Mode_32PrepCode.GDSignUpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Online_32Mode_32PrepCode.GDSignUpObjects1.length;i<l;++i) {
    if ( gdjs.Online_32Mode_32PrepCode.GDSignUpObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Online_32Mode_32PrepCode.GDSignUpObjects1[k] = gdjs.Online_32Mode_32PrepCode.GDSignUpObjects1[i];
        ++k;
    }
}
gdjs.Online_32Mode_32PrepCode.GDSignUpObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Online_32Mode_32PrepCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.Online_32Mode_32PrepCode.GDPasswordObjects1);
{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.Online_32Mode_32PrepCode.GDEmailObjects1.length === 0 ) ? "" :gdjs.Online_32Mode_32PrepCode.GDEmailObjects1[0].getText()), (( gdjs.Online_32Mode_32PrepCode.GDPasswordObjects1.length === 0 ) ? "" :gdjs.Online_32Mode_32PrepCode.GDPasswordObjects1[0].getText()), gdjs.VariablesContainer.badVariable);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LogIn"), gdjs.Online_32Mode_32PrepCode.GDLogInObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Online_32Mode_32PrepCode.GDLogInObjects1.length;i<l;++i) {
    if ( gdjs.Online_32Mode_32PrepCode.GDLogInObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Online_32Mode_32PrepCode.GDLogInObjects1[k] = gdjs.Online_32Mode_32PrepCode.GDLogInObjects1[i];
        ++k;
    }
}
gdjs.Online_32Mode_32PrepCode.GDLogInObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Online_32Mode_32PrepCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.Online_32Mode_32PrepCode.GDPasswordObjects1);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.Online_32Mode_32PrepCode.GDEmailObjects1.length === 0 ) ? "" :gdjs.Online_32Mode_32PrepCode.GDEmailObjects1[0].getText()), (( gdjs.Online_32Mode_32PrepCode.GDPasswordObjects1.length === 0 ) ? "" :gdjs.Online_32Mode_32PrepCode.GDPasswordObjects1[0].getText()), gdjs.VariablesContainer.badVariable);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Guest"), gdjs.Online_32Mode_32PrepCode.GDGuestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Online_32Mode_32PrepCode.GDGuestObjects1.length;i<l;++i) {
    if ( gdjs.Online_32Mode_32PrepCode.GDGuestObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Online_32Mode_32PrepCode.GDGuestObjects1[k] = gdjs.Online_32Mode_32PrepCode.GDGuestObjects1[i];
        ++k;
    }
}
gdjs.Online_32Mode_32PrepCode.GDGuestObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.anonymSignIn(gdjs.VariablesContainer.badVariable);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Google"), gdjs.Online_32Mode_32PrepCode.GDGoogleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Online_32Mode_32PrepCode.GDGoogleObjects1.length;i<l;++i) {
    if ( gdjs.Online_32Mode_32PrepCode.GDGoogleObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Online_32Mode_32PrepCode.GDGoogleObjects1[k] = gdjs.Online_32Mode_32PrepCode.GDGoogleObjects1[i];
        ++k;
    }
}
gdjs.Online_32Mode_32PrepCode.GDGoogleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.signInWithProvider("google", gdjs.VariablesContainer.badVariable);
}
}

}


};

gdjs.Online_32Mode_32PrepCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Online_32Mode_32PrepCode.GDSignUpObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDSignUpObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDLogInObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDLogInObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDEmailObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDEmailObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDPasswordObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDPasswordObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDGuestObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDGuestObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDGoogleObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDGoogleObjects2.length = 0;

gdjs.Online_32Mode_32PrepCode.eventsList0(runtimeScene);
gdjs.Online_32Mode_32PrepCode.GDSignUpObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDSignUpObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDLogInObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDLogInObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDEmailObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDEmailObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDPasswordObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDPasswordObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDGuestObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDGuestObjects2.length = 0;
gdjs.Online_32Mode_32PrepCode.GDGoogleObjects1.length = 0;
gdjs.Online_32Mode_32PrepCode.GDGoogleObjects2.length = 0;


return;

}

gdjs['Online_32Mode_32PrepCode'] = gdjs.Online_32Mode_32PrepCode;
