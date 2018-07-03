import West from './West'
import North from './North';

describe('When facing West', () => {
    let west = new West()
    describe('and turning right', () => {        
        test('will be facing North', () => {
            expect(west.turnRight()).toBeInstanceOf(North)
        })

    })
})