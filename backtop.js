(function () {
    let backToButton = document.createElement('button');
    backToButton.className = 'back-to-top';
    backToButton.id = 'back-to-button';
    document.body.appendChild(backToButton);

    function buttonTopClick() {
        let basicTime = 0;
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        function BackTo() {
        }
        BackTo.toTop = function () {
            console.log(scrolled);
        };
        return BackTo;
    }

let buttonElem = buttonTopClick();
backToButton.addEventListener('click', function (e) {
    buttonElem.toTop();
})

})
()