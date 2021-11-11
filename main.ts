let lives = 0
input.onButtonPressed(Button.A, function () {
    lives += -1
})
input.onButtonPressed(Button.B, function () {
    lives += 1
})
basic.forever(function () {
    let _0_lives = 0
    let _1_lives = 0
    if (_1_lives) {
        basic.showString("\"WINNER\"")
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else if (_0_lives) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
