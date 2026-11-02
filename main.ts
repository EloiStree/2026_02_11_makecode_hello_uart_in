serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
serial.redirect(
SerialPin.P13,
SerialPin.P14,
BaudRate.BaudRate9600
)
basic.forever(function () {
	
})
