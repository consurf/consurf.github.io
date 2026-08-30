gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDCameraObjects1= [];
gdjs.Game_32SceneCode.GDCameraObjects2= [];
gdjs.Game_32SceneCode.GDRepeatingBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDRepeatingBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDPlayer3DoObjects1= [];
gdjs.Game_32SceneCode.GDPlayer3DoObjects2= [];
gdjs.Game_32SceneCode.GDEnemyObjects1= [];
gdjs.Game_32SceneCode.GDEnemyObjects2= [];
gdjs.Game_32SceneCode.GDPlayerBulletObjects1= [];
gdjs.Game_32SceneCode.GDPlayerBulletObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDCursorObjects1= [];
gdjs.Game_32SceneCode.GDCursorObjects2= [];
gdjs.Game_32SceneCode.GDLineLightJoystickObjects1= [];
gdjs.Game_32SceneCode.GDLineLightJoystickObjects2= [];
gdjs.Game_32SceneCode.GDEnemy2Objects1= [];
gdjs.Game_32SceneCode.GDEnemy2Objects2= [];
gdjs.Game_32SceneCode.GDCamera2Objects1= [];
gdjs.Game_32SceneCode.GDCamera2Objects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32SceneCode.GDEnemy2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLineLightJoystickObjects1Objects = Hashtable.newFrom({"LineLightJoystick": gdjs.Game_32SceneCode.GDLineLightJoystickObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects1Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Game_32SceneCode.GDPlayerBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects1Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Game_32SceneCode.GDPlayerBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32SceneCode.GDEnemy2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32SceneCode.GDEnemy2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects1Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Game_32SceneCode.GDPlayerBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32SceneCode.GDEnemy2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32SceneCode.GDEnemy2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32SceneCode.GDEnemy2Objects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.Game_32SceneCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCameraObjects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("RepeatingBackground"), gdjs.Game_32SceneCode.GDRepeatingBackgroundObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRepeatingBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRepeatingBackgroundObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - gdjs.evtTools.common.mod(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), 320) + 160,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - gdjs.evtTools.common.mod(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 320) - 320);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "EnemySpawn", 0.48, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDEnemy2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getX()) + (gdjs.randomWithStep(-1, 1, 2) * gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 1.5), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getY()) + (gdjs.randomWithStep(-1, 1, 2) * gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 1.5) - 100, "");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32SceneCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemy2Objects1[i].addForceTowardObject((gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), 100, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Game_32SceneCode.GDLineLightJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLineLightJoystickObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "ShotReload", 0.1, null);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 300, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerBulletObjects1[i].getBehavior("Object3D").setCenterZInScene((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("Object3D").getDepth()) / 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32SceneCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Game_32SceneCode.GDPlayerBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemy2Objects1 */
/* Reuse gdjs.Game_32SceneCode.GDPlayerBulletObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Metal Hit 4.mp3", false, 100, gdjs.randomFloatInRange(1.5, 2));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemy2Objects1[i].returnVariable(gdjs.Game_32SceneCode.GDEnemy2Objects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(0.1);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32SceneCode.GDEnemy2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemy2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemy2Objects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDEnemy2Objects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemy2Objects1[k] = gdjs.Game_32SceneCode.GDEnemy2Objects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemy2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemy2Objects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32SceneCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").SetBulletQuantityOp(10, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 300, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerBulletObjects1[i].getBehavior("Object3D").setCenterZInScene((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("Object3D").getDepth()) / 2);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").SetBulletQuantityOp(1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RBracket");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Simply Jam Room", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32SceneCode.GDEnemy2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemy2Objects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemy2Objects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects1Objects, false);
}
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDCameraObjects1.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects2.length = 0;
gdjs.Game_32SceneCode.GDRepeatingBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDRepeatingBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayer3DoObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayer3DoObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDCursorObjects1.length = 0;
gdjs.Game_32SceneCode.GDCursorObjects2.length = 0;
gdjs.Game_32SceneCode.GDLineLightJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDLineLightJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects1.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects2.length = 0;
gdjs.Game_32SceneCode.GDCamera2Objects1.length = 0;
gdjs.Game_32SceneCode.GDCamera2Objects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDCameraObjects1.length = 0;
gdjs.Game_32SceneCode.GDCameraObjects2.length = 0;
gdjs.Game_32SceneCode.GDRepeatingBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDRepeatingBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayer3DoObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayer3DoObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDCursorObjects1.length = 0;
gdjs.Game_32SceneCode.GDCursorObjects2.length = 0;
gdjs.Game_32SceneCode.GDLineLightJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDLineLightJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects1.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects2.length = 0;
gdjs.Game_32SceneCode.GDCamera2Objects1.length = 0;
gdjs.Game_32SceneCode.GDCamera2Objects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
