import { Router } from 'express';
import { getMockPets, getMockUsers, generateData } from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingpets', getMockPets);
router.get('/mockingusers', getMockUsers);
router.post('/generateData', generateData);
  

export default router;

// import { Router } from 'express';

// const router = Router();

// router.get('/mockingpets', (req, res) => {
//     const numPets = 100;
//     const mockPets = generateMockPets(numPets);
//     res.send({ status: 'success', payload: mockPets });
// });

// router.get('/mockingusers', async (req, res) => {
//     const numUsers = 50;
//     const mockUsers = await generateMockUsers(numUsers);
//     res.send({ status: 'success', payload: mockUsers });
// });

// router.post('/generateData', async (req, res) => {
//     const { users = 0, pets = 0 } = req.body;
    
//     const mockUsers = await generateMockUsers(users);
//     const mockPets = generateMockPets(pets);

//     await Promise.all([
//         ...mockUsers.map(user => usersService.create(user)),
//         ...mockPets.map(pet => petsService.create(pet))
//     ]);

//     res.send({ status: 'success', message: `${users} users and ${pets} pets inserted into the database` });
// });

// export default router;