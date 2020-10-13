basic.clearScreen()
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(500)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(x, y)
            basic.pause(500)
        }
    }
})
