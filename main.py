serial.redirect(SerialPin.P13, SerialPin.P14, BaudRate.BAUD_RATE9600)

def on_forever():
    pass
basic.forever(on_forever)
