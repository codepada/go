
// joystick control
enum joymove {
    //% blockId="Nostate" block="stop"
    Stop,
    //% block="Up"
    Up,
    //% block="Down"
    Down,
    //% block="Left"
    Left,
    //% block="Right"
    Right,
}

enum dfButton {
    //% block="red"
    P15,
    //% block="blue"
    P16,
    //% block="green"
    P13,
    //% block="yellow"
    P14,

}
let enButtonChannels: { [key: number]: DigitalPin } = {
    [dfButton.P15]: DigitalPin.P15,
    [dfButton.P16]: DigitalPin.P16,
    [dfButton.P13]: DigitalPin.P13,
    [dfButton.P14]: DigitalPin.P14,

}

enum enRocker {
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

enum enButtonState {
    //% blockId="Press" block="Press"
    Press = 0,
    //% blockId="Realse" block="Realse"
    Realse = 1
}

enum enButton {

    B1 = 0,
    B2,
    B3,
    B4
}


// motor control
enum motorChannel {
    //% block="E (P15,P16)"
    E,
    //% block="F (P13,P14)""
    F,
    //% block="G (P12,P2)""
    G,
    //% block="H (P1,P8)""
    H,
}
enum motorShaftDirection {
    //% block="Left"
    LOW,
    //% block="Right"
    HIGH,

}
let motorSpeedPins: { [key: number]: AnalogPin } = {
    [motorChannel.E]: AnalogPin.P16,
    [motorChannel.F]: AnalogPin.P14,
    [motorChannel.G]: AnalogPin.P2,
    [motorChannel.H]: AnalogPin.P8,
}
let motorChannels: { [key: number]: DigitalPin } = {
    [motorChannel.E]: DigitalPin.P15,
    [motorChannel.F]: DigitalPin.P13,
    [motorChannel.G]: DigitalPin.P12,
    [motorChannel.H]: DigitalPin.P1,
}

//----------------------------------
//led
enum lEDChannel {
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
let lEDChannels: { [key: number]: DigitalPin } = {
    [lEDChannel.A]: DigitalPin.P19,
    [lEDChannel.B]: DigitalPin.P14,
    [lEDChannel.C]: DigitalPin.P2,
    [lEDChannel.D]: DigitalPin.P8,
    [lEDChannel.E]: DigitalPin.P15,
    [lEDChannel.F]: DigitalPin.P13,
    [lEDChannel.G]: DigitalPin.P12,
    [lEDChannel.H]: DigitalPin.P1,
}
enum lEDShaftonoff {
    //% block="off"
    LOW,
    //% block="on"
    HIGH,

}
//----------------------------------
//external button
enum buttonChannel {
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
let buttonChannels: { [key: number]: DigitalPin } = {
    [buttonChannel.A]: DigitalPin.P20,
    [buttonChannel.E]: DigitalPin.P16,
    [buttonChannel.F]: DigitalPin.P14,
    [buttonChannel.G]: DigitalPin.P2,
    [buttonChannel.H]: DigitalPin.P8,

}
//----------------------------------

//external sensor
enum sensorChannel {
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
let sensorChannels: { [key: number]: DigitalPin } = {
    [sensorChannel.P1]: DigitalPin.P1,
    [sensorChannel.P8]: DigitalPin.P8,
    [sensorChannel.P12]: DigitalPin.P12,
    [sensorChannel.P2]: DigitalPin.P2,
    [sensorChannel.P13]: DigitalPin.P13,
    [sensorChannel.P14]: DigitalPin.P14,
    [sensorChannel.P15]: DigitalPin.P15,
    [sensorChannel.P16]: DigitalPin.P16,
}
//----------------------------------


enum blackChannel {
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
let blackChannels: { [key: number]: DigitalPin } = {
    [blackChannel.P1]: DigitalPin.P1,
    [blackChannel.P8]: DigitalPin.P8,
    [blackChannel.P12]: DigitalPin.P12,
    [blackChannel.P2]: DigitalPin.P2,
    [blackChannel.P13]: DigitalPin.P13,
    [blackChannel.P14]: DigitalPin.P14,
    [blackChannel.P15]: DigitalPin.P15,
    [blackChannel.P16]: DigitalPin.P16,
}
//----------------------------------
//servo180
enum servoChannel {
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
let servoChannels: { [key: number]: AnalogPin } = {
    [servoChannel.P1]: AnalogPin.P1,
    [servoChannel.P8]: AnalogPin.P8,
    [servoChannel.P12]: AnalogPin.P12,
    [servoChannel.P2]: AnalogPin.P2,
    [servoChannel.P13]: AnalogPin.P13,
    [servoChannel.P14]: AnalogPin.P14,
    [servoChannel.P15]: AnalogPin.P15,
    [servoChannel.P16]: AnalogPin.P16,
}
//----------------------------------

enum servoconChannel {
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
let servoconChannels: { [key: number]: AnalogPin } = {
    [servoconChannel.P1]: AnalogPin.P1,
    [servoconChannel.P8]: AnalogPin.P8,
    [servoconChannel.P12]: AnalogPin.P12,
    [servoconChannel.P2]: AnalogPin.P2,
    [servoconChannel.P13]: AnalogPin.P13,
    [servoconChannel.P14]: AnalogPin.P14,
    [servoconChannel.P15]: AnalogPin.P15,
    [servoconChannel.P16]: AnalogPin.P16,
}
enum svconShaft {
    //% block="Right"
    Right = 0,
    //% block="Left"
    Left = 180,
    //% block="Stop"
    Stop = 90,

}
let degreesCon: { [key: number]: number } = {
    [svconShaft.Right]: 0,
    [svconShaft.Left]: 180,
    [svconShaft.Stop]: 90,

}
//----------------------------------
//sonar
enum pingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}
enum sonarPort {
    //% block="E [ trig(P16) echo(P15) ]"
    E,
    //% block="F [ trig(P14) echo(P13) ]"
    F,
    //% block="G [ trig(P2) echo(P12) ]"
    G,
    //% block="H [ trig(P8) echo(P1) ]"
    H,
}
let trigChanel: { [key: number]: DigitalPin } = {
    [sonarPort.E]: DigitalPin.P16,
    [sonarPort.F]: DigitalPin.P14,
    [sonarPort.G]: DigitalPin.P2,
    [sonarPort.H]: DigitalPin.P8,
}
let echoChanel: { [key: number]: DigitalPin } = {
    [sonarPort.E]: DigitalPin.P15,
    [sonarPort.F]: DigitalPin.P13,
    [sonarPort.G]: DigitalPin.P12,
    [sonarPort.H]: DigitalPin.P1,
}
//MLX90614 IR thermometer

enum mLX90614_TEMPERATURE_ORIGIN {
    //% block="object"
    OBJECT = 0x07,
    //% block="ambient"
    AMBIENT = 0x06,
}
// motor for gigotools kit 
enum ggMotorChannel {
    //% block="A (P1,P2)"
    A,
    //% block="B (P8,P13)""
    B,
    //% block="C (P14,P15)""
    C,
    //% block="D (P16,P0)""
    D,
}
enum ggMotorShaftDirection {
    //% block="Left"
    LOW,
    //% block="Right"
    HIGH,

}
let ggmotorSpeedPins: { [key: number]: AnalogPin } = {
    [ggMotorChannel.A]: AnalogPin.P2,
    [ggMotorChannel.B]: AnalogPin.P13,
    [ggMotorChannel.C]: AnalogPin.P15,
    [ggMotorChannel.D]: AnalogPin.P0,
}
let ggmotorChannels: { [key: number]: DigitalPin } = {
    [ggMotorChannel.A]: DigitalPin.P1,
    [ggMotorChannel.B]: DigitalPin.P8,
    [ggMotorChannel.C]: DigitalPin.P14,
    [ggMotorChannel.D]: DigitalPin.P16,
}

enum gigoMotorChannel {
    //% block="A"
    MotorA = 1,
    //% block="B"
    MotorB = 2,
    //% block="C"
    MotorC = 3,
    //% block="D"
    MotorD = 4
}
enum rGBLedColors {
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
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF

}
enum ggsonarPort {
    //% block="A [ trig(P2) echo(P1) ]"
    A,
    //% block="B [ trig(P13) echo(P8) ]"
    B,
    //% block="C [ trig(P15) echo(P14) ]"
    C,
    //% block="D [ trig(P0) echo(P16) ]"
    D,
}
let ggtrigChanel: { [key: number]: DigitalPin } = {
    [ggsonarPort.A]: DigitalPin.P2,
    [ggsonarPort.B]: DigitalPin.P13,
    [ggsonarPort.C]: DigitalPin.P15,
    [ggsonarPort.D]: DigitalPin.P0,
}
let ggechoChanel: { [key: number]: DigitalPin } = {
    [ggsonarPort.A]: DigitalPin.P1,
    [ggsonarPort.B]: DigitalPin.P8,
    [ggsonarPort.C]: DigitalPin.P14,
    [ggsonarPort.D]: DigitalPin.P16,
}


//% weight=0 color=#3CB371 icon="\uf135" block=Gigotools groups='["Motor for workshop", "Ultrasonic Sensor", "RGB LED", "Color Sensor"]'
namespace Gigotools {

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
    //% blockId=DDMmotor2 block="motor channel %MotorPin|speed (0~100) %MSpeedValue|rotation direction(0~1) %McontrolValue" blockExternalInputs=false
    //% McontrolValue.min=0 McontrolValue.max=1 
    //% MSpeedValue.min=0 MSpeedValue.max=100   
    //% group="Motor for workshop"
    export function DDMmotor2(MotorPin: gigoMotorChannel, MSpeedValue: number, McontrolValue: number): void {

        switch (MotorPin) {
            case 1:
                pins.analogWritePin(AnalogPin.P1, pins.map(MSpeedValue, 0, 100, 0, 1000));
                pins.digitalWritePin(DigitalPin.P2, pins.map(McontrolValue, 0, 1, 0, 1));
                break;
            case 2:
                pins.analogWritePin(AnalogPin.P8, pins.map(MSpeedValue, 0, 100, 0, 1000));
                pins.digitalWritePin(DigitalPin.P13, pins.map(McontrolValue, 0, 1, 0, 1));
                break;
            case 3:
                pins.analogWritePin(AnalogPin.P14, pins.map(MSpeedValue, 0, 100, 0, 1000));
                pins.digitalWritePin(DigitalPin.P15, pins.map(McontrolValue, 0, 1, 0, 1));
                break;
            case 4:
                pins.analogWritePin(AnalogPin.P16, pins.map(MSpeedValue, 0, 100, 0, 1000));
                pins.digitalWritePin(DigitalPin.P0, pins.map(McontrolValue, 0, 1, 0, 1));
                break;

        }
    }
    
