$(document).ready(function () {
  /*For sticky nav*/
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  /*Scroll on buttons*/
  //    $('.js--scroll-to-plans').click(function() {
  //        $('html', 'body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  //    });
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /*Snippet from JSS Tricks for scroll*/
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate({ scrollTop: target.offset().top }, 1000);
          return false;
        }
      }
    });
  });

  /*Snippet from JSS Tricks for scroll*/
  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    (direction) => {
      // add the class animated__animated and animate__fadeIn to waypoint 1
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );
  //When you reach waypoint 2
  $(".js--wp-2").waypoint(
    (direction) => {
      // add the class animated__animated and animate__fadeInLeft to waypoint 2
      $(".js--wp-2").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  //When you reach waypoint 3
  $(".js--wp-3").waypoint(
    (direction) => {
      // add the class animated__animated and animate__fadeIn to waypoint 3
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );
  //When you reach waypoint 4
  $(".js--wp-4").waypoint(
    (direction) => {
      // add the class animated__animated and animate__bounceIn to waypoint 4
      $(".js--wp-4").addClass("animate__animated animate__bounceIn");
    },
    {
      offset: "25%",
    }
  );
});

/* Navigation Toggle */
$(".js--nav-icon").click(() => {
  const nav = $(".js--main-nav");
  nav.slideToggle(200); /* def uses display: !value + css slide drawer */

  const icon = $(".js--nav-icon ion-icon");

  console.log(icon[0].name);

  if (icon[0].name === "menu") {
    icon[0].name = "close";
  } else {
    icon[0].name = "menu";
  }
});
