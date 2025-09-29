def Init_MAX7219():
    max7219_matrix.setup(4,
        DigitalPin.P1,
        DigitalPin.P2,
        DigitalPin.P16,
        DigitalPin.P0)
    max7219_matrix.brightness_all(15)
    max7219_matrix.for_4_in_1_modules(rotation_direction.CLOCKWISE, False)
    basic.pause(100)

def on_button_pressed_a():
    control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    global white, blue, red
    if start == 1:
        if receivedString == "white":
            white += 1
        elif receivedString == "blue":
            blue += 1
        else:
            red += 1
radio.on_received_string(on_received_string)

timer = 0
red = 0
blue = 0
white = 0
start = 0
hitcount = 0
sound = 1
music.set_tempo(100)
music.play(music.tone_playable(392, music.beat(BeatFraction.HALF)),
    music.PlaybackMode.UNTIL_DONE)
music.rest(music.beat(BeatFraction.HALF))
music.play(music.tone_playable(392, music.beat(BeatFraction.HALF)),
    music.PlaybackMode.UNTIL_DONE)
music.rest(music.beat(BeatFraction.HALF))
music.play(music.tone_playable(392, music.beat(BeatFraction.HALF)),
    music.PlaybackMode.UNTIL_DONE)
music.rest(music.beat(BeatFraction.HALF))
music.play(music.tone_playable(523, music.beat(BeatFraction.DOUBLE)),
    music.PlaybackMode.UNTIL_DONE)
basic.pause(100)
sound = 0
start_time = input.running_time()
start = 1
Init_MAX7219()
basic.pause(100)
radio.set_group(141)

def on_forever():
    global timer, start, sound
    if start == 1:
        timer = (input.running_time() - start_time) / 1000
        if timer > 25:
            start = 0
            timer = 0
            sound = 1
            music.play(music.tone_playable(523, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(523, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(523, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(262, music.beat(BeatFraction.DOUBLE)),
                music.PlaybackMode.UNTIL_DONE)
            sound = 0
            basic.pause(100)
    if sound == 0:
        max7219_matrix.display_text_align_right(convert_to_text(convert_to_text("" + convert_to_text(blue) + " " + " " + " " + convert_to_text(white))),
            True)
        basic.pause(100)
    if timer <= 1:
        led.plot(0, 0)
    elif timer <= 2:
        led.plot(1, 0)
    elif timer <= 3:
        led.plot(2, 0)
    elif timer <= 4:
        led.plot(3, 0)
    elif timer <= 5:
        led.plot(4, 0)
    elif timer <= 6:
        led.plot(4, 1)
    elif timer <= 7:
        led.plot(4, 2)
    elif timer <= 8:
        led.plot(4, 3)
    elif timer <= 9:
        led.plot(4, 4)
    elif timer <= 10:
        led.plot(3, 4)
    elif timer <= 11:
        led.plot(2, 4)
    elif timer <= 12:
        led.plot(1, 4)
    elif timer <= 13:
        led.plot(0, 4)
    elif timer <= 14:
        led.plot(0, 3)
    elif timer <= 15:
        led.plot(0, 2)
    elif timer <= 16:
        led.plot(0, 1)
    elif timer <= 17:
        led.plot(1, 1)
    elif timer <= 18:
        led.plot(2, 1)
    elif timer <= 19:
        led.plot(3, 1)
    elif timer <= 20:
        led.plot(3, 2)
    elif timer <= 21:
        led.plot(3, 3)
    elif timer <= 22:
        led.plot(2, 3)
    elif timer <= 23:
        led.plot(1, 3)
    elif timer <= 24:
        led.plot(1, 2)
    elif timer <= 25:
        led.plot(2, 2)
    else:
        pass
basic.forever(on_forever)
