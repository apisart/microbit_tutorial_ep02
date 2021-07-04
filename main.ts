input.onButtonPressed(Button.A, function () {
    count += 2
})
let count = 0
basic.showIcon(IconNames.Heart)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.pause(1000)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
for (let index = 0; index < 1; index++) {
    basic.showString("Hello!")
}
while (true) {
    basic.showNumber(count)
    if (count == 10) {
        break;
    }
}
basic.showIcon(IconNames.Happy)
music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
