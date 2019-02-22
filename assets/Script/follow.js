
cc.Class({
    extends: cc.Component,

    properties: {
        hero:cc.Node,
        extrabg : cc.Node,
    },

    onLoad:function(){
        this.startFollow();
    },
    start () {

    },

    startFollow() {
        this.node.runAction(cc.follow(this.hero));
        this.extrabg.runAction(cc.follow(this.hero));
    },

    stopFollow() {
        this.node.stopAllActions();
        this.extrabg.stopAllActions();
    },

    // update (dt) {},
});
