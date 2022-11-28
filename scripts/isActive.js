function markPageActive() {
    let cur_page = document.location.pathname.split("/");
    let table_of_content = document.getElementsByClassName("nav__point");
    cur_page = cur_page[cur_page.length - 1];

    for (let i = 0; i < table_of_content.length; i++) {
        let item = table_of_content[i].innerHTML;
        if (item.includes(cur_page)) {
            table_of_content[i].classList.add("active_button")
        }
    }
}
document.addEventListener("DOMContentLoaded", markPageActive);