




//% color=#E7734B icon="\uf110"
namespace GigoLED {
    //----------------------------------

    //led old
    export enum LEDChannel {
        //% block="A (P19)"
        A,
        //% block="B (P14)"
        B,
        //% block="C (P2)"
        C,
        //% block="D (P8)"
        D,
        //% block="E (P15)"
        E,
        //% block="F (P13)"
        F,
        //% block="G (P12)"
        G,
        //% block="H (P1)"
        H,
    }
    export let LEDChannels: { [key: number]: DigitalPin } = {
        [LEDChannel.A]: DigitalPin.P19,
        [LEDChannel.B]: DigitalPin.P14,
        [LEDChannel.C]: DigitalPin.P2,
        [LEDChannel.D]: DigitalPin.P8,
        [LEDChannel.E]: DigitalPin.P15,
        [LEDChannel.F]: DigitalPin.P13,
        [LEDChannel.G]: DigitalPin.P12,
        [LEDChannel.H]: DigitalPin.P1,
    }
    export enum LEDShaftonoff {
        //% block="off"
        LOW,
        //% block="on"
        HIGH,

    }
    //----------------------------------
    //% color=#FACB09
    //% block="led $leds status $status"
    //% status.min=0 status.max=1
    //% leds.defl=LEDChannel.D
    //% group="Led"
    export function ledtest(leds: LEDChannel, status: number): void {
        let ledg = LEDChannels[leds];
        pins.digitalWritePin(ledg, status);

    }


    export function led(leds: LEDChannel, status: LEDShaftonoff): void {
        let ledg = LEDChannels[leds];
        pins.digitalWritePin(ledg, status);

    }
    //% color=#FACB09
    //toggle led
    //% blockId=led block="led %pin $ledstate"
    //% ledstate.shadow="toggleOnOff"
    //% expandableArgumentMode="toggle"
    //% pin.defl=LEDChannel.D
    //% group="Led"
    export function ledBrightness(pin: LEDChannel, ledstate: boolean): void {
        if (ledstate) {
            let pinled = LEDChannels[pin];
            pins.digitalWritePin(pinled, 1);

        }
        else {
            let pinled = LEDChannels[pin];
            pins.digitalWritePin(pinled, 0);

        }
    }
}

//% color=#E7734B icon="\uf2db"
namespace GigoSensor {
    //external button
    export enum ButtonChannel {
        //% block="A (P20)"
        A,
        //% block="E (P16)"
        E,
        //% block="F (P14)"
        F,
        //% block="G (P2)"
        G,
        //% block="H (P8)"
        H,
    }
    export let ButtonChannels: { [key: number]: DigitalPin } = {
        [ButtonChannel.A]: DigitalPin.P20,
        [ButtonChannel.E]: DigitalPin.P16,
        [ButtonChannel.F]: DigitalPin.P14,
        [ButtonChannel.G]: DigitalPin.P2,
        [ButtonChannel.H]: DigitalPin.P8,

    }
    //----------------------------------



    //external sensor
    export enum SensorChannel {
        //% block="P1"
        P1,
        //% block="P8"
        P8,
        //% block="P12"
        P12,
        //% block="P2"
        P2,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
    }
    export let SensorChannels: { [key: number]: DigitalPin } = {
        [SensorChannel.P1]: DigitalPin.P1,
        [SensorChannel.P8]: DigitalPin.P8,
        [SensorChannel.P12]: DigitalPin.P12,
        [SensorChannel.P2]: DigitalPin.P2,
        [SensorChannel.P13]: DigitalPin.P13,
        [SensorChannel.P14]: DigitalPin.P14,
        [SensorChannel.P15]: DigitalPin.P15,
        [SensorChannel.P16]: DigitalPin.P16,
    }
    export let SensorChannelA: { [key: number]: AnalogPin } = {
        [SensorChannel.P1]: AnalogPin.P1,
        [SensorChannel.P8]: AnalogPin.P8,
        [SensorChannel.P12]: AnalogPin.P12,
        [SensorChannel.P2]: AnalogPin.P2,
        [SensorChannel.P13]: AnalogPin.P13,
        [SensorChannel.P14]: AnalogPin.P14,
        [SensorChannel.P15]: AnalogPin.P15,
        [SensorChannel.P16]: AnalogPin.P16,
    }
    //----------------------------------


