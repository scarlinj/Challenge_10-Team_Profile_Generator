const Intern = require('../lib/Intern.js');


describe("Intern", () => {
    describe("Check intern class", () => {
        it("This should return intern name, id, email, school", () => {
            const george = new Intern('George', '1', 'georgeOfTheJungle@gmail.com', 'Berkeley');

            expect(george.getName()).toEqual('George');
            expect(george.getId()).toEqual('1');
            expect(george.getEmail()).toEqual('georgeOfTheJungle@gmail.com');
            expect(george.getSchool()).toEqual('Berkeley');
        });
    });
});