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

COLA.COMMON.HEADER_MENU = {
	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$trigger = $('#jsi-hamburger-trigger');
		this.$closeTrigger = $('#jsi-hamburger-close-trigger');
		this.$bar = $('#jsi-hamburger-bar');
		this.$content = $('#jsi-hamburger-content');
	},
	bindEvent : function(){
		this.$trigger.on('click',$.proxy(this.toggleContent,this));
		this.$closeTrigger.on('click',$.proxy(this.closeContent,this));
	},
	toggleContent : function(){
		if(this.$content.is(':animated')) return;
		if(this.$content.is(':visible')){
			this.$content.slideUp();
		}else{
			this.$content.slideDown();
		}
	},
	closeContent : function(){
		if(this.$content.is(':animated')) return;
		this.$content.slideUp();
	}
};

$(function(){
	COLA.COMMON.HEADER_ACCORDION.init();
	COLA.COMMON.HEADER_MENU.init();
});