    export enum BlackChannel {
        //% block="P1"
        P1,
        //% block="P8"
        P8,
        //% block="P12"
        P12,
        //% block="P2"
        P2,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
    }
    export let BlackChannels: { [key: number]: DigitalPin } = {
        [BlackChannel.P1]: DigitalPin.P1,
        [BlackChannel.P8]: DigitalPin.P8,
        [BlackChannel.P12]: DigitalPin.P12,
        [BlackChannel.P2]: DigitalPin.P2,
        [BlackChannel.P13]: DigitalPin.P13,
        [BlackChannel.P14]: DigitalPin.P14,
        [BlackChannel.P15]: DigitalPin.P15,
        [BlackChannel.P16]: DigitalPin.P16,
    }
    //% color=#000000
    //% block="read button $pin (0-1)"
    //% group="Read Sensor"
    export function readbutton(pin: ButtonChannel): number {
        let read = ButtonChannels[pin];
        pins.setPull(ButtonChannels[pin], PinPullMode.PullUp);
        let reading = pins.digitalReadPin(read);
        return (reading);
    }
    //% color=#000000    
    //% block="analog Sensor $pin (0-1023) "
    //% group="Read Sensor"
    export function lightSensor(pin: SensorChannel): number {
        let read = SensorChannelA[pin];
        let reading = pins.analogReadPin(read);
        //let mappin = pins.map(reading, 0, 1023, 0, 10); // แปลงค่าจาก 0-1023 เป็น 0-10
        return Math.round(reading);
    }

    //% color=#000000    
    //% block="digital Sensor $pin (0-1)"
    //% group="Read Sensor"
    export function Sensor(pin: SensorChannel): number {
        let read = SensorChannels[pin];
        let reading = pins.digitalReadPin(read);
        return (reading);
    }
    
    
    /**
    * The string used to mark a new line, default is \r\n
    *  Serial Write line
    */
    export let NEW_LINE = "\r\n";
    export let NEW_LINE_DELIMITER: Delimiters = Delimiters.NewLine;
    let writeLinePadding = 32;

    /**
     * Print a line of text to the serial port
     * @param value to send over serial
     */
    //% weight=90
    //% help=serial/write-line blockGap=8
    //% blockId=serial_writeline block="serial|write line %text"
    //% text.shadowOptions.toString=true
    //% group="Read Sensor"
    //% color=#8470FF
    export function writeLine(text: string): void {
        if (!text) text = "";
        serial.writeString(text);
        // pad data to the 32 byte boundary
        // to ensure apps receive the packet
        if (writeLinePadding > 0) {
            let r = (writeLinePadding - (text.length + NEW_LINE.length) % writeLinePadding) % writeLinePadding;
            for (let i = 0; i < r; ++i)
                serial.writeString(" ");
        }
        serial.writeString(NEW_LINE);
    }
    //ส่งข้อมูล




