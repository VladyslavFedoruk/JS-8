const text = document.querySelector(".main-text").textContent;
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "e") {
        event.preventDefault();
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.querySelector(".main-text").replaceWith(textarea);

        textarea.addEventListener("keydown", function (event) {
            if (event.ctrlKey && event.key === "s") {
                event.preventDefault();
                const div = document.createElement("div");
                div.textContent = textarea.value;
                textarea.replaceWith(div);
            }
        });
    }
});