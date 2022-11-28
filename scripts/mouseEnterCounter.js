var enterEventCount = 1;
window.onload = function () {
    const mouse_target = document.getElementById("mouseTarget");

    mouse_target.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = '#89B8CC';
            e.target.style.border = '5px blue';
            e.target.innerText =`${enterEventCount}`
            setTimeout(() => {
                e.target.style.backgroundColor = '#89B8CC';
            }, 1000);
            enterEventCount++;
        }
    );
}