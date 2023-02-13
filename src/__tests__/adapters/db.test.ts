import { Database } from '../../adapters/db';

describe('db', () => {
  const db = new Database();
  it('should connect to database', async () => {
    await db.connect();
  });
});
