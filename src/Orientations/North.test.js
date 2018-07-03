import North from './North'
import Coordinates from '../Coordinates'

describe('When facing North starting at coordinate [0,0]', () => {
    describe('and stepping 1', () => {
        test('gives new coordinates [0,-1]', () => {
            let currentCoordinates = new Coordinates(0,0)
            let north = new North(currentCoordinates)   

            expect(north.step(1)).toEqual(new Coordinates(0,1))
        })
    })
})