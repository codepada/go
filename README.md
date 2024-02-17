# Pada Education blocks for micro:bit


Blocks that support [LEARNING LAB - MICROBIT COMPATIBLE ROBOT](https://padabook.com/th/products/545481-ชุดการเรียนรู้การเขียนโปรแกรม+Micro%3Abit+COMPATIBLE+ROBOTS)

## Sample gigotools V2
### gigotool pinout
```blocks
A(P1,P2)
B(8,P13)
C(P14,P15)
D(P16,P0)
I2C(P20,P19)
```
### motor for gigotools
```blocks
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    Gigotools.motorControl(ggMotorChannel.A, ggMotorShaftDirection.HIGH, 100)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    Gigotools.motorStop(ggMotorChannel.A)
})
```
### ultrasonic sensor
```blocks
basic.forever(function () {
    basic.showNumber(Gigotools.pinggigo(ggsonarPort.A, pingUnit.MicroSeconds))
})
```
### RGB LED
```blocks
let RGBLED: Gigotools.HaloHd = null
basic.forever(function () {
    RGBLED = Gigotools.RGBLED_create(DigitalPin.P1)
    RGBLED.RGBLED_set_color(Gigotools.colors(rGBLedColors.Red))
})
```
### Color sensor
```blocks
basic.forever(function () {
    basic.showNumber(Gigotools.ColorSensorRead(Gigotools.Channel.Red))
})
```
## Sample gigo V1
### gigo pinout
```blocks
A(P20,P19)
B(x,P14)
C(x,P2)
D(x,P8)
E(P16,P15)
F(P14,P13)
G(P2,P12)
H(P8,P1)
```
### sensor button ex1
```blocks
basic.forever(function () {
    basic.showNumber(Sensor.Readbutton(buttonChannel.A))
})
```
### sensor button ex2
```blocks
basic.forever(function () {
    if (Sensor.isButtonPressed(buttonChannel.A)) {
        basic.showIcon(IconNames.Heart)
    }
})
```
### sensor temperature mLX90614
```blocks
basic.forever(function () {
    basic.showNumber(Sensor.temperature(mLX90614_TEMPERATURE_ORIGIN.OBJECT))
})
```
### motor
```blocks
input.onButtonPressed(Button.A, function () {
    Motor.motorControl(motorChannel.E, motorShaftDirection.HIGH, 100)
})
input.onButtonPressed(Button.B, function () {
    Motor.motorStop(motorChannel.E)
})
```
### continuesd sevor
```blocks
input.onButtonPressed(Button.A, function () {
    Motor.ContinuousServo(servoChannel.P1, svconShaft.Left)
})
input.onButtonPressed(Button.AB, function () {
    Motor.ContinuousServo(servoChannel.P1, svconShaft.Stop)
})
input.onButtonPressed(Button.B, function () {
    Motor.ContinuousServo(servoChannel.P1, svconShaft.Right)
})
```
### LCD 16x02
```blocks
LCD1602.LcdInit(39)
basic.forever(function () {
    LCD1602.ShowString("hellow", 0, 0)
})
```
### joystick
```blocks
basic.forever(function () {
    if (joystick.joystickmove(joymove.Up)) {
        basic.showArrow(ArrowNames.North)
    } else if (joystick.joystickmove(joymove.Down)) {
        basic.showArrow(ArrowNames.South)
    } else if (joystick.joystickmove(joymove.Left)) {
        basic.showArrow(ArrowNames.West)
    } else if (joystick.joystickmove(joymove.Right)) {
        basic.showArrow(ArrowNames.East)
    } else if (joystick.joypressed()) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (joystick.joystickbuttonpressed(dfButton.P15)) {
        basic.showString("r")
    } else if (joystick.joystickbuttonpressed(dfButton.P16)) {
        basic.showString("b")
    } else if (joystick.joystickbuttonpressed(dfButton.P13)) {
        basic.showString("g")
    } else if (joystick.joystickbuttonpressed(dfButton.P14)) {
        basic.showString("y")
    } else {
        basic.clearScreen()
    }
})
```
### LED gigo
```blocks
input.onButtonPressed(Button.A, function () {
    GigoLED.ledBrightness(lEDChannel.D, true)
})
input.onButtonPressed(Button.B, function () {
    GigoLED.ledBrightness(lEDChannel.D, false)
})
```

## License

* MIT

## Supported targets
For microbit

```package
Pada Education=github.com/codepada/go
```