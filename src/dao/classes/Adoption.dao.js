import adoptionModel from "../models/Adoption.js";

export default class Adoption {

    getAdoptionById = (id) =>{
        return adoptionModel.findById(id);
    }

    saveAdoption = (data) =>{
        return adoptionModel.create(data);
    }

    updateAdoption = (id,data) =>{
        return adoptionModel.findByIdAndUpdate(id,{$set:data})
    }
    
    deleteAdoption = (id) =>{
        return adoptionModel.deleteOne({_id: id});
    }
}