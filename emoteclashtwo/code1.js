gdjs.LogosCode = {};
gdjs.LogosCode.localVariables = [];
gdjs.LogosCode.idToCallbackMap = new Map();
gdjs.LogosCode.GDEmojiProdLogoObjects1= [];
gdjs.LogosCode.GDEmojiProdLogoObjects2= [];
gdjs.LogosCode.GDEmojiProdLogoObjects3= [];
gdjs.LogosCode.GDEmojiProdLogoObjects4= [];
gdjs.LogosCode.GDEmojiProdLogoObjects5= [];
gdjs.LogosCode.GDEmojiProdTextObjects1= [];
gdjs.LogosCode.GDEmojiProdTextObjects2= [];
gdjs.LogosCode.GDEmojiProdTextObjects3= [];
gdjs.LogosCode.GDEmojiProdTextObjects4= [];
gdjs.LogosCode.GDEmojiProdTextObjects5= [];
gdjs.LogosCode.GDPresentsTextObjects1= [];
gdjs.LogosCode.GDPresentsTextObjects2= [];
gdjs.LogosCode.GDPresentsTextObjects3= [];
gdjs.LogosCode.GDPresentsTextObjects4= [];
gdjs.LogosCode.GDPresentsTextObjects5= [];
gdjs.LogosCode.GDSimplyProdObjects1= [];
gdjs.LogosCode.GDSimplyProdObjects2= [];
gdjs.LogosCode.GDSimplyProdObjects3= [];
gdjs.LogosCode.GDSimplyProdObjects4= [];
gdjs.LogosCode.GDSimplyProdObjects5= [];


gdjs.LogosCode.asyncCallback20522980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LogosCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
gdjs.LogosCode.localVariables.length = 0;
}
gdjs.LogosCode.idToCallbackMap.set(20522980, gdjs.LogosCode.asyncCallback20522980);
gdjs.LogosCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LogosCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LogosCode.asyncCallback20522980(runtimeScene, asyncObjectsList)), 20522980, asyncObjectsList);
}
}

}


};gdjs.LogosCode.asyncCallback20523532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LogosCode.localVariables);
{gdjs.evtTools.tween.addLayoutValueTween(runtimeScene, "Bright", 1, 0, "linear", 1, false);
}

{ //Subevents
gdjs.LogosCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LogosCode.localVariables.length = 0;
}
gdjs.LogosCode.idToCallbackMap.set(20523532, gdjs.LogosCode.asyncCallback20523532);
gdjs.LogosCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LogosCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.LogosCode.asyncCallback20523532(runtimeScene, asyncObjectsList)), 20523532, asyncObjectsList);
}
}

}


};gdjs.LogosCode.asyncCallback20522748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LogosCode.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "EmojiPublishingLogo");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "SimplyJamLogo");
}
{gdjs.evtTools.tween.addLayoutValueTween(runtimeScene, "Bright", 0, 1, "linear", 1, false);
}

{ //Subevents
gdjs.LogosCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LogosCode.localVariables.length = 0;
}
gdjs.LogosCode.idToCallbackMap.set(20522748, gdjs.LogosCode.asyncCallback20522748);
gdjs.LogosCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LogosCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LogosCode.asyncCallback20522748(runtimeScene, asyncObjectsList)), 20522748, asyncObjectsList);
}
}

}


};gdjs.LogosCode.asyncCallback20522356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LogosCode.localVariables);
{gdjs.evtTools.tween.addLayoutValueTween(runtimeScene, "Bright", 1, 0, "linear", 1, false);
}

{ //Subevents
gdjs.LogosCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LogosCode.localVariables.length = 0;
}
gdjs.LogosCode.idToCallbackMap.set(20522356, gdjs.LogosCode.asyncCallback20522356);
gdjs.LogosCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LogosCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.LogosCode.asyncCallback20522356(runtimeScene, asyncObjectsList)), 20522356, asyncObjectsList);
}
}

}


};gdjs.LogosCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.analytics.log("Intro", "");
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "1c67c5b43b781d75dde2857a69095dd9232b1ef5e65327f81fe0c846696c538b_New Adventure.aac", true, 100, 1);
}
{gdjs.evtTools.tween.addLayoutValueTween(runtimeScene, "Bright", 0, 1, "linear", 1, false);
}

{ //Subevents
gdjs.LogosCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "EmojiPublishingLogo", "Effect", "brightness", gdjs.evtTools.tween.getValue(runtimeScene, "Bright"));
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "SimplyJamLogo", "Effect", "brightness", gdjs.evtTools.tween.getValue(runtimeScene, "Bright"));
}
}

}


};

gdjs.LogosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LogosCode.GDEmojiProdLogoObjects1.length = 0;
gdjs.LogosCode.GDEmojiProdLogoObjects2.length = 0;
gdjs.LogosCode.GDEmojiProdLogoObjects3.length = 0;
gdjs.LogosCode.GDEmojiProdLogoObjects4.length = 0;
gdjs.LogosCode.GDEmojiProdLogoObjects5.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects1.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects2.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects3.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects4.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects5.length = 0;
gdjs.LogosCode.GDPresentsTextObjects1.length = 0;
gdjs.LogosCode.GDPresentsTextObjects2.length = 0;
gdjs.LogosCode.GDPresentsTextObjects3.length = 0;
gdjs.LogosCode.GDPresentsTextObjects4.length = 0;
gdjs.LogosCode.GDPresentsTextObjects5.length = 0;
gdjs.LogosCode.GDSimplyProdObjects1.length = 0;
gdjs.LogosCode.GDSimplyProdObjects2.length = 0;
gdjs.LogosCode.GDSimplyProdObjects3.length = 0;
gdjs.LogosCode.GDSimplyProdObjects4.length = 0;
gdjs.LogosCode.GDSimplyProdObjects5.length = 0;

gdjs.LogosCode.eventsList4(runtimeScene);
gdjs.LogosCode.GDEmojiProdLogoObjects1.length = 0;
gdjs.LogosCode.GDEmojiProdLogoObjects2.length = 0;
gdjs.LogosCode.GDEmojiProdLogoObjects3.length = 0;
gdjs.LogosCode.GDEmojiProdLogoObjects4.length = 0;
gdjs.LogosCode.GDEmojiProdLogoObjects5.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects1.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects2.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects3.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects4.length = 0;
gdjs.LogosCode.GDEmojiProdTextObjects5.length = 0;
gdjs.LogosCode.GDPresentsTextObjects1.length = 0;
gdjs.LogosCode.GDPresentsTextObjects2.length = 0;
gdjs.LogosCode.GDPresentsTextObjects3.length = 0;
gdjs.LogosCode.GDPresentsTextObjects4.length = 0;
gdjs.LogosCode.GDPresentsTextObjects5.length = 0;
gdjs.LogosCode.GDSimplyProdObjects1.length = 0;
gdjs.LogosCode.GDSimplyProdObjects2.length = 0;
gdjs.LogosCode.GDSimplyProdObjects3.length = 0;
gdjs.LogosCode.GDSimplyProdObjects4.length = 0;
gdjs.LogosCode.GDSimplyProdObjects5.length = 0;


return;

}

gdjs['LogosCode'] = gdjs.LogosCode;
