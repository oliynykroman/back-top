(function () {

    // define button
    let backToButton = document.createElement('button');
    backToButton.className = 'back-to-top';
    backToButton.id = 'back-to-button';
    document.body.appendChild(backToButton);

    function buttonTopClick() {
        let basicTime = 0;
        let scrollPos = 0;


        function BackTo() {

        }

        function timer(time, scrollFrom, scrollTo) {
            let step = scrollFrom*100 / time;
            let timer = setTimeout(function timer() {
                scrollFrom = scrollFrom - step;
                if (scrollFrom >= 0) {
                    window.scrollTo(0, scrollFrom);
                    console.log(scrollFrom);
                    timer = setTimeout(timer, 1);
                } else {
                    clearTimeout(timer);
                }
            }, 0);
        }


        BackTo.toTop = function (duration) {
            let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
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