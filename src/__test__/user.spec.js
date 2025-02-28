const { signUserUp } = require('../controllers/userController');

describe("User controller", () => {
    let req, res;
    beforeEach(() => {
        req = {
            body: {}
        };
        res = {
            json: jest.fn().mockReturnThis()
        }
    })
    it("", () => {
        req.body = {
            firstName: "", lastName: "", phoneNumber: "", email: "", password: ""
        };
        signUserUp(req, res);
        expect(res.json).toHaveBeenCalledWith({message: "Please fill in all fields!"})
    })
})