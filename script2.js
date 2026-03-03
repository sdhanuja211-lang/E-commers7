
// ==================home1 &home 2==============================


const dropDowns = document.querySelectorAll(".home-down");

dropDowns.forEach(dropDown => {

    dropDown.addEventListener("click", function (e) {
        e.preventDefault();

        // get the parent li
        const parentLi = this.closest(".home-menu");

        // get the ul inside that li
        const option = parentLi.querySelector("ul");

        // toggle
        if (option.style.display === "flex") {
            option.style.display = "none";
        } else {
            option.style.display = "flex";
        }
    });

});


// ==================menu bar================================




 const menuToggle = document.querySelector(".menu-toggle");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const sidebar = document.querySelector("aside");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");

        if (sidebar.classList.contains("active")) {
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else {
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });












    var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  speed: 4000, // slow movement
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
  },
});











// ==========count down---------



(function () {

  function startTimer() {

    var d = document.getElementById("safe-days");
    var h = document.getElementById("safe-hours");
    var m = document.getElementById("safe-minutes");
    var s = document.getElementById("safe-seconds");

    if (!d || !h || !m || !s) return; // prevents breaking page

    var target = new Date("2026-04-01T00:00:00").getTime();

    function update() {
      var now = new Date().getTime();
      var diff = target - now;

      if (diff <= 0) return;

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((diff / (1000 * 60)) % 60);
      var seconds = Math.floor((diff / 1000) % 60);

      d.innerHTML = days < 10 ? "0" + days : days;
      h.innerHTML = hours < 10 ? "0" + hours : hours;
      m.innerHTML = minutes < 10 ? "0" + minutes : minutes;
      s.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }

    update();
    setInterval(update, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startTimer);
  } else {
    startTimer();
  }

})();














const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.textContent = "+";
        } else {
            answer.style.display = "block";
            icon.textContent = "-";
        }

    });
});














const items = document.querySelectorAll(".accordion-item");

items.forEach(item=>{
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {

    items.forEach(i=>{
      if(i !== item){
        i.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});














const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {

    // Close other items
    accordionItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");
  });
});
