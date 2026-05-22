const { ObjectId } = require("mongodb");

const { getDB } = require("../config/db");

class LoginRepository {

    getCollection() {

        return getDB().collection("logins");
    }

    async signUp(loginData) {
        const result = await this.getCollection().insertOne(loginData);
        return result;
    }

    async signIn(loginData) {
        return await this.getCollection().find({$and:[{emailId:loginData.emailId},{password:loginData.password}]}).toArray();
    }
    async findUser(emailId){
        return await this.getCollection().find({emailId:emailId}).toArray();
    }

}
let loginRepository = new LoginRepository();
module.exports = loginRepository;