const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    const db = {
        saveUser: expect.createSpy()
    };
    
    app.__set__('db', db);
    
    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user object', () => {
        let email = 'auyg@gmld.com',
            password = 'password';
        
        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith(email, password);
    });
});