    function signal_dht11(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0);
        basic.pause(18);
        let i = pins.digitalReadPin(pin);
        pins.setPull(pin, PinPullMode.PullUp);
    }


    //% color=#383838
    //% block="track Line $pin Black Color"
    //% group="Logic Sensor"
    export function isblack(pin: BlackChannel): boolean {
        let read = BlackChannels[pin];
        return pins.digitalReadPin(read) == 1;
    }
    //% color=#636262
    //% block="track Line $pin Not Black"
    //% group="Logic Sensor"
    export function notblack(pin: BlackChannel): boolean {
        let read = BlackChannels[pin];
        return pins.digitalReadPin(read) == 0;
    }


    //% color=#3D3430    
    //% block="on button $pin pressed"
    //% group="Logic Sensor"
    export function isButtonPressed(pin: ButtonChannel): boolean {
        pins.setPull(ButtonChannels[pin], PinPullMode.PullUp);
        let read = ButtonChannels[pin];
        return pins.digitalReadPin(read) == 0;
    }







    function dht11_read(pin: DigitalPin): number {
        signal_dht11(pin);

        // Wait for response header to finish
        while (pins.digitalReadPin(pin) == 1);
        while (pins.digitalReadPin(pin) == 0);
        while (pins.digitalReadPin(pin) == 1);

        let value = 0;
        let counter = 0;

        for (let i = 0; i <= 32 - 1; i++) {
            while (pins.digitalReadPin(pin) == 0);
            counter = 0
            while (pins.digitalReadPin(pin) == 1) {
                counter += 1;
            }
            if (counter > 4) {
                value = value + (1 << (31 - i));
            }
        }
        return value;
    }

    export enum Dht11Result {
        //% block="Celsius"
        Celsius,
        //% block="Fahrenheit"
        Fahrenheit,
        //% block="humidity"
        humidity
    }

    //% group="thermometer"
    //% color=#76dbb1
    //% blockId=get_DHT11_value block="dht11 set pin %pin_arg|get %dhtResult" blockExternalInputs=true
    //% pin_arg.fieldEditor="gridpicker" pin_arg.fieldOptions.columns=4
    //% pin_arg.fieldOptions.tooltips="false" pin_arg.fieldOptions.width="300"
    export function get_DHT11_value(pin_arg: DigitalPin, dhtResult: Dht11Result): number {
        switch (dhtResult) {
            case Dht11Result.Celsius: return (dht11_read(pin_arg) & 0x0000ff00) >> 8;
            case Dht11Result.Fahrenheit: return ((dht11_read(pin_arg) & 0x0000ff00) >> 8) * 9 / 5 + 32;
            case Dht11Result.humidity: return dht11_read(pin_arg) >> 24;
            default: return 0;
        }
    }



    //MLX90614_TEMPERATURE
    let MLX90614_I2C_ADDR = 0x5A

    function read_reg_uint16(reg: number): number {
        pins.i2cWriteNumber(MLX90614_I2C_ADDR, reg, NumberFormat.UInt8LE, true);
        return pins.i2cReadNumber(MLX90614_I2C_ADDR, NumberFormat.UInt16LE);
    }

    /**
     * temperature
     */
    //MLX90614 IR thermometer

    export enum MLX90614_TEMPERATURE_ORIGIN {
        //% block="object"
        OBJECT = 0x07,
        //% block="ambient"
        AMBIENT = 0x06,
    }


    //% color=#76dbb1
    //% blockId="mlx90614_TEMPERATURE" block="%temperature_origin temperature (°C)"
    //% weight=80 blockGap=8
    //% group="MLX90614 IR thermometer"
    export function temperature(temperature_origin: MLX90614_TEMPERATURE_ORIGIN): number {
        let t = read_reg_uint16(temperature_origin);
        return t * 0.02 - 273.15;
    }

    //sonar
    export enum PingUnitold {
        //% block="μs"
        MicroSeconds,
        //% block="cm"
        Centimeters,
        //% block="inches"
        Inches
    }
    export enum SonarPort {
        //% block="E [ trig(P16) echo(P15) ]"
        E,
        //% block="F [ trig(P14) echo(P13) ]"
        F,
        //% block="G [ trig(P2) echo(P12) ]"
        G,
        //% block="H [ trig(P8) echo(P1) ]"
        H,
    }
    export let TrigChanelold: { [key: number]: DigitalPin } = {
        [SonarPort.E]: DigitalPin.P16,
        [SonarPort.F]: DigitalPin.P14,
        [SonarPort.G]: DigitalPin.P2,
        [SonarPort.H]: DigitalPin.P8,
    }
    export let EchoChanelolde: { [key: number]: DigitalPin } = {
        [SonarPort.E]: DigitalPin.P15,
        [SonarPort.F]: DigitalPin.P13,
        [SonarPort.G]: DigitalPin.P12,
        [SonarPort.H]: DigitalPin.P1,
    }
    //% color=#76dbb1
    //sonar
    //% block="sonar %channel unit %unit"
    //% group="ect"
    //% unit.defl=PingUnitold.Centimeters
    export function ping(channel: SonarPort, unit: PingUnitold, maxCmDistance = 500): number {
        let trig = TrigChanelold[channel];
        let echo = EchoChanelolde[channel];
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnitold.Centimeters: return Math.idiv(d, 58);
            case PingUnitold.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }


    //% color=#76dbb1
    //% group="ect"
    //% block="ultrasonic trig %trig|echo %echo|get distance %unit"
    //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=4
    //% trig.fieldOptions.tooltips="false" trig.fieldOptions.width="300"
    //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=4
    //% echo.fieldOptions.tooltips="false" echo.fieldOptions.width="300"
    export function sensorping(trig: DigitalPin, echo: DigitalPin, unit: PingUnitold, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnitold.Centimeters: return d / 58;
            case PingUnitold.Inches: return d / 148;
            default: return d;
        }
    }
    //% group="ect"
    //% color=#76dbb1
    //% blockId=octopus_pir weight=80 blockGap=30
    //% block="motion detector at pin %p"    

    export function PIR(p: SensorChannel): boolean {
        let b = SensorChannels[p];
        let a: number = pins.digitalReadPin(b);
        if (a == 1) {
            return true;
        } else return false;
    }

}



