import MarsRover from './MarsRover'
import Coordinates from './Coordinates'

let _marsRover = undefined

describe('A mars rover', () => {
    beforeEach(() => {
        _marsRover = new MarsRover()
    })
    
    test('starts at coordinate [0,0]', () => {
        expect(_marsRover.coordinates()).toEqual(new Coordinates(0,0))
    })

    describe('that starts at coordinates [1,1]', () => {
        test('is at coordinate [1,1]', () => {
            _marsRover = _marsRover.startsAt(new Coordinates(1,1))
            expect(_marsRover.coordinates()).toEqual(new Coordinates(1,1))
        })
    })


})