let utils = require('./utils');
const expect = require('expect');


describe('Utils', () => {
    it('should add two numbers together and returning the result', () => {
        let number = utils.add(4, 4);

        expect(number).toBe(8).toBeA('number');
    });

    it('should square a number passed', () => {
        let squared = utils.square(4);

        expect(squared).toBe(16).toBeA('number');
    });

    it('should add two numbers together with async timeout', (done) => {
        utils.addAsync(3,4, (value) => {
            expect(value).toBeA('number');
            expect(value).toEqual(7);
            done();
        })
    });

    it('should square a number with async timeout', (done) => {
        utils.squareAsync(3, (value) => {
            expect(value).toBeA('number');
            expect(value).toEqual(9);
            done();
        })
    });

    it('should expect some values', () => {
        // expect(5).toNotBe(6);

        expect({name: 'Andrew'}).toEqual({name: 'Andrew'});

        expect({name: 'Andrew'}).toNotEqual({name: 'Andrews'});

        expect([1, 3, 4, 5]).toInclude(4);

        expect({name: 'Guy', age: 25})
            .toInclude({
                age: 25
            });
    });

    it('should verify first and last names are set', () => {
        let user = {
            first: '',
            last: ''
        };

        utils.setName(user, 'Guy Gavergun');

        expect(user).toInclude({
            first: 'Guy',
            last: 'Gavergun'
        });

        expect(user).toBeA('object');
    });
});