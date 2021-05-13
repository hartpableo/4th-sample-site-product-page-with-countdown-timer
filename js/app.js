// countdown timer
function countdown() {
    // important dates
    const endDate = new Date('June 18, 2021 12:00').getTime();
    const presentDate = new Date().getTime();
    const gap = endDate - presentDate;
    // time units
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    // calculate value of time in each units
    const daysValue = Math.floor(gap / days);
    const hoursValue = Math.floor((gap % days) / hours);
    const minutesValue = Math.floor((gap % hours) / minutes);
    const secondsValue = Math.floor((gap % minutes) / seconds);
    // input values into DOM
    document.querySelector('.days').innerText = daysValue;
    document.querySelector('.hours').innerText = hoursValue;
    document.querySelector('.minutes').innerText = minutesValue;
    document.querySelector('.seconds').innerText = secondsValue;
};

// run the countdown every 1 second
setInterval(countdown,1000);

// product image modal or highlight 
const productImg = document.querySelector('.productImg');
const modal = document.querySelector('.modal');

productImg.addEventListener('click',function() {
    modal.classList.add('active');
});

// close modal when clicked elsewhere
modal.addEventListener('click',function(click) {
    if (click.target.classList.contains('modal')) {
        modal.classList.remove('active');
    };
});

// auto-update year
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();