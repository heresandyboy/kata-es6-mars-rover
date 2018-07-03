import Coordinates from '../Coordinates'

export default class North {
    constructor(initialCoordinates) {
        this.currentCoordinates = initialCoordinates || new Coordinates(0,0)
    }

    step(n = 1) {
        return this.currentCoordinates.translate(0, n*1)
    }
}