






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



  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

      // Close others (optional)
      faqItems.forEach(el => {
        if(el !== item){
          el.classList.remove("active");
        }
      });

      // Toggle current
      item.classList.toggle("active");

    });
  });










window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
});



const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");
  const body = item.querySelector(".accordion-body");

  header.addEventListener("click", () => {

    // Close other items
    accordionItems.forEach(el => {
      if (el !== item) {
        el.classList.remove("active");
        el.querySelector(".accordion-body").style.maxHeight = null;
      }
    });

    // Toggle current
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = null;
    }

  });
});

































const mcCounters = document.querySelectorAll(".mc-counter");
const mcSpeed = 200;

const mcStartCounting = () => {
  mcCounters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / mcSpeed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
};

const mcObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    mcStartCounting();
    mcObserver.disconnect();
  }
});

mcObserver.observe(document.querySelector(".mc-stats-section"));

















document.querySelectorAll(".close").forEach(function(btn){
    btn.addEventListener("click", function(){
        btn.parentElement.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".count-number");

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {
            const increment = target / 200;

            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });

});










document.addEventListener("DOMContentLoaded", function(){

  /* ===== ACCORDION ===== */
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", function(){
      this.parentElement.classList.toggle("active");
    });
  });


  /* ===== COUNTER ===== */
  const counters = document.querySelectorAll(".count-number");

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {
      const increment = target / 200;

      if(count < target){
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });

});




