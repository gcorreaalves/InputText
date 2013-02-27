Input Text
=======================

This is a jquery plugin to change the text of a paragraph, div, li, or other HTML element.

Usage
--------------


```html
<!DOCTYPE html>
<html lang="pt-br">
<head>

  <meta charset="utf-8">
	<title>Página Base</title>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script src="js/inputText.js"></script>

  <script>
  $(document).ready(function(){

    $('.text').inputText({'char':'150'}, function(arg){
  	  alert(arg);
	});

  });	
  </script>
</head>

<body>

  <p class="text">Digite seu texto aqui...</p>

  <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris massa, et vestibulum nibh. Fusce feugiat consectetur lectus id porta. Pellentesque a orci felis, vel volutpat orci. Morbi vitae elit diam. Ut aliquam condimentum suscipit. Quisque nec elit quam. Nam varius gravida arcu vel iaculis. Cras massa sapien, dictum nec ultrices dignissim, sodales vitae libero.
</div>

</body>
</html>
```
