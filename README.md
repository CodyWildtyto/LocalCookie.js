# LocalCookie.js
The pure JavaScript plugin. Append storage-like methods for original cookie system.

## Usage

### Include file of LocalCookie.js 

Include **local-cookie.js** file. 

```
<script src="local-cookie.js"></script>
```

Or minify file with **local-cookie.min.js**.

```
<script src="local-cookie.min.js"></script>
```

### Add or modify a cookie item

Use ```localCookie.setItem``` method can update a cookie item. If it's not exist, the item will be created.

```
localCookie.setItem("KEY_FOR_RECORD", "apple");
```

Or 

```
localCookie["KEY_FOR_RECORD"] = "apple";
```

### Get value of a cookie item

Use ```localCookie.getItem``` method to get a cookie item value.

```
var cStr = localCookie.getItem("KEY_FOR_RECORD");
```

Or

```
var cStr = localCookie["KEY_FOR_RECORD"];
```

### Get all cookie items

Just call ```localCookie``` that will return a object with all cookie items.

```
var cObj = localCookie;
```

### Get count of cookie items

```localCookie.length``` property is count of cookie items.

```
var cCount = localCookie.length;
```

### Remove a cookie item

Use ```localCookie.removeItem``` method delete a cookie item.

```
localCookie.removeItem("KEY_FOR_RECORD");
```

### Remove all cookie items

Use ```localCookie.clear``` method delete all cookie items.

```
localCookie.clear();
```

## Methods

###localCookie.setItem###

Create or modify an cookie item.

```
localCookie.setItem( _keyStr, _valueStr )
```
_parameter: **\_keyStr:String, \_valueStr:String**_

###localCookie.getItem###

Get value of the cookie item.

```
localCookie.getItem( _keyStr )
```
_parameter: **\_keyStr:String**_

###localCookie.removeItem###

Remove the cookie item.

```
localCookie.removeItem( _keyStr )
```
_parameter: **\_keyStr:String**_

###localCookie.clear###

Clear all cookie items.

```
localCookie.clear()
```

## Values

###localCookie###

An object of all cookie items.

```
_obj = localCookie
```
_return: **\_obj:Object**_ 

###localCookie.length###

Count of cookie items.

```
_count = localCookie.length
```
_return: **\_count:Number**_ 

## Examples

* [Form](http://wildtyto.github.io/LocalCookie.js/examples/form.html)

## Todo

* Update system when properties are changed or added without methods. The current system is watched by setTimeout what a stupid way.

## License
Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.