    //% blockId=DDMmotor block="speed pin %MSpeedPin|speed (0~255) %MSpeedValue|direction pin %McontrolPin|rotation direction(0~1) %McontrolValue" blockExternalInputs=false
    //% McontrolValue.min=0 McontrolValue.max=1 
    //% MSpeedValue.min=0 MSpeedValue.max=255   
    //% MSpeedPin.fieldEditor="gridpicker" MSpeedPin.fieldOptions.columns=4
    //% MSpeedPin.fieldOptions.tooltips="false" MSpeedPin.fieldOptions.width="300"
    //% McontrolPin.fieldEditor="gridpicker" McontrolPin.fieldOptions.columns=4
    //% McontrolPin.fieldOptions.tooltips="false" McontrolPin.fieldOptions.width="300"
    //% group="Motor for workshop"
    export function DDMmotor(MSpeedPin: AnalogPin, MSpeedValue: number, McontrolPin: DigitalPin, McontrolValue: number): void {
        pins.analogWritePin(MSpeedPin, pins.map(MSpeedValue, 0, 255, 0, 1020));
        pins.digitalWritePin(McontrolPin, pins.map(McontrolValue, 0, 1, 0, 1));

    }
    //-------------------------------------------------
    

    //% direction.defl=ggMotorShaftDirection.HIGH
    //% block="stop Motor $channel"
    //% group="Motor for workshop"
    export function motorStop(channel: ggMotorChannel): void {
        let dirPin = ggmotorChannels[channel];
        let speedPin = ggmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, 0);
        pins.analogWritePin(speedPin, 0);
    }
    

    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=255
    //% speed.defl=100
    //% direction.min=0 direction.max=1
    //% group="Motor for workshop"
    export function motorControltest(channel: ggMotorChannel, direction: number, speed: number): void {
        let dirPin = ggmotorChannels[channel];
        let speedPin = ggmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 255, 0, 1023));
    }
    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=255
    //% speed.defl=100
    //% direction.defl=ggMotorShaftDirection.HIGH
    //% group="motor for workshop"
    export function motorControl(channel: ggMotorChannel, direction: ggMotorShaftDirection, speed: number): void {
        let dirPin = ggmotorChannels[channel];
        let speedPin = ggmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 255, 0, 1023));
    }
    


