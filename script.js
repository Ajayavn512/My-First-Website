// Home Button

const button = document.getElementById("myButton");

const message = document.getElementById("message");


if (button && message) {

    button.addEventListener("click", function () {

        message.textContent =
            "Wow Ajay! 🎉 Tumhari JavaScript chal rahi hai!";

        button.textContent =
            "Clicked ✅";

        button.style.backgroundColor =
            "green";

        button.style.color =
            "white";

    });

}


// Contact Form

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! 🎉 Your message has been submitted.";

        contactForm.reset();

    });

}