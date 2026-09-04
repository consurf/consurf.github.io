gdjs.ClickCode = {};
gdjs.ClickCode.localVariables = [];
gdjs.ClickCode.idToCallbackMap = new Map();
gdjs.ClickCode.GDPlayBTNObjects1= [];
gdjs.ClickCode.GDPlayBTNObjects2= [];


gdjs.ClickCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayBTN"), gdjs.ClickCode.GDPlayBTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClickCode.GDPlayBTNObjects1.length;i<l;++i) {
    if ( gdjs.ClickCode.GDPlayBTNObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ClickCode.GDPlayBTNObjects1[k] = gdjs.ClickCode.GDPlayBTNObjects1[i];
        ++k;
    }
}
gdjs.ClickCode.GDPlayBTNObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Logos", false);
}
}

}


};

gdjs.ClickCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClickCode.GDPlayBTNObjects1.length = 0;
gdjs.ClickCode.GDPlayBTNObjects2.length = 0;

gdjs.ClickCode.eventsList0(runtimeScene);
gdjs.ClickCode.GDPlayBTNObjects1.length = 0;
gdjs.ClickCode.GDPlayBTNObjects2.length = 0;


return;

}

gdjs['ClickCode'] = gdjs.ClickCode;