//% color=#E7734B  icon="\uf48b"
//% groups="['Motor','Servo','Led', 'Read Sensor','MLX90614 IR thermometer','Logic Sensor','I2C LCD 1602']"
namespace GigoMotor {
    // motor control
    export enum MotorChannel {
        //% block="E (P15,P16)"
        E,
        //% block="F (P13,P14)""
        F,
        //% block="G (P12,P2)""
        G,
        //% block="H (P1,P8)""
        H,
    }
    export enum MotorShaftDirection {
        //% block="Left"
        LOW,
        //% block="Right"
        HIGH,
    }
    export let MotorSDD: { [key: number]: number } = {
        [MotorShaftDirection.LOW]: 0,
        [MotorShaftDirection.HIGH]: 1,
    }
    export let MotorSpeedPins: { [key: number]: AnalogPin } = {
        [MotorChannel.E]: AnalogPin.P16,
        [MotorChannel.F]: AnalogPin.P14,
        [MotorChannel.G]: AnalogPin.P2,
        [MotorChannel.H]: AnalogPin.P8,
    }
    export let MotorChannels: { [key: number]: DigitalPin } = {
        [MotorChannel.E]: DigitalPin.P15,
        [MotorChannel.F]: DigitalPin.P13,
        [MotorChannel.G]: DigitalPin.P12,
        [MotorChannel.H]: DigitalPin.P1,
    }

