# Pada Education blocks for micro:bit


Blocks that support [LEARNING LAB - MICROBIT COMPATIBLE ROBOT](https://padabook.com/th/products/545481-ชุดการเรียนรู้การเขียนโปรแกรม+Micro%3Abit+COMPATIBLE+ROBOTS)

## Sample gigotools
### gigotool pinout
A(P1,P2)
B(8,P13)
C(P14,P15)
D(P16,P0)
I2C(P20,P19)
### motor for gigotools
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    Gigotools.motorControl(ggMotorChannel.A, ggMotorShaftDirection.HIGH, 100)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    Gigotools.motorStop(ggMotorChannel.A)
})
### ultrasonic sensor
basic.forever(function () {
    basic.showNumber(Gigotools.pinggigo(ggsonarPort.A, pingUnit.MicroSeconds))
})
### RGB LED
let RGBLED: Gigotools.HaloHd = null
basic.forever(function () {
    RGBLED = Gigotools.RGBLED_create(DigitalPin.P1)
    RGBLED.RGBLED_set_color(Gigotools.colors(rGBLedColors.Red))
})
### Color sensor
basic.forever(function () {
    basic.showNumber(Gigotools.ColorSensorRead(Gigotools.Channel.Red))
})

## Sample gigo
### gigotool pinout
A(P20,P19)
B(x,P14)
C(x,P2)
D(x,P8)
E(P16,P15)
F(P14,P13)
G(P2,P12)
H(P8,P1)
### sensor button ex1
basic.forever(function () {
    basic.showNumber(Sensor.Readbutton(buttonChannel.A))
})
### sensor button ex2
basic.forever(function () {
    if (Sensor.isButtonPressed(buttonChannel.A)) {
        basic.showIcon(IconNames.Heart)
    }
})
### sensor temperature mLX90614
basic.forever(function () {
    basic.showNumber(Sensor.temperature(mLX90614_TEMPERATURE_ORIGIN.OBJECT))
})


## License

* MIT

## Supported targets
For microbit

```package
Pada Education=github.com/codepada/go
```