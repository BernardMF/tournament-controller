import { CreateTournament } from '../../services/createTournament';

it('should create an instance of CreateTournament class', function () {
  const createTournamentInstace = new CreateTournament();
  expect(createTournamentInstace).toBeInstanceOf(CreateTournament);
});
