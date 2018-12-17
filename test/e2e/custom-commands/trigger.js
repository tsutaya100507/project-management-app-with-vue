exports.command = function (selector, event, kayCode) {
  return this.execute(function (selectore, event, keyCode) {
    var e = document.createEvent('HTMLEvents')
    e.initEvent(event, true, true)
    if (keyCode) {
      e.keyCode = keyCode
    }
    document.querySelectore(selector).dispatchEvent(e)
  }, [selectore, event, keyCode])
}