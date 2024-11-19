import Pet from '../dao/classes/Pet.dao.js'
import PetDTO from '../dto/pet.dto.js'

const petsService = new Pet()


export const getAllPets = async (req, res) =>  {

    try {

        const pets = await petsService.getAll();
    res.send({status:"success",payload:pets})
        
    } catch (error) {
        
    }
}