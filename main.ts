input.onButtonPressed(Button.A, function () {
    nun_ += 1
    basic.showNumber(nun_)
})
input.onGesture(Gesture.TiltLeft, function () {
    pic.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.ScreenUp, function () {
    pic.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    nun_ += 1
    basic.showNumber(nun_)
})
input.onGesture(Gesture.TiltRight, function () {
    pic.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    pic.change(LedSpriteProperty.Y, -1)
})
let pic: game.LedSprite = null
let nun_ = 0
basic.showIcon(IconNames.Heart)
nun_ = 10
basic.showNumber(5)
pic = game.createSprite(2, 2)
