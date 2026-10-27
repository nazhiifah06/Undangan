// Animasi sederhana ketika elemen masuk ke layar

const sections = document.querySelectorAll(

    ".quote, .details, .schedule, .closing"

);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15

    }

);

sections.forEach((section) => {

    observer.observe(section);

});
