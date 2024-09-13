const paragraphs = document.querySelectorAll(".about-img");

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("about-img--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}






const text = document.querySelectorAll(".about-text");

document.addEventListener("scroll", function () {
    text.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("about-text--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}




const signup = document.querySelectorAll(".signup-img");

document.addEventListener("scroll", function () {
    signup.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("signup-img--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}






