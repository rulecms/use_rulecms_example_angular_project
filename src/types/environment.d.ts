declare namespace NodeJS {
  interface ProcessEnv {
    RULE_CMS_API_KEY: string;
  }
}

export interface Environment {
  production: boolean;
  rulecmsApiKey: string;
} 