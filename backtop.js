(function () {

    // define button
    let backToButton = document.createElement('button');
    backToButton.className = 'back-to-top';
    backToButton.id = 'back-to-button';
    document.body.appendChild(backToButton);

    function buttonTopClick() {
        let basicTime = 0;

        let scrollPos = 0;
        let currentScrollPos = 0;

        function BackTo() {

        }

        function timer(time, scrollFrom, scrollTo) {
            let start = Date.now();
            let curr = scrollFrom;
            let step = time/scrollFrom;
            console.log('step'+step);
           var timer =  setTimeout(function tick() {
               timeEl = Date.now() - start;
               console.log(timeEl);
                if (scrollFrom > scrollTo) {
                    console.log('to top' + scrollFrom);
                    scrollFrom = scrollFrom - step;
                }
                timer = setTimeout(tick, step);
                window.scrollTo(0, scrollFrom);
                if (scrollTo >= scrollFrom) {
                    clearTimeout(timer);
                }
            }, 0);
        }


        BackTo.toTop = function (duration) {
            currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            timer(duration, currentScrollPos, 0);

        };
        return BackTo;
    }

    let buttonElem = buttonTopClick();
    backToButton.addEventListener('click', function (e) {
        buttonElem.toTop(10000);
    })

})
()