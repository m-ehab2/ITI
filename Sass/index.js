let li = document.getElementsByClassName('nav__items')[0].children[0].children;
let activeLi = document.getElementsByClassName('active')[0];
// let
for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.addEventListener('mouseenter', (e) => {
        activeLi.classList.toggle('active');
        e.target.classList.toggle('active');

    });
    element.addEventListener('mouseleave', (e) => {
        activeLi.classList.toggle('active');
        e.target.classList.toggle('active');
    });
}

console.log(li);