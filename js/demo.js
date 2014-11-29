setInterval(function() {
  var el = $("#demo-cards"),
      newone = el.clone(true);

  el.after(newone);
  $("#demo-cards:last").remove();
}, 20000);
