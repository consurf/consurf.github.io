gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.idToCallbackMap = new Map();
gdjs.Game_32OverCode.GDBGObjects1= [];
gdjs.Game_32OverCode.GDBGObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.Game_32OverCode.GDBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDBGObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDBGObjects1[k] = gdjs.Game_32OverCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDBGObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Cancel2.mp3", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.Game_32OverCode.GDBGObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBGObjects1[i].getBehavior("Scale").setScale(3);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Fail.wav", 0, false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBGObjects1[i].getBehavior("Tween").addObjectScaleTween3("1", 1.46, "linear", 0.1, false, false);
}
}
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDBGObjects1.length = 0;
gdjs.Game_32OverCode.GDBGObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDBGObjects1.length = 0;
gdjs.Game_32OverCode.GDBGObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
