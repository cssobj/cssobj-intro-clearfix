var cssobj_intro_clearfix = (function () {
  'use strict';

  // cssobj preset clearfix
  // .clearfix from site:
  // http://cssmojo.com/the-very-latest-clearfix-reloaded/
  // http://cssmojo.com/latest_new_clearfix_so_far/

  function cssobjIntroClearfix(useBlock) {
    // table will not merge vertical margins
    var table = {
      content: '" "',
      display: 'table'
    }
    // block will merge vertical margins
    var block = {
      content: '"."',
      display: 'block',
      height: 0,
      overflow: 'hidden'
    }

    return {
      '.clearfix:before, .clearfix:after': useBlock ? block : table,
      '.clearfix:after': {
        clear: 'both'
      },
      '.clearfix': {
        '*zoom': 1
      }
    }
  }

  return cssobjIntroClearfix;

}());