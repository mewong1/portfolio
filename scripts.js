
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

        // Toggle dark mode class on the body element
        var element = document.body;
        element.classList.toggle("dark-mode");

        // Toggle Dark Mode for accordion (about me page)
        var element2 = document.getElementsByClassName("accordion-item");

        for (var i = 0; i < element2.length; i++) {
            element2[i].classList.toggle("accordion-item-dark-mode");
        }

        var element3 = document.getElementsByClassName("card-image");

        for (var i = 0; i < element3.length; i++) {
            element3[i].classList.toggle("card-image-dark-mode");
        }
        var element4 = document.getElementsByClassName("card-header");
        for (var i = 0; i < element4.length; i++) {
            element4[i].classList.toggle("card-header-dark-mode");
        }
    }

    function filter() {
        
    }