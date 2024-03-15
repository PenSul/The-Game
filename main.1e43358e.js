// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = exports.CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    PLAY: "PLAY",
    HOWTOPLAY: "HOWTOPLAY"
  },
  IMAGES: {
    LOAD: "Logo.png",
    PLAY: "PlayButton.png",
    HOWTOPLAY: "HowToPlayButton.png",
    BACKGROUND1: "background_layer_1.png",
    BACKGROUND2: "background_layer_2.png",
    BACKGROUND3: "background_layer_3.png"
  },
  AUDIOS: {
    TITLE: "Knight_LoadScene_Music.mp3"
  },
  SPRITES: {
    KNIGHT_RUN: "_Run.png"
  }
};
},{}],"src/Scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;
var _CST = require("../CST.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var LoadScene = exports.LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);
  function LoadScene() {
    _classCallCheck(this, LoadScene);
    return _callSuper(this, LoadScene, [{
      key: _CST.CST.SCENES.LOAD
    }]);
  }
  // No update needed for LoadScene.
  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      // Load atlas
      this.load.atlas("Effects", "./assets/EffectSprites/effects.png", "./assets/EffectSprites/effects_atlas.json");
      this.load.atlas("Characters", "./assets/CharactersSprites/Characters.png", "./assets/CharactersSprites/Characters.json");
      this.load.atlas("Simple_Characters_Enemy", "./assets/CharactersSprites/Simple_Characters_Enemy.png", "./assets/CharactersSprites/Simple_Characters_Enemy.json");
      this.load.atlas("Simple_Characters_Enemy_2", "./assets/CharactersSprites/Simple_Characters_Enemy_2.png", "./assets/CharactersSprites/Simple_Characters_Enemy_2.json");
      this.load.atlas("FlyingEye", "./assets/CharactersSprites/FlyingEye.png", "./assets/CharactersSprites/FlyingEye.json");
      this.load.atlas("Goblin", "./assets/CharactersSprites/Goblin.png", "./assets/CharactersSprites/Goblin.json");
      this.load.atlas("Knight", "./assets/CharactersSprites/Knight.png", "./assets/CharactersSprites/Knight.json");
      this.load.atlas("Mushroom", "./assets/CharactersSprites/Mushroom.png", "./assets/CharactersSprites/Mushroom.json");
      this.load.atlas("Skeleton", "./assets/CharactersSprites/Skeleton.png", "./assets/CharactersSprites/Skeleton.json");

      // Load image, spritesheet, sound for Load and Menu Scene
      this.load.image("background_layer_1", "./assets/oak_woods_v1.0/background/background_layer_1.png");
      this.load.image("background_layer_2", "./assets/oak_woods_v1.0/background/background_layer_2.png");
      this.load.image("background_layer_3", "./assets/oak_woods_v1.0/background/background_layer_3.png");
      this.load.image("Logo", "./assets/Knight_LoadScene/Logo.png");
      this.load.image("PlayButton", "./assets/Knight_LoadScene/PlayButton.png");
      this.load.image("HowToPlayButton", "./assets/Knight_LoadScene/HowToPlayButton.png");
      this.load.image("HowToPlay", "./assets/Knight_LoadScene/HowToPlay.png");
      this.load.audio("Knight_LoadScene_BGM", "./assets/Knight_LoadScene/Knight_LoadScene_Music.mp3");

      // Loading Bar cuz why not, its more fancy :)
      var progressBar = this.add.graphics();
      var progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(240, 270, 680, 50);
      var width = this.cameras.main.width;
      var height = this.cameras.main.height;
      var loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 42.5,
        text: 'Loading...',
        style: {
          font: '24px monospace',
          fill: '#ffffff'
        }
      });
      loadingText.setOrigin(0.5, 0.5);
      var percentText = this.make.text({
        x: width / 2 - 15,
        y: height / 2 + 20,
        text: '0%',
        style: {
          font: '20px monospace',
          fill: '#ffffff'
        }
      });
      percentText.setOrigin(0.5, 0.5);
      var assetText = this.make.text({
        x: width / 2 - 20,
        y: height / 2 + 65,
        text: '',
        style: {
          font: '18px monospace',
          fill: '#ffffff'
        }
      });
      assetText.setOrigin(0.5, 0.5);
      this.load.on('progress', function (value) {
        setTimeout(function () {
          percentText.setText(parseInt(value * 100) + '%');
          progressBar.clear();
          progressBar.fillStyle(0xffffff, 1);
          progressBar.fillRect(250, 280, 660 * value, 30);
        }, 400);
      });
      this.load.on('fileprogress', function (file) {
        setTimeout(function () {
          assetText.setText('Loading asset: ' + file.key);
        }, 400);
      }, this);
      this.load.on('complete', function () {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }]);
  return LoadScene;
}(Phaser.Scene);
},{"../CST.js":"src/CST.js"}],"src/Scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;
var _CST = require("../CST.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var MenuScene = exports.MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);
  function MenuScene() {
    _classCallCheck(this, MenuScene);
    return _callSuper(this, MenuScene, [{
      key: _CST.CST.SCENES.MENU
    }]);
  }
  _createClass(MenuScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;
      //Create all kind of shit here like images and sprites here, and make interactive button.
      //All kind of shit 
      // Images 
      this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "Logo").setDepth(1).setScale(2);
      this.add.image(0, 0, "background_layer_1").setOrigin(0).setScale(3.75).setDepth(0);
      this.add.image(0, 0, "background_layer_2").setOrigin(0).setScale(3.75).setDepth(0);
      this.add.image(0, 0, "background_layer_3").setOrigin(0).setScale(3.75).setDepth(0);
      var play = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "PlayButton").setDepth(1);
      var HowToPlayButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 55, "HowToPlayButton").setDepth(1);
      var HowToPlay = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "HowToPlay").setVisible(false).setDepth(1).setScale(0.7);

      // Sprites
      var hoverSprites = this.add.sprite(100, 100, "_Run");
      hoverSprites.setScale(1.5);
      hoverSprites.setVisible(false);

      // Animation
      this.anims.create({
        key: "KnightMenuRun",
        frameRate: 20,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_KnightRun_00",
          suffix: ".png",
          start: 0,
          end: 9
        }),
        repeat: -1
      });

      // Music
      // this.sound.pauseOnBlur = false; <------ Delete the // when finish cuz this is annoying

      // ------------------------------------------------------------------------------------------------------------------
      // The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.
      // ------------------------------------------------------------------------------------------------------------------
      // The above Error will show up in the console and I know its annoying but it doesnt kill you?
      // See The Chrome Autoplay Policy change: https://developer.chrome.com/blog/autoplay

      this.sound.play("Knight_LoadScene_BGM", {
        loop: true,
        volume: 0.15
      });

      //Interactive thingy
      /** PointersEvent:
       * pointerover - hovering
       * pointerout - not hovering
       * pointerup - click and release
       * pointerdown - just click
       */

      // PlayButton
      play.setInteractive();
      play.on("pointerover", function () {
        hoverSprites.setVisible(true);
        hoverSprites.play("KnightMenuRun");
        hoverSprites.x = play.x - play.width;
        hoverSprites.y = play.y - 50;
      });
      play.on("pointerout", function () {
        hoverSprites.setVisible(false);
      });
      play.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.PLAY);
      });
      // HowToPlayButton
      HowToPlayButton.setInteractive();
      HowToPlayButton.on("pointerover", function () {
        HowToPlay.setVisible(true);
      });
      HowToPlayButton.on("pointerout", function () {
        HowToPlay.setVisible(false);
      });
    }
  }]);
  return MenuScene;
}(Phaser.Scene);
},{"../CST.js":"src/CST.js"}],"src/EnemySprites.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnemySprites = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var EnemySprites = exports.EnemySprites = /*#__PURE__*/function (_Phaser$Physics$Arcad) {
  _inherits(EnemySprites, _Phaser$Physics$Arcad);
  function EnemySprites(scene, x, y, texture, hp, attackdamage, speed, exp) {
    var _this;
    _classCallCheck(this, EnemySprites);
    _this = _callSuper(this, EnemySprites, [scene, x, y, texture]);
    _this.hp = hp;
    _this.attackdamage = attackdamage;
    _this.speed = speed;
    _this.exp = exp;
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));
    scene.physics.world.enableBody(_assertThisInitialized(_this));

    // Goblin
    if (texture === 'Character_Goblin') {
      _this.hp = 6;
      _this.speed = 30;
      _this.attackdamage = 1;
      _this.exp = 2; // 10 for testing, o2
      _this.setSize(40, 40, true);
    }
    // Skeleton
    if (texture === 'Character_Skeleton') {
      _this.hp = 12;
      _this.speed = 60;
      _this.attackdamage = 2;
      _this.exp = 4; // 10 for testing, o4
      _this.setSize(40, 40, true);
    }
    // FlyingEye
    if (texture === 'Character_FlyingEye') {
      _this.hp = 15;
      _this.speed = 50;
      _this.attackdamage = 3;
      _this.exp = 6; // 10 for testing, o6
      _this.setSize(40, 40, true);
    }
    // Mushroom
    if (texture === 'Character_Mushroom') {
      _this.hp = 20;
      _this.speed = 40;
      _this.attackdamage = 4;
      _this.exp = 2; // 10 for testing, o2
      _this.setSize(40, 40, true);
    }
    return _this;
  }
  return _createClass(EnemySprites);
}(Phaser.Physics.Arcade.Sprite);
},{}],"src/KnightSprites.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KnightSprites = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var KnightSprites = exports.KnightSprites = /*#__PURE__*/function (_Phaser$Physics$Arcad) {
  _inherits(KnightSprites, _Phaser$Physics$Arcad);
  function KnightSprites(scene, x, y, texture, hp, exp, level, nextlevelexp, attackdamage, burndamage, burnrange) {
    var _this;
    _classCallCheck(this, KnightSprites);
    _this = _callSuper(this, KnightSprites, [scene, x, y, texture]);
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));
    scene.physics.world.enableBody(_assertThisInitialized(_this));
    _this.hp = hp;
    _this.exp = exp;
    _this.level = level;
    _this.nextlevelexp = nextlevelexp;
    _this.attackdamage = attackdamage;
    _this.burndamage = burndamage;
    _this.burnrange = burnrange;
    _this.setScale(1.25);
    return _this;
  }
  return _createClass(KnightSprites);
}(Phaser.Physics.Arcade.Sprite);
},{}],"src/Scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;
var _CST = require("../CST.js");
var _EnemySprites = require("../EnemySprites.js");
var _KnightSprites = require("../KnightSprites.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var PlayScene = exports.PlayScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);
  function PlayScene() {
    var _this;
    _classCallCheck(this, PlayScene);
    _this = _callSuper(this, PlayScene, [{
      key: _CST.CST.SCENES.PLAY
    }]);
    _this.stopwatchText = null;
    _this.startTime = 0;
    _this.elapsedTime = 0;
    return _this;
  }
  _createClass(PlayScene, [{
    key: "preload",
    value: function preload() {
      // Knight Attack
      this.anims.create({
        key: "KnightAttack",
        frameRate: 4,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_KnightAttack_00",
          suffix: ".png",
          start: 0,
          end: 3
        })
      });
      // Knight Idle
      this.anims.create({
        key: "KnightIdle",
        frameRate: 20,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_KnightIdle_00",
          suffix: ".png",
          start: 0,
          end: 9
        }),
        repeat: -1
      });
      // Knight Run
      this.anims.create({
        key: "KnightRun",
        frameRate: 20,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_KnightRun_00",
          suffix: ".png",
          start: 0,
          end: 9
        }),
        repeat: -1
      });
      // Knight Death
      this.anims.create({
        key: "KnightDeath",
        frameRate: 20,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_KnightDeath_00",
          suffix: ".png",
          start: 0,
          end: 9
        })
      });

      // Flying Eye Attack
      this.anims.create({
        key: "FlyingEyeAttack",
        frameRate: 16,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_FlyingEyeAttack_00",
          suffix: ".png",
          start: 0,
          end: 7
        })
      });
      // Flying Eye Death
      this.anims.create({
        key: "FlyingEyeDeath",
        frameRate: 8,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_FlyingEyeDeath_00",
          suffix: ".png",
          start: 0,
          end: 3
        })
      });
      // Flying Eye Flight
      this.anims.create({
        key: "FlyingEyeMove",
        frameRate: 16,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_FlyingEyeFlight_00",
          suffix: ".png",
          start: 0,
          end: 7
        }),
        repeat: -1
      });
      // Flying Eye Take Hit
      this.anims.create({
        key: "FlyingEyeTakeHit",
        frameRate: 8,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_FlyingEyeTakeHit_00",
          suffix: ".png",
          start: 0,
          end: 3
        })
      });

      // Goblin Attack
      this.anims.create({
        key: "GoblinAttack",
        frameRate: 16,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_GoblinAttack_00",
          suffix: ".png",
          start: 0,
          end: 7
        })
      });
      // Goblin Death
      this.anims.create({
        key: "GoblinDeath",
        frameRate: 8,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_GoblinDeath_00",
          suffix: ".png",
          start: 0,
          end: 3
        })
      });
      // Goblin Run
      this.anims.create({
        key: "GoblinMove",
        frameRate: 16,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_GoblinRun_00",
          suffix: ".png",
          start: 0,
          end: 7
        }),
        repeat: -1
      });
      // Goblin Take Hit
      this.anims.create({
        key: "GoblinTakeHit",
        frameRate: 8,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_GoblinTakeHit_00",
          suffix: ".png",
          start: 0,
          end: 3
        })
      });

      // Mushroom Attack
      this.anims.create({
        key: "MushroomAttack",
        frameRate: 16,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_MushroomAttack_00",
          suffix: ".png",
          start: 0,
          end: 7
        })
      });
      // Mushroom Death
      this.anims.create({
        key: "MushroomDeath",
        frameRate: 8,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_MushroomDeath_00",
          suffix: ".png",
          start: 0,
          end: 3
        })
      });
      // Mushroom Run
      this.anims.create({
        key: "MushroomMove",
        frameRate: 16,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_MushroomRun_00",
          suffix: ".png",
          start: 0,
          end: 7
        }),
        repeat: -1
      });
      // Mushroom Take Hit
      this.anims.create({
        key: "MushroomTakeHit",
        frameRate: 8,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_MushroomTakeHit_00",
          suffix: ".png",
          start: 0,
          end: 3
        })
      });

      // Skeleton Attack
      this.anims.create({
        key: "SkeletonAttack",
        frameRate: 16,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_SkeletonAttack_00",
          suffix: ".png",
          start: 0,
          end: 7
        })
      });
      // Skeleton Death
      this.anims.create({
        key: "SkeletonDeath",
        frameRate: 8,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_SkeletonDeath_00",
          suffix: ".png",
          start: 0,
          end: 3
        })
      });
      // Skeleton Take Hit
      this.anims.create({
        key: "SkeletonTakeHit",
        frameRate: 8,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_SkeletonTakeHit_00",
          suffix: ".png",
          start: 0,
          end: 3
        })
      });
      // Skeleton Walk
      this.anims.create({
        key: "SkeletonMove",
        frameRate: 16,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_SkeletonWalk_00",
          suffix: ".png",
          start: 0,
          end: 3
        }),
        repeat: -1
      });

      // Burn Effect
      this.anims.create({
        key: "BurnEffect",
        frameRate: 20,
        frames: this.anims.generateFrameNames("Effects", {
          prefix: "_burn_00",
          start: 0,
          end: 9
        })
      });

      // BurstOfIce Effect
      this.anims.create({
        key: "BurstOfIceEffect",
        frameRate: 14,
        frames: this.anims.generateFrameNames("Effects", {
          prefix: "_burstofice_00",
          start: 0,
          end: 6
        })
      });

      // Crystal Effect
      this.anims.create({
        key: "CrystalEffect",
        frameRate: 12,
        frames: this.anims.generateFrameNames("Effects", {
          prefix: "_crystal_00",
          start: 0,
          end: 5
        })
      });

      // CrystalProjectil Effect
      this.anims.create({
        key: "CrystalProjectileEffect",
        frameRate: 14,
        frames: this.anims.generateFrameNames("Effects", {
          prefix: "_crystalprojectil_00",
          start: 0,
          end: 6
        })
      });

      // Thunder Effect
      this.anims.create({
        key: "ThunderEffect",
        frameRate: 16,
        frames: this.anims.generateFrameNames("Effects", {
          prefix: "_thunder_00",
          start: 0,
          end: 7
        })
      });
      this.load.tilemapTiledJSON("mappy", "./assets/maps/mappy.json");
      this.load.image("terrain", "./assets/Knight_LoadScene/ashlands_tileset.png");
      this.load.image("PlayAgain", "./assets/Knight_LoadScene/PlayAgainButton.png");
    }
  }, {
    key: "create",
    value: function create() {
      var _this2 = this;
      this.textures.addSpriteSheetFromAtlas("Character_Knight", {
        frameWidth: 120,
        frameHeight: 80,
        atlas: "Simple_Characters_Enemy",
        frame: "Knight.png"
      });
      this.textures.addSpriteSheetFromAtlas("Character_FlyingEye", {
        frameWidth: 150,
        frameHeight: 150,
        atlas: "Simple_Characters_Enemy",
        frame: "FlyingEye.png"
      });
      this.textures.addSpriteSheetFromAtlas("Character_Goblin", {
        frameWidth: 150,
        frameHeight: 150,
        atlas: "Simple_Characters_Enemy",
        frame: "Goblin.png"
      });
      this.textures.addSpriteSheetFromAtlas("Character_Mushroom", {
        frameWidth: 150,
        frameHeight: 150,
        atlas: "Simple_Characters_Enemy",
        frame: "Mushroom.png"
      });
      this.textures.addSpriteSheetFromAtlas("Character_Skeleton", {
        frameWidth: 150,
        frameHeight: 150,
        atlas: "Simple_Characters_Enemy_2",
        frame: "Skeleton.png"
      });

      // Load Map
      var mappy = this.add.tilemap("mappy");
      var terrain = mappy.addTilesetImage("ashlands_tileset", "terrain");
      var bottomlayer = mappy.createLayer("Bottom", [terrain], 0, 0);
      var middlelayer = mappy.createLayer("Middle", [terrain], 0, 0);
      var toplayer = mappy.createLayer("Top", [terrain], 0, 0);

      // Character
      var Character_Knight = new _KnightSprites.KnightSprites(this, 960, 480, "Character_Knight", 200, 0, 1, 100, 15, 5, 150).setSize(25, 45, true).setOffset(40, 35);
      window.Character_Knight = Character_Knight;

      // Create shadow for the knight
      var shadow = this.add.graphics();
      shadow.fillStyle(0x000000, 0.5);
      shadow.fillEllipse(Character_Knight.x - 7, Character_Knight.y + 48, 15, 10);
      this.events.on("update", function () {
        shadow.clear();
        shadow.fillStyle(0x000000, 0.5);
        shadow.fillEllipse(Character_Knight.x - 7, Character_Knight.y + 48, 15, 10);
      });

      // Map physics
      this.physics.add.collider(Character_Knight, toplayer);
      toplayer.setCollisionByProperty({
        collides: true
      });
      this.cameras.main.startFollow(Character_Knight);
      this.physics.world.setBounds(0, 0, mappy.widthInPixels, mappy.heightInPixels);

      // Effect
      this.fireattack = this.physics.add.group();
      this.collidedEnemies = [];

      // Keyboard Input
      this.keyboard = this.input.keyboard.addKeys("W, A, S, D, J");

      // Stopwatch Text
      this.stopwatchText = this.add.text(this.cameras.main.width / 2, 10, "00:00:00", {
        fontFamily: "Monospace",
        fontSize: 24,
        color: "#ffffff"
      }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(1000);

      // HP Text
      this.hptext = this.add.text(10, 10, "HP: " + Character_Knight.hp, {
        fontFamily: "Monospace",
        fontSize: 24,
        color: "#ffffff"
      }).setOrigin(0, 0).setScrollFactor(0).setDepth(1000);

      // Level Text
      this.leveltext = this.add.text(this.cameras.main.width - 10, 10, "Level: " + Character_Knight.level, {
        fontFamily: "Monospace",
        fontSize: 24,
        color: "#ffffff"
      }).setOrigin(1, 0).setScrollFactor(0).setDepth(1000);

      // Exp Text
      this.exptext = this.add.text(50, 40, "Exp: " + Character_Knight.exp, {
        fontFamily: "Monospace",
        fontSize: 24,
        color: "#ffffff"
      }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(1000);

      // Start the stopwatch
      this.startStopwatch();

      // Enemies
      var spawnrate = 1000;
      this.enemies = this.physics.add.group();
      setInterval(function () {
        var x = Phaser.Math.Between(0, 1920);
        var y = Phaser.Math.Between(0, 960);
        var distance = Phaser.Math.Distance.Between(Character_Knight.x, Character_Knight.y, x, y);
        if (distance > 300) {
          var enemyTypes = [{
            name: "Character_Goblin",
            moveAnimation: "GoblinMove",
            attackAnimation: "GoblinAttack",
            hitAnimation: "GoblinTakeHit",
            deathAnimation: "GoblinDeath"
          }, {
            name: "Character_Skeleton",
            moveAnimation: "SkeletonMove",
            attackAnimation: "SkeletonAttack",
            hitAnimation: "SkeletonTakeHit",
            deathAnimation: "SkeletonDeath"
          }, {
            name: "Character_FlyingEye",
            moveAnimation: "FlyingEyeMove",
            attackAnimation: "FlyingEyeAttack",
            hitAnimation: "FlyingEyeTakeHit",
            deathAnimation: "FlyingEyeDeath"
          }, {
            name: "Character_Mushroom",
            moveAnimation: "MushroomMove",
            attackAnimation: "MushroomAttack",
            hitAnimation: "MushroomTakeHit",
            deathAnimation: "MushroomDeath"
          }];
          var enemy = Phaser.Math.Between(0, enemyTypes.length - 1);
          var enemyType = enemyTypes[enemy];
          var enemySprite = new _EnemySprites.EnemySprites(_this2, x, y, enemyType.name, _this2.hp, _this2.attackdamage, _this2.speed, _this2.exp);
          _this2.enemies.add(enemySprite);
          enemySprite.flipX = Character_Knight.x < enemySprite.x;
          enemySprite.play(enemyType.moveAnimation, true);
          _this2.physics.add.collider(_this2.fireattack, enemySprite, function (fire, enemySprite) {
            if (!fire.collidedEnemies) {
              fire.collidedEnemies = [];
            }
            if (!enemySprite.isCollided) {
              enemySprite.isCollided = true;
              enemySprite.attackExp = enemySprite.exp;
              fire.collidedEnemies.push(enemySprite);
            }
            if (fire.collidedEnemies.length === enemySprite.length) {
              fire.collidedEnemies.forEach(function (enemy) {
                enemy.destroy();
                Character_Knight.exp += enemy.attackExp;
              });
              checkKnightLevelUp();
              fire.destroy();
            }
          });
          _this2.physics.add.collider(Character_Knight, enemySprite, function () {
            if (Character_Knight.anims.currentAnim.key === "KnightAttack") {
              enemySprite.anims.stop();
              enemySprite.flipX = Character_Knight.x < enemySprite.x;
              enemySprite.play(enemyType.hitAnimation);
              enemySprite.hp -= Character_Knight.attackdamage;
              enemySprite.once("animationcomplete-" + enemyType.hitAnimation, function () {
                enemySprite.flipX = Character_Knight.x < enemySprite.x;
                if (enemySprite.hp > 0) {
                  enemySprite.play(enemyType.moveAnimation, true);
                } else {
                  enemySprite.anims.stop();
                  enemySprite.play(enemyType.deathAnimation);
                  Character_Knight.exp += enemySprite.exp;
                  checkKnightLevelUp();
                  enemySprite.once("animationcomplete-" + enemyType.deathAnimation, function () {
                    enemySprite.destroy();
                  });
                }
              });
            } else if (enemySprite.anims.currentAnim.key !== enemyType.attackAnimation) {
              if (!enemySprite.isAttacking) {
                enemySprite.anims.stop();
                enemySprite.flipX = Character_Knight.x < enemySprite.x;
                enemySprite.play(enemyType.attackAnimation);
                Character_Knight.hp -= enemySprite.attackdamage;
                enemySprite.isAttacking = true;
                enemySprite.once("animationcomplete-" + enemyType.attackAnimation, function () {
                  enemySprite.flipX = Character_Knight.x < enemySprite.x;
                  enemySprite.play(enemyType.moveAnimation, true);
                  setTimeout(function () {
                    enemySprite.isAttacking = false;
                  }, 1500);
                });
              }
            }
          });
        }
      }, spawnrate);
      function checkKnightLevelUp() {
        if (Character_Knight.exp >= Character_Knight.nextlevelexp) {
          Character_Knight.level++;
          Character_Knight.exp -= Character_Knight.nextlevelexp;
          Character_Knight.burnrange += 5;
          Character_Knight.burndamage += 0.5;
          Character_Knight.nextlevelexp = Math.floor(Character_Knight.nextlevelexp * 1.5);
        }
      }

      // Auto burn effect
      setInterval(function () {
        var enemiesInRange = _this2.enemies.getChildren().filter(function (enemy) {
          var distance = Phaser.Math.Distance.Between(Character_Knight.x, Character_Knight.y, enemy.x, enemy.y);
          return distance <= Character_Knight.burnrange;
        });
        if (enemiesInRange.length > 0) {
          var randomEnemy = Phaser.Utils.Array.GetRandom(enemiesInRange);
          var fire = _this2.physics.add.sprite(randomEnemy.x, randomEnemy.y, "BurnEffect").play("BurnEffect").setOffset(55, 55);
          _this2.fireattack.add(fire);
          fire.once('animationcomplete', function () {
            fire.destroy();
          });
          randomEnemy.hp -= Character_Knight.burndamage;
          if (randomEnemy.hp <= 0) {
            Character_Knight.exp += randomEnemy.exp;
            randomEnemy.destroy();
          }
        }
        checkKnightLevelUp();
      }, 500);
      this.collidedEnemies.forEach(function (enemySprite) {
        Character_Knight.exp += enemySprite.exp;
        checkKnightLevelUp();
      });
      this.collidedEnemies = [];
    }
  }, {
    key: "update",
    value: function update() {
      this.enemies.getChildren().forEach(function (enemy) {
        // Calculate the vector from enemy to player
        var directionX = Character_Knight.x - enemy.x;
        var directionY = Character_Knight.y - enemy.y;

        // Normalize the vector
        var length = Math.sqrt(directionX * directionX + directionY * directionY);
        directionX /= length;
        directionY /= length;

        // Set the enemy's velocity based on the fixed speed
        var speed = enemy.speed;
        enemy.body.velocity.x = directionX * speed;
        enemy.body.velocity.y = directionY * speed;
        enemy.flipX = Character_Knight.x < enemy.x;
      });

      // Knight Movement
      if (this.keyboard.W.isDown) {
        Character_Knight.setVelocityY(-100);
        Character_Knight.anims.play("KnightRun", true);
      } else if (this.keyboard.A.isDown) {
        Character_Knight.setFlipX(true);
        Character_Knight.setOffset(52, 35);
        Character_Knight.setVelocityX(-100);
        Character_Knight.anims.play("KnightRun", true);
      } else if (this.keyboard.S.isDown) {
        Character_Knight.setVelocityY(100);
        Character_Knight.anims.play("KnightRun", true);
      } else if (this.keyboard.D.isDown) {
        Character_Knight.setFlipX(false);
        Character_Knight.setOffset(42, 35);
        Character_Knight.setVelocityX(100);
        Character_Knight.anims.play("KnightRun", true);
      } else if (this.keyboard.J.isDown) {
        Character_Knight.setVelocityX(0).setVelocityY(0);
        Character_Knight.anims.play("KnightAttack", {
          onComplete: function onComplete() {
            Character_Knight.anims.play("KnightIdle", true);
          }
        });
      } else {
        Character_Knight.setVelocityX(0).setVelocityY(0);
        Character_Knight.anims.play("KnightIdle", true);
      }
      ;

      // Timer
      var elapsedSeconds = Math.floor(this.elapsedTime / 1000);
      var hours = Math.floor(elapsedSeconds / 3600);
      var minutes = Math.floor(elapsedSeconds % 3600 / 60);
      var seconds = elapsedSeconds % 60;
      var formattedTime = "Time: ".concat(this.padZero(hours), ":").concat(this.padZero(minutes), ":").concat(this.padZero(seconds));
      this.stopwatchText.setText(formattedTime);
      this.elapsedTime = this.getTimeElapsed();

      // Hp and Level
      this.hptext.setText("HP: " + Character_Knight.hp);
      this.leveltext.setText("Level: " + Character_Knight.level);
      this.exptext.setText("EXP: " + Character_Knight.exp);

      // Check Knight HP
      if (Character_Knight.hp <= 0) {
        Character_Knight.body.setVelocity(0);
        Character_Knight.anims.isPlaying = false;
        this.enemies.getChildren().forEach(function (enemy) {
          enemy.body.setVelocity(0);
          enemy.anims.isPlaying = false;
        });
        var playagainbutton = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "PlayAgain").setInteractive().setScale(2).setScrollFactor(0).setDepth(1000);
        playagainbutton.on("pointerdown", function () {
          window.location.reload();
        });
      }
    }
  }, {
    key: "startStopwatch",
    value: function startStopwatch() {
      this.startTime = this.getTimeElapsed();
    }
  }, {
    key: "getTimeElapsed",
    value: function getTimeElapsed() {
      return new Date().getTime() - this.startTime;
    }
  }, {
    key: "padZero",
    value: function padZero(number) {
      return number.toString().padStart(2, "0");
    }
  }]);
  return PlayScene;
}(Phaser.Scene);
},{"../CST.js":"src/CST.js","../EnemySprites.js":"src/EnemySprites.js","../KnightSprites.js":"src/KnightSprites.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./Scenes/LoadScene.js");
var _MenuScene = require("./Scenes/MenuScene.js");
var _PlayScene = require("./Scenes/PlayScene.js");
/**Tab for ease coding */
/** @type {import("../typings/phaser")} */

var game = new Phaser.Game({
  width: 1200,
  height: 675,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _PlayScene.PlayScene],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
});
},{"./Scenes/LoadScene.js":"src/Scenes/LoadScene.js","./Scenes/MenuScene.js":"src/Scenes/MenuScene.js","./Scenes/PlayScene.js":"src/Scenes/PlayScene.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61417" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map