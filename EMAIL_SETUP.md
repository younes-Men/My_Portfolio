# Email Setup Instructions

## 1. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Copy the generated password

## 2. Environment Variables

Create a `.env` file in the vite-project directory with:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3001
```

Replace:
- `your-email@gmail.com` with your actual Gmail address
- `your-app-password` with the app password you generated

## 3. Running the Application

To run both frontend and backend:
```bash
npm start
```

To run only the backend:
```bash
npm run server
```

To run only the frontend:
```bash
npm run dev
```

## 4. Testing

1. Start the application with `npm start`
2. Go to http://localhost:5173/contact
3. Fill out the contact form
4. Check your Gmail inbox for the message
