
gdjs.evtsExt__BG__BGBehavior = gdjs.evtsExt__BG__BGBehavior || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__BG__BGBehavior.BGBehavior = class BGBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__BG__BGBehavior.BGBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Tween !== undefined)
      this._behaviorData.Tween = behaviorOverriding.Tween;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Tween: this._behaviorData.Tween,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Tween !== undefined)
      this._behaviorData.Tween = networkSyncData.props.Tween;
  }

  // Properties:
  
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__BG__BGBehavior.BGBehavior.SharedData = class BGBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__BG__BGBehavior.BGBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._BG_BGBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._BG_BGBehaviorSharedData = new gdjs.evtsExt__BG__BGBehavior.BGBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._BG_BGBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__BG__BGBehavior.BGBehavior.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__BG__BGBehavior.BGBehavior.prototype.doStepPreEventsContext.idToCallbackMap = new Map();


gdjs.evtsExt__BG__BGBehavior.BGBehavior.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__BG__BGBehavior.BGBehavior.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BG"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BG"),
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


gdjs.evtsExt__BG__BGBehavior.BGBehavior.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);


return;
}


gdjs.registerBehavior("BG::BGBehavior", gdjs.evtsExt__BG__BGBehavior.BGBehavior);
