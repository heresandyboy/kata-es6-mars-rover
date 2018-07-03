import North from "./North";

export default class West {
    constructor(initialCoordinates) {
        this.currentCoordinates = initialCoordinates || new Coordinates(0,0)        
    }
    
    turnRight() {
        return new North()
    }

    step(n = 1) {
        return this.currentCoordinates.translate(n*-1, 0)
    }
}