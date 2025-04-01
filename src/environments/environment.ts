import { Environment } from '../types/environment';

declare const process: any;

export const environment: Environment = {
  production: false,
  rulecmsApiKey: process.env.RULE_CMS_API_KEY || ''
}; 