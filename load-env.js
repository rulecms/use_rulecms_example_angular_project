const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Create environment files
const environments = ['development', 'production'];
environments.forEach(env => {
  const content = `export const environment = {
  production: ${env === 'production'},
  rulecmsApiKey: '${process.env.RULE_CMS_API_KEY || ''}'
};`;

  fs.writeFileSync(
    path.join(__dirname, 'src', 'environments', `environment.${env}.ts`),
    content
  );
}); 