document.addEventListener("DOMContentLoaded", function(event) { 
	if ($('.slideshow-stack.unprocessed').length) {
		stackSlideshow();
		$('.slideshow-stack.unprocessed').removeClass('unprocessed');		
	}
});
/*-------------------------------------------
 Stacked Slideshow
 Slideshow for toggling through images.
 Used on slideshow-stack class.
 -------------------------------------------*/
function stackSlideshow() {
	var $slider = $('.slideshow-stack');
	if (!$slider.length) { return; }
	var $next = $slider.find('.controls-prev-next .next'), $prev = $slider.find('.controls-prev-next .previous');
	$next.on('click', showNextPhoto);
	$prev.on('click', showPrevPhoto);
	function showNextPhoto(e) {
		e.preventDefault();
		var $this = $(this), $topPhoto = $this.parent('ul').next('.stack').find('.on-top'), $nextPhoto = $topPhoto.next('.photo').length ? $topPhoto.next('.photo') : $this.parent('ul').next('.stack').find('.photo').first();
		$topPhoto.removeClass('on-top');
		forceLoadLazyImage($nextPhoto);
		$nextPhoto.addClass('on-top');
	}
	function showPrevPhoto(e) {
		e.preventDefault();
		var $this = $(this), $topPhoto = $this.parent('ul').next('.stack').find('.on-top'), $prevPhoto = $topPhoto.prev('.photo').length ? $topPhoto.prev('.photo') : $this.parent('ul').next('.stack').children('.photo').last();
		$topPhoto.removeClass('on-top');
		forceLoadLazyImage($prevPhoto);
		$prevPhoto.addClass('on-top');
	}
}