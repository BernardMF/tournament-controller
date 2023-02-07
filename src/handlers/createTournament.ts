import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { CreateTournament } from '../services/createTournament';

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const service = new CreateTournament();
  return {
    statusCode: 200,
    body: ''
  };
};
