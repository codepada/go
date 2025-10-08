

//% weight=0 color=#3CB371 icon="\uf135"  groups='["Gigo Motor","Motor for workshop", "Ultrasonic Sensor", "RGB LED", "Color Sensor"]'
namespace GigoWorkshop {

    //external button for roboticworkshop
    export enum ButtonChannelWS {
        //% block="A (P1)"
        A,
        //% block="B (P8)"
        B,
        //% block="C (P14)"
        C,
        //% block="D (P16)"
        D,
        //% block="I2C"
        E,
    }
    export let ButtonChannelsWS: { [key: number]: DigitalPin } = {
        [ButtonChannelWS.A]: DigitalPin.P1,
        [ButtonChannelWS.B]: DigitalPin.P8,
        [ButtonChannelWS.C]: DigitalPin.P14,
        [ButtonChannelWS.D]: DigitalPin.P16,
        [ButtonChannelWS.E]: DigitalPin.P20,

    }
    //----------------------------------



    //external sensor
    export enum SensorChannelWS {
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P8"
        P8,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
        //% block="P0"
        P0,
    }
    export let SensorChannelsWS: { [key: number]: DigitalPin } = {
        [SensorChannelWS.P1]: DigitalPin.P1,
        [SensorChannelWS.P8]: DigitalPin.P8,
        [SensorChannelWS.P0]: DigitalPin.P0,
        [SensorChannelWS.P2]: DigitalPin.P2,
        [SensorChannelWS.P13]: DigitalPin.P13,
        [SensorChannelWS.P14]: DigitalPin.P14,
        [SensorChannelWS.P15]: DigitalPin.P15,
        [SensorChannelWS.P16]: DigitalPin.P16,
    }
    export let SensorChannelAWS: { [key: number]: AnalogPin } = {
        [SensorChannelWS.P1]: AnalogPin.P1,
        [SensorChannelWS.P8]: AnalogPin.P8,
        [SensorChannelWS.P0]: AnalogPin.P0,
        [SensorChannelWS.P2]: AnalogPin.P2,
        [SensorChannelWS.P13]: AnalogPin.P13,
        [SensorChannelWS.P14]: AnalogPin.P14,
        [SensorChannelWS.P15]: AnalogPin.P15,
        [SensorChannelWS.P16]: AnalogPin.P16,
    }
    //----------------------------------
    //% color=#000000
    //% block="read Toggle $pin (0-1)"
    //% group="Read Sensor"
    export function readToggle(pin: SensorChannelWS): number {
        let read = SensorChannelsWS[pin];
        pins.setPull(SensorChannelsWS[pin], PinPullMode.PullUp);
        let reading = pins.digitalReadPin(read);
        return (reading);
    }
    //% color=#000000
    //% block="read button $pin (0-1)"
    //% group="Read Sensor"
    export function readbuttonWS(pin: ButtonChannelWS): number {
        let read = ButtonChannelsWS[pin];
        pins.setPull(ButtonChannelsWS[pin], PinPullMode.PullUp);
        let reading = pins.digitalReadPin(read);
        return (reading);
    }
    //% color=#000000    
    //% block="analog Sensor $pin (0-1023) "
    //% group="Read Sensor"
    export function lightSensorWS(pin: SensorChannelWS): number {
        let read = SensorChannelAWS[pin];
        let reading = pins.analogReadPin(read);
        //let mappin = pins.map(reading, 0, 1023, 0, 10); // แปลงค่าจาก 0-1023 เป็น 0-10
        return Math.round(reading);
    }

    //% color=#000000    
    //% block="digital Sensor $pin (0-1)"
    //% group="Read Sensor"
    export function SensorWS(pin: SensorChannelWS): number {
        let read = SensorChannelsWS[pin];
        let reading = pins.digitalReadPin(read);
        return (reading);
    }




    ////////////////////////////////
    //          DDM Motor         //
    ////////////////////////////////


    /**motor channel
    A(1,2)
    B(8,13)
    C(14,15)
    D(16,0)
    I2C(20,19)
    */
    // motor for gigotools kit 
    export enum GgMotorChannel {
        //% block="A (P2,P1)"
        A,
        //% block="B (P13,P8)"
        B,
        //% block="C (P15,P14)"
        C,
        //% block="D (P0,P16)"
        D,
    }
    export enum GgMotorShaftDirection {
        //% block="Left"
        LOW,
        //% block="Right"
        HIGH,

    }
    export let GgmotorSpeedPins: { [key: number]: AnalogPin } = {
        [GgMotorChannel.A]: AnalogPin.P1,
        [GgMotorChannel.B]: AnalogPin.P8,
        [GgMotorChannel.C]: AnalogPin.P14,
        [GgMotorChannel.D]: AnalogPin.P16,
    }
    export let GgmotorChannels: { [key: number]: DigitalPin } = {
        [GgMotorChannel.A]: DigitalPin.P2,
        [GgMotorChannel.B]: DigitalPin.P13,
        [GgMotorChannel.C]: DigitalPin.P15,
        [GgMotorChannel.D]: DigitalPin.P0,
    }


    export enum ServoNew {
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P8"
        P8,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
        //% block="P0"
        P0,
    }
    export let servoNewchanel: { [key: number]: AnalogPin } = {
        [ServoNew.P1]: AnalogPin.P1,
        [ServoNew.P2]: AnalogPin.P2,
        [ServoNew.P8]: AnalogPin.P8,
        [ServoNew.P13]: AnalogPin.P13,
        [ServoNew.P14]: AnalogPin.P14,
        [ServoNew.P15]: AnalogPin.P15,
        [ServoNew.P16]: AnalogPin.P16,
        [ServoNew.P0]: AnalogPin.P0,
    }