    //% color=#E7734B
    //% direction.defl=MotorShaftDirection.HIGH
    //% block="stop motor $channel"
    //% group="Motor"
    export function motorStop1(channel: MotorChannel): void {
        let dirPin = MotorChannels[channel];
        let speedPin = MotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, 0);
        pins.analogWritePin(speedPin, 0);
    }


    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=100
    //% speed.defl=100
    //% direction.min=0 direction.max=1
    //% group="Motor"
    //% color=#E7734B
    export function motorControl1(channel: MotorChannel, direction: number, speed: number): void {
        let dirPin = MotorChannels[channel];
        let speedPin = MotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));
    }

    //% color=#E7734B
    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=100
    //% speed.defl=100
    //% direction.defl=motor.MotorShaftDirection.HIGH
    //% group="Motor"

    export function motorControl2(channel: MotorChannel, direction: MotorShaftDirection, speed: number): void {
        let dirPin = MotorChannels[channel];
        let speedPin = MotorSpeedPins[channel];
        let direct = MotorSDD[direction];
        pins.digitalWritePin(dirPin, direct);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));
    }

    //servo180
    export enum ServoChannel {
        //% block="P1"
        P1,
        //% block="P8"
        P8,
        //% block="P12"
        P12,
        //% block="P2"
        P2,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
    }
    export let ServoChannels: { [key: number]: AnalogPin } = {
        [ServoChannel.P1]: AnalogPin.P1,
        [ServoChannel.P8]: AnalogPin.P8,
        [ServoChannel.P12]: AnalogPin.P12,
        [ServoChannel.P2]: AnalogPin.P2,
        [ServoChannel.P13]: AnalogPin.P13,
        [ServoChannel.P14]: AnalogPin.P14,
        [ServoChannel.P15]: AnalogPin.P15,
        [ServoChannel.P16]: AnalogPin.P16,
    }
    //----------------------------------

    export enum ServoconChannel {
        //% block="P1"
        P1,
        //% block="P8"
        P8,
        //% block="P12"
        P12,
        //% block="P2"
        P2,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
    }
    export let ServoconChannels: { [key: number]: AnalogPin } = {
        [ServoconChannel.P1]: AnalogPin.P1,
        [ServoconChannel.P8]: AnalogPin.P8,
        [ServoconChannel.P12]: AnalogPin.P12,
        [ServoconChannel.P2]: AnalogPin.P2,
        [ServoconChannel.P13]: AnalogPin.P13,
        [ServoconChannel.P14]: AnalogPin.P14,
        [ServoconChannel.P15]: AnalogPin.P15,
        [ServoconChannel.P16]: AnalogPin.P16,
    }
    export enum SvconShaft {
        //% block="Right"
        Right = 0,
        //% block="Left"
        Left = 180,
        //% block="Stop"
        Stop = 90,

    }
    export let DegreesCon: { [key: number]: number } = {
        [SvconShaft.Right]: 0,
        [SvconShaft.Left]: 180,
        [SvconShaft.Stop]: 90,

    }

    //% color=#E84E19
    //% block"servo180 $pinSmini degrees $degrees"
    //% degrees.min=20 degrees.max=160
    //% degrees.defl=90
    //% group="Servo"
    export function miniServo(pinSmini: ServoChannel, degrees: number): void {
        let pinsmini = ServoChannels[pinSmini];
        pins.servoWritePin(pinsmini, degrees);

    }
    //% color=#E84E19
    //% block"continuous Servo $pinSV direction $direction"
    //% direction.defl=90
    //% group="Servo"
    export function continuousServo(pinSV: ServoChannel, direction: SvconShaft): void {
        let pinservo = ServoChannels[pinSV];
        pins.servoWritePin(pinservo, direction);

    }
}


//% color=#E7734B icon="\uf26c"
namespace LCD1602 {
    //LCD i2c


    let i2cAddr: number // 0x3F: PCF8574A, 0x27: PCF8574
    let BK: number      // backlight control
    let RS: number      // command/data

    // set LCD reg
    function setreg(d: number) {
        pins.i2cWriteNumber(i2cAddr, d, NumberFormat.Int8LE)
        basic.pause(1)
    }

    // send data to I2C bus
    function set(d: number) {
        d = d & 0xF0
        d = d + BK + RS
        setreg(d)
        setreg(d + 4)
        setreg(d)
    }

    // send command
    function cmd(d: number) {
        RS = 0
        set(d)
        set(d << 4)
    }

    // send data
    function dat(d: number) {
        RS = 1
        set(d)
        set(d << 4)
    }

