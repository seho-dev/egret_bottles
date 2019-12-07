
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/skins/Box1Skin.exml'] = window.Box1Skin = (function (_super) {
	__extends(Box1Skin, _super);
	function Box1Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle1_0_png";
		t.x = 3;
		t.y = 4;
		return t;
	};
	return Box1Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box2Skin.exml'] = window.Box2Skin = (function (_super) {
	__extends(Box2Skin, _super);
	function Box2Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle2_0_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	return Box2Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box3Skin.exml'] = window.Box3Skin = (function (_super) {
	__extends(Box3Skin, _super);
	function Box3Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box3Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle3_0_png";
		t.x = 2;
		t.y = -1;
		return t;
	};
	return Box3Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box4Skin.exml'] = window.Box4Skin = (function (_super) {
	__extends(Box4Skin, _super);
	function Box4Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box4Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle4_0_png";
		t.y = -2;
		return t;
	};
	return Box4Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box5Skin.exml'] = window.Box5Skin = (function (_super) {
	__extends(Box5Skin, _super);
	function Box5Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box5Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle5_0_png";
		t.x = -1;
		t.y = 1;
		return t;
	};
	return Box5Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box6Skin.exml'] = window.Box6Skin = (function (_super) {
	__extends(Box6Skin, _super);
	function Box6Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box6Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle6_0_png";
		t.x = 2;
		t.y = -2;
		return t;
	};
	return Box6Skin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSceneSkin.exml'] = window.GameSceneSkin = (function (_super) {
	__extends(GameSceneSkin, _super);
	var GameSceneSkin$Skin1 = 	(function (_super) {
		__extends(GameSceneSkin$Skin1, _super);
		function GameSceneSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_replay1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_replay_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin1;
	})(eui.Skin);

	var GameSceneSkin$Skin2 = 	(function (_super) {
		__extends(GameSceneSkin$Skin2, _super);
		function GameSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_start1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin2;
	})(eui.Skin);

	function GameSceneSkin() {
		_super.call(this);
		this.skinParts = ["BoxAnimation","bg1","bg2","bottleGroup","box","box0","box1","box2","box3","box4","boxGroup","score","bottlesAll","restartButton","mainmenuButton","endScore","gameEndGroup"];
		
		this.height = 950;
		this.width = 600;
		this.BoxAnimation_i();
		this.elementsContent = [this._Image1_i(),this.bg1_i(),this.bg2_i(),this._Image2_i(),this.bottleGroup_i(),this.boxGroup_i(),this.score_i(),this.bottlesAll_i(),this.gameEndGroup_i()];
		
		eui.Binding.$bindProperties(this, ["box"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-100],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [-77],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, ["box0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [-100],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [-77],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, ["box1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [-100],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [-77],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, ["box2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [552],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [533],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [463],[],this._Object12,"x");
		eui.Binding.$bindProperties(this, ["box3"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [552],[],this._Object13,"x");
		eui.Binding.$bindProperties(this, [533],[],this._Object14,"x");
		eui.Binding.$bindProperties(this, [463],[],this._Object15,"x");
		eui.Binding.$bindProperties(this, ["box4"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [552],[],this._Object16,"x");
		eui.Binding.$bindProperties(this, [533],[],this._Object17,"x");
		eui.Binding.$bindProperties(this, [463],[],this._Object18,"x");
	}
	var _proto = GameSceneSkin.prototype;

	_proto.BoxAnimation_i = function () {
		var t = new egret.tween.TweenGroup();
		this.BoxAnimation = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.ease = "circIn";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.ease = "circIn";
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.ease = "circIn";
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set5_i(),this._To9_i(),this._To10_i()];
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set6_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.anchorOffsetX = 0;
		t.source = "conveyer_png";
		t.width = 133.36;
		t.x = 226.5;
		t.y = 120;
		return t;
	};
	_proto.bg2_i = function () {
		var t = new eui.Image();
		this.bg2 = t;
		t.anchorOffsetX = 0;
		t.source = "conveyer_png";
		t.width = 133.36;
		t.x = 226.5;
		t.y = -708.79;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "gameui1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottleGroup_i = function () {
		var t = new eui.Group();
		this.bottleGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 825.76;
		t.width = 95.84;
		t.x = 243.98;
		t.y = 121.21;
		return t;
	};
	_proto.boxGroup_i = function () {
		var t = new eui.Group();
		this.boxGroup = t;
		t.x = 0;
		t.y = 279.78;
		t.elementsContent = [this.box_i(),this.box0_i(),this.box1_i(),this.box2_i(),this.box3_i(),this.box4_i()];
		return t;
	};
	_proto.box_i = function () {
		var t = new Box();
		this.box = t;
		t.height = 231;
		t.rotation = 0.23;
		t.skinName = "Box1Skin";
		t.type = 1;
		t.width = 146;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.box0_i = function () {
		var t = new Box();
		this.box0 = t;
		t.height = 231;
		t.rotation = 0.37;
		t.skinName = "Box2Skin";
		t.type = 2;
		t.width = 146;
		t.x = 0;
		t.y = 194.22;
		return t;
	};
	_proto.box1_i = function () {
		var t = new Box();
		this.box1 = t;
		t.height = 231;
		t.skinName = "Box3Skin";
		t.type = 3;
		t.width = 146;
		t.x = 0;
		t.y = 417.22;
		return t;
	};
	_proto.box2_i = function () {
		var t = new Box();
		this.box2 = t;
		t.height = 231;
		t.skinName = "Box4Skin";
		t.type = 4;
		t.width = 146;
		t.x = 461;
		t.y = 0;
		return t;
	};
	_proto.box3_i = function () {
		var t = new Box();
		this.box3 = t;
		t.height = 231;
		t.skinName = "Box5Skin";
		t.type = 5;
		t.width = 146;
		t.x = 461;
		t.y = 194.22;
		return t;
	};
	_proto.box4_i = function () {
		var t = new Box();
		this.box4 = t;
		t.height = 231;
		t.skinName = "Box6Skin";
		t.type = 6;
		t.width = 146;
		t.x = 461;
		t.y = 417.22;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.text = "0";
		t.textColor = 0x000000;
		t.x = 459;
		t.y = 79;
		return t;
	};
	_proto.bottlesAll_i = function () {
		var t = new eui.Label();
		this.bottlesAll = t;
		t.size = 21;
		t.text = "0";
		t.textColor = 0x000000;
		t.x = 499;
		t.y = 126;
		return t;
	};
	_proto.gameEndGroup_i = function () {
		var t = new eui.Group();
		this.gameEndGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 946.97;
		t.visible = false;
		t.width = 606.06;
		t.x = -3;
		t.y = 3;
		t.elementsContent = [this._Rect1_i(),this._Image3_i(),this._Image4_i(),this.restartButton_i(),this.mainmenuButton_i(),this._Label1_i(),this.endScore_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 945.76;
		t.width = 600.3;
		t.x = 6.12;
		t.y = 1.24;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 345.09;
		t.source = "overpanel_png";
		t.width = 419.45;
		t.x = 96.78;
		t.y = 47.48;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "overrole_png";
		t.x = 193.51;
		t.y = 392.57;
		return t;
	};
	_proto.restartButton_i = function () {
		var t = new eui.Button();
		this.restartButton = t;
		t.enabled = true;
		t.label = "";
		t.x = 130.68;
		t.y = 765.42;
		t.skinName = GameSceneSkin$Skin1;
		return t;
	};
	_proto.mainmenuButton_i = function () {
		var t = new eui.Button();
		this.mainmenuButton = t;
		t.label = "";
		t.x = 133;
		t.y = 844.24;
		t.skinName = GameSceneSkin$Skin2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 53;
		t.text = "分数 :";
		t.x = 175;
		t.y = 156;
		return t;
	};
	_proto.endScore_i = function () {
		var t = new eui.Label();
		this.endScore = t;
		t.size = 52;
		t.text = "0";
		t.x = 343;
		t.y = 158;
		return t;
	};
	return GameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartSkin.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	var StartSkin$Skin3 = 	(function (_super) {
		__extends(StartSkin$Skin3, _super);
		function StartSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_play1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_play_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSkin$Skin3;
	})(eui.Skin);

	function StartSkin() {
		_super.call(this);
		this.skinParts = ["StartSkin","startButton"];
		
		this.height = 950;
		this.width = 600;
		this.elementsContent = [this.StartSkin_i(),this.startButton_i(),this._Label1_i()];
	}
	var _proto = StartSkin.prototype;

	_proto.StartSkin_i = function () {
		var t = new eui.Image();
		this.StartSkin = t;
		t.source = "bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.startButton_i = function () {
		var t = new eui.Button();
		this.startButton = t;
		t.label = "";
		t.x = 134.5;
		t.y = 764.06;
		t.skinName = StartSkin$Skin3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.italic = true;
		t.size = 62;
		t.text = "拖动瓶子";
		t.textColor = 0x000000;
		t.x = 177;
		t.y = 141;
		return t;
	};
	return StartSkin;
})(eui.Skin);