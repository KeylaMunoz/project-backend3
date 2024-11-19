import userModel from "../models/User.js";

export default class Users {

    getUserById = (id) =>{
        return userModel.findById(id);
    }

    saveNewUser = (data) =>{
        return userModel.create(data);
    }

    updateUser = (id,data) =>{
        return userModel.findByIdAndUpdate(id,{$set:data})
    }

    deleteUser = (id) =>{
        return userModel.deleteOne({_id: id});
    }
}