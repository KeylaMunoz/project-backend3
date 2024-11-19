import petModel from "../models/Pet.js";

export default class Pet {

    getPetById = (id) =>{
        return petModel.findById(id);
    }

    savePet = (data) =>{
        return petModel.create(data);
    }

    updatePet = (id,data) =>{
        return petModel.findByIdAndUpdate(id,{$set:data})
    }

    deletePet = (id) =>{
        return petModel.deleteOne({_id: id});
    }
}