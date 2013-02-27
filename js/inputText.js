(function ($) {

    $.fn.inputText = function (options, callback) {
         var defaults = {
          'char' : 100
        };
 
        var settings = $.extend({}, defaults, options);

        var originalValue, callback, data;

        originalValue = '';
        callback = callback;
        data = '';
 
		showField = function () {
				
	    	var e = $(this);
	    	var content = e.text();		        
	    	var field = buildField(content);
	        
	        originalValue = e.text();
	        
	    	e.html(field);
	    	e.find('.input-replace-text').focus().fadeIn();

		};
			    
	    buildField = function (value) {

	        var v  = value;
	        
	        if(v.length > settings.char){
	            return '<textarea class="input-replace-text" cols="75" rows="5" onblur="changeText(this)">' + v + '</textarea>';
	        }
	        
	        return '<input type="text" class="input-replace-text" value="' + v + '" onblur="changeText(this)">';  

	    };

		changeText = function (field) { 

		    var e = $('.' + field.className);
		    var eParent = e.parent();

		    var trim = e.val().replace(/ /g,"");
		   	
		   	if(trim.length) {
				data = e.val();
		   	}else{
		   		data = originalValue;
		   	}

		   	eParent.html(data);
		   	eParent.one('click', showField);

		    if(typeof callback == 'function'){
		      callback.call(this, data);
		    }

	    };

	    this.one('click', showField);
 
    }; 
})( jQuery );