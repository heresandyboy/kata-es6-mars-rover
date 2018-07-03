import Coordinates from './Coordinates'

export default class MarsRover {
    constructor(initialCoordinates) {
        this.currentCoordinates = initialCoordinates || new Coordinates(0,0)
    }
    
    startsAt = (coordinates) => {
        return new MarsRover(coordinates)
    }

    coordinates = () => {
        return this.currentCoordinates
    }
}