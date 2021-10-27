function ezkerrera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
}
function ezkuinera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.NorthEast)
}
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        ezkuinera()
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        ezkerrera()
    }
})
