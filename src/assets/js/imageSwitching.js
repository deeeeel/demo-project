var LEIHAUOLI = LEIHAUOLI || {};
LEIHAUOLI.COLA = {};

LEIHAUOLI.COLA.ImageSwitching = {
	init : function(){
		this.setParameters();
		this.eventHandler();
	},

	setParameters : function(){
		this.$movieList = $('#jsi-movie-list');
		this.$movieListItem = $('.jsc-movie-list-item-box');
		this.$movieBox = $('.jsc-movie-box');
	},

	eventHandler : function(){
		var that = this;
		this.$movieListItem.each(function(){
			var $mySelf = $(this);
			var listItemHref = $mySelf.children('a').attr('href');
			var $selectMovieBox = $('.jsc-movie-wrap').find(listItemHref);
			$mySelf.on('click',function(){
				event.preventDefault();
				that.$movieBox.removeClass('is-active');
				$selectMovieBox.addClass('is-active');
			});
		});
	}
};

$(function(){
	LEIHAUOLI.COLA.ImageSwitching.init();
});
