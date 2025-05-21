
    window.onscroll = function() {myFunction()};

     var header = document.getElementById("myHeader");
      var sticky = header.offsetTop;

    function myFunction() {
          if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
           } else {
          header.classList.remove("sticky");
          }
    }
    function darkModeToggle() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
