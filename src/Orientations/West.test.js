import West from './West'
import North from './North';
import Coordinates from '../Coordinates'


describe('When facing West', () => {
    let currentCoordinates = new Coordinates(0,0)
    let west = new West(currentCoordinates)

    describe('and stepping', () =>  {
        test('coordinates will be [-1,0]', () => {
            expect(west.step()).toEqual(new Coordinates(-1,0))
        })
    })
    describe('and turning right', () => {        
        test('will be facing North', () => {
            expect(west.turnRight()).toBeInstanceOf(North)
        })
    })
})