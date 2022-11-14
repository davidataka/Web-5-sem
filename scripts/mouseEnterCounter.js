var enterEventCount = 1;
window.onload = function () {
    const mouseTarget = document.getElementById("mouseTarget");

    mouseTarget.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.border = '5px blue';
            e.target.innerText =` Enters count - ${enterEventCount}`
            setTimeout(() => {
                e.target.style.backgroundColor = 'purple';
                e.target.style.border = '';
            }, 1000);
            enterEventCount++;
        }
    );
}