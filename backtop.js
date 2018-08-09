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
            let step = scrollFrom * 100 / time;
            if (scrollFrom <= scrollTo) {
                this.direction = false;
            } else {
                this.direction = true;
            }
            //recursion position timer
            let timer = setTimeout(function timer() {
                console.log(this.direction);
                // go to top
                if (this.direction) {
                    console.log('go top');
                    if (scrollFrom >= scrollTo) {
                        scrollFrom = scrollFrom - step;
                    } else {
                        clearTimeout(timer);

                    }
                } else {
                    // go to bottom
                    console.log('go custom');
                    if (scrollFrom <= scrollTo) {
                        scrollFrom = scrollFrom + step;
                    } else {
                        clearTimeout(timer);

                    }
                }


                window.scrollTo(0, scrollFrom);
                timer = setTimeout(timer, 1);
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
        buttonElem.goTo(1000, 0);
    })

})
()