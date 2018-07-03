import North from "./North";
import Coordinates from '../Coordinates'

export default class West {
    constructor(initialCoordinates) {
        this.currentCoordinates = initialCoordinates || new Coordinates(0,0)        
    }
    
    turnRight() {
        let north = new North(this.currentCoordinates)
        console.log('turn Right at ', this.currentCoordinates)
        console.log(north)
        return north
    }

    step(n = 1) {
        console.log(`West stepped ${n}`)
        this.currentCoordinates = this.currentCoordinates.translate(n*-1, 0)
        console.log('West stepped to:', this.currentCoordinates)
   
        return this.currentCoordinates 
    }
}