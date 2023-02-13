import * as service from '../../services/createTournament';
import * as m from '../__mocks__/createTournament.mock';

describe('Test create Tournament request validation', () => {
  it('should validate a valid request', () => {
    const validatedRequest = service.validateRequest(m.validRequest);
    expect(validatedRequest).toMatchObject(m.validatedRequest);
  });
  it('should throw an error because the request is invalid', () => {
    expect(() => service.validateRequest({})).toThrow();
  });
});
