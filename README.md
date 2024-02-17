# Pada Education blocks for micro:bit


Blocks that support [LEARNING LAB - MICROBIT COMPATIBLE ROBOT](https://padabook.com/th/products/545481-ชุดการเรียนรู้การเขียนโปรแกรม+Micro%3Abit+COMPATIBLE+ROBOTS)

## Sample
### gigotool pinout
A(1,2)
B(8,13)
C(14,15)
D(16,0)
I2C(20,19)
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

## License

* MIT

## Supported targets
For microbit

```package
Pada Education=github.com/codepada/go
```