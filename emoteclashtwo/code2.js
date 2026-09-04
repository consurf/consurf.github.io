gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDMenuBGObjects1= [];
gdjs.Main_32MenuCode.GDMenuBGObjects2= [];
gdjs.Main_32MenuCode.GDLogoObjects1= [];
gdjs.Main_32MenuCode.GDLogoObjects2= [];
gdjs.Main_32MenuCode.GDPlayorObjects1= [];
gdjs.Main_32MenuCode.GDPlayorObjects2= [];
gdjs.Main_32MenuCode.GDBGObjects1= [];
gdjs.Main_32MenuCode.GDBGObjects2= [];
gdjs.Main_32MenuCode.GDPlayObjects1= [];
gdjs.Main_32MenuCode.GDPlayObjects2= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_32MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayObjects1[k] = gdjs.Main_32MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.Main_32MenuCode.GDBGObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBGObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeo", 0, "linear", 1, true);
}
}
{gdjs.evtTools.firebaseTools.analytics.log("Menu", "");
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Effect", "brightness", gdjs.evtTools.tween.getValue(runtimeScene, "Bright"));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Effect", "brightness", gdjs.evtTools.tween.getValue(runtimeScene, "Bright"));
}
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDMenuBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDMenuBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayorObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayorObjects2.length = 0;
gdjs.Main_32MenuCode.GDBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDMenuBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDMenuBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayorObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayorObjects2.length = 0;
gdjs.Main_32MenuCode.GDBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
