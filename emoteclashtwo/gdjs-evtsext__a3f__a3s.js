
gdjs.evtsExt__A3F__A3S = gdjs.evtsExt__A3F__A3S || {};

/**
 * Behavior generated from Advanced 3D Sound
 */
gdjs.evtsExt__A3F__A3S.A3S = class A3S extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__A3F__A3S.A3S.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from Advanced 3D Sound
 */
gdjs.evtsExt__A3F__A3S.A3S.SharedData = class A3SSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__A3F__A3S.A3S.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._A3F_A3SSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._A3F_A3SSharedData = new gdjs.evtsExt__A3F__A3S.A3S.SharedData(
      initialData
    );
  }
  return instanceContainer._A3F_A3SSharedData;
}

// Methods:
gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext = {};
gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.userFunc0x1f2d178 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
Object3D.userData.audios = [];


};
gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.userFunc0x1f2d178(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("A3F"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("A3F"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__A3S.A3S.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext = {};
gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.userFunc0x1f25228 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
for (const A of Object3D.userData.audios) {
    A.stop();
    A.disconnect();
}
Object3D.userData.audios.length = 0;


};
gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.userFunc0x1f25228(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("A3F"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("A3F"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__A3S.A3S.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext = {};
gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.GDObjectObjects1= [];


gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.userFunc0x1f25228 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
const Sound = eventsFunctionContext.getArgument("Sound");
const Volume = eventsFunctionContext.getArgument("Volume") * 0.01;
const Loop = eventsFunctionContext.getArgument("Loop");
const Range = eventsFunctionContext.getArgument("Range");
//
const AudioListener = gdjs._A3F.AudioListener;
if (!AudioListener) {
    return;
}
// 既存確認（同一ソース・再生完了を探す）
for (const A of Object3D.userData.audios) {
    if (!A.isPlaying) {
        if (A.userData.sourceFile == Sound) {
            // 再利用
            A.setMaxDistance(Range);
            A.setVolume(Volume);
            A.setLoop(Loop);
            A.play();
            return;
        }
    }
}
// 新PositionalAudio生成
const PositionalAudio = new THREE.PositionalAudio(AudioListener);
PositionalAudio.setDistanceModel('linear');// 'linear' | 'inverse' | 'exponential'
// PositionalAudio.setRefDistance(1);// この距離あたりを基準に聞こえる
// PositionalAudio.setRolloffFactor(1);// 距離減衰の強さ
PositionalAudio.setMaxDistance(Range);
PositionalAudio.setVolume(Volume);
PositionalAudio.setLoop(Loop);
PositionalAudio.userData.sourceFile = Sound;
//
Object3D.add(PositionalAudio);
Object3D.userData.audios.push(PositionalAudio);
// キャッシュ確認
if (gdjs._A3F.AudioBufferCache.has(Sound)) {
    // キャッシュを利用
    PositionalAudio.setBuffer(gdjs._A3F.AudioBufferCache.get(Sound));
    PositionalAudio.play();
    return;
}
// three.jsでサウンドを読み込む
const Resource = runtimeScene.getGame().getResourceLoader().getResource(Sound);
new THREE.AudioLoader().load(Resource.file, (Buffer) => {
    PositionalAudio.setBuffer(Buffer);
    PositionalAudio.play();
    gdjs._A3F.AudioBufferCache.set(Sound, Buffer);
});


};
gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.GDObjectObjects1;
gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.userFunc0x1f25228(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__A3S.A3S.prototype.Play = function(Sound, Volume, Loop, Range, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("A3F"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("A3F"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Sound") return Sound;
if (argName === "Volume") return Volume;
if (argName === "Loop") return Loop;
if (argName === "Range") return Range;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__A3S.A3S.prototype.PlayContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext = {};
gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.GDObjectObjects1= [];


gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.userFunc0x1f25228 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
//
for (const A of Object3D.userData.audios) {
    A.stop();
}


};
gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.GDObjectObjects1;
gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.userFunc0x1f25228(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAll = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("A3F"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("A3F"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__A3S.A3S.prototype.StopAllContext.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__A3F__A3S.A3S.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("A3F::A3S", gdjs.evtsExt__A3F__A3S.A3S);
