import * as t from '../types/createTournament';
export function validateRequest(request: unknown): t.CreateTournamentRequest {
  const parsedRequest = t.createTournamentRequestSchema.parse(request);
  return parsedRequest;
}