    // auto get LCD address
    function AutoAddr() {
        let k = true
        let addr = 0x20
        let d1 = 0, d2 = 0
        while (k && (addr < 0x28)) {
            pins.i2cWriteNumber(addr, -1, NumberFormat.Int32LE)
            d1 = pins.i2cReadNumber(addr, NumberFormat.Int8LE) % 16
            pins.i2cWriteNumber(addr, 0, NumberFormat.Int16LE)
            d2 = pins.i2cReadNumber(addr, NumberFormat.Int8LE)
            if ((d1 == 7) && (d2 == 0)) k = false
            else addr += 1
        }
        if (!k) return addr

        addr = 0x38
        while (k && (addr < 0x40)) {
            pins.i2cWriteNumber(addr, -1, NumberFormat.Int32LE)
            d1 = pins.i2cReadNumber(addr, NumberFormat.Int8LE) % 16
            pins.i2cWriteNumber(addr, 0, NumberFormat.Int16LE)
            d2 = pins.i2cReadNumber(addr, NumberFormat.Int8LE)
            if ((d1 == 7) && (d2 == 0)) k = false
            else addr += 1
        }
        if (!k) return addr
        else return 0

    }


    //% color=#045F14
    //% blockId="i2c_LCD1620_SET_ADDRESS" block="lcd (A) Address %addr"
    //% weight=100 blockGap=8
    //% parts=LCD1602_I2C trackArgs=0
    //% group="LCD i2c"
    export function LcdInit(Addr: number) {
        if (Addr == 0) i2cAddr = AutoAddr()
        else i2cAddr = Addr
        BK = 8
        RS = 0
        cmd(0x33)       // set 4bit mode
        basic.pause(5)
        set(0x30)
        basic.pause(5)
        set(0x20)
        basic.pause(5)
        cmd(0x28)       // set mode
        cmd(0x0C)
        cmd(0x06)
        cmd(0x01)       // clear
    }

    //% color=#045F14
    //% blockId="i2c_LCD1620_SHOW_NUMBER" block="show number %n|at x %x|y %y"
    //% weight=90 blockGap=8
    //% x.min=0 x.max=15
    //% y.min=0 y.max=1
    //% parts=LCD1602_I2C trackArgs=0
    //% group="LCD i2c"
    export function ShowNumber(n: number, x: number, y: number): void {
        let s = n.toString()
        ShowString(s, x, y)
    }

    //% color=#045F14
    //% blockId="i2c_LCD1620_SHOW_STRING" block="show string %s|at x %x|y %y"
    //% weight=90 blockGap=8
    //% x.min=0 x.max=15
    //% y.min=0 y.max=1
    //% parts=LCD1602_I2C trackArgs=0
    //% group="LCD i2c"
    export function ShowString(s: string, x: number, y: number): void {
        let a: number

        if (y > 0)
            a = 0xC0
        else
            a = 0x80
        a += x
        cmd(a)

        for (let i = 0; i < s.length; i++) {
            dat(s.charCodeAt(i))
        }
    }

    //% color=#045F14
    //% blockId="i2c_LCD1620_ON" block="lcd on"
    //% weight=81 blockGap=8
    //% parts=LCD1602_I2C trackArgs=0
    //% group="LCD i2c"
    export function on(): void {
        cmd(0x0C)
    }

    //% color=#045F14
    //% blockId="i2c_LCD1620_OFF" block="lcd off"
    //% weight=80 blockGap=8
    //% parts=LCD1602_I2C trackArgs=0
    //% group="LCD i2c"
    export function off(): void {
        cmd(0x08)
    }

    //% color=#045F14
    //% blockId="i2c_LCD1620_CLEAR" block="clear"
    //% weight=85 blockGap=8
    //% parts=LCD1602_I2C trackArgs=0
    //% group="LCD i2c"
    export function clear(): void {
        cmd(0x01)
    }

    //% color=#045F14
    //% blockId="i2c_LCD1620_BACKLIGHT_ON" block="light on"
    //% weight=71 blockGap=8
    //% parts=LCD1602_I2C trackArgs=0
    //% group="LCD i2c"
    export function BacklightOn(): void {
        BK = 8
        cmd(0)
    }

