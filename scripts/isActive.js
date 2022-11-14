function markPageActive() {
    let cur_page = document.location.pathname.split("/");
    let tableOfContent = document.getElementsByClassName("nav__point");
    cur_page = cur_page[cur_page.length - 1];

    for (let i = 0; i < tableOfContent.length; i++) {
        let item = tableOfContent[i].innerHTML;
        if (item.includes(cur_page)) {
            tableOfContent[i].classList.add("active_button")
        }
    }
}
document.addEventListener("DOMContentLoaded", markPageActive);