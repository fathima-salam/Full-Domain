function debounce(func, delay = 300) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const handleInput = debounce((value) => {
    console.log("Final input:", value);
}, 300);

handleInput("H");
handleInput("He");
handleInput("Hel");
handleInput("Hell");
handleInput("Hello");  // Only this one runs after 300ms of no calls