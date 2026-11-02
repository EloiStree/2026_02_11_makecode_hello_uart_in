serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
    gamepad.send(
    gamepad._buttons(GameButton.A, true),
    127,
    127,
    gamepad._dpad(GameDirection.down),
    0,
    0
    )
    basic.pause(1000)
    gamepad.send(
    gamepad._buttons(GameButton.A, false),
    0,
    0,
    gamepad._dpad(GameDirection.noDirection),
    0,
    0
    )
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
gamepad.startGamepadService()
basic.forever(function () {
	
})
