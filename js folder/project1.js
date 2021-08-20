$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path")
    var counterDown = $(".counter-down");
    var counterUp = $(".counter-up");
    var buttonPrimary = $(".button-primary");
    var modalCloseButton = $(".modal-close-button");
    var modal = $(".modal")
    var currentFlats = 1; // переменная с текущей квартирой
    var flatsPath = $(".flats path"); // квартиры SVG
    var flatsPathItem = $(".flat-item a"); // характеристики квартир

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


    flatsPath.on('mouseover', function () {
        currentFlats = $(this).attr("data-flats"); // записываем текущее значение в переменную с квартирами
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    })

    flatsPathItem.on('mouseover', function () {
        currentFlats = $(this).attr("data-item"); // записываем текущее значение в переменную с квартирами
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    })
    

    floorPath.on("click", toggleModal);

    buttonPrimary.on("click", toggleModal);

    modalCloseButton.on("click", toggleModal);

    function toggleModal() {
        modal.toggleClass('is-open');
    }
});
