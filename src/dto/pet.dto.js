export default class PetDTO {
    
    constructor(pet) {

        this.id = pet._id,
        this.name= pet.name,
        this.specie= pet.specie,
        this.image= pet.image,
        this.birthDate= pet.birthDate,
        this.adopted= pet.adopted       
    }
}