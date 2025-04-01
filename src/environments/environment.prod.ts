import { Environment } from '../types/environment';

declare const process: any;

export const environment: Environment = {
  production: true,
  rulecmsApiKey: process.env.RULE_CMS_API_KEY || ''
}; 