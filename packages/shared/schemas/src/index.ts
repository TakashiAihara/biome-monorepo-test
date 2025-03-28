import { ENVIRONMENTS, LOG_LEVELS } from '@packages/shared-constants';
import { z } from 'zod';

export const NodeSchema = z.object({
  NODE_ENV: z.enum(ENVIRONMENTS).default('production'),
});

export const LoggerSchema = z.object({
  LOG_LEVEL: z.enum(LOG_LEVELS).default('info'),
});