    //-------------------------------------------------

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


    //% block="sonar %channel unit %unit"
    //% group="Ultrasonic Sensor"
    //% unit.defl=PingUnit.Centimeters
    export function pinggigo(channel: ggsonarPort, unit: pingUnit, maxCmDistance = 500): number {
        let trig = ggtrigChanel[channel];
        let echo = ggechoChanel[channel];
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
            case pingUnit.Centimeters: return Math.idiv(d, 58);
            case pingUnit.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }



    //% blockId=sonar_ping block="trig pin %trig|echo pin %echo|unit %unit"
    //% group="Ultrasonic Sensor"
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: pingUnit, maxCmDistance = 500): number {
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
            case pingUnit.Centimeters: return Math.idiv(d, 58);
            case pingUnit.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }
    ////////////////////////////////
    //          RGB LEDS          //
    ////////////////////////////////
    /**
         * Create a  RGB LED Pin.
         */
    //% blockId="RGBLED_create" block="pin %pin|"
    //% weight=100 blockGap=8
    //% trackArgs=0,2
    //% blockSetVariable=RGBLED

    //% group="RGB LED"
    export function RGBLED_create(pin: DigitalPin): HaloHd {
        let RGBLED = new HaloHd();
        RGBLED.buf = pins.createBuffer(1 * 3);
        RGBLED.start = 0;
        RGBLED._length = 1;/*LED數量*/
        RGBLED.RGBLED_set_brightness(128)
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

        //% group="RGB LED"
        //% block="%RGBLED|show color %rgb=RGBLED_colors" 
        //% weight=99 blockGap=8
        RGBLED_set_color(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }



        /**
         * Send all the changes to the ZIP Halo display.
         */

        //% group="RGB LED"
        /* blockId="kitronik_halo_hd_display_show" block="%RGBLED|show" blockGap=8 */
        //% weight=96
        show() {
            //use the Kitronik version which respects brightness for all 
            //ws2812b.sendBuffer(this.buf, this.pin, this.brightness);
            // Use the pxt-microbit core version which now respects brightness (10/2020)
            light.sendWS2812BufferWithBrightness(this.buf, this.pin, this.brightness);
        }

        /**
         * Turn off all LEDs on the ZIP Halo display.
         * You need to call ``show`` to make the changes visible.
         */

        //% group="RGB LED"
        /* blockId="kitronik_halo_hd_display_clear" block="%RGBLED|clear" */
        //% weight=95 blockGap=8
        clear(): void {
            this.buf.fill(0, this.start * 3, this._length * 3);
        }

        /**
         * Set the brightness of the ZIP Halo display. This flag only applies to future show operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */

        //% group="RGB LED"
        //% block="%RGBLED|set brightness %brightness" blockGap=8
        //% weight=92
        //% brightness.min=0 brightness.max=255
        RGBLED_set_brightness(brightness: number): void {
            //Clamp incoming variable at 0-255 as values out of this range cause unexpected brightnesses as the lower level code only expects a byte.
            if (brightness < 0) {
                brightness = 0
            }
            else if (brightness > 255) {
                brightness = 255
            }
            this.brightness = brightness & 0xff;
            basic.pause(1) //add a pause to stop wierdnesses
        }

        //Sets up the buffer for pushing LED control data out to LEDs
        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            this.buf[offset + 0] = green;
            this.buf[offset + 1] = red;
            this.buf[offset + 2] = blue;
        }

        //Separates out Red, Green and Blue data and fills the LED control data buffer for all LEDs
        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * 3, red, green, blue)
            }
        }

        //Separates out Red, Green and Blue data and fills the LED control data buffer for a single LED
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 3;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            this.setBufferRGB(pixeloffset, red, green, blue)
        }
    }



    /**
     * Converts wavelength value to red, green, blue channels
     * @param wavelength value between 470 and 625. eg: 500
     */
    //% group="RGB LED"

    //% weight=1 blockGap=8
    /* blockId="kitronik_halo_hd_wavelength" block="wavelength %wavelength|nm" */
    //% wavelength.min=470 wavelength.max=625
    export function wavelength(wavelength: number): number {
        /*  The LEDs we are using have centre wavelengths of 470nm (Blue) 525nm(Green) and 625nm (Red) 
        * 	 We blend these linearly to give the impression of the other wavelengths. 
        *   as we cant wavelength shift an actual LED... (Ye canna change the laws of physics Capt)*/
        let r = 0;
        let g = 0;
        let b = 0;
        if ((wavelength >= 470) && (wavelength < 525)) {
            //We are between Blue and Green so mix those
            g = pins.map(wavelength, 470, 525, 0, 255);
            b = pins.map(wavelength, 470, 525, 255, 0);
        }
        else if ((wavelength >= 525) && (wavelength <= 625)) {
            //we are between Green and Red, so mix those
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

    //% group="RGB LED"
    //% weight=1 blockGap=8
    /* blockId="kitronik_halo_hd_hue" block="hue %hue" */
    //% hue.min=0 hue.max=360
    export function hueToRGB(hue: number): number {
        let redVal = 0
        let greenVal = 0
        let blueVal = 0
        let hueStep = 2.125
        if ((hue >= 0) && (hue < 120)) { //RedGreen section
            greenVal = Math.floor((hue) * hueStep)
            redVal = 255 - greenVal
        }
        else if ((hue >= 120) && (hue < 240)) { //GreenBlueSection
            blueVal = Math.floor((hue - 120) * hueStep)
            greenVal = 255 - blueVal
        }
        else if ((hue >= 240) && (hue < 360)) { //BlueRedSection
            redVal = Math.floor((hue - 240) * hueStep)
            blueVal = 255 - redVal
        }
        return ((redVal & 0xFF) << 16) | ((greenVal & 0xFF) << 8) | (blueVal & 0xFF);
    }

    /*  The LEDs we are using have centre wavelengths of 470nm (Blue) 525nm(Green) and 625nm (Red) 
    * 	 We blend these linearly to give the impression of the other wavelengths. 
    *   as we cant wavelength shift an actual LED... (Ye canna change the laws of physics Capt)*/

    /**
     * Converts value to red, green, blue channels
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */

    //% group="RGB LED"
    //% weight=1 blockGap=8
    //% blockId="rgb" block="red %red|green %green|blue %blue"
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */

    //% group="RGB LED"
    //% weight=2 blockGap=8
    //% blockId="RGBLED_colors" block="%color" 
    export function colors(color: rGBLedColors): number {
        return color;
    }

    //Combines individual RGB settings to be a single number
    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    //Separates red value from combined number
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    //Separates green value from combined number
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    //Separates blue value from combined number
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
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
        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60);//[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
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

    ////////////////////////////////
    //          Colour sensor       //
    ////////////////////////////////
    //% weight=12
    //% block="initialize color sensor"

    //% group="Color Sensor"
    export function ColorSensorinit(): void {
        pins.i2cWriteNumber(41, 33276, NumberFormat.UInt16BE, false)
        pins.i2cWriteNumber(41, 32771, NumberFormat.UInt16BE, false)
    }
    /**
    */
    let nowReadColor = [0, 0, 0]
    //% weight=12
    //% block="color sensor read color"

    //% group="Color Sensor"
    export function ColorSensorReadColor(): void {
        pins.i2cWriteNumber(41, 178, NumberFormat.Int8LE, false)

        pins.i2cWriteNumber(41, 179, NumberFormat.Int8LE, false)

        pins.i2cWriteNumber(41, 182, NumberFormat.Int8LE, true)
        let TCS_RED = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
        pins.i2cWriteNumber(41, 184, NumberFormat.Int8LE, true)
        let TCS_GREEN = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
        pins.i2cWriteNumber(41, 186, NumberFormat.Int8LE, true)
        let TCS_BLUE = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
        TCS_RED = Math.round(Math.map(TCS_RED, 0, 65535, 0, 255))
        TCS_GREEN = Math.round(Math.map(TCS_GREEN, 0, 65535, 0, 255))
        TCS_BLUE = Math.round(Math.map(TCS_BLUE, 0, 65535, 0, 255))
        nowReadColor = [TCS_RED, TCS_GREEN, TCS_BLUE]
    }
    /**
   */
    export enum Channel {
        //% block="R"
        Red = 1,
        //% block="G"
        Green = 2,
        //% block="B"
        Blue = 3
    }
    //% weight=12
    //% block="color sensor read RGB %channel |channel"

    //% group="Color Sensor"
    export function ColorSensorRead(channel: Channel = 1): number {
        pins.i2cWriteNumber(41, 178, NumberFormat.Int8LE, false)

        pins.i2cWriteNumber(41, 179, NumberFormat.Int8LE, false)

        pins.i2cWriteNumber(41, 182, NumberFormat.Int8LE, true)
        let TCS_RED = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
        pins.i2cWriteNumber(41, 184, NumberFormat.Int8LE, true)
        let TCS_GREEN = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
        pins.i2cWriteNumber(41, 186, NumberFormat.Int8LE, true)
        let TCS_BLUE = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)

        let RdCl = 0
        switch (channel) {
            case 1:
                RdCl = Math.round(Math.map(TCS_RED, 0, 65535, 0, 255))
                break;
            case 2:
                RdCl = Math.round(Math.map(TCS_GREEN, 0, 65535, 0, 255))
                break;
            case 3:
                RdCl = Math.round(Math.map(TCS_BLUE, 0, 65535, 0, 255))
                break;
        }

        return RdCl
    }
    export enum ColorPart {
        //% block="Red"
        Red = 1,
        //% block="Green"
        Green = 2,
        //% block="Blue"
        Blue = 3,
        //% block="Yellow"
        Yellow = 4,
        //% block="Purple"
        Purple = 5,
        //% block="Custom1"
        Custom1 = 6,
        //% block="Custom2"
        Custom2 = 7,
        //% block="Custom3"
        Custom3 = 8
    }

    let ReadRedColor = [0, 0, 0]
    let ReadGreenColor = [0, 0, 0]
    let ReadBlueColor = [0, 0, 0]
    let ReadYellowColor = [0, 0, 0]
    let ReadPurpleColor = [0, 0, 0]
    let ReadCustom1Color = [0, 0, 0]
    let ReadCustom2Color = [0, 0, 0]
    let ReadCustom3Color = [0, 0, 0]

    //% weight=12
    //% block="color sensor record %colorpart |"

    //% group="Color Sensor"
    export function ColorSensorRecord(colorpart: ColorPart = 1): void {
        pins.i2cWriteNumber(41, 178, NumberFormat.Int8LE, false)

        pins.i2cWriteNumber(41, 179, NumberFormat.Int8LE, false)

        pins.i2cWriteNumber(41, 182, NumberFormat.Int8LE, true)
        let TCS_RED = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
        pins.i2cWriteNumber(41, 184, NumberFormat.Int8LE, true)
        let TCS_GREEN = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
        pins.i2cWriteNumber(41, 186, NumberFormat.Int8LE, true)
        let TCS_BLUE = pins.i2cReadNumber(41, NumberFormat.UInt16BE, false)
        TCS_RED = Math.round(Math.map(TCS_RED, 0, 65535, 0, 255))
        TCS_GREEN = Math.round(Math.map(TCS_GREEN, 0, 65535, 0, 255))
        TCS_BLUE = Math.round(Math.map(TCS_BLUE, 0, 65535, 0, 255))
        switch (colorpart) {
            case 1:
                ReadRedColor = [TCS_RED, TCS_GREEN, TCS_BLUE]
                break;
            case 2:
                ReadGreenColor = [TCS_RED, TCS_GREEN, TCS_BLUE]
                break;
            case 3:
                ReadBlueColor = [TCS_RED, TCS_GREEN, TCS_BLUE]
                break;
            case 4:
                ReadYellowColor = [TCS_RED, TCS_GREEN, TCS_BLUE]
                break;
            case 5:
                ReadPurpleColor = [TCS_RED, TCS_GREEN, TCS_BLUE]
                break;
            case 6:
                ReadCustom1Color = [TCS_RED, TCS_GREEN, TCS_BLUE]
                break;
            case 7:
                ReadCustom2Color = [TCS_RED, TCS_GREEN, TCS_BLUE]
                break;
            case 8:
                ReadCustom3Color = [TCS_RED, TCS_GREEN, TCS_BLUE]
                break;
        }
    }
    let WriteRedColor = [0, 0, 0]
    let WriteGreenColor = [0, 0, 0]
    let WriteBlueColor = [0, 0, 0]
    let WriteYellowColor = [0, 0, 0]
    let WritePurpleColor = [0, 0, 0]
    let WriteCustom1Color = [0, 0, 0]
    let WriteCustom2Color = [0, 0, 0]
    let WriteCustom3Color = [0, 0, 0]
    let colorright = false
    let forkrange = 5
    //% weight=99 blockGap=8
    //% block="read R %WriteRed|and G %WriteGreen|and B %WriteBlue equal to %colorpart|"
    //% WriteRed.min=0 WriteRed.max=255
    //% WriteGreen.min=0 WriteGreen.max=255
    //% WriteBlue.min=0 WriteBlue.max=255

    //% group="Color Sensor"
    export function ReadColorEqual(WriteRed: number, WriteGreen: number, WriteBlue: number, colorpart: ColorPart = 1): boolean {
        switch (colorpart) {
            case 1:
                WriteRedColor = [WriteRed, WriteGreen, WriteBlue];
                if ((Math.abs(ReadRedColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(ReadRedColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(ReadRedColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else if ((Math.abs(WriteRedColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(WriteRedColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(WriteRedColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else {
                    colorright = false
                }
                break;
            case 2:
                WriteGreenColor = [WriteRed, WriteGreen, WriteBlue];
                if ((Math.abs(ReadGreenColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(ReadGreenColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(ReadGreenColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else if ((Math.abs(WriteGreenColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(WriteGreenColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(WriteGreenColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else {
                    colorright = false
                }
                break;
            case 3:
                WriteBlueColor = [WriteRed, WriteGreen, WriteBlue];
                if ((Math.abs(ReadBlueColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(ReadBlueColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(ReadBlueColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else if ((Math.abs(WriteBlueColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(WriteBlueColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(WriteBlueColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else {
                    colorright = false
                }
                break;
            case 4:
                WriteYellowColor = [WriteRed, WriteGreen, WriteBlue];
                if ((Math.abs(ReadYellowColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(ReadYellowColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(ReadYellowColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else if ((Math.abs(WriteYellowColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(WriteYellowColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(WriteYellowColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else {
                    colorright = false
                }
                break;

            case 5:
                WritePurpleColor = [WriteRed, WriteGreen, WriteBlue];
                if ((Math.abs(ReadPurpleColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(ReadPurpleColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(ReadPurpleColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else if ((Math.abs(WritePurpleColor[0] - nowReadColor[0]) < forkrange) && (Math.abs(WritePurpleColor[1] - nowReadColor[1]) < forkrange) && (Math.abs(WritePurpleColor[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else {
                    colorright = false
                }
                break;
            case 6:
                WriteCustom1Color = [WriteRed, WriteGreen, WriteBlue];
                if ((Math.abs(ReadCustom1Color[0] - nowReadColor[0]) < forkrange) && (Math.abs(ReadCustom1Color[1] - nowReadColor[1]) < forkrange) && (Math.abs(ReadCustom1Color[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else if ((Math.abs(WriteCustom1Color[0] - nowReadColor[0]) < forkrange) && (Math.abs(WriteCustom1Color[1] - nowReadColor[1]) < forkrange) && (Math.abs(WriteCustom1Color[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else {
                    colorright = false
                }
                break;
            case 7:
                WriteCustom2Color = [WriteRed, WriteGreen, WriteBlue];
                if ((Math.abs(ReadCustom2Color[0] - nowReadColor[0]) < forkrange) && (Math.abs(ReadCustom2Color[1] - nowReadColor[1]) < forkrange) && (Math.abs(ReadCustom2Color[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else if ((Math.abs(WriteCustom2Color[0] - nowReadColor[0]) < forkrange) && (Math.abs(WriteCustom2Color[1] - nowReadColor[1]) < forkrange) && (Math.abs(WriteCustom2Color[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else {
                    colorright = false
                }
                break;
            case 8:
                WriteCustom3Color = [WriteRed, WriteGreen, WriteBlue];
                if ((Math.abs(ReadCustom3Color[0] - nowReadColor[0]) < forkrange) && (Math.abs(ReadCustom3Color[1] - nowReadColor[1]) < forkrange) && (Math.abs(ReadCustom3Color[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else if ((Math.abs(WriteCustom3Color[0] - nowReadColor[0]) < forkrange) && (Math.abs(WriteCustom3Color[1] - nowReadColor[1]) < forkrange) && (Math.abs(WriteCustom3Color[2] - nowReadColor[2]) < forkrange)) {
                    colorright = true
                }
                else {
                    colorright = false
                }
                break;
        }
        if (colorright == true) {
            return true
        }
        else {
            return false
        }
    }

}



//----------------------------------
//% color=#E7734B icon="\uf021" 
namespace Command {

    //% block color=#007ACC
    export function True(): boolean {
        return true;
    }

    //% block color=#007ACC
    export function False(): boolean {
        return false;
    }

    //% block="reset Microbit" color=#007ACC
    export function reset(): void {
        control.reset();
    }


    export let NEW_LINE = "\r\n";
    export let NEW_LINE_DELIMITER: Delimiters = Delimiters.NewLine;
    let writeLinePadding = 32;


    //% weight=90
    //% help=serial/write-line blockGap=8
    //% blockId=serial_writeline block="send %text to computer" color=#007ACC
    //% text.shadowOptions.toString=true
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
}
//% color=#E7734B icon="\uf2db"
namespace Sensor {

    //% color=#000000
    //% block="read button $pin (0-1)"
    //% group="Read Sensor"
    export function Readbutton(pin: buttonChannel): number {
        let read = buttonChannels[pin];
        pins.setPull(buttonChannels[pin], PinPullMode.PullUp);
        let reading = pins.digitalReadPin(read);
        return (reading);
    }
    //% color=#000000    
    //% block="analog Sensor $pin (0-1023) "
    //% group="Read Sensor"
    export function lightSensor(pin: sensorChannel): number {
        let read = servoconChannels[pin];
        let reading = pins.analogReadPin(read);
        //let mappin = pins.map(reading, 0, 1023, 0, 10); // แปลงค่าจาก 0-1023 เป็น 0-10
        return Math.round(reading);
    }

    //% color=#000000    
    //% block="digital Sensor $pin (0-1)"
    //% group="Read Sensor"
    export function Sensor(pin: sensorChannel): number {
        let read = sensorChannels[pin];
        let reading = pins.digitalReadPin(read);
        return (reading);
    }


    function signal_dht11(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0);
        basic.pause(18);
        let i = pins.digitalReadPin(pin);
        pins.setPull(pin, PinPullMode.PullUp);
    }


    //% color=#383838
    //% block="track Line $pin Black Color"
    //% group="Logic Sensor"
    export function isblack(pin: blackChannel): boolean {
        let read = blackChannels[pin];
        return pins.digitalReadPin(read) == 1;
    }
    //% color=#636262
    //% block="track Line $pin Not Black"
    //% group="Logic Sensor"
    export function notblack(pin: blackChannel): boolean {
        let read = blackChannels[pin];
        return pins.digitalReadPin(read) == 0;
    }


    //% color=#3D3430    
    //% block="on button $pin pressed"
    //% group="Logic Sensor"
    export function isButtonPressed(pin: buttonChannel): boolean {
        pins.setPull(buttonChannels[pin], PinPullMode.PullUp);
        let read = buttonChannels[pin];
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
    //% color=#76dbb1
    //% blockId="mlx90614_TEMPERATURE" block="%temperature_origin temperature (°C)"
    //% weight=80 blockGap=8
    //% group="MLX90614 IR thermometer"
    export function temperature(temperature_origin: mLX90614_TEMPERATURE_ORIGIN): number {
        let t = read_reg_uint16(temperature_origin);
        return t * 0.02 - 273.15;
    }

    //% color=#76dbb1
    //sonar
    //% block="sonar %channel unit %unit"
    //% group="ect"
    //% unit.defl=PingUnit.Centimeters
    export function ping(channel: sonarPort, unit: pingUnit, maxCmDistance = 500): number {
        let trig = trigChanel[channel];
        let echo = echoChanel[channel];
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
            case pingUnit.Centimeters: return Math.idiv(d, 58);
            case pingUnit.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }


    //% color=#76dbb1
    //% group="ect"
    //% blockId=sensor_ping block="ultrasonic trig %trig|echo %echo|get distance %unit"
    //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=4
    //% trig.fieldOptions.tooltips="false" trig.fieldOptions.width="300"
    //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=4
    //% echo.fieldOptions.tooltips="false" echo.fieldOptions.width="300"
    export function sensor_ping(trig: DigitalPin, echo: DigitalPin, unit: pingUnit, maxCmDistance = 500): number {
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
            case pingUnit.Centimeters: return d / 58;
            case pingUnit.Inches: return d / 148;
            default: return d;
        }
    }
    //% group="ect"
    //% color=#76dbb1
    //% blockId=octopus_pir weight=80 blockGap=30
    //% block="motion detector at pin %p"    

    export function PIR(p: sensorChannel): boolean {
        let b = sensorChannels[p];
        let a: number = pins.digitalReadPin(b);
        if (a == 1) {
            return true;
        } else return false;
    }

}



//% color=#E7734B icon="\uf48b"
//% groups="['Motor','Servo','Led', 'Read Sensor','MLX90614 IR thermometer','Logic Sensor','I2C LCD 1602']"
namespace Motor {
    //% color=#E7734B
    //% direction.defl=motorShaftDirection.HIGH
    //% block="stop Motor $channel"
    //% group="Motor"
    export function motorStop(channel: motorChannel): void {
        let dirPin = motorChannels[channel];
        let speedPin = motorSpeedPins[channel];

        pins.digitalWritePin(dirPin, 0);
        pins.analogWritePin(speedPin, 0);
    }

    //% color=#E7734B
    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=255
    //% speed.defl=100
    //% direction.min=0 direction.max=1
    //% group="Motor"
    //% color=#E7734B
    export function motorControltest(channel: motorChannel, direction: number, speed: number): void {
        let dirPin = motorChannels[channel];
        let speedPin = motorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 255, 0, 1023));
    }

    //% color=#E7734B
    //% block="motor $channel direction $direction speed $speed"
    //% speed.min=0 speed.max=255
    //% speed.defl=100
    //% direction.defl=motorShaftDirection.HIGH
    //% group="Motor"
    //% color=#E7734B
    export function motorControl(channel: motorChannel, direction: motorShaftDirection, speed: number): void {
        let dirPin = motorChannels[channel];
        let speedPin = motorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 255, 0, 1023));
    }
    //% color=#E84E19
    //% block"servo180 $pinSmini degrees $degrees"
    //% degrees.min=20 degrees.max=160
    //% degrees.defl=90
    //% group="Servo"
    export function MiniServo(pinSmini: servoChannel, degrees: number): void {
        let pinsmini = servoChannels[pinSmini];
        pins.servoWritePin(pinsmini, degrees);

    }
    //% color=#E84E19
    //% block"continuous Servo $pinSV direction $direction"
    //% direction.defl=90
    //% group="Servo"
    export function ContinuousServo(pinSV: servoChannel, direction: svconShaft): void {
        let pinservo = servoChannels[pinSV];
        pins.servoWritePin(pinservo, direction);

    }
}
//% weight=5 color=#E7734B icon="\uf110"
namespace GigoLED {
    //% color=#FACB09
    //% block="led $leds Status $Status"
    //% Status.min=0 Status.max=1
    //% leds.defl=lEDChannel.D
    //% group="Led"
    export function ledtest(leds: lEDChannel, Status: number): void {
        let ledg = lEDChannels[leds];

        pins.digitalWritePin(ledg, Status);

    }

    //% color=#FACB09
    //% block="led $leds Status $Status"
    //% Status.defl=lEDShaftonoff.HIGH*
    //% leds.defl=lEDChannel.D
    //% group="Led"
    export function led(leds: lEDChannel, Status: lEDShaftonoff): void {
        let ledg = lEDChannels[leds];

        pins.digitalWritePin(ledg, Status);

    }
    //% color=#FACB09
    //toggle led
    //% blockId=led block="led %pin $ledstate"
    //% ledstate.shadow="toggleOnOff"
    //% expandableArgumentMode="toggle"
    //% pin.defl=lEDChannel.D
    //% group="Led"
    export function ledBrightness(pin: lEDChannel, ledstate: boolean): void {
        if (ledstate) {
            let pinled = lEDChannels[pin];
            pins.digitalWritePin(pinled, 1);

        }
        else {
            let pinled = lEDChannels[pin];
            pins.digitalWritePin(pinled, 0);

        }
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
namespace joystick {

    //% group="DFrobot"
    //% color=#383838
    //% block="button %pin is pressed"
    export function joystickbuttonpressed(pin: dfButton): boolean {
        pins.setPull(enButtonChannels[pin], PinPullMode.PullUp);
        let read = enButtonChannels[pin];
        return pins.digitalReadPin(read) == 0;
    }
    //% color=#383838
    //% block="joystick is pressed"
    //% group="DFrobot"
    export function joypressed(): boolean {
        pins.setPull(DigitalPin.P8, PinPullMode.PullUp);
        let read = DigitalPin.P8;
        return pins.digitalReadPin(read) == 0;
    }
    //% color=#383838
    //% block="joystick is %pin"
    //% group="DFrobot"
    export function joystickmove(pin: joymove): boolean {
        let x = pins.analogReadPin(AnalogPin.P1);
        let y = pins.analogReadPin(AnalogPin.P2);
        let now_state = joymove.Stop;
        if (x < 300) {

            now_state = joymove.Left;

        }
        else if (x > 600) {

            now_state = joymove.Right;
        }
        else {
            if (y < 300) {
                now_state = joymove.Down;
            }
            else if (y > 600) {
                now_state = joymove.Up;
            }
        }

        if (now_state == pin)
            return true;
        else
            return false;

    }

    //---------------------------------------------------
    //% group="GHBit"
    //% blockId=ghBit_Rocker block="rocker|value %value"
    //% weight=96
    //% blockGap=10
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Rocker(value: enRocker): boolean {

        pins.setPull(DigitalPin.P8, PinPullMode.PullUp);
        let x = pins.analogReadPin(AnalogPin.P1);
        let y = pins.analogReadPin(AnalogPin.P2);
        let z = pins.digitalReadPin(DigitalPin.P8);
        let now_state = enRocker.Nostate;

        if (x < 200) 
        {

            now_state = enRocker.Up;

        }
        else if (x > 730) 
        {

            now_state = enRocker.Down;
        }
        else  
        {
            if (y < 200) 
            {
                now_state = enRocker.Right;
            }
            else if (y > 730) 
            {
                now_state = enRocker.Left;
            }
        }
        if (z == 0)
            now_state = enRocker.Press;
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
    export function Button(num: enButton, value: enButtonState): boolean {
        let temp = false;
        switch (num) {
            case enButton.B1: {
                pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P13) == value) {
                    temp = true;
                }
                else {
                    temp = false;
                }
                break;
            }
            case enButton.B2: {
                pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P14) == value) {
                    temp = true;
                }
                else {
                    temp = false;
                }
                break;
            }
            case enButton.B3: {
                pins.setPull(DigitalPin.P15, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P15) == value) {
                    temp = true;
                }
                else {
                    temp = false;
                }
                break;
            }
            case enButton.B4: {
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


//-----------------------------------