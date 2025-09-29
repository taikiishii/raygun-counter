function Init_MAX7219 () {
    max7219_matrix.setup(
    4,
    DigitalPin.P1,
    DigitalPin.P2,
    DigitalPin.P16,
    DigitalPin.P0
    )
    max7219_matrix.brightnessAll(15)
    max7219_matrix.for_4_in_1_modules(
    rotation_direction.clockwise,
    false
    )
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    if (start == 1) {
        if (receivedString == "white") {
            white += 1
        } else if (receivedString == "blue") {
            blue += 1
        } else {
            red += 1
        }
        max7219_matrix.displayTextAlignRight(
        convertToText(convertToText("" + convertToText(blue) + " " + " " + " " + convertToText(white))),
        true
        )
        basic.pause(100)
        if (sound == 0) {
        	
        }
    }
})
let timer = 0
let red = 0
let blue = 0
let white = 0
let start = 0
let sound = 0
let hitcount = 0
sound = 1
music.setTempo(100)
music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.rest(music.beat(BeatFraction.Half))
music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.rest(music.beat(BeatFraction.Half))
music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.rest(music.beat(BeatFraction.Half))
music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
basic.pause(100)
sound = 0
let start_time = input.runningTime()
start = 1
Init_MAX7219()
basic.pause(100)
radio.setGroup(141)
max7219_matrix.displayTextAlignRight(
convertToText(convertToText("0" + " " + " " + " " + "0")),
true
)
basic.forever(function () {
    if (start == 1) {
        timer = (input.runningTime() - start_time) / 1000
        if (timer > 25) {
            sound = 1
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
            sound = 0
            basic.pause(100)
            start = 0
            timer = 0
        }
    }
    if (timer <= 1) {
        led.plot(0, 0)
    } else if (timer <= 2) {
        led.plot(1, 0)
    } else if (timer <= 3) {
        led.plot(2, 0)
    } else if (timer <= 4) {
        led.plot(3, 0)
    } else if (timer <= 5) {
        led.plot(4, 0)
    } else if (timer <= 6) {
        led.plot(4, 1)
    } else if (timer <= 7) {
        led.plot(4, 2)
    } else if (timer <= 8) {
        led.plot(4, 3)
    } else if (timer <= 9) {
        led.plot(4, 4)
    } else if (timer <= 10) {
        led.plot(3, 4)
    } else if (timer <= 11) {
        led.plot(2, 4)
    } else if (timer <= 12) {
        led.plot(1, 4)
    } else if (timer <= 13) {
        led.plot(0, 4)
    } else if (timer <= 14) {
        led.plot(0, 3)
    } else if (timer <= 15) {
        led.plot(0, 2)
    } else if (timer <= 16) {
        led.plot(0, 1)
    } else if (timer <= 17) {
        led.plot(1, 1)
    } else if (timer <= 18) {
        led.plot(2, 1)
    } else if (timer <= 19) {
        led.plot(3, 1)
    } else if (timer <= 20) {
        led.plot(3, 2)
    } else if (timer <= 21) {
        led.plot(3, 3)
    } else if (timer <= 22) {
        led.plot(2, 3)
    } else if (timer <= 23) {
        led.plot(1, 3)
    } else if (timer <= 24) {
        led.plot(1, 2)
    } else if (timer <= 25) {
        led.plot(2, 2)
    } else {
    	
    }
})
