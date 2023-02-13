import * as t from '../../types/createTournament';

export const validRequest: unknown = {
  name: 'Tournament Name',
  description: 'Tournament Description',
  dateTime: '2023-01-01T19:00:00Z',
  location: {
    name: 'Location Name',
    contactPhone: '123456789',
    zipCode: '12345678',
    street: 'Street Name',
    number: '123',
    complement: 'Complement',
    city: 'City Name',
    state: 'State Name',
    country: 'Country Name'
  },
  entryFee: {
    fee: 15,
    currency: 'BRL',
    paymentsAccepted: [{ type: 'cash' }]
  },
  tournamentConfig: {
    format: 'standard',
    tournamentFormat: 'swiss',
    maxRounds: 0,
    roundDuration: 0,
    maxPlayers: 0,
    requiredDeckList: false
  }
};

export const validatedRequest: t.CreateTournamentRequest = {
  name: 'Tournament Name',
  description: 'Tournament Description',
  dateTime: new Date('2023-01-01T19:00:00Z'),
  location: {
    name: 'Location Name',
    contactPhone: '123456789',
    zipCode: '12345678',
    street: 'Street Name',
    number: '123',
    complement: 'Complement',
    city: 'City Name',
    state: 'State Name',
    country: 'Country Name'
  },
  entryFee: {
    fee: 15,
    currency: 'BRL',
    paymentsAccepted: [{ type: 'cash' }]
  },
  tournamentConfig: {
    format: 'standard',
    tournamentFormat: 'swiss',
    maxRounds: 0,
    roundDuration: 0,
    maxPlayers: 0,
    requiredDeckList: false
  }
};
