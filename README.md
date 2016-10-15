# cssobj-intro-clearfix

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

```javascript
var clearfix = require('cssobj-intro-clearfix')

cssobj(
  { div: {color: 'red'} },
  {
    intro: [
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
div {
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




