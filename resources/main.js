let root = document.documentElement;

let typingDelay = parseInt(getComputedStyle(root).getPropertyValue('--typing-delay'));
let typingSpeed = parseInt(getComputedStyle(root).getPropertyValue('--typing-speed'));
let line1Delay = parseInt(getComputedStyle(root).getPropertyValue('--line-one-delay'));
let iconSpeed = parseInt(getComputedStyle(root).getPropertyValue('--loading-icon-speed'));
let loadingTime = parseInt(getComputedStyle(root).getPropertyValue('--loading-time'));

let init = document.getElementById('init');
let line1 = document.getElementById('console-line-1');
let line2 = document.getElementById('console-line-2');
let links = document.getElementById('links');

//Show loading text
setTimeout(() => {
    init.classList.toggle('cursor-active');
    line1.style.display = 'block';

    //Spinning loading icon
    let loadingText = 'Loading';
    let loadingIcons = ['|','/','\u2014','\\'];
    let currentIcon = 0;

    let intervalID = setInterval(() => {
        line1.innerHTML = `${loadingText} ${loadingIcons[currentIcon]}`;
        currentIcon++;
        if (currentIcon >= loadingIcons.length) {
            currentIcon = 0;
        }
    }, iconSpeed);

    setTimeout(() => {
        clearInterval(intervalID);
        line1.innerHTML = '** ERROR - Page still under construction **';
        line1.classList.toggle('error-color');

        line2.style.display = 'block';

        links.style.display = 'flex';
    }, loadingTime);

}, typingDelay + typingSpeed + line1Delay);