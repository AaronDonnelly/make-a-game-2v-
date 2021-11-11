input.onButtonPressed(Button.A, function () {
    no_of_lives += -1
})
input.onButtonPressed(Button.B, function () {
    no_of_lives += 1
})
let no_of_lives = 0
basic.forever(function () {
    if (0 < no_of_lives) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else if (no_of_lives < 0) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
