// JavaScript Document
var _DRAGGGING_STARTED = 0;
		var _LAST_MOUSEMOVE_POSITION = { x: null, y: null };
		var _DIV_OFFSET = $('#image-container1').offset();
		var _CONTAINER_WIDTH = $("#image-container1").outerWidth();
		var _CONTAINER_HEIGHT = $("#image-container1").outerHeight();
		var _IMAGE_WIDTH;
		var _IMAGE_HEIGHT;
		var _IMAGE_LOADED = 0;

		// Check whether image is cached or wait for the image to load 
		// This is necessary before calculating width and height of the image
		if($('#drag-image1').get(0).complete) {
			ImageLoaded();
		}
		else {
			$('#drag-image1').on('load', function() {
				ImageLoaded();
			});
		}

		// Image is loaded
		function ImageLoaded() {
			_IMAGE_WIDTH = $("#drag-image1").width();
			_IMAGE_HEIGHT = $("#drag-image1").height();
			_IMAGE_LOADED = 1;	
		}

		$('#image-container1').on('mousedown', function(event) {
			/* Image should be loaded before it can be dragged */
			if(_IMAGE_LOADED == 1) { 
				_DRAGGGING_STARTED = 1;

				/* Save mouse position */
				_LAST_MOUSE_POSITION = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
			}
		});

		$('#image-container1').on('mouseup', function() {
			_DRAGGGING_STARTED = 0;
		});

		$('#image-container1').on('mousemove', function(event) {
			if(_DRAGGGING_STARTED == 1) {
				var current_mouse_position = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
				var change_x = current_mouse_position.x - _LAST_MOUSE_POSITION.x;
				var change_y = current_mouse_position.y - _LAST_MOUSE_POSITION.y;

				/* Save mouse position */
				_LAST_MOUSE_POSITION = current_mouse_position;

				var img_top = parseInt($("#drag-image1").css('top'), 10);
				var img_left = parseInt($("#drag-image1").css('left'), 10);

				var img_top_new = img_top + change_y;
				var img_left_new = img_left + change_x;

				/* Validate top and left do not fall outside the image, otherwise white space will be seen */
				if(img_top_new > 0)
					img_top_new = 0;
				if(img_top_new < (_CONTAINER_HEIGHT - _IMAGE_HEIGHT))
					img_top_new = _CONTAINER_HEIGHT - _IMAGE_HEIGHT;

				if(img_left_new > 0)
					img_left_new = 0;
				if(img_left_new < (_CONTAINER_WIDTH - _IMAGE_WIDTH))
					img_left_new = _CONTAINER_WIDTH - _IMAGE_WIDTH;

				$("#drag-image1").css({ top: img_top_new + 'px', left: img_left_new + 'px' });
				$("#drag-image-svg1").css({ top: img_top_new + 'px', left: img_left_new + 'px' });
				
			}
		});

		$('#image-container1').on('touchmove', function(event) {
			if(_DRAGGGING_STARTED == 1) {
				
				var current_mouse_position = { x: event.touches[0].clientX - _DIV_OFFSET.left, y: event.touches[0].clientY - _DIV_OFFSET.top };
				var change_x = current_mouse_position.x - _LAST_MOUSE_POSITION.x;
				var change_y = current_mouse_position.y - _LAST_MOUSE_POSITION.y;

				/* Save mouse position */
				_LAST_MOUSE_POSITION = current_mouse_position;

				var img_top = parseInt($("#drag-image1").css('top'), 10);
				var img_left = parseInt($("#drag-image1").css('left'), 10);

				var img_top_new = img_top + change_y;
				var img_left_new = img_left + change_x;

				/* Validate top and left do not fall outside the image, otherwise white space will be seen */
				if(img_top_new > 0)
					img_top_new = 0;
				if(img_top_new < (_CONTAINER_HEIGHT - _IMAGE_HEIGHT))
					img_top_new = _CONTAINER_HEIGHT - _IMAGE_HEIGHT;

				if(img_left_new > 0)
					img_left_new = 0;
				if(img_left_new < (_CONTAINER_WIDTH - _IMAGE_WIDTH))
					img_left_new = _CONTAINER_WIDTH - _IMAGE_WIDTH;

				$("#drag-image1").css({ top: img_top_new + 'px', left: img_left_new + 'px' });
				$("#drag-image-svg1").css({ top: img_top_new + 'px', left: img_left_new + 'px' });
				
			}
		});

		$('#image-container1').on('touchend', function() {
			_DRAGGGING_STARTED = 0;
		});

		$('#image-container1').on('touchstart', function(event) {
			/* Image should be loaded before it can be dragged */
			if(_IMAGE_LOADED == 1) { 
				_DRAGGGING_STARTED = 1;

				/* Save mouse position */
				_LAST_MOUSE_POSITION = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
			}
		});
