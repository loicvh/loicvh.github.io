function randombg(){
  var random= Math.floor(Math.random() * 46) + 1;
  var res = "rgba(0,0,0,0.1) url('image/WP/" + random + ".jpg') no-repeat center center fixed";
  /*var res = res_foo.concat("no-repeat center center fixed");*/
  document.body.style.background=res;
}
