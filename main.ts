pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 25) {
        basic.showIcon(IconNames.No)
        pins.servoWritePin(AnalogPin.P1, 132)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(2000)
    }
})
