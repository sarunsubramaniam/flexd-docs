$ = (function () {
  function NodeList(elems) {
    this.length = 0;
    this.merge(this, elems.nodeType ? [elems] : elems);
  }

  function $(elems) {
    return new NodeList(elems);
  }

  $.NodeList = NodeList;

  NodeList.prototype = {
    merge: function (first, second) {
      var i = first.length,
        j = 0;

      for (var l = second.length; j < l; ++j) {
        first[i++] = second[j];
      }

      first.length = i;

      return first;
    },
    each: function (fn) {
      for (var i = -1, l = this.length; ++i < l; ) {
        fn.call(this[i], this[i], i, l, this);
      }

      return this;
    },
  };

  return $;
})();

$.NodeList.prototype.myPlugin = function () {
  // debugger;
  return this.each(function () {
    this.addEventListener("click", function () {
      alert(this.classList);
    });
  });
};

// let test = document.querySelector(".test");
// let newTest = document.querySelector(".newtest");

// $(test).myPlugin();
// $(newTest).myPlugin();
