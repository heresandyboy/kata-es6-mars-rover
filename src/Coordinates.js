export default class Coordinates {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

    translate(xDelta,yDelta) {
        return new Coordinates(this.x + xDelta, this.y + yDelta)
    }
}