# The jQuery Plugin of message

Simple plugin for displaying custom message boxes to the user. [homepage & demo](http://kyo4311.github.io/jquery.message/)

# Getting Started
Add the stylesheet, jquery and jquery.message plugin in you web page.
```html
<link rel="stylesheet" href="jquery.message.css" />
<script src="jquery.js"></script>
<script src="jquery.message.min.js"></script>
```

# Usage
```js
uw.message({
    title: 'Title',
    content: 'content',
    position: 'topright', // topright|lowerleft|lowerright
    color: color, // green|blue|red|yellow|black
});
```

# Options
<table>
    <tr>
        <td>title</td>
        <td>the message title, it can is empty.</td>
    </tr>
    <tr>
        <td>content</td>
        <td>the message content, It is best not to be empty.</td>
    </tr>
    <tr>
        <td>position</td>
        <td>topright | lowerleft | lowerright, lowerright is default.</td>
    </tr>
    <tr>
        <td>color</td>
        <td>green | blue | red | yellow | black, black id default.</td>
    </tr>
</table>


# Snippet for sublime Text 3
step1 : tools -> New Snippet    
step2 : copy code to file
```xml
<?xml version="1.0"?>
<snippet>
  <content><![CDATA[
/*
 * http://kyo4311.github.io/jquery.message/
 */
\$.message({
    title: '${1}',
    content: '${2}',
    ${3://}position: '${4:lowerright}', // topright|lowerleft|lowerright
    ${5://}color: '${6:black}' // green|blue|red|yellow|black
});
  ]]></content>
  <tabTrigger>jQuery.message</tabTrigger>
  <scope>source.js</scope>
  <description>jquery.message by guosheng</description>
</snippet>
```
step3 : save as 'jQuery.message.sublime-snippet'   

step4 : restart sublime text

step5 : input in js documentation: 'jqms' then press the TAB key

# License
Copyright (c) 2015 guosheng 
Licensed under the [MIT License](https://github.com/umdjs/umd/blob/master/LICENSE.md).
