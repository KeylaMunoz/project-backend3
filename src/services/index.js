import Users from "../dao/classes/User.dao.js";
import Pet from "../dao/classes/Pet.dao.js";
import Adoption from "../dao/classes/Adoption.dao.js";

import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";
import AdoptionRepository from "../repository/AdoptionRepository.js";

export const usersService = new UserRepository(new Users());
export const petsService = new PetRepository(new Pet());
export const adoptionsService = new AdoptionRepository(new Adoption());