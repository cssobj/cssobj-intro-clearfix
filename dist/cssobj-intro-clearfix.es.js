// cssobj preset clearfix
// .clearfix from site:
// http://cssmojo.com/the-very-latest-clearfix-reloaded/

function cssobjIntroClearfix(option) {
  option = option || {}
  var name = option.className || 'clearfix'

  if (!/^\./.test(name)) name = '.' + name

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

  var obj = {}
  obj[name + ':before, ' + name + ':after'] = option.useBlock ? block : table
  obj[name + ':after'] = {
    clear: 'both'
  }

  if (option.oldIE) obj[name] = {
    '*zoom': 1
  }

  return obj
}

export default cssobjIntroClearfix;