(function () {

    // define button
    let backToButton = document.createElement('button');
    backToButton.className = 'back-to-top';
    backToButton.id = 'back-to-button';
    document.body.appendChild(backToButton);

    function buttonTopClick() {
        // temporary linear scroll move function

        function timer(time, scrollFrom, scrollTo, delay) {
            let step = scrollFrom * 100 / time;

            //recursion position timer
            let timer = setTimeout(function timer() {
                scrollFrom = scrollFrom - step;
                if (scrollFrom >= scrollTo) {
                    window.scrollTo(0, scrollFrom);
                    console.log(scrollFrom);
                    timer = setTimeout(timer, 1);
                } else {
                    clearTimeout(timer);
                }
            }, delay);
        }

        // back to begin function
        this.toTop = function (duration, delay) {
            this.params = {
                duaration: duration || 500,
                delay: delay || 0
            }
            let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            timer(this.params.duaration, currentScrollPos, 0, this.params.delay);
        };
        this.toCustom = function(duration, delay, toEl){
            this.params = {
                duaration: duration || 500,
                delay: delay || 0,
                toEl: document.getElementById(toEl).offsetTop || 0
            }
            // console.log(toEl);
            let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            timer(this.params.duaration, currentScrollPos, this.params.toEl, this.params.delay);
        }
    }

    backToButton.addEventListener('click', function () {
        let buttonElem = new buttonTopClick();
        // buttonElem.toTop();
        console.log( document.getElementById('green'));
        buttonElem.toCustom(1000,0,'green');
    })

})
()