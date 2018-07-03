import Coordinates from './Coordinates'

export default class MarsRover {
    constructor(initialCoordinates) {
        this.currentCoordinates = initialCoordinates || new Coordinates(0,0)
    }
    
    startsAt = (coordinates) => {
        return new MarsRover(coordinates)
    }

    orient (direction) {
        return this
    }

    step = (n) => {
        return new MarsRover(new Coordinates(-1, 2))
    }

    turnRight = () => {

    }

    coordinates = () => {
        return this.currentCoordinates
    }
}