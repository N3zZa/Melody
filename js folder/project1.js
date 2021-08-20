$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path")
    var counterDown = $(".counter-down");
    var counterUp = $(".counter-up");
    var buttonPrimary = $(".button-primary");
    var modalCloseButton = $(".modal-close-button");
    var modal = $(".modal")
/*     var flats = $(".flats path");
    var flatLink = $(".flat-link"); */

    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    })

    counterUp.on("click", function () {
        if (currentFloor < 18) {
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');

        }
    })
    
    counterDown.on("click", function () {
        if (currentFloor > 2) {
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })

   /*  flats.on("mouseover", function () { // хз как сделать подчеркивание текста при наведении на квартиры
        flatLink.toggleClass('.flat-link-hover');
        currentFlats = $(this).attr("data-flats");
        flatLink.text(currentFlats);
    }) */
    
    floorPath.on("click", toggleModal);

    buttonPrimary.on("click", toggleModal);

    modalCloseButton.on("click", toggleModal);

    function toggleModal() {
        modal.toggleClass('is-open');
    }
});
