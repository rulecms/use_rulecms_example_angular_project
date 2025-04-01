# RuleCMS Angular Example Project

This project demonstrates the integration of RuleCMS with an Angular application.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Angular CLI (v19 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd use_rulecms_example_angular_project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   - Open `.env` and replace the placeholder with your RuleCMS API key:
   ```
   RULE_CMS_API_KEY=your-actual-api-key
   ```
   You can get your API key from the RuleCMS dashboard.

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`.

## Environment Variables

This project uses environment variables to manage sensitive configuration like API keys. The following environment variables are required:

- `RULE_CMS_API_KEY`: Your RuleCMS API key

### Development vs Production

- For development, the application uses `src/environments/environment.development.ts`
- For production, it uses `src/environments/environment.prod.ts`

The environment files are automatically generated from your `.env` file when you run `npm start` or `npm run build`.

## Building for Production

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Important Notes

- Never commit the `.env` file to version control
- Keep your API keys secure and never share them publicly
- The `.env.example` file serves as a template for required environment variables

## Troubleshooting

If you encounter any issues with environment variables:
1. Ensure the `.env` file exists in the project root
2. Verify that your API key is correctly set in the `.env` file
3. Try stopping and restarting the development server
4. Check the browser console for any error messages
