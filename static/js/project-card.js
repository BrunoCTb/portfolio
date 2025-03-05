function openCard() {
    card = document.getElementsByClassName("project-card")[0]
    card.style.display = "block";

    main = document.getElementsByTagName("main")[0]
    main.className = "overlay";
    footer = document.getElementsByTagName("footer")[0]
    footer.className = "overlay";

    body = document.getElementsByTagName("body")[0]
    body.style.overflowY = "hidden";
}

function closeCard() {
    card = document.getElementsByClassName("project-card")[0]
    card.style.display = "none";

    main = document.getElementsByTagName("main")[0]
    main.className = "";
    footer = document.getElementsByTagName("footer")[0]
    footer.className = "";

    body = document.getElementsByTagName("body")[0]
    body.style.overflowY = "scroll";
}

