cc.Class({
    extends:cc.Component,
    properties:{
        hero:cc.Node,
    },
    onLoad:function(){
        this.offsetList = [];
        this.finishAni = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy () {
        this.offsetList = [];
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onKeyDown (event) {
        console.log("event.keyCode ", event.keyCode )
        switch(event.keyCode) {
            case cc.KEY.left:
                this.finishAni = false;
                this.offsetList.push(-10);
                break;
            case cc.KEY.right:
                this.finishAni = false;
                this.offsetList.push(10);
                break;
        }
    },

    onKeyUp (event) {
        this.finishAni = true;
        this.offsetList.splice(0, this.offsetList.length);
        this.hero.stopAllActions();
    },

    update(dt) {
        // 不采用动作叠加
        if (this.finishAni == true) return;
        console.log("this.offsetList =", this.offsetList);
        console.log("run number ", this.hero.getNumberOfRunningActions());
        if (this.offsetList.length > 0 && this.hero.getNumberOfRunningActions() == 0) {
            var xOffset = this.offsetList.splice(0, 1);
            this.hero.runAction(cc.moveBy(0.3, xOffset, 0));
        }
    }
});
