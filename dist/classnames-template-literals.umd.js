(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.howLongUntilLunch = factory());
}(this, (function () { 'use strict';

  function ctl(template) {
    return template
      .replace(/(undefined|false|true)/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  }

  return ctl;

})));
