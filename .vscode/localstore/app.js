const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {

    };
    console.log({ formData });
});