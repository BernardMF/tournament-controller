import { Database } from '../../adapters/db';
import { validatedRequest } from '../__mocks__/createTournament.mock';

describe('db', () => {
  const db = new Database();
  it('should connect to database', async () => {
    await db.connect();
  });

  it('should insert a tournament and then delete it', async () => {
    const result = await db.insertTournament(validatedRequest);
    console.debug(result);
    expect(result).toBeTruthy();

    const deleteResult = await db.deleteTournament(result);
    console.debug(deleteResult);
    expect(deleteResult).toBeTruthy();
  });
});
