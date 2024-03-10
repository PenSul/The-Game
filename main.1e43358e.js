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
    PK: "PK",
    OPTION: "OPTION"
  },
  IMAGES: {
    LOAD: "Logo.png",
    OPTION: "OptionButton.png",
    PLAY: "PlayButton.png",
    PK: "PKModeButton.png",
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
      this.load.atlas("Characters", "./assets/CharactersSprites/Characters.png", "./assets/CharactersSprites/Characters.json");
      this.load.atlas("Simple_Characters_Enemy", "./assets/CharactersSprites/Simple_Characters_Enemy.png", "./assets/CharactersSprites/Simple_Characters_Enemy.json");
      this.load.atlas("Simple_Characters_Enemy_2", "./assets/CharactersSprites/Simple_Characters_Enemy_2.png", "./assets/CharactersSprites/Simple_Characters_Enemy_2.json");
      this.load.atlas("Simple_Characters_Boss_1", "./assets/CharactersSprites/Simple_Characters_Boss_1.png", "./assets/CharactersSprites/Simple_Characters_Boss_1.json");
      this.load.atlas("Simple_Characters_Boss_2", "./assets/CharactersSprites/Simple_Characters_Boss_2.png", "./assets/CharactersSprites/Simple_Characters_Boss_2.json");
      this.load.atlas("Simple_Characters_Boss_3", "./assets/CharactersSprites/Simple_Characters_Boss_3.png", "./assets/CharactersSprites/Simple_Characters_Boss_3.json");
      this.load.atlas("BringerOfDeath", "./assets/CharactersSprites/BringerOfDeath.png", "./assets/CharactersSprites/BringerOfDeath.json");
      this.load.atlas("DemonSlime", "./assets/CharactersSprites/DemonSlime.png", "./assets/CharactersSprites/DemonSlime.json");
      this.load.atlas("FlyingEye", "./assets/CharactersSprites/FlyingEye.png", "./assets/CharactersSprites/FlyingEye.json");
      this.load.atlas("FrostGuardian", "./assets/CharactersSprites/FrostGuardian.png", "./assets/CharactersSprites/FrostGuardian.json");
      this.load.atlas("Goblin", "./assets/CharactersSprites/Goblin.png", "./assets/CharactersSprites/Goblin.json");
      this.load.atlas("Knight", "./assets/CharactersSprites/Knight.png", "./assets/CharactersSprites/Knight.json");
      this.load.atlas("Mushroom", "./assets/CharactersSprites/Mushroom.png", "./assets/CharactersSprites/Mushroom.json");
      this.load.atlas("Skeleton", "./assets/CharactersSprites/Skeleton.png", "./assets/CharactersSprites/Skeleton.json");

      // Load image, spritesheet, sound for Load and Menu Scene
      this.load.image("background_layer_1", "./assets/oak_woods_v1.0/background/background_layer_1.png");
      this.load.image("background_layer_2", "./assets/oak_woods_v1.0/background/background_layer_2.png");
      this.load.image("background_layer_3", "./assets/oak_woods_v1.0/background/background_layer_3.png");
      this.load.image("Logo", "./assets/Knight_LoadScene/Logo.png");
      this.load.image("OptionButton", "./assets/Knight_LoadScene/OptionButton.png");
      this.load.image("PlayButton", "./assets/Knight_LoadScene/PlayButton.png");
      this.load.image("PKModeButton", "./assets/Knight_LoadScene/PKModeButton.png");
      this.load.audio("Knight_LoadScene_BGM", "./assets/Knight_LoadScene/Knight_LoadScene_Music.mp3");
      this.load.spritesheet("_Run", "./assets/FreeKnight_v1/Colour1/NoOutline/120x80_PNGSheets/_Run.png", {
        frameWidth: 120,
        frameHeight: 80
      });

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
      var pk = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 55, "PKModeButton").setDepth(1);
      var option = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 130, "OptionButton").setDepth(1);

      // Sprites
      var hoverSprites = this.add.sprite(100, 100, "_Run");
      hoverSprites.setScale(1.5);
      hoverSprites.setVisible(false);

      // Animation
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

      // Music
      // this.sound.pauseOnBlur = false; <------ Delete the // when finish cuz this is annoying

      // ------------------------------------------------------------------------------------------------------------------
      // The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.
      // ------------------------------------------------------------------------------------------------------------------
      // The above Error will show up in the console and I know its annoying but it doesnt kill you?
      // See The Chrome Autoplay Policy change: https://developer.chrome.com/blog/autoplay

      this.sound.play("Knight_LoadScene_BGM", {
        loop: true,
        volume: 0.15 // Change this to 1 or 0.5 when finish <-------------------
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
        hoverSprites.play("KnightRun");
        hoverSprites.x = play.x - play.width;
        hoverSprites.y = play.y - 50;
      });
      play.on("pointerout", function () {
        hoverSprites.setVisible(false);
      });
      play.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.PLAY);
      });
      //OptionButoon
      option.setInteractive();
      option.on("pointerover", function () {
        hoverSprites.setVisible(true);
        hoverSprites.play("KnightRun");
        hoverSprites.x = option.x - option.width;
        hoverSprites.y = option.y - 50;
      });
      option.on("pointerout", function () {
        hoverSprites.setVisible(false);
      });
      option.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.OPTION);
      });
      //PKModeButton
      pk.setInteractive();
      pk.on("pointerover", function () {
        hoverSprites.setVisible(true);
        hoverSprites.play("KnightRun");
        hoverSprites.x = pk.x - pk.width;
        hoverSprites.y = pk.y - 50;
      });
      pk.on("pointerout", function () {
        hoverSprites.setVisible(false);
      });
      pk.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.PK);
      });
    }
  }]);
  return MenuScene;
}(Phaser.Scene);
},{"../CST.js":"src/CST.js"}],"src/Scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;
var _CST = require("../CST.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
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
    _this.gameEvents = [{
      time: 10,
      event: _this.performEvent1.bind(_assertThisInitialized(_this))
    }, {
      time: 30,
      event: _this.performEvent2.bind(_assertThisInitialized(_this))
    }, {
      time: 60,
      event: _this.performEvent3.bind(_assertThisInitialized(_this))
    }];
    _this.gameObjects = [{
      key: "Character_FlyingEye",
      texture: "FlyingEye.png"
    }, {
      key: "Character_Goblin",
      texture: "Goblin.png"
    }, {
      key: "Character_Mushroom",
      texture: "Mushroom.png"
    }, {
      key: "Character_Skeleton",
      texture: "Skeleton.png"
    }, {
      key: "Character_BringerOfDeath",
      texture: "BringerOfDeath.png"
    }, {
      key: "Character_FrostGuardian",
      texture: "FrostGuardian.png"
    }, {
      key: "Character_DemonSlime",
      texture: "DemonSlime.png"
    }
    // Add more game objects here
    ];
    return _this;
  }
  _createClass(PlayScene, [{
    key: "preload",
    value: function preload() {
      // Knight Attack
      this.anims.create({
        key: "KnightAttack",
        frameRate: 6,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_KnightAttack_00",
          suffix: ".png",
          start: 0,
          end: 3
        }),
        delay: 200
      });
      // Knight Attack No Movement
      this.anims.create({
        key: "KnightAttackNoMovement",
        frameRate: 6,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_KnightAttackNoMovement_00",
          suffix: ".png",
          start: 0,
          end: 3
        }),
        delay: 200
      });
      // Knight Attack Combo
      this.anims.create({
        key: "KnightAttackCombo",
        frameRate: 10,
        frames: this.anims.generateFrameNames("Characters", {
          prefix: "_KnightCombo_00",
          suffix: ".png",
          start: 0,
          end: 9
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
    }
  }, {
    key: "create",
    value: function create() {
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
      this.textures.addSpriteSheetFromAtlas("Character_BringerOfDeath", {
        frameWidth: 140,
        frameHeight: 93,
        atlas: "Simple_Characters_Boss_1",
        frame: "BringerOfDeath.png"
      });
      this.textures.addSpriteSheetFromAtlas("Character_DemonSlime", {
        frameWidth: 288,
        frameHeight: 160,
        atlas: "Simple_Characters_Boss_2",
        frame: "DemonSlime.png"
      });
      this.textures.addSpriteSheetFromAtlas("Character_FrostGuardian", {
        frameWidth: 192,
        frameHeight: 128,
        atlas: "Simple_Characters_Boss_3",
        frame: "FrostGuardian.png"
      });
      var Character_Knight = this.physics.add.sprite(400, 200, "Character_Knight").setScale(1.25);
      window.Character_Knight = Character_Knight;

      // Keyboard Input
      this.keyboard = this.input.keyboard.addKeys("W, A, S, D, J");
      this.stopwatchText = this.add.text(this.sys.game.config.width / 2, 10, "00:00:00", {
        fontFamily: "Monospace",
        fontSize: 24,
        color: "#ffffff"
      }).setOrigin(0.5, 0);

      // Start the stopwatch
      this.startStopwatch();

      // this.spawnGameObjects(2000, 60000);
    }

    // Spawner
  }, {
    key: "spawnGameObjects",
    value: function spawnGameObjects(spawnRate, endTime) {
      var _this2 = this;
      this.time.addEvent({
        delay: spawnRate,
        callback: function callback() {
          var randomIndex = Phaser.Math.Between(0, _this2.gameObjects.length - 1);
          var gameObject = _this2.gameObjects[randomIndex];
          var x = Phaser.Math.Between(0, _this2.sys.game.config.width);
          var y = Phaser.Math.Between(0, _this2.sys.game.config.height);
          _this2.physics.add.sprite(x, y, gameObject.key).setScale(1.25);

          // Check if the current time has exceeded the end time
          var currentTime = _this2.getTimeElapsed();
          if (currentTime >= endTime) {
            _this2.time.removeEvent(_this2.spawnTimer);
          }
        },
        callbackScope: this,
        loop: true
      });
    }
  }, {
    key: "update",
    value: function update() {
      // Knight Movement
      if (this.keyboard.W.isDown) {
        Character_Knight.setVelocityY(-72);
        Character_Knight.anims.play("KnightRun", true);
      } else if (this.keyboard.A.isDown) {
        Character_Knight.setFlipX(true);
        Character_Knight.setVelocityX(-72);
        Character_Knight.anims.play("KnightRun", true);
      } else if (this.keyboard.S.isDown) {
        Character_Knight.setVelocityY(72);
        Character_Knight.anims.play("KnightRun", true);
      } else if (this.keyboard.D.isDown) {
        Character_Knight.setFlipX(false);
        Character_Knight.setVelocityX(72);
        Character_Knight.anims.play("KnightRun", true);
      } else if (this.keyboard.J.isDown) {
        Character_Knight.setVelocityX(0).setVelocityY(0);
        Character_Knight.anims.play("KnightAttackNoMovement", {
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

      // Perform game events based on the elapsed time
      this.gameEvents.forEach(function (event) {
        if (elapsedSeconds >= event.time && !event.triggered) {
          event.event();
          event.triggered = true;
        }
      });
      this.elapsedTime = this.getTimeElapsed();
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
  }, {
    key: "performEvent1",
    value: function performEvent1() {
      console.log("Performing Event 1");
    }
  }, {
    key: "performEvent2",
    value: function performEvent2() {
      console.log("Performing Event 2");
    }
  }, {
    key: "performEvent3",
    value: function performEvent3() {
      console.log("Performing Event 3");
    }
  }]);
  return PlayScene;
}(Phaser.Scene);
},{"../CST.js":"src/CST.js"}],"src/Scenes/PKScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PKScene = void 0;
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
var PKScene = exports.PKScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(PKScene, _Phaser$Scene);
  function PKScene() {
    _classCallCheck(this, PKScene);
    return _callSuper(this, PKScene, [{
      key: _CST.CST.SCENES.PK
    }]);
  }
  _createClass(PKScene, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {}
  }]);
  return PKScene;
}(Phaser.Scene);
},{"../CST.js":"src/CST.js"}],"src/Scenes/OptionScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionScene = void 0;
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
var OptionScene = exports.OptionScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(OptionScene, _Phaser$Scene);
  function OptionScene() {
    _classCallCheck(this, OptionScene);
    return _callSuper(this, OptionScene, [{
      key: _CST.CST.SCENES.OPTION
    }]);
  }
  _createClass(OptionScene, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {}
  }]);
  return OptionScene;
}(Phaser.Scene);
},{"../CST.js":"src/CST.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./Scenes/LoadScene.js");
var _MenuScene = require("./Scenes/MenuScene.js");
var _PlayScene = require("./Scenes/PlayScene.js");
var _PKScene = require("./Scenes/PKScene.js");
var _OptionScene = require("./Scenes/OptionScene.js");
/**Tab for ease coding */
/** @type {import("../typings/phaser")} */

var game = new Phaser.Game({
  width: 1200,
  height: 675,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _PlayScene.PlayScene, _PKScene.PKScene, _OptionScene.OptionScene],
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
},{"./Scenes/LoadScene.js":"src/Scenes/LoadScene.js","./Scenes/MenuScene.js":"src/Scenes/MenuScene.js","./Scenes/PlayScene.js":"src/Scenes/PlayScene.js","./Scenes/PKScene.js":"src/Scenes/PKScene.js","./Scenes/OptionScene.js":"src/Scenes/OptionScene.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "31101" + '/');
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