# tinymce-dojo-widget
Creates a TinyMCE 4 widget in Dojo 1.10 in which each instance can have a unique configuration

## How to Use
In your Dojo config packages list, add the folder that the widget is in. We named ours 'dojo-widgets.'

```javascript
<script type="text/javascript">
	dojoConfig = {
		async: true,
		baseUrl: '../path/to/dojo-src',
		packages: [
			'dojo',
			'dijit',
			'dojox',
			{name: 'dojo-widgets', location: '../dojo-widgets'}
		]
	};
</script>
```
Then add the widget as a new module in the require like so:
```javascript
<script type="text/javascript">
require([
	'dojo-widgets/tinyMCE',
	],
	function(tinyMCE){
```
In your HTML body, create a div with a textarea nested within it to serve as the placeholder for your TinyMCE box.
```html
<div id="tinymceBox">
  <textarea id="tinymceTextarea"></textarea
</div>
```
To add the widget programmatically:
```javascript
newTinyMCE = var tinymce({
  selector: "#tinymceTextarea"
},"tinymceBox");
```
If you want to configure TinyMCE to, say, be inline, you don't have to alter this tinyMCE.js file. Simply add it to the widget instance like so. You can also override the defaults in the same way.
```javascript
newTinyMCE = var tinymce({
  selector: "#tinymceTextarea",
  inline: true
},"tinymceBox");
```
