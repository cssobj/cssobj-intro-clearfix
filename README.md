# cssobj-intro-clearfix

[![Join the chat at https://gitter.im/css-in-js/cssobj](https://badges.gitter.im/css-in-js/cssobj.svg)](https://gitter.im/css-in-js/cssobj)

[cssobj](https://github.com/cssobj/cssobj) intro to make clearfix easier. code from [The very latest clearfix reloaded][]

[The very latest clearfix reloaded]: http://cssmojo.com/the-very-latest-clearfix-reloaded/

## Install

- npm

```bash
npm install cssobj-intro-clearfix
```

- bower

```bash
bower install cssobj-intro-clearfix
```

## Usage

- **basic usage**:

When you need to put `'<div class="clearfix nav">'`, but don't remember the [clearfix hack][The very latest clearfix reloaded], or don't want to copy/paste, use this plugin as below:

```javascript
var clearfix = require('cssobj-intro-clearfix')

cssobj(
  { '.nav': {color: 'red'} },
  {
    intros: [
      clearfix()
    ]
  }
)
```

result css:

``` css
.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix {
    *zoom: 1;
}
.nav {
    color: red;
}
```

- **use with [plugin-extend](https://github.com/cssobj/cssobj-plugin-extend)**

So your html can be as clean as: `'<div class="nav">'`, no need to write `clearfix` in your tag.

```javascript
var clearfix = require('cssobj-intro-clearfix')
var pluginExtend = require('cssobj-plugin-extend')

cssobj(
  { '.nav': {color: 'red', $extend: /\.clearfix\b/} },
  {
    intros: [
      clearfix()
    ],
    plugins: [
      pluginExtend()
    ]
  }
)
```

result css:

``` css
.clearfix:before,
.clearfix:after,
.nav:before,
.nav:after {
    content: " ";
    display: table;
}
.clearfix:after,
.nav:after {
    clear: both;
}
.clearfix,
.nav {
    *zoom: 1;
}
.nav {
    color: red;
}
```


## Option


### option.className [string] \(default: 'clearfix'\)

Class name for the clearfix, should **without dot**


### option.useBlock [boolean] \(default: false\)

Whether use **display: block** instead of **display: table**

see: [the different](http://cssmojo.com/the-very-latest-clearfix-reloaded/)


### option.oldIE [boolean] \(default: false\)

Whether support oldIE (IE 6,7), by adding `*zoom: 1;` to container.