    //% color=#045F14
    //% blockId="i2c_LCD1620_BACKLIGHT_OFF" block="light off "
    //% weight=70 blockGap=8
    //% parts=LCD1602_I2C trackArgs=0
    //% group="LCD i2c"
    export function BacklightOff(): void {
        BK = 0
        cmd(0)
    }



}


//% color=#E7734B icon="\uf11b"
namespace Joystick {

    //button ALL
    export enum DfButton {
        //% block="red"
        Red,
        //% block="blue"
        Blue,
        //% block="green"
        Green,
        //% block="yellow"
        Yellow,
        //% block="buttonA"
        A,
        //% block="buttonB"
        B,
        //% block="Joy"
        Joy,
    }

    export let EnButtonChannels: { [key: number]: DigitalPin } = {
        [DfButton.Red]: DigitalPin.P15,
        [DfButton.Blue]: DigitalPin.P16,
        [DfButton.Green]: DigitalPin.P13,
        [DfButton.Yellow]: DigitalPin.P14,
        [DfButton.A]: DigitalPin.P5,
        [DfButton.B]: DigitalPin.P11,
        [DfButton.Joy]: DigitalPin.P8,
    };

    // เก็บสถานะของปุ่มก่อนหน้า
    let buttonStates: { [key: number]: boolean } = {
        [DfButton.Red]: false,
        [DfButton.Blue]: false,
        [DfButton.Green]: false,
        [DfButton.Yellow]: false,
        [DfButton.A]: false,
        [DfButton.B]: false,
        [DfButton.Joy]: false,
    };

    export enum EnButtonState {
        //% block="Press"
        Press,
        //% block="Release"
        Release
    }

    /**
     * ตรวจสอบสถานะปุ่ม
     * - `Press`: ทำงานเมื่อปุ่มถูกกดหรือกดค้าง
     * - `Release`: ทำงานเมื่อปุ่มถูกปล่อย
     */
    //% block="button %num| is %state"
    //% group="DFrobot"
    //% color=#383838
    export function ButtonDF(num: DfButton, state: EnButtonState): boolean {
        let pin = EnButtonChannels[num];
        pins.setPull(pin, PinPullMode.PullUp);
        let currentState = pins.digitalReadPin(pin) == 0;

        if (state == EnButtonState.Press) {
            // ตรวจสอบสถานะ "กดปุ่ม" หรือ "กดค้าง"
            if (currentState && !buttonStates[num]) {
                buttonStates[num] = true; // อัปเดตสถานะเป็นกด
                return true; // สัญญาณว่ากดปุ่มครั้งแรก
            } else if (currentState) {
                return true; // กดค้าง
            }
        } else if (state == EnButtonState.Release) {
            // ตรวจสอบสถานะ "ปล่อยปุ่ม"
            if (!currentState && buttonStates[num]) {
                buttonStates[num] = false; // อัปเดตสถานะเป็นปล่อย
                return true; // สัญญาณว่าปล่อยปุ่ม
            }
        }

        return false; // ไม่ตรงกับสถานะที่เลือก
    }





    //---------------------------------------------------
    //joy move 
    export enum DfJOY {
        //% block="left"
        LEFT,
        //% block="right"
        RIGHT,
        //% block="up"
        UP,
        //% block="down"
        DOWN,
    }



    // เก็บสถานะของปุ่มก่อนหน้า
    export let joyStates: { [key: number]: boolean } = {
        [DfJOY.LEFT]: false,
        [DfJOY.RIGHT]: false,
        [DfJOY.UP]: false,
        [DfJOY.DOWN]: false,

    };

    export enum EnJOYState {
        //% block="move"
        Move,
        //% block="Release"
        Release
    }


    //% block="joy %state Direction %num|  "
    //% group="DFrobot"
    //% color=#383838
    export function JoyDF(state: EnJOYState, num: DfJOY): boolean {
        let currentState = pins.analogReadPin(AnalogPin.P1); // อ่านค่าจาก AnalogPin.P1

        if (num == DfJOY.LEFT) {
            if (state == EnJOYState.Move && currentState < 300) {
                joyStates[num] = true; // อัปเดตสถานะว่า "กด"
                return true;
            } else if (state == EnJOYState.Release && joyStates[num] && currentState >= 300) {
                joyStates[num] = false; // อัปเดตสถานะว่า "ปล่อย"
                return true;
            }
        } else if (num == DfJOY.RIGHT) {
            if (state == EnJOYState.Move && currentState > 600) {
                joyStates[num] = true; // อัปเดตสถานะว่า "กด"
                return true;
            } else if (state == EnJOYState.Release && joyStates[num] && currentState <= 600) {
                joyStates[num] = false; // อัปเดตสถานะว่า "ปล่อย"
                return true;
            }
        }

        let currentStateY = pins.analogReadPin(AnalogPin.P2);
        if (num == DfJOY.DOWN) {
            if (state == EnJOYState.Move && currentStateY < 300) {
                joyStates[num] = true; // อัปเดตสถานะว่า "กด"
                return true;
            } else if (state == EnJOYState.Release && joyStates[num] && currentStateY >= 300) {
                joyStates[num] = false; // อัปเดตสถานะว่า "ปล่อย"
                return true;
            }
        } else if (num == DfJOY.UP) {
            if (state == EnJOYState.Move && currentStateY > 600) {
                joyStates[num] = true; // อัปเดตสถานะว่า "กด"
                return true;
            } else if (state == EnJOYState.Release && joyStates[num] && currentStateY <= 600) {
                joyStates[num] = false; // อัปเดตสถานะว่า "ปล่อย"
                return true;
            }
        }

        return false; // ไม่ตรงกับเงื่อนไขใด ๆ
    }

    //---------------------------------------------------

    export enum EnButton {

        B1 = 0,
        B2,
        B3,
        B4
    }

    export enum EnRocker {
        //% blockId="Nostate" block="Nostate"
        Nostate = 0,
        //% blockId="Up" block="Up"
        Up,
        //% blockId="Down" block="Down"
        Down,
        //% blockId="Left" block="Left"
        Left,
        //% blockId="Right" block="Right"
        Right,
        //% blockId="Press" block="Press"
        Press
    }

    //% group="GHBit"
    //% blockId=ghBit_Rocker block="rocker|value %value"
    //% weight=96
    //% blockGap=10
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Rocker(value: EnRocker): boolean {

        pins.setPull(DigitalPin.P8, PinPullMode.PullUp);
        let x = pins.analogReadPin(AnalogPin.P1);
        let y = pins.analogReadPin(AnalogPin.P2);
        let z = pins.digitalReadPin(DigitalPin.P8);
        let now_state = EnRocker.Nostate;

        if (x < 200) {

            now_state = EnRocker.Up;

        }
        else if (x > 730) {

            now_state = EnRocker.Down;
        }
        else {
            if (y < 200) {
                now_state = EnRocker.Right;
            }
            else if (y > 730) {
                now_state = EnRocker.Left;
            }
        }
        if (z == 0)
            now_state = EnRocker.Press;
        if (now_state == value)
            return true;
        else
            return false;

    }
    //% group="GHBit"
    //% blockId=ghBit_Button block="button| %num|value %value"
    //% weight=95
    //% blockGap=10
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function Button(num: EnButton, value: EnButtonState): boolean {
        let temp = false;
        switch (num) {
            case EnButton.B1: {
                pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P13) == value) {
                    temp = true;
                }
                else {
                    temp = false;
                }
                break;
            }
            case EnButton.B2: {
                pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P14) == value) {
                    temp = true;
                }
                else {
                    temp = false;
                }
                break;
            }
            case EnButton.B3: {
                pins.setPull(DigitalPin.P15, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P15) == value) {
                    temp = true;
                }
                else {
                    temp = false;
                }
                break;
            }
            case EnButton.B4: {
                pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P16) == value) {
                    temp = true;
                }
                else {
                    temp = false;
                }
                break;
            }
        }
        return temp;
    }



}


