var COLA = COLA || {};
COLA.COMMON = {};

COLA.COMMON.HEADER_ACCORDION = {
	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$openTrigger = $('#jsi-slide-open-trigger');
		this.$closeTrigger = $('#jsi-slide-close-trigger');
		this.$slideContent = $('#jsi-header-slide-target');
	},
	bindEvent : function(){
		this.$openTrigger.on('click',$.proxy(this.openContent,this));
		this.$closeTrigger.on('click',$.proxy(this.closeContent,this));
	},
	openContent : function(){
		this.$slideContent.slideDown();
	},
	closeContent : function(){
		this.$slideContent.slideUp();
	}
};

$(function(){
	COLA.COMMON.HEADER_ACCORDION.init();
});
