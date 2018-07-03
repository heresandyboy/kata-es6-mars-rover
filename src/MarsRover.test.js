import MarsRover from './MarsRover'
import Coordinates from './Coordinates'

let _marsRover = undefined

describe('A mars rover', () => {
    beforeEach(() => {
        _marsRover = new MarsRover()
    })

    describe('that starts at coordinates [0,0]', () => {
        test('is at coordinate [0,0]', () => {
            _marsRover = _marsRover.startsAt(new Coordinates(0, 0))
            expect(_marsRover.coordinates()).toEqual(new Coordinates(0, 0))
        })

        describe('Orients west and steps', () => {
            let marsRover = new MarsRover()
            test('is at coordinates [-1,0]', () => {
                marsRover = marsRover.orient('west').step()
                expect(marsRover.coordinates()).toEqual(new Coordinates(-1, 0))
            })

            //turns right
            test('turns right and is at same coordinates', () => {
                marsRover = marsRover.turnRight()
                expect(marsRover.coordinates()).toEqual(new Coordinates(-1, 0))
            })

            //steps two
            test('steps two and is at coordinates [-1,2]', () => {
                marsRover = marsRover.step(2)
                expect(marsRover.coordinates()).toEqual(new Coordinates(-1, 2))
            })
        })
    })

    describe('that starts at coordinates [1,1]', () => {
        test('is at coordinate [1,1]', () => {
            _marsRover = _marsRover.startsAt(new Coordinates(1, 1))
            expect(_marsRover.coordinates()).toEqual(new Coordinates(1, 1))
        })
    })


})