    //% block="servo $pin degrees $degrees"
    //% degrees.min=0 degrees.max=180
    //% degrees.defl=90
    //% group="Motor for workshop"
    export function servo(pin: ServoNew, degrees: number): void {
        let pinsmini = servoNewchanel[pin];
        return pins.servoWritePin(pinsmini, degrees);

    }

    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=100
    //% speed.defl=100
    //% direction.min=0 direction.max=1
    //% group="Motor for workshop"
    export function motorControl3(channel: GgMotorChannel, direction: number, speed: number): void {
        let dirPin = GgmotorChannels[channel];
        let speedPin = GgmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));
    }


    //% direction.defl=GgMotorShaftDirection.HIGH
    //% block="stop motor $channel"
    //% group="Motor for workshop"
    export function motorStop2(channel: GgMotorChannel): void {
        let dirPin = GgmotorChannels[channel];
        let speedPin = GgmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, 0);
        pins.analogWritePin(speedPin, 0);
    }

    //% block="motor $channel direction $direction speed $speed" 
    //% speed.min=0 speed.max=100
    //% speed.defl=100
    //% direction.defl=GgMotorShaftDirection.HIGH
    //% group="Motor for workshop"
    export function motorControl4(channel: GgMotorChannel, direction: GgMotorShaftDirection, speed: number): void {
        let dirPin = GgmotorChannels[channel];
        let speedPin = GgmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));
    }

    export enum GgMotorChannelwork {
        //% block="A"
        A,
        //% block="B"
        B,
        //% block="C"
        C,
        //% block="D"
        D,
    }

    //% color=#6356b3
    //% block="motor channel $channel|speed (0~100) $speed|rotation direction(0~1) $direction" blockExternalInputs=false
    //% speed.min=0 speed.max=100
    //% speed.defl=100
    //% group="Motor for workshop"
    export function motorControl5(channel: GgMotorChannelwork, direction: number, speed: number): void {
        let dirPin = GgmotorChannels[channel];
        let speedPin = GgmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));
    }
    //% color=#6356b3
    //% block="speed pin %MSpeedPin|speed (0~255) %MSpeedValue|direction pin %McontrolPin|rotation direction(0~1) %McontrolValue" blockExternalInputs=false
    //% McontrolValue.min=0 McontrolValue.max=1 
    //% MSpeedValue.min=0 MSpeedValue.max=255   
    //% MSpeedPin.fieldEditor="gridpicker" MSpeedPin.fieldOptions.columns=4
    //% MSpeedPin.fieldOptions.tooltips="false" MSpeedPin.fieldOptions.width="300"
    //% McontrolPin.fieldEditor="gridpicker" McontrolPin.fieldOptions.columns=4
    //% McontrolPin.fieldOptions.tooltips="false" McontrolPin.fieldOptions.width="300"
    //% group="Motor for workshop"
    export function DDMmotor(MSpeedPin: AnalogPin, MSpeedValue: number, McontrolPin: DigitalPin, McontrolValue: number): void {

        pins.digitalWritePin(McontrolPin, McontrolValue);
        pins.analogWritePin(MSpeedPin, pins.map(MSpeedValue, 0, 255, 0, 1023));
    }






    ////////////////////////////////
    //          Ultrasound            //
    ////////////////////////////////
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig tigger pin
     * @param echo echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    export enum GgsonarPort {
        //% block="A [ trig(P1) echo(P2) ]"
        A,
        //% block="B [ trig(P8) echo(P13) ]"
        B,
        //% block="C [ trig(P14) echo(P15) ]"
        C,
        //% block="D [ trig(P16) echo(P0) ]"
        D,
    }
    export let GgtrigChanel: { [key: number]: DigitalPin } = {
        [GgsonarPort.A]: DigitalPin.P1,
        [GgsonarPort.B]: DigitalPin.P8,
        [GgsonarPort.C]: DigitalPin.P14,
        [GgsonarPort.D]: DigitalPin.P16,
    }
    export let GgechoChanel: { [key: number]: DigitalPin } = {
        [GgsonarPort.A]: DigitalPin.P2,
        [GgsonarPort.B]: DigitalPin.P13,
        [GgsonarPort.C]: DigitalPin.P15,
        [GgsonarPort.D]: DigitalPin.P0,
    }
    //sonar
    export enum PingUnitgigo {
        //% block="μs"
        MicroSeconds,
        //% block="cm"
        Centimeters,
        //% block="inches"
        Inches
    }

    //% block="sonar %channel unit %unit"
    //% group="Ultrasonic Sensor"
    //% unit.defl=PingUnitgigo.Centimeters
    export function pinggigo(channel: GgsonarPort, unit: PingUnitgigo, maxCmDistance = 500): number {
        let trig = GgtrigChanel[channel];
        let echo = GgechoChanel[channel];
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
            case PingUnitgigo.Centimeters: return Math.idiv(d, 58);
            case PingUnitgigo.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }


    //% color=#6356b3
    //% blockId=sonar_ping block="trig pin %trig|echo pin %echo|unit %unit"
    //% group="Ultrasonic Sensor"
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnitgigo, maxCmDistance = 500): number {
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
            case PingUnitgigo.Centimeters: return Math.idiv(d, 58);
            case PingUnitgigo.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }
    //% color=#8470FF
    //% block="Serial write line %text"
    //% group="Ultrasonic Sensor"
    export function serialWriteLine(text: any): void {
        serial.writeLine(text);
    }
    //////////////////////
    //       OLD LED.   //
    //////////////////////
    //----------------------------------


    export enum LEDChannelWS {
        //% block="A (P2)"
        A,
        //% block="B (P13)"
        B,
        //% block="C (P15)"
        C,
        //% block="D (P0)"
        D,
    }
    export let LEDChannelsWS: { [key: number]: DigitalPin } = {
        [LEDChannelWS.A]: DigitalPin.P2,
        [LEDChannelWS.B]: DigitalPin.P13,
        [LEDChannelWS.C]: DigitalPin.P15,
        [LEDChannelWS.D]: DigitalPin.P0,

    }

    //----------------------------------
    //% color=#FACB09
    //% block="led $leds status $status"
    //% status.min=0 status.max=1
    //% leds.defl=LEDChannelWS.D
    //% group="Led"
    export function ledtest(leds: LEDChannelWS, status: number): void {
        let ledg = LEDChannelsWS[leds];
        pins.digitalWritePin(ledg, status);

    }



    //% color=#FACB09
    //toggle led
    //% block="led %pin $ledstate"
    //% ledstate.shadow="toggleOnOff"
    //% expandableArgumentMode="toggle"
    //% pin.defl=LEDChannelWS.D
    //% group="Led"
    export function ledBrightness(pin: LEDChannelWS, ledstate: boolean): void {
        if (ledstate) {
            let pinled = LEDChannelsWS[pin];
            pins.digitalWritePin(pinled, 1);

        }
        else {
            let pinled = LEDChannelsWS[pin];
            pins.digitalWritePin(pinled, 0);

        }
    }

    ////////////////////////////////
    //          RGB LEDS          //
    ////////////////////////////////

    /**
    * Create a RGB LED Pin and show color directly.
    */

    export enum fixRGBpin {
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P8"
        P8,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
        //% block="P0"
        P0,
    }

    export let fixRGBpinChanel: { [key: number]: DigitalPin } = {
        [fixRGBpin.P1]: DigitalPin.P1,
        [fixRGBpin.P2]: DigitalPin.P2,
        [fixRGBpin.P8]: DigitalPin.P8,
        [fixRGBpin.P13]: DigitalPin.P13,
        [fixRGBpin.P14]: DigitalPin.P14,
        [fixRGBpin.P15]: DigitalPin.P15,
        [fixRGBpin.P16]: DigitalPin.P16,
        [fixRGBpin.P0]: DigitalPin.P0,
    }




    //% color=#EE82EE
    //% block="RGB Color pin %pin red %red green %green blue %blue brightness %brightness"
    //% weight=500 blockGap=8
    //% brightness.defl=255
    //% brightness.min=0 brightness.max=255
    //% group="RGB LED"
    export function RGBLED_showColorA(pin: fixRGBpin, red: number, green: number, blue: number, brightness: number): void {
        let buf = pins.createBuffer(1 * 3);

        // Set brightness
        brightness = brightness & 0xff;
        basic.pause(1); // add a pause to stop weirdnesses

        // Set color
        let color = packRGB(red, green, blue);

        // Show color
        buf[0] = unpackG(color);
        buf[1] = unpackR(color);
        buf[2] = unpackB(color);

        light.sendWS2812BufferWithBrightness(buf, fixRGBpinChanel[pin], brightness);
    }

    //% color=#EE82EE
    //% block="pin %pin|show color %color=RGBLED_colors|brightness %brightness"
    //% weight=100 blockGap=8
    //% brightness.defl=255
    //% brightness.min=0 brightness.max=255
    //% group="RGB LED"
    export function RGBLED_showColor(pin: fixRGBpin, color: number, brightness: number): void {
        let buf = pins.createBuffer(1 * 3);

        // Set brightness
        brightness = brightness & 0xff;
        basic.pause(1); // add a pause to stop weirdnesses

        // Set color
        let red = unpackR(color);
        let green = unpackG(color);
        let blue = unpackB(color);

        buf[0] = green;
        buf[1] = red;
        buf[2] = blue;

        // Show color
        light.sendWS2812BufferWithBrightness(buf, fixRGBpinChanel[pin], brightness);
    }

    export function RGBLED_createPin(pin: DigitalPin): HaloHd {
        let RGBLED = new HaloHd();
        RGBLED.buf = pins.createBuffer(1 * 3);
        RGBLED.start = 0;
        RGBLED._length = 1; /*LED數量*/
        RGBLED.RGBLED_setBrightness(128);
        RGBLED.pin = pin;
        pins.digitalWritePin(RGBLED.pin, pin);
        return RGBLED;
    }

    export class HaloHd {
        buf: Buffer;
        pin: DigitalPin;
        brightness: number;
        start: number;
        _length: number;

        /**
         * Shows whole ZIP Halo display as a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */

        RGBLED_setColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * Send all the changes to the ZIP Halo display.
         */

        show() {
            // Use the pxt-microbit core version which now respects brightness (10/2020)
            light.sendWS2812BufferWithBrightness(this.buf, this.pin, this.brightness);
        }

        /**
         * Turn off all LEDs on the ZIP Halo display.
         * You need to call ``show`` to make the changes visible.
         */

        clear(): void {
            this.buf.fill(0, this.start * 3, this._length * 3);
        }

        /**
         * Set the brightness of the ZIP Halo display. This flag only applies to future show operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */

        RGBLED_setBrightness(brightness: number): void {
            // Clamp incoming variable at 0-255 as values out of this range cause unexpected brightnesses as the lower level code only expects a byte.
            if (brightness < 0) {
                brightness = 0;
            } else if (brightness > 255) {
                brightness = 255;
            }
            this.brightness = brightness & 0xff;
            basic.pause(1); // add a pause to stop weirdnesses
        }

        // Sets up the buffer for pushing LED control data out to LEDs
        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            this.buf[offset + 0] = green;
            this.buf[offset + 1] = red;
            this.buf[offset + 2] = blue;
        }

        // Separates out Red, Green and Blue data and fills the LED control data buffer for all LEDs
        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * 3, red, green, blue);
            }
        }

        // Separates out Red, Green and Blue data and fills the LED control data buffer for a single LED
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0 || pixeloffset >= this._length) return;

            pixeloffset = (pixeloffset + this.start) * 3;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            this.setBufferRGB(pixeloffset, red, green, blue);
        }
    }

    /**
     * Converts wavelength value to red, green, blue channels
     * @param wavelength value between 470 and 625. eg: 500
     */

    export function wavelength(wavelength: number): number {
        /* The LEDs we are using have centre wavelengths of 470nm (Blue) 525nm(Green) and 625nm (Red) 
        *  We blend these linearly to give the impression of the other wavelengths. 
        *  as we can't wavelength shift an actual LED... (Ye canna change the laws of physics Capt)*/
        let r = 0;
        let g = 0;
        let b = 0;
        if (wavelength >= 470 && wavelength < 525) {
            // We are between Blue and Green so mix those
            g = pins.map(wavelength, 470, 525, 0, 255);
            b = pins.map(wavelength, 470, 525, 255, 0);
        } else if (wavelength >= 525 && wavelength <= 625) {
            // we are between Green and Red, so mix those
            r = pins.map(wavelength, 525, 625, 0, 255);
            g = pins.map(wavelength, 525, 625, 255, 0);
        }
        return packRGB(r, g, b);
    }

    /**
     * Converts hue (0-360) to an RGB value. 
     * Does not attempt to modify luminosity or saturation. 
     * Colours end up fully saturated. 
     * @param hue value between 0 and 360
     */

    export function hueToRGB(hue: number): number {
        let redVal = 0;
        let greenVal = 0;
        let blueVal = 0;
        let hueStep = 2.125;
        if (hue >= 0 && hue < 120) { // RedGreen section
            greenVal = Math.floor(hue * hueStep);
            redVal = 255 - greenVal;
        } else if (hue >= 120 && hue < 240) { // GreenBlueSection
            blueVal = Math.floor((hue - 120) * hueStep);
            greenVal = 255 - blueVal;
        } else if (hue >= 240 && hue < 360) { // BlueRedSection
            redVal = Math.floor((hue - 240) * hueStep);
            blueVal = 255 - redVal;
        }
        return ((redVal & 0xFF) << 16) | ((greenVal & 0xFF) << 8) | (blueVal & 0xFF);
    }
    /**
 * Converts value to red, green, blue channels
 * @param red value of the red channel between 0 and 255. eg: 255
 * @param green value of the green channel between 0 and 255. eg: 255
 * @param blue value of the blue channel between 0 and 255. eg: 255
 */

    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
     */
    export enum RGBLedColors {
        //% block=off
        Off = 0x000000,
        //% block=red
        Red = 0xFF0000,
        //% block=orange
        Orange = 0xFFA500,
        //% block=yellow
        Yellow = 0xFFFF00,
        //% block=green
        Green = 0x00FF00,
        //% block=blue
        Blue = 0x0000FF,

        //% block=purple
        Purple = 0xFF00FF,
        //% block=white
        White = 0xFFFFFF
    }



    //% blockId="RGBLED_colors" block="%color"
    export function colors(color: RGBLedColors): number {
        return color;
    }

    // Combines individual RGB settings to be a single number
    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }

    // Separates red value from combined number
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }

    // Separates green value from combined number
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }

    // Separates blue value from combined number
    function unpackB(rgb: number): number {
        let b = rgb & 0xFF;
        return b;
    }

    /**
     * Converts a hue saturation luminosity value into a RGB color
     */
    function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv(((100 - Math.abs(2 * l - 100)) * s << 8), 10000); // chroma, [0,255]
        let h1 = Math.idiv(h, 60); // [0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60); // [0,255]
        let temp = Math.abs(((h1 % 2) << 8 + h2) - 256);
        let x = (c * (256 - temp)) >> 8; // [0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c;
            g$ = x;
            b$ = 0;
        } else if (h1 == 1) {
            r$ = x;
            g$ = c;
            b$ = 0;
        } else if (h1 == 2) {
            r$ = 0;
            g$ = c;
            b$ = x;
        } else if (h1 == 3) {
            r$ = 0;
            g$ = x;
            b$ = c;
        } else if (h1 == 4) {
            r$ = x;
            g$ = 0;
            b$ = c;
        } else if (h1 == 5) {
            r$ = c;
            g$ = 0;
            b$ = x;
        }
        let m = Math.idiv((Math.idiv(l * 2 << 8, 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }

    /**
     * Options for direction hue changes, used by rainbow block (never visible to end user)
     */
    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }
    //---------------------------------------------//






    //แก้สีแล้ว
    ////////////////////////////////
    //          Color sensor     //
    ////////////////////////////////

    // Initialize the color sensor
    export function colorSensorInit(): void {
        pins.i2cWriteNumber(41, 33276, NumberFormat.UInt16BE, false);
        pins.i2cWriteNumber(41, 32771, NumberFormat.UInt16BE, false);
    }

    let nowReadColor = [0, 0, 0];

    // Function to read the current color values
    export function colorSensorReadNow(): number[] {
        pins.i2cWriteNumber(41, 178, NumberFormat.Int8LE, false);
        pins.i2cWriteNumber(41, 179, NumberFormat.Int8LE, false);
        pins.i2cWriteNumber(41, 182, NumberFormat.Int8LE, true);
        let TCS_RED = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false);
        pins.i2cWriteNumber(41, 184, NumberFormat.Int8LE, true);
        let TCS_GREEN = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false);
        pins.i2cWriteNumber(41, 186, NumberFormat.Int8LE, true);
        let TCS_BLUE = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false);

        TCS_RED = Math.round(Math.map(TCS_RED, 0, 65535, 0, 255));
        TCS_GREEN = Math.round(Math.map(TCS_GREEN, 0, 65535, 0, 255));
        TCS_BLUE = Math.round(Math.map(TCS_BLUE, 0, 65535, 0, 255));

        nowReadColor = [TCS_RED, TCS_GREEN, TCS_BLUE];
        return nowReadColor;
    }

    //% weight=12
    //% block="Read RGB"
    //% group="Color Sensor"
    export function scanColorBlock(): string {
        colorSensorInit();
        let colors = colorSensorReadNow();
        let red = colors[0];
        let green = colors[1];
        let blue = colors[2];
        return `R:${red}, G:${green}, B:${blue}`;
    }
    //code สำหรับ แสดงใน serial.writeLine
    //ปิดไว้
    export function scanColor(): void {
        colorSensorInit();
        let colors = colorSensorReadNow();
        let red = colors[0];
        let green = colors[1];
        let blue = colors[2];
        serial.writeLine(`R:${red}, G:${green}, B:${blue}`);
    }

    //% block="R %WriteRed G %WriteGreen B %WriteBlue to %Name"
    //% WriteRed.min=0 WriteRed.max=255
    //% WriteGreen.min=0 WriteGreen.max=255
    //% WriteBlue.min=0 WriteBlue.max=255
    //% Name.defl="name"
    //% group="Color Sensor"
    export function readColorEqual(WriteRed: number, WriteGreen: number, WriteBlue: number): boolean { // ลบ Name
        colorSensorInit();
        let colors = colorSensorReadNow();
        let red = colors[0];
        let green = colors[1];
        let blue = colors[2];

        return (red == WriteRed && green == WriteGreen && blue == WriteBlue);
    }


    // Function to check if the color matches exactly with a list of known RGB values
    function isExactMatch(R: number, G: number, B: number, exactValues: number[][]): boolean {
        return exactValues.some(color => color[0] === R && color[1] === G && color[2] === B);
    }

    // Enum for color options
    export enum ColorOptions {
        Red,
        Black,
        Blue,
        Green,
        Yellow,
        White
    }

    // Data for exact matches (based on the information you provided)
    const redExactValues = [
        [184, 185, 140], [185, 185, 140], [191, 187, 141], [197, 190, 142], [183, 185, 140], [184, 188, 141],
        [177, 178, 135], [177, 176, 133], [177, 180, 135], [195, 185, 138], [190, 180, 136],
        [177, 180, 136], [177, 178, 135], [177, 176, 133], [177, 180, 135], [195, 185, 138], [190, 180, 136],
        [177, 180, 136]
    ];


    const blackExactValues = [
        [153, 180, 135], [155, 182, 136], [153, 179, 135], [155, 181, 135], [154, 179, 134], [156, 182, 136], [154, 180, 134], [157, 183, 136]
    ];

    const blueExactValues = [
        [159, 187, 144], [162, 196, 154], [209, 250, 186], [160, 202, 163], [159, 196, 157],
        [158, 195, 156], [158, 187, 144], [159, 198, 157], [160, 201, 162]
    ];


    const greenExactValues = [
        [164, 201, 145], [163, 200, 145], [160, 197, 144], [161, 198, 144], [171, 207, 148],
        [187, 219, 150], [168, 205, 147], [176, 212, 149]
    ];

    const yellowExactValues = [
        [210, 227, 149], [210, 226, 148], [213, 215, 148], [231, 225, 151], [241, 246, 155], [226, 244, 154],
        [219, 236, 152], [243, 251, 157], [232, 232, 152], [202, 218, 144], [203, 219, 143],
        [200, 203, 141], [225, 218, 146], [214, 208, 143], [219, 216, 145]
    ];

    const whiteExactValues = [
        [8, 27, 198], [14, 30, 196], [1, 19, 193], [1, 19, 194], [15, 30, 197], [2, 21, 195], [9, 27, 199],
        [254, 17, 192], [253, 17, 192], [3, 23, 197], [0, 20, 194], [252, 16, 193], [0, 18, 193]
    ];

    // Function to check if the color is within a specified range
    function isColorInRange(R: number, G: number, B: number, RMin: number, RMax: number, GMin: number, GMax: number, BMin: number, BMax: number): boolean {
        return (R >= RMin && R <= RMax && G >= GMin && G <= GMax && B >= BMin && B <= BMax);
    }

    // Function to check the selected color with exact match comparison or range
    //% block="Check color %color"
    //% group="Color Sensor"
    export function checkColor(color: ColorOptions): boolean {
        colorSensorInit();
        let colors = colorSensorReadNow();
        let red = colors[0];
        let green = colors[1];
        let blue = colors[2];

        switch (color) {
            case ColorOptions.Red:
                if (isExactMatch(red, green, blue, redExactValues)) {
                    return true;
                }
                return isColorInRange(red, green, blue, 177, 200, 176, 190, 133, 142);
            case ColorOptions.Black:
                if (isExactMatch(red, green, blue, blackExactValues)) {
                    return true;
                }
                return isColorInRange(red, green, blue, 150, 160, 175, 185, 130, 140);
            case ColorOptions.Blue:
                return isExactMatch(red, green, blue, blueExactValues);

            //return isColorInRange(red, green, blue, 155, 210, 185, 255, 140, 165);
            case ColorOptions.Green:
                return isExactMatch(red, green, blue, greenExactValues);

            //return  isColorInRange(red, green, blue, 160, 215, 195, 250, 140, 160);
            case ColorOptions.Yellow:
                if (isExactMatch(red, green, blue, yellowExactValues)) {
                    return true;
                }
                return isColorInRange(red, green, blue, 200, 245, 200, 255, 140, 160);
            case ColorOptions.White:
                if (isExactMatch(red, green, blue, whiteExactValues)) {
                    return true;
                }
                return isColorInRange(red, green, blue, 0, 255, 0, 255, 190, 200);
            default:
                return false;
        }
    }



}


//% color="#E7734B" weight=100 icon="\uf1eb" groups='["Connect", "Broadcast", "Send", "Receive"]'
namespace GigoMQTT {

    let uniqueId_var = "";
    let ssid_var = "";
    let password_var = "";
    let mqttBroker_var = "broker.hivemq.com";
    let mqttPort_var = "1883";
    let onReceivedHandler: (data: string) => void;

    //% block="Set connection info|uniqueId %uniqueId|SSID %ssid|Password %password"
    //% uniqueId.defl="microbit-control"
    //% ssid.defl="wifi-name"
    //% password.defl="wifi-password"
    //% group="Connect"
    //% inlineInputMode=external
    export function setConnectionInfo(uniqueId: string, ssid: string, password: string): void {
        uniqueId_var = uniqueId;
        ssid_var = ssid;
        password_var = password;
    }

    //% block="initialize UART Tx pin %tx|Rx pin %rx"
    //% tx.defl=SerialPin.P1
    //% rx.defl=SerialPin.P2
    //% group="Connect"
    export function initializeUART(tx: SerialPin, rx: SerialPin): void {
        // Initialize UART with the provided pins
        serial.redirect(
            tx,
            rx,
            BaudRate.BaudRate115200
        );
        basic.pause(100); // Small pause for serial to be ready
    }

    //% block="connect"
    //% group="Connect"
    export function connect(): void {
        basic.pause(4000)
        let config_data = "CONFIG_DATA:" + uniqueId_var + "," + ssid_var + "," + password_var + "," + mqttBroker_var + "," + mqttPort_var;
        serial.writeLine(config_data);
        basic.showString("Config Send!");
    }

    //% block="on MQTT data received"
    //% draggableParameters
    //% group="Receive"
    export function onEsp32DataReceived(handler: (data: string) => void): void {
        onReceivedHandler = handler;
        serial.onDataReceived('\n', function () {
            let receivedData = serial.readLine();
            let processedData = receivedData.trim();
            if (onReceivedHandler) {
                onReceivedHandler(processedData);
                if (processedData === "WIFI_CONNECTED") {
                    basic.showIcon(IconNames.Yes)
                    basic.showString("WIFI-OK");
                }

            }
        });
    }


    //% block="send data %data "
    //% data.shadowOptions.toString=true
    //% group="Send"
    export function b2MQTT(data: string): void {
        let status_json = '{"deviceId": "' + uniqueId_var + '", "data":"' + data + '"}';
        serial.writeLine(status_json + "\n");


    }

    // --- ส่วนโค้ดสำหรับบล็อกที่มีเมนูให้เลือก (Dropdown) ---
    export enum PinChannel {
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P8"
        P8,
        //% block="P12"
        P12,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
    }

    let PinChannels: { [key: number]: DigitalPin } = {
        [PinChannel.P0]: DigitalPin.P0,
        [PinChannel.P1]: DigitalPin.P1,
        [PinChannel.P2]: DigitalPin.P2,
        [PinChannel.P8]: DigitalPin.P8,
        [PinChannel.P12]: DigitalPin.P12,
        [PinChannel.P13]: DigitalPin.P13,
        [PinChannel.P14]: DigitalPin.P14,
        [PinChannel.P15]: DigitalPin.P15,
        [PinChannel.P16]: DigitalPin.P16,
    }



    //% block="Pin Control %pin| with %data"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% group="Receive"
    export function setPinIfMatch(pin: PinChannel, data: string): void {
        const parts = data.split("=");
        if (parts.length === 2) {
            const pinName = parts[0];
            const value = parseInt(parts[1], 10);

            let selectedPinName: string;
            switch (pin) {
                case PinChannel.P0: selectedPinName = "P0"; break;
                case PinChannel.P1: selectedPinName = "P1"; break;
                case PinChannel.P2: selectedPinName = "P2"; break;
                case PinChannel.P8: selectedPinName = "P8"; break;
                case PinChannel.P12: selectedPinName = "P12"; break;
                case PinChannel.P13: selectedPinName = "P13"; break;
                case PinChannel.P14: selectedPinName = "P14"; break;
                case PinChannel.P15: selectedPinName = "P15"; break;
                case PinChannel.P16: selectedPinName = "P16"; break;
            }

            if (pinName === selectedPinName) {
                pins.digitalWritePin(PinChannels[pin], value);

                // สร้างและส่งข้อความ JSON กลับไป
                let status_json = '{"deviceId": "' + uniqueId_var + '", "pins": {"' + selectedPinName + '": ' + value + '}}';
                serial.writeLine(status_json + "\n");

            }
        }
    }
}




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
    export enum JoystickbitButton {
        //% block="C"
        C,
        //% block="D"
        D,
        //% block="E"
        E,
        //% block="F"
        F,
        //% block="buttonA"
        A,
        //% block="buttonB"
        B,

    }

    export let joybitButtonChannels: { [key: number]: DigitalPin } = {
        [JoystickbitButton.C]: DigitalPin.P12,
        [JoystickbitButton.D]: DigitalPin.P13,
        [JoystickbitButton.E]: DigitalPin.P14,
        [JoystickbitButton.F]: DigitalPin.P15,
        [JoystickbitButton.A]: DigitalPin.P5,
        [JoystickbitButton.B]: DigitalPin.P11,

    };

    // เก็บสถานะของปุ่มก่อนหน้า
    let buttonStatesJoybit: { [key: number]: boolean } = {
        [JoystickbitButton.C]: false,
        [JoystickbitButton.D]: false,
        [JoystickbitButton.E]: false,
        [JoystickbitButton.F]: false,
        [JoystickbitButton.A]: false,
        [JoystickbitButton.B]: false,
    };

    export enum joybitButtonState {
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
    //% group="Joystick:bit"
    //% color=#0fbc11
    export function Buttonjoybit(num: JoystickbitButton, state: joybitButtonState): boolean {
        let pin = joybitButtonChannels[num];
        pins.setPull(pin, PinPullMode.PullUp);
        let currentState = pins.digitalReadPin(pin) == 0;

        if (state == joybitButtonState.Press) {
            // ตรวจสอบสถานะ "กดปุ่ม" หรือ "กดค้าง"
            if (currentState && !buttonStatesJoybit[num]) {
                buttonStatesJoybit[num] = true; // อัปเดตสถานะเป็นกด
                return true; // สัญญาณว่ากดปุ่มครั้งแรก
            } else if (currentState) {
                return true; // กดค้าง
            }
        } else if (state == joybitButtonState.Release) {
            // ตรวจสอบสถานะ "ปล่อยปุ่ม"
            if (!currentState && buttonStatesJoybit[num]) {
                buttonStatesJoybit[num] = false; // อัปเดตสถานะเป็นปล่อย
                return true; // สัญญาณว่าปล่อยปุ่ม
            }
        }

        return false; // ไม่ตรงกับสถานะที่เลือก
    }





    //---------------------------------------------------
    //joy move 
    export enum joybitJOY {
        //% block="Left"
        LEFT,
        //% block="Right"
        RIGHT,
        //% block="Up"
        UP,
        //% block="Down"
        DOWN,
    }



    // เก็บสถานะของปุ่มก่อนหน้า
    export let joyStatesjoybit: { [key: number]: boolean } = {
        [joybitJOY.LEFT]: false,
        [joybitJOY.RIGHT]: false,
        [joybitJOY.UP]: false,
        [joybitJOY.DOWN]: false,

    };

    export enum EnJOYStateJoybit {
        //% block="Move"
        Move,
        //% block="Release"
        Release
    }


    //% block="joy %state Direction %num|  "
    //% group="Joystick:bit"
    //% color=#0fbc11
    export function Joyjoybit(state: EnJOYStateJoybit, num: joybitJOY): boolean {
        let currentState = pins.analogReadPin(AnalogPin.P1); // อ่านค่าจาก AnalogPin.P1

        if (num == joybitJOY.RIGHT) {
            if (state == EnJOYStateJoybit.Move && currentState < 300) {
                joyStatesjoybit[num] = true; // อัปเดตสถานะว่า "กด"
                return true;
            } else if (state == EnJOYStateJoybit.Release && joyStatesjoybit[num] && currentState >= 300) {
                joyStatesjoybit[num] = false; // อัปเดตสถานะว่า "ปล่อย"
                return true;
            }
        } else if (num == joybitJOY.LEFT) {
            if (state == EnJOYStateJoybit.Move && currentState > 600) {
                joyStatesjoybit[num] = true; // อัปเดตสถานะว่า "กด"
                return true;
            } else if (state == EnJOYStateJoybit.Release && joyStatesjoybit[num] && currentState <= 600) {
                joyStatesjoybit[num] = false; // อัปเดตสถานะว่า "ปล่อย"
                return true;
            }
        }

        let currentStateY = pins.analogReadPin(AnalogPin.P2);
        if (num == joybitJOY.DOWN) {
            if (state == EnJOYStateJoybit.Move && currentStateY < 300) {
                joyStatesjoybit[num] = true; // อัปเดตสถานะว่า "กด"
                return true;
            } else if (state == EnJOYStateJoybit.Release && joyStatesjoybit[num] && currentStateY >= 300) {
                joyStatesjoybit[num] = false; // อัปเดตสถานะว่า "ปล่อย"
                return true;
            }
        } else if (num == joybitJOY.UP) {
            if (state == EnJOYStateJoybit.Move && currentStateY > 600) {
                joyStatesjoybit[num] = true; // อัปเดตสถานะว่า "กด"
                return true;
            } else if (state == EnJOYStateJoybit.Release && joyStatesjoybit[num] && currentStateY <= 600) {
                joyStatesjoybit[num] = false; // อัปเดตสถานะว่า "ปล่อย"
                return true;
            }
        }

        return false; // ไม่ตรงกับเงื่อนไขใด ๆ
    }
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



//% color="#E7734B" icon="\uf14e"
namespace customCompass {

    let _initialHeading: number = 0; // มุมเริ่มต้นที่ตั้งค่าเมื่อกดปุ่ม (Global variable)
    let _previousHeading: number = 0; // มุมก่อนหน้าสำหรับคำนวณ delta (Global variable)
    let _degreesRotated: number = 0; // องศาที่หมุนไปแล้วจากจุดเริ่มต้น (Global variable), ถูกจำกัดช่วง
    let _errorMargin: number = 10;   // ค่าความคลาดเคลื่อนที่ยอมรับได้ (สามารถปรับได้)

    // ตัวแปรสำหรับตรวจสอบว่าคาลิเบรตไปแล้วหรือยัง
    let _isCalibrated: boolean = false;

    /**
     * ตั้งค่าความคลาดเคลื่อนที่ยอมรับได้ (ค่า Default คือ 10 องศา)
     * @param margin ค่าความคลาดเคลื่อน เช่น 5
     */
    //% block="ตั้งค่าความคลาดเคลื่อน |%margin| องศา"
    //% margin.min=1 margin.max=30 margin.defl=10
    //% group="ตั้งค่า"
    export function setErrorMargin(margin: number) {
        _errorMargin = Math.max(1, margin); // ตรวจสอบให้แน่ใจว่าค่าไม่ติดลบหรือเป็น 0
    }

    /**
     * ทำการคาลิเบรตเข็มทิศของ Micro:bit ควรเรียกใช้เพียงครั้งเดียวใน On Start
     */
    //% block="เริ่มใช้งานเข็มทิศ"
    //% group="ตั้งค่า"
    export function calibrateCompassNow() {
        if (!_isCalibrated) {
            input.calibrateCompass();
            _isCalibrated = true; // ตั้งค่าเป็น true เมื่อคาลิเบรตเสร็จสิ้น
            basic.pause(500); // ให้เวลาสำหรับการคาลิเบรต
            basic.clearScreen();
            basic.showIcon(IconNames.Yes); // Feedback ว่าคาลิเบรตแล้ว
            basic.pause(200);
            basic.clearScreen();
        } else {
            basic.showIcon(IconNames.Heart); // แสดงว่าคาลิเบรตแล้ว (ถ้าถูกเรียกซ้ำ)
            basic.pause(200);
            basic.clearScreen();
        }
    }

    /**
     * ตั้งค่ามุมปัจจุบันของเข็มทิศเป็นจุดเริ่มต้น (0 องศา) สำหรับการวัดการหมุน
     * **ไม่ทำการคาลิเบรต**
     */
    //% block="ตั้งค่ามุมเริ่มต้น"
    //% group="ตั้งค่า"
    export function setInitialCompassHeadingNow() {
        // ไม่มีการตรวจสอบ _isCalibrated หรือการเรียก calibrateCompass() ที่นี่แล้ว
        // การคาลิเบรตจะถูกจัดการโดยบล็อก calibrateCompassNow() แยกต่างหาก

        _initialHeading = input.compassHeading();
        _previousHeading = _initialHeading;
        _degreesRotated = 0; // รีเซ็ตค่าการหมุนเมื่อตั้งค่าเริ่มต้นใหม่
        basic.showIcon(IconNames.Yes); // Feedback ว่าตั้งค่าแล้ว
        basic.pause(200);
        basic.clearScreen();
    }

    /**
     * คำนวณและอัปเดตองศาที่หมุนไปแล้ว ควรเรียกใช้ในบล็อก "forever"
     * **ค่าที่หมุนจะถูกจำกัดให้อยู่ในช่วง -180 ถึง 180 องศา**
     */
    //% block="อัปเดตค่าการหมุนเข็มทิศ"
    //% group="การทำงานหลัก"
    export function updateCompassRotation() {
        // หากยังไม่ได้คาลิเบรต ให้หยุดการคำนวณ โดยไม่มีการแสดงผลใดๆ
        if (!_isCalibrated) {
            return;
        }

        let currentHeading = input.compassHeading();
        let deltaHeading = currentHeading - _previousHeading;

        // จัดการการข้าม 0/360 องศา (หามุมที่สั้นที่สุด)
        if (deltaHeading > 180) {
            deltaHeading -= 360;
        } else if (deltaHeading < -180) {
            deltaHeading += 360;
        }

        _degreesRotated += deltaHeading;

        // *** การปรับแก้สำคัญ: จำกัด _degreesRotated ให้อยู่ในช่วง -180 ถึง 180 องศา ***
        // นี่คือ Logic ที่ทำให้โปรแกรม "สนใจ" แค่การหมุนภายใน 1 รอบ
        // หากหมุนเกิน 180 องศาในทิศทางใดทิศทางหนึ่ง จะถูกปรับให้เป็นมุมที่เทียบเท่ากันในอีกทิศทาง
        if (_degreesRotated > 180) {
            _degreesRotated -= 360; // เช่น หมุนไป 200 องศา (ขวา) จะกลายเป็น -160 องศา (ซ้าย)
        } else if (_degreesRotated < -180) {
            _degreesRotated += 360; // เช่น หมุนไป -200 องศา (ซ้าย) จะกลายเป็น 160 องศา (ขวา)
        }

        _previousHeading = currentHeading;
    }

    /**
     * ตรวจสอบว่า Micro:bit หมุนไปถึงมุมที่กำหนดจากจุดเริ่มต้นแล้วหรือยัง
     * จะตรวจสอบค่าบวกสำหรับหมุนขวา และค่าลบสำหรับหมุนซ้าย
     * @param targetAngle มุมเป้าหมายที่ต้องการตรวจสอบ (องศา) เช่น 90 หรือ -45
     */
    //% block="หมุนไปถึงมุม |%targetAngle| องศา"
    //% targetAngle.min=-360 targetAngle.max=360 targetAngle.defl=90
    //% group="ตรวจสอบมุม"
    //% weight=50
    export function isRotatedToAngle(targetAngle: number): boolean {
        let checkValue = _degreesRotated;

        return (checkValue >= (targetAngle - _errorMargin) && checkValue <= (targetAngle + _errorMargin));
    }

    /**
     * รับค่าองศาที่หมุนไปแล้วจากจุดเริ่มต้น (ถูกจำกัดในช่วง -180 ถึง 180)
     */
    //% block="องศาที่หมุนไปแล้ว"
    //% group="ตรวจสอบมุม"

    export function getDegreesRotated(): number {
        return _degreesRotated;
    }

    /**
     * รับค่ามุมเริ่มต้นเข็มทิศที่ตั้งค่าไว้
     */
    //% block="มุมเริ่มต้นเข็มทิศ"
    //% group="ตรวจสอบมุม"

    export function getInitialCompassHeading(): number {
        return _initialHeading;
    }


}