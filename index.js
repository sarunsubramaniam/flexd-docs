/* Wrapper */

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

/* Tabs */

$.NodeList.prototype.tabs = function () {
  return this.each(function (elem) {
    (function () {
      let tabs = elem.querySelectorAll(".tab-header ul li"),
        tabContent = elem.querySelectorAll(".tab-content div");
      [...tabContent].map((currentItem, idx) => {
        currentItem.setAttribute("class", "tab-content-" + idx);
      });
      [...tabs].map((tab, idx) => {
        idx === 0 ? tab.classList.add("active") : null;
        tab.setAttribute("data-tab", idx);
        tab.addEventListener("click", function (e) {
          [...tabs].map((tab) => tab.classList.remove("active"));
          [...tabContent].map(
            (currentItem, idx) => (currentItem.style.display = "none")
          );
          e.target.classList.add("active");
          document.querySelector(".tab-content-" + idx).style.display = "block";
        });
      });
    })();
  });
};
