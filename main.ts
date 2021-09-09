input.onButtonPressed(Button.A, function () {
    radio.sendValue("Reset", 0)
    basic.showLeds(`
        . # . . .
        # # # # .
        . # . . #
        . . . . #
        . . # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(4)
