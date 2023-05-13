window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-scroll-top").style.display = "block";
  } else {
    document.getElementById("btn-scroll-top").style.display = "none";
  }
}