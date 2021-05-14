input.onButtonPressed(Button.A, function () {
    T1 = pins.analogReadPin(AnalogPin.P0)
    PT1 = pins.map(
    T1,
    0,
    1023,
    0,
    5
    )
    if (PT1 == 0) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.unplot(0, 3)
        led.unplot(0, 4)
    } else {
        if (PT1 > 0 && PT1 <= 1) {
            led.unplot(0, 0)
            led.unplot(0, 1)
            led.unplot(0, 2)
            led.unplot(0, 3)
            led.plot(0, 4)
        } else {
            if (PT1 > 1 && PT1 <= 2) {
                led.unplot(0, 0)
                led.unplot(0, 1)
                led.unplot(0, 2)
                led.plot(0, 3)
                led.plot(0, 4)
            } else {
                if (PT1 > 2 && PT1 <= 3) {
                    led.unplot(0, 0)
                    led.unplot(0, 1)
                    led.plot(0, 2)
                    led.plot(0, 3)
                    led.plot(0, 4)
                } else {
                    if (PT1 > 3 && PT1 <= 4) {
                        led.unplot(0, 0)
                        led.plot(0, 1)
                        led.plot(0, 2)
                        led.plot(0, 3)
                        led.plot(0, 4)
                    } else {
                        led.plot(0, 0)
                        led.plot(0, 1)
                        led.plot(0, 2)
                        led.plot(0, 3)
                        led.plot(0, 4)
                    }
                }
            }
        }
    }
    T2 = pins.analogReadPin(AnalogPin.P1)
    PT2 = pins.map(
    T2,
    0,
    1023,
    0,
    5
    )
    if (PT2 == 0) {
        led.unplot(2, 0)
        led.unplot(2, 1)
        led.unplot(2, 2)
        led.unplot(2, 3)
        led.unplot(2, 4)
    } else {
        if (PT2 > 0 && PT2 <= 1) {
            led.unplot(2, 0)
            led.unplot(2, 1)
            led.unplot(2, 2)
            led.unplot(2, 3)
            led.plot(2, 4)
        } else {
            if (PT2 > 1 && PT2 <= 2) {
                led.unplot(2, 0)
                led.unplot(2, 1)
                led.unplot(2, 2)
                led.plot(2, 3)
                led.plot(2, 4)
            } else {
                if (PT2 > 2 && PT2 <= 3) {
                    led.unplot(2, 0)
                    led.unplot(2, 1)
                    led.plot(2, 2)
                    led.plot(2, 3)
                    led.plot(2, 4)
                } else {
                    if (PT2 > 3 && PT2 <= 4) {
                        led.unplot(2, 0)
                        led.plot(2, 1)
                        led.plot(2, 2)
                        led.plot(2, 3)
                        led.plot(2, 4)
                    } else {
                        led.plot(2, 0)
                        led.plot(2, 1)
                        led.plot(2, 2)
                        led.plot(2, 3)
                        led.plot(2, 4)
                    }
                }
            }
        }
    }
    T3 = pins.analogReadPin(AnalogPin.P2)
    PT3 = pins.map(
    T3,
    0,
    1023,
    0,
    5
    )
    if (PT3 == 0) {
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.unplot(4, 2)
        led.unplot(4, 3)
        led.unplot(4, 4)
    } else {
        if (PT3 > 0 && PT3 <= 1) {
            led.unplot(4, 0)
            led.unplot(4, 1)
            led.unplot(4, 2)
            led.unplot(4, 3)
            led.plot(4, 4)
        } else {
            if (PT3 > 1 && PT3 <= 2) {
                led.unplot(4, 0)
                led.unplot(4, 1)
                led.unplot(4, 2)
                led.plot(4, 3)
                led.plot(4, 4)
            } else {
                if (PT3 > 2 && PT3 <= 3) {
                    led.unplot(4, 0)
                    led.unplot(4, 1)
                    led.plot(4, 2)
                    led.plot(4, 3)
                    led.plot(4, 4)
                } else {
                    if (PT3 > 3 && PT3 <= 4) {
                        led.unplot(4, 0)
                        led.plot(4, 1)
                        led.plot(4, 2)
                        led.plot(4, 3)
                        led.plot(4, 4)
                    } else {
                        led.plot(4, 0)
                        led.plot(4, 1)
                        led.plot(4, 2)
                        led.plot(4, 3)
                        led.plot(4, 4)
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    PromTotal = (PromT1 + PromT2 + PromT3) / 3
    basic.showNumber(PromTotal)
})
input.onButtonPressed(Button.B, function () {
    i += 1
    basic.showNumber(i)
    PromT1 = (PromT1 + T1) / i
    PromT2 = (PromT2 + T2) / i
    PromT3 = (PromT3 + T3) / i
    basic.showString("PromT1")
    basic.showNumber(PromT1)
    basic.showString("PromT2")
    basic.showNumber(PromT2)
    basic.showString("PromT2")
    basic.showNumber(PromT3)
})
let PromT3 = 0
let PromT2 = 0
let PromT1 = 0
let PromTotal = 0
let PT3 = 0
let T3 = 0
let PT2 = 0
let T2 = 0
let PT1 = 0
let T1 = 0
let i = 0
i = 0
