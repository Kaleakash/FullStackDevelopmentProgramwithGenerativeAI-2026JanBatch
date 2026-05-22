const loginRepository =require("../repository/loginRepository");

class LoginService {

    async signUp(loginData) {
        let result = await loginRepository.findUser(loginData.emailId);
        if(result.length==0){
        return await loginRepository.signUp(loginData);
        }else {
            return "EmailId must be unique";
        }
    }
    async signIn(loginData) {
        let result = await await loginRepository.signIn(loginData);;
        if(result.length==0){
            return "Email Id or password is wrong"
        }else {
            return "Successfully login";
        }

    }
 
}
let loginService = new LoginService();
module.exports = loginService;