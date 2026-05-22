const loginService =require("../service/loginService");

class LoginController {

    async signUp(req, res) {

        try {

            const loginData = {

                emailId: req.body.emailId,
                password: req.body.password
            };

            const result = await loginService.signUp(loginData);
            if(result.insertedId){
            res.status(201).json({

                success: true,
                message: "SignUp Done Successfully",
                insertedId: result.insertedId
            });
        }else {
            res.status(201).json({
                success: true,
                message: result,
                
            });
        }

        } catch (error) {

            res.status(500).json({

                success: false,
                message: error.message
            });
        }
    }

    async signIn(req, res) {

        try {

            const loginData = {

                emailId: req.body.emailId,
                password: req.body.password
            };

            const result = await loginService.signIn(loginData);
          
            res.status(201).json({
                message: result
            });

        } catch (error) {

            res.status(500).json({

                success: false,
                message: error.message
            });
        }
    }

}
let loginController = new LoginController();
module.exports = loginController;