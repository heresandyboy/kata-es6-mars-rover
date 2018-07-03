import Coordinates from './Coordinates'
import North from './Orientations/North'
import West from './Orientations/West';

export default class MarsRover {
    constructor(initialCoordinates, initialOrientation) {
        this.currentCoordinates = initialCoordinates || new Coordinates(0,0)
        this.currentOrientation = initialOrientation || new North(initialCoordinates)
    }
    
    startsAt = (coordinates) => {
        return new MarsRover(coordinates)
    }

    orient (direction) {
        this.currentOrientation = new West(this.currentCoordinates)
        console.log('orient west ', this.currentOrientation)
        return this
    }

    step = (n = 1) => {
        const newCoordinates = this.currentOrientation.step(n)
        console.log(`NewCoordinates from Rover x ${newCoordinates.x}`)
        console.log(`NewCoordinates from Rover y ${newCoordinates.y}`)
        console.log('orientation after step', this.currentOrientation)
        return new MarsRover(newCoordinates, this.currentOrientation)
    }

    turnRight = () => {
        return new MarsRover(this.currentCoordinates, this.currentOrientation.turnRight())
        
    }

    coordinates = () => {
        return this.currentCoordinates
    }
}