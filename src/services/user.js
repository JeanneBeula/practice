import db from '../database/models';

class UserServices {
    static async CreateUser(NewUser) {
        return db.User.create(NewUser);}
    
}

export default UserServices
