import z from 'zod';

const addressSchema = z.object({
  name: z.string(),
  contactPhone: z.string().optional(),
  zipCode: z.string().optional(),
  street: z.string().optional(),
  number: z.string().optional(),
  complement: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional()
});

const paymentTypeCashSchema = z.object({
  type: z.literal('cash'),
  maxBillAccepted: z.number().int().optional()
});

const paymentTypePixSchema = z.object({
  type: z.literal('pix'),
  pixKey: z.string(),
  pixKeyType: z.string(),
  pixOwner: z.string()
});

const paymentsTypeSchema = z.union([paymentTypeCashSchema, paymentTypePixSchema]);

const entryFeeSchema = z.object({
  fee: z.number(),
  currency: z.string().optional().default('BRL'),
  paymentsAccepted: z.array(paymentsTypeSchema).optional()
});

const formatsMTG = z.enum([
  'standard',
  'pioneer',
  'modern',
  'legacy',
  'vintage',
  'commander',
  'brawl',
  'pauper',
  'penny',
  'duel',
  'oldschool',
  'frontier',
  'historic',
  'draft',
  'sealed',
  'other'
]);

const tournamentFormats = z.enum(['swiss', 'round_robin', 'single_elimination']);

const tournamentConfigSchema = z.object({
  format: formatsMTG,
  tournamentFormat: tournamentFormats,
  maxRounds: z.number().int().optional().default(0),
  roundDuration: z.number().int().optional().default(0),
  maxPlayers: z.number().int().optional().default(0),
  requiredDeckList: z.boolean().optional().default(false)
});

export const createTournamentRequestSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  dateTime: z.string().transform((date) => new Date(date)),
  location: addressSchema,
  entryFee: entryFeeSchema.optional().default({ fee: 0 }),
  tournamentConfig: tournamentConfigSchema
});

export type CreateTournamentRequest = z.infer<typeof createTournamentRequestSchema>;

export const createTournamentResponseSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  dateTime: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/) // YYYY-MM-DDTHH:MM:SS.000Z
});

export type CreateTournamentResponse = z.infer<typeof createTournamentResponseSchema>;
