gdjs.Simply_32Jam_32RoomCode = {};
gdjs.Simply_32Jam_32RoomCode.localVariables = [];
gdjs.Simply_32Jam_32RoomCode.idToCallbackMap = new Map();
gdjs.Simply_32Jam_32RoomCode.GDMoveJoystickObjects1= [];
gdjs.Simply_32Jam_32RoomCode.GDMoveJoystickObjects2= [];
gdjs.Simply_32Jam_32RoomCode.GDCameraObjects1= [];
gdjs.Simply_32Jam_32RoomCode.GDCameraObjects2= [];
gdjs.Simply_32Jam_32RoomCode.GDRepeatingBackgroundObjects1= [];
gdjs.Simply_32Jam_32RoomCode.GDRepeatingBackgroundObjects2= [];
gdjs.Simply_32Jam_32RoomCode.GDPlayer3DoObjects1= [];
gdjs.Simply_32Jam_32RoomCode.GDPlayer3DoObjects2= [];
gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects1= [];
gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects2= [];
gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1= [];
gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects2= [];
gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1= [];
gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects2= [];
gdjs.Simply_32Jam_32RoomCode.GDCursorObjects1= [];
gdjs.Simply_32Jam_32RoomCode.GDCursorObjects2= [];


gdjs.Simply_32Jam_32RoomCode.mapOfGDgdjs_9546Simply_959532Jam_959532RoomCode_9546GDPlayerBulletObjects1Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1});
gdjs.Simply_32Jam_32RoomCode.mapOfGDgdjs_9546Simply_959532Jam_959532RoomCode_9546GDPlayerBulletObjects1Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1});
gdjs.Simply_32Jam_32RoomCode.mapOfGDgdjs_9546Simply_959532Jam_959532RoomCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects1});
gdjs.Simply_32Jam_32RoomCode.mapOfGDgdjs_9546Simply_959532Jam_959532RoomCode_9546GDPlayerBulletObjects1Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1});
gdjs.Simply_32Jam_32RoomCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.Simply_32Jam_32RoomCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDCameraObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Click.wav", false, 100, 1);
}
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "crosshair", null);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RepeatingBackground"), gdjs.Simply_32Jam_32RoomCode.GDRepeatingBackgroundObjects1);
{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDRepeatingBackgroundObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDRepeatingBackgroundObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - gdjs.evtTools.common.mod(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), 320) + 160,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - gdjs.evtTools.common.mod(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 320) - 320);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1);
gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Simply_32Jam_32RoomCode.mapOfGDgdjs_9546Simply_959532Jam_959532RoomCode_9546GDPlayerBulletObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 300, null);
}
}
{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1[i].getBehavior("Object3D").setCenterZInScene((( gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[0].getBehavior("Object3D").getDepth()) / 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Simply_32Jam_32RoomCode.mapOfGDgdjs_9546Simply_959532Jam_959532RoomCode_9546GDPlayerBulletObjects1Objects, gdjs.Simply_32Jam_32RoomCode.mapOfGDgdjs_9546Simply_959532Jam_959532RoomCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects1 */
/* Reuse gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Metal Hit 4.mp3", false, 100, gdjs.randomFloatInRange(1.5, 2));
}
{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects1[i].returnVariable(gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(0.1);
}
{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1);
gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[i].getBehavior("FireBullet").SetBulletQuantityOp(45, null);
}
}
{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Simply_32Jam_32RoomCode.mapOfGDgdjs_9546Simply_959532Jam_959532RoomCode_9546GDPlayerBulletObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 300, null);
}
}
{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1[i].getBehavior("Object3D").setCenterZInScene((( gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[0].getBehavior("Object3D").getDepth()) / 2);
}
}
{for(var i = 0, len = gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1[i].getBehavior("FireBullet").SetBulletQuantityOp(1, null);
}
}
}

}


};

gdjs.Simply_32Jam_32RoomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Simply_32Jam_32RoomCode.GDMoveJoystickObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDMoveJoystickObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDCameraObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDCameraObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDRepeatingBackgroundObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDRepeatingBackgroundObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayer3DoObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayer3DoObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDCursorObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDCursorObjects2.length = 0;

gdjs.Simply_32Jam_32RoomCode.eventsList0(runtimeScene);
gdjs.Simply_32Jam_32RoomCode.GDMoveJoystickObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDMoveJoystickObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDCameraObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDCameraObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDRepeatingBackgroundObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDRepeatingBackgroundObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayer3DoObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayer3DoObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDEnemyObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayerBulletObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDPlayerObjects2.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDCursorObjects1.length = 0;
gdjs.Simply_32Jam_32RoomCode.GDCursorObjects2.length = 0;


return;

}

gdjs['Simply_32Jam_32RoomCode'] = gdjs.Simply_32Jam_32RoomCode;
