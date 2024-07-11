/**
 * This extension is designed to programme and drive the Smart AI Lens(二郎神)
 */
//% color=#0031AF icon="\uf06e" 
//% groups='["Basic", "Ball", "Face", "Card", "Color", "Tracking", "Learn"]'
//% block="AI-Lens"
namespace AILens {
    const CameraAdd = 0X14;
    let DataBuff = pins.createBuffer(9);
    /**
    * Status List of Ball
    */
    export enum FuncList {
        //% block="Card recognition"
        Card = 2,
        //% block="Face recognition" 
        Face = 6,
        //% block="Ball recognition"
        Ball = 7,
        //% block="Tracking recognition"
        Tracking = 8,
        //% block="Color recognition"
        Color = 9,
        //% block="Learn Object"
        Things = 10
    }
    /**
    * Status List of Ball
    */
    export enum Ballstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="Size"
        Size = 4,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Ball ID"
        ID = 8
    }
    /**
    * Status List of Face
    */
    export enum Facestatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Face ID"
        ID = 8
    }
    /**
    * Status List of Card
    */
    export enum Cardstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="Size"
        Size = 4,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Card ID"
        ID = 8
    }
    /**
    * Status List of Color
    */
    export enum Colorstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="Size"
        Size = 4,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Color ID"
        ID = 8
    }
    /**
    * Status List of Color
    */
    export enum ColorLs {
        //% block="Black"
        black = 4,
        //% block="Blue"
        blue = 2,
        //% block="Green"
        green = 1,
        //% block="Red"
        red = 5,
        //% block="White"
        white = 6,
        //% block="Yellow"
        yellow = 3
    }

    export enum Linestatus {
        //% block="Angle"
        angle = 1,
        //% block="Width"
        width = 2,
        //% block="Len"
        len = 3
    }
    export enum LineTrend {
        //% block="Left"
        left,
        //% block="Right"
        right,
        //% block="Front"
        front,
        //% block="None"
        none
    }
    /**
    * Number Cards List
    */
    export enum numberCards {
        //% block="0"
        zero = 1,
        //% block="1"
        one = 2,
        //% block="2"
        two = 3,
        //% block="3"
        three = 4,
        //% block="4"
        four = 5,
        //% block="5"
        five = 6,
        //% block="6"
        six = 7,
        //% block="7"
        seven = 8,
        //% block="8"
        eight = 9,
        //% block="9"
        nine = 10
    }
    /*
    * Letters Cards List
    */
    export enum letterCards {
        //% block="A"
        A = 1,
        //% block="B"
        B = 2,
        //% block="C"
        C = 3,
        //% block="D"
        D = 4,
        //% block="E"
        E = 5
    }
    /*
    * Traffic Cards List
    */
    export enum trafficCards {
        //% block="Forward"
        forward = 18,
        //% block="Back"
        back = 20,
        //% block="Stop"
        stop = 19,
        //% block="Turn left"
        turnleft = 16,
        //% block="Turn right"
        turnright = 17
    }
    /*
    * Other Cards List
    */
    export enum otherCards {
        //% block="Mouse"
        mouse = 1,
        //% block="micro:bit"
        microbit = 2,
        //% block="Ruler"
        ruler = 3,
        //% block="Cat"
        cat = 4,
        //% block="Pear"
        pear = 5,
        //% block="Ship"
        ship = 6,
        //% block="Apple"
        apple = 7,
        //% block="Car"
        car = 8,
        //% block="Pen"
        pen = 9,
        //% block="Dog"
        dog = 10,
        //% block="Umbrella"
        umbrella = 11,
        //% block="Airplane"
        airplane = 12,
        //% block="Clock"
        clock = 13,
        //% block="Grape"
        grape = 14,
        //% block="Cup"
        cup = 15
    }
    export enum learnID {
        ID1 = 1,
        ID2 = 2,
        ID3 = 3,
        ID4 = 4,
        ID5 = 5
    }
    export enum ballColorList {
        //% block="Red"
        Red = 2,
        //% block="Blue"
        Blue = 1
    }
    /////////ASR
    export enum vocabularyList {
        //% block="Hi, Shaun"
        Hi_Shaun = 1,
        //% block="Lights on"
        Turn_on_lights = 16,
        //% block="Lights off"
        Turn_off_lights = 17,
        //% block="Turn left"
        Turn_left = 18,
        //% block="Turn right"
        Turn_right = 19,
        //% block="Full speed ahead"
        Go_forward = 20,
        //% block="Reversing"
        Go_Backwards = 21,
        //% block="Line Tracking"
        Line_tacking = 22,
        //% block="Avoid object"
        Avoid_object = 23,
        //% block="Stop"
        Stop_car = 24,
        //% block="Start device"
        Start_device = 32,
        //% block="Turn off device"
        Close_device = 33,
        //% block="Pause"
        Pause_device = 34,
        //% block="Keep going"
        Keep_going = 35,
        //% block="Raise a level"
        Add_a_level = 36,
        //% block="Lower a level"
        Lower_a_level = 37,
        //% block="Music on"
        Music_on = 38,
        //% block="Music off"
        Music_off = 39,
        //% block="Switch music"
        Switch_music = 40,
        //% block="Execute function one"
        Execute_function_one = 49,
        //% block="Execute function two"
        Execute_function_two = 50,
        //% block="Learning entry 1"
        Learning_entry_1 = 80,
        //% block="Learning entry 2"
        Learning_entry_2 = 81,
        //% block="Learning entry 3"
        Learning_entry_3 = 82,
        //% block="Learning entry 4"
        Learning_entry_4 = 83,
        //% block="Learning entry 5"
        Learning_entry_5 = 84,
        //% block="Learning entry 6"
        Learning_entry_6 = 85,
        //% block="Learning entry 7"
        Learning_entry_7 = 86,
        //% block="Learning entry 8"
        Learning_entry_8 = 87,
        //% block="Learning entry 9"
        Learning_entry_9 = 88,
        //% block="Learning entry 10"
        Learning_entry_10 = 89
    }
    /**
    * TODO: Waiting for module initialize.
    */
    //% block="Start AI-Lens"
    //% group="Basic" weight=100 
    //% color=#00B1ED
    export function initModule(): void {
        let timeout = input.runningTime()
        while (!(pins.i2cReadNumber(CameraAdd, NumberFormat.Int8LE))) {
            if (input.runningTime() - timeout > 30000) {
                while (true) {
                    basic.showString("Init AILens Error!")
                }
            }
        }
    }
    /**
    * TODO: Switch recognition objects.
    * @param fun Function list eg: FuncList.Face
    */
    //% block="Mode %fun"
    //% fun.fieldEditor="gridpicker"
    //% fun.fieldOptions.columns=3
    //% group="Basic" weight=95 
    //% color=#00B1ED
    export function switchfunc(fun: FuncList): void {
        let funcBuff = pins.i2cReadBuffer(CameraAdd, 9)
        funcBuff[0] = 0x20
        funcBuff[1] = fun
        pins.i2cWriteBuffer(CameraAdd, funcBuff)
    }

    /**
    * TODO: Get the image in a frame
    */
    //% block="Get one image from AI-Lens"
    //% group="Basic" weight=90 
    //% color=#00B1ED
    export function cameraImage(): void {
        DataBuff = pins.i2cReadBuffer(CameraAdd, 9)
        basic.pause(30)
    }

    /**
    * TODO: Judge the image contains a ball
    */
    //% block="Image contains ball(s)"
    //% group="Ball" weight=85 
    //% color=#00B1ED
    export function checkBall(): boolean {
        return DataBuff[0] == 7
    }
    //% block="Image contains %ballcolor ball"
    //% group="Ball" weight=84
    //% ballcolor.fieldEditor="gridpicker"
    //% ballcolor.fieldOptions.columns=2 
    //% color=#00B1ED
    export function ballColor(ballcolor: ballColorList): boolean {
        if (DataBuff[0] == 7) {
            return ballcolor == DataBuff[1]
        }
        else {
            return false
        }
    }
    //% block="In the image get ball(s)' total"
    //% group="Ball" weight=83 
    //% color=#00B1ED
    export function BallTotalNum(): number {
        if (DataBuff[0] == 7) {
            return DataBuff[7]
        }
        else {
            return 0
        }
    }
    /**
    * TODO: In the image get ball(s)' info
    */
    //% block="In the image get ball(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Ball" weight=80 
    //% color=#00B1ED
    export function ballData(status: Ballstatus): number {
        if (DataBuff[0] == 7) {
            switch (status) {
                case Ballstatus.X:
                    return DataBuff[2]
                    break
                case Ballstatus.Y:
                    return DataBuff[3]
                    break
                case Ballstatus.Size:
                    return DataBuff[4]
                    break
                case Ballstatus.Confidence:
                    return 100 - DataBuff[6]
                    break
                case Ballstatus.ID:
                    return DataBuff[8]
                    break
                default:
                    return 0;
            }
        }
        else {
            return 0
        }
    }


    /**
    * TODO: Judge whether there is a face in the picture
    */
    //% block="Image contains a face"
    //% group="Face" weight=75 
    //% color=#00B1ED
    export function checkFace(): boolean {
        return DataBuff[0] == 6
    }
    //% block="In the image get face(s)' total"
    //% group="Face" weight=74 
    //% color=#00B1ED
    export function faceTotalNum(): number {
        if (DataBuff[0] == 6) {
            return DataBuff[7]
        }
        else {
            return 0
        }
    }
    /**
    * TODO: Judge whether there is a face in the picture
    * @param status Facestatus, eg: Facestatus.X
    */
    //% block="In the image get face(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Face" weight=70 
    //% color=#00B1ED
    export function faceData(status: Facestatus): number {
        if (DataBuff[0] == 6) {
            switch (status) {
                case Facestatus.X:
                    return DataBuff[2]
                    break
                case Facestatus.Y:
                    return DataBuff[3]
                    break
                case Facestatus.W:
                    return DataBuff[4]
                    break
                case Facestatus.H:
                    return DataBuff[5]
                    break
                case Facestatus.Confidence:
                    return 100 - DataBuff[6]
                    break
                case Facestatus.ID:
                    return DataBuff[8]
                    break
                default:
                    return 0
            }
        }
        else {
            return 0
        }
    }
    /**
    * TODO: Judge whether there is a digital card in the screen
    * @param status numberCards, eg: numberCards.1
    */
    //% block="Image contains number card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=65 
    //% color=#00B1ED
    export function numberCard(status: numberCards): boolean {
        if (DataBuff[0] == 2) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a letter card in the screen
    * @param status letterCards, eg: letterCards.A
    */
    //% block="Image contains letter card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=60 
    //% color=#00B1ED
    export function letterCard(status: letterCards): boolean {
        if (DataBuff[0] == 4) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a traffic card in the screen
    * @param status trafficCards, eg: trafficCards.forward
    */
    //% block="Image contains traffic card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=55
    //% color=#00B1ED
    export function trafficCard(status: trafficCards): boolean {
        if (DataBuff[0] == 3) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a other card in the screen
    * @param status otherCards, eg: otherCards.cat
    */
    //% block="Image contains other card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card"
    //% color=#00B1ED
    export function otherCard(status: otherCards): boolean {
        if (DataBuff[0] == 3) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    //% block="In the image get Card(s)' total"
    //% group="Card" weight=49 
    //% color=#00B1ED
    export function cardTotalNum(): number {
        if (DataBuff[0] == 2 || DataBuff[0] == 3 || DataBuff[0] == 4) {
            return DataBuff[7]
        }
        else {
            return 0
        }
    }
    /**
    * TODO: Card parameters in the screen
    * @param status otherCards, eg: Cardstatus.X
    */
    //% block="In the image get Card(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=45 
    //% color=#00B1ED
    export function CardData(status: Cardstatus): number {
        if (DataBuff[0] == 2 || DataBuff[0] == 3 || DataBuff[0] == 4) {
            switch (status) {
                case Cardstatus.X:
                    return DataBuff[2]
                    break
                case Cardstatus.Y:
                    return DataBuff[3]
                    break
                case Cardstatus.Size:
                    return DataBuff[4]
                    break
                case Cardstatus.Confidence:
                    return 100 - DataBuff[6]
                    break
                case Cardstatus.ID:
                    return DataBuff[8]
                    break
                default:
                    return 0
            }
        }
        else
            return 0
    }
    /**
    * TODO: Judge whether there is a color in the screen
    * @param status ColorLs, eg: ColorLs.red
    */
    //% block="Image contains color card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Color" weight=30 
    //% color=#00B1ED
    export function colorCheck(status: ColorLs): boolean {
        if (DataBuff[0] == 9) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    //% block="In the image get color card(s)' total"
    //% group="Color" weight=29 
    //% color=#00B1ED
    export function colorTotalNum(): number {
        if (DataBuff[0] == 9) {
            return DataBuff[7]
        }
        else {
            return 0
        }
    }
    /**
    * TODO: color parameters in the screen
    * @param status Colorstatus, eg: Colorstatus.X
    */
    //% block="In the image get color card(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Color" weight=25 
    //% color=#00B1ED
    export function colorData(status: Colorstatus): number {
        if (DataBuff[0] == 9) {
            switch (status) {
                case Colorstatus.X:
                    return DataBuff[2]
                    break
                case Colorstatus.Y:
                    return DataBuff[3]
                    break
                case Colorstatus.Size:
                    return DataBuff[4]
                    break
                case Colorstatus.Confidence:
                    return 100 - DataBuff[6]
                    break
                case Colorstatus.ID:
                    return DataBuff[8]
                    break
                default:
                    return 0
            }
        }
        else {
            return 0
        }
    }
    /**
    * TODO: line parameters in the screen
    * @param status Linestatus, eg: Linestatus.angle
    */
    //% block="In the image get line(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Tracking"
    //% weight=35
    //% color=#00B1ED
    export function lineData(status: Linestatus): number {
        if (DataBuff[0] == 8) {
            switch (status) {
                case Linestatus.angle:
                    return DataBuff[1]
                    break
                case Linestatus.width:
                    return DataBuff[2]
                    break
                case Linestatus.len:
                    return DataBuff[3]
                    break
                default:
                    return 0
            }
        }
        else
            return 0
    }
    /**
    * TODO: line parameters in the screen
    * @param status Linestatus, eg: Linestatus.angle
    */
    //% block="Image contains line's direction towards %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=2
    //% group="Tracking"
    //% weight=34 
    //% color=#00B1ED
    export function lineDirection(status: LineTrend): boolean {
        if (DataBuff[0] == 8) {
            switch (status) {
                case LineTrend.none:
                    return false
                    break
                case LineTrend.left:
                    if (DataBuff[2] < 90) {
                        return true
                    }
                    else {
                        return false
                    }
                    break
                case LineTrend.right:
                    if (DataBuff[2] > 130) {
                        return true
                    }
                    else {
                        return false
                    }
                    break
                case LineTrend.front:
                    if (DataBuff[2] > 90 && DataBuff[2] < 130) {
                        return true
                    }
                    else {
                        return false
                    }
                    break
            }
        }
        else {
            if (status == LineTrend.none)
                return true
        }
        return false
    }

    /**
    * TODO: Learn an object in a picture
    * @param thingsID Edit a label for the object, eg: 1
    */
    //% block="Learn an object with: %thingsID"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Learn" weight=20 
    //% color=#00B1ED
    export function learnObject(thingsID: learnID): void {
        let thingsBuf = pins.createBuffer(9)
        thingsBuf[0] = 10
        thingsBuf[1] = thingsID
        pins.i2cWriteBuffer(CameraAdd, thingsBuf)
    }
    /**
    * TODO: Clear Learned Objects
    */
    //% block="Clear learned objects"
    //% group="Learn" weight=15 
    //% color=#00B1ED
    export function ClearlearnObject(): void {
        let thingsBuf = pins.createBuffer(9)
        thingsBuf[0] = 10
        thingsBuf[1] = 10
        pins.i2cWriteBuffer(CameraAdd, thingsBuf)
    }
    /**
    * TODO: Judge whether there are any learned objects in the picture
    */
    //% block="Image contains learned objects: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Learn" weight=14 
    //% color=#00B1ED
    export function objectCheck(status: learnID): boolean {
        if (DataBuff[0] == 10 && status == DataBuff[1]) {
            if (objectConfidence(status) >= 83) {
                return true
            }
            else {
                return false
            }
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there are any learned objects in the picture
    */
    //% block="In the image get learn object %thingsID Confidence"
    //% group="Learn" weight=10 
    //% color=#00B1ED
    export function objectConfidence(thingsID: learnID): number {
        if (DataBuff[0] == 10 && DataBuff[2] < 30) {
            if (DataBuff[1] == thingsID) {
                return 100 - DataBuff[2]
            }
            else {
                return 0
            }
        }
        return 0
    }
    let asrEventId = 3500
    let lastvoc = 0
    
    export function onASR(vocabulary: vocabularyList, handler: () => void) {
        control.onEvent(asrEventId, vocabulary, handler);
        control.inBackground(() => {
            while (true) {
                const voc = pins.i2cReadNumber(0x0B, 1)
                if (voc != lastvoc) {
                    lastvoc = voc
                    control.raiseEvent(asrEventId, lastvoc);
                }
                basic.pause(50);
            }
        })
    }
    
    export function setASRLearn(): void {
        pins.i2cWriteNumber(0x0B, 0x50, NumberFormat.Int8LE)
    }
    
    export function delASRLearn(): void {
        pins.i2cWriteNumber(0x0B, 0x60, NumberFormat.Int8LE)
    }
}

//--------------------

//% weight=0 color=#3CB371 icon="\uf135"  groups='["Motor for workshop", "Ultrasonic Sensor", "RGB LED", "Color Sensor"]'
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
        //% block="B (P13,P8)""
        B,
        //% block="C (P15,P14)""
        C,
        //% block="D (P0,P16)""
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

    export enum GigoMotorChannel {
        //% block="A"
        MotorA = 1,
        //% block="B"
        MotorB = 2,
        //% block="C"
        MotorC = 3,
        //% block="D"
        MotorD = 4
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
    
    //% block"servo $pin degrees $degrees"
    //% degrees.min=0 degrees.max=180
    //% degrees.defl=90
    //% group="Motor for workshop"
    export function servo (pin: ServoNew, degrees: number): void {
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


    //% direction.defl=ggMotorShaftDirection.HIGH
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
    //% direction.defl=ggMotorShaftDirection.HIGH
    //% group="Motor for workshop"
    export function motorControl4(channel: GgMotorChannel, direction: GgMotorShaftDirection, speed: number): void {
        let dirPin = GgmotorChannels[channel];
        let speedPin = GgmotorSpeedPins[channel];

        pins.digitalWritePin(dirPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));
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
    export enum LEDShaftonoffWS {
        //% block="off"
        LOW,
        //% block="on"
        HIGH,

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
    //% block="led $leds status $status"
    //% status.defl=lEDShaftonoff.HIGH*
    //% leds.defl=LEDChannelWS.D
    //% group="Led"
    export function led(leds: LEDChannelWS, status: LEDShaftonoffWS): void {
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






    ////////////////////////////////
    //          Colour sensor       //
    ////////////////////////////////
    //% weight=0 color=#3CB371 icon="\uf135" groups='["Motor for workshop", "Ultrasonic Sensor", "RGB LED", "Color Sensor"]'




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
    //% default.Name="name"
    //% group="Color Sensor"
    export function readColorEqual(WriteRed: number, WriteGreen: number, WriteBlue: number, Name: string): boolean {
        colorSensorInit();
        let colors = colorSensorReadNow();
        let red = colors[0];
        let green = colors[1];
        let blue = colors[2];

        return (red == WriteRed && green == WriteGreen && blue == WriteBlue);
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
    //% leds.defl=lEDChannel.D
    //% group="Led"
    export function ledtest(leds: LEDChannel, status: number): void {
        let ledg = LEDChannels[leds];
        pins.digitalWritePin(ledg, status);

    }

    //% color=#FACB09
    //% block="led $leds status $status"
    //% status.defl=lEDShaftonoff.HIGH*
    //% leds.defl=lEDChannel.D
    //% group="Led"
    export function led(leds: LEDChannel, status: LEDShaftonoff): void {
        let ledg = LEDChannels[leds];
        pins.digitalWritePin(ledg, status);

    }
    //% color=#FACB09
    //toggle led
    //% blockId=led block="led %pin $ledstate"
    //% ledstate.shadow="toggleOnOff"
    //% expandableArgumentMode="toggle"
    //% pin.defl=lEDChannel.D
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
    //% color=#8470FF
    //% block="Serial write line %text"
    //% group="Read Sensor"
    export function serialWriteLine(text: any): void {
        serial.writeLine(text);
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



//% color=#E7734B icon="\uf48b"
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

    //% color=#E7734B
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
    //% color=#E7734B
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
    // joystick control
    export enum Joymove {
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

    export enum DfButton {
        //% block="red"
        Red,
        //% block="blue"
        Blue,
        //% block="green"
        Green,
        //% block="yellow"
        Yellow,
        //% block="A"
        A,
        //% block="B"
        B,
    }
    export let EnButtonChannels: { [key: number]: DigitalPin } = {
        [DfButton.Red]: DigitalPin.P15,
        [DfButton.Blue]: DigitalPin.P16,
        [DfButton.Green]: DigitalPin.P13,
        [DfButton.Yellow]: DigitalPin.P14,
        [DfButton.A]: DigitalPin.P5,
        [DfButton.B]: DigitalPin.P11
    }
    // Store the previous state of the buttons
    let buttonStates: { [key: number]: boolean } = {
        [DfButton.Red]: false,
        [DfButton.Blue]: false,
        [DfButton.Green]: false,
        [DfButton.Yellow]: false,
        [DfButton.A]: false,
        [DfButton.B]: false
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

    export enum EnButtonState {
        //% blockId="Press" block="Press"
        Press = 0,
        //% blockId="Realse" block="Realse"
        Realse = 1
    }
    export enum EnButtonStateDF {
        Press = 0,
        Release = 1
    }
    export enum EnButton {

        B1 = 0,
        B2,
        B3,
        B4
    }
    //% group="DFrobot"
    //% color=#383838
    //% block="button %num| is %value"
    export function ButtonDF(num: DfButton, value: EnButtonStateDF): boolean {
        let pin = EnButtonChannels[num];
        pins.setPull(pin, PinPullMode.PullUp);
        let currentState = pins.digitalReadPin(pin) == 0;

        // Check for button press or release
        if (value == EnButtonStateDF.Press && currentState && !buttonStates[num]) {
            buttonStates[num] = true;
            return true;
        } else if (value == EnButtonStateDF.Release && !currentState && buttonStates[num]) {
            buttonStates[num] = false;
            return true;
        }
        return false;
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
    export function joystickmove(pin: Joymove): boolean {
        let x = pins.analogReadPin(AnalogPin.P1);
        let y = pins.analogReadPin(AnalogPin.P2);
        let now_state = Joymove.Stop;
        if (x < 300) {

            now_state = Joymove.Left;

        }
        else if (x > 600) {

            now_state = Joymove.Right;
        }
        else {
            if (y < 300) {
                now_state = Joymove.Down;
            }
            else if (y > 600) {
                now_state = Joymove.Up;
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


