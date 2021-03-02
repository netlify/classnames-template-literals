(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.howLongUntilLunch = factory());
}(this, (function () { 'use strict';

  function ctl(template) {
    var trimmedClassnames = template.replace(/\s+/gm, " ");
    var formattedClassnames = trimmedClassnames
      .split(" ")
      .filter((c) => c !== "false" && c !== "true" && c !== "undefined")
      .join(" ")
      .trim();

    return formattedClassnames;
  }

  return ctl;

})));
