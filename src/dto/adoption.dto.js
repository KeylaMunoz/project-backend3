export default class AdoptionDTO {

    constructor(adoption) {
      this.id = adoption._id,
      this.owner = adoption.owner,
      this.pet = adoption.pet
    }
  }