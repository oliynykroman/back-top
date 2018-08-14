(function () {

    // define button
    let backToButton = document.createElement('button');
    backToButton.className = 'back-to-top';
    backToButton.id = 'back-to-button';
    document.body.appendChild(backToButton);

    function buttonTopClick() {
        // temporary linear scroll move function

        function timer(time, scrollFrom, scrollTo, delay) {
            // calc step
            let step;
            if (scrollFrom <= scrollTo) {
                step = scrollTo * 100 / time;
            } else {
                this.direction = true;
                step = scrollFrom * 100 / time;
            }
            //recursion position timer
            let animateTimer = setTimeout(function timerRecursion() {
                // go to top
                if (this.direction) {
                    if (scrollFrom >= scrollTo - step) {
                        scrollFrom = scrollFrom - step;
                    } else {
                        clearTimeout(animateTimer);
                        return
                    }
                } else {
                    // go to bottom
                    if (scrollFrom <= scrollTo - step) {

                        scrollFrom = scrollFrom + step;
                    } else {
                        clearTimeout(animateTimer);
                        return
                    }
                }
                window.scrollTo(0, scrollFrom);
                animateTimer = setTimeout(timerRecursion, 1);
            }, delay);
        }

        // go to custom block
        this.goTo = function (duration, delay, toEl) {
            this.params = {
                currPOs: window.pageYOffset || document.documentElement.scrollTop,
                duaration: duration || 500,
                delay: delay || 0,
                toEl: (toEl) ? document.getElementById(toEl).offsetTop : 0
            }
            timer(this.params.duaration, this.params.currPOs, this.params.toEl, this.params.delay);


        }

    }

    backToButton.addEventListener('click', function () {
        let buttonElem = new buttonTopClick();
        // buttonElem.toTop();
        console.log(document.getElementById('green'));
        buttonElem.goTo(1000, 0, 'green');
    })

})
()