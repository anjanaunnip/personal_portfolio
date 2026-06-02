# Contact Form Setup & Documentation

## Overview

The portfolio now includes a fully functional contact form with backend API integration, input validation, and optional email notifications via Resend.

## Features

✅ **Form Validation** - Uses Zod schema for input validation
✅ **API Route** - RESTful endpoint at `/api/contact`
✅ **Error Handling** - Comprehensive error messages and status feedback
✅ **Email Notifications** - Optional email sending via Resend API (requires API key)
✅ **User Feedback** - Real-time success/error messages in the UI
✅ **Type Safety** - Full TypeScript support

## Architecture

### Frontend (Component)
- **Location**: `/components/contact.tsx`
- **State Management**: React hooks (useState)
- **Features**:
  - Form state management with name, email, message fields
  - Submit status tracking (idle, success, error)
  - Success/error message display with auto-dismiss (3 seconds)
  - Disabled state while submitting

### Backend (API Route)
- **Location**: `/app/api/contact/route.ts`
- **Method**: POST
- **Endpoint**: `/api/contact`
- **Features**:
  - Zod schema validation
  - Email sending via Resend (optional)
  - Error handling with detailed responses
  - Request logging

## Validation Schema

```typescript
{
  name: string (min 2 characters)
  email: string (valid email format)
  message: string (min 10 characters)
}
```

## Environment Variables

### Required
- `DATABASE_URL` - PostgreSQL connection string (for future database integration)

### Optional
- `RESEND_API_KEY` - Resend API key for email notifications

## API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Message received! Thank you for reaching out.",
  "data": {
    "name": "User Name",
    "email": "user@example.com",
    "timestamp": "2026-06-02T08:42:33.712Z"
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Failed to send message. Please try again later."
}
```

## Usage

### Submitting a Message

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'This is a test message with more than 10 characters'
  }),
});

const result = await response.json();
if (result.success) {
  console.log('Message sent successfully');
}
```

## Testing

### Test with cURL
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message with more than 10 characters"
  }'
```

### Expected Response
```json
{
  "success": true,
  "message": "Message received! Thank you for reaching out.",
  "data": {
    "name": "Test User",
    "email": "test@example.com",
    "timestamp": "2026-06-02T08:42:33.712Z"
  }
}
```

## Future Enhancements

### 1. Database Integration
- Store messages in PostgreSQL using Prisma ORM
- Create messages table with timestamps
- Add database schema migration

### 2. Email Notifications
- Admin email notifications when new messages received
- HTML email templates with branding
- Retry logic for failed emails

### 3. Rate Limiting
- Implement rate limiting to prevent spam
- Use Redis or Upstash for tracking requests
- Max 5 messages per IP per hour

### 4. CAPTCHA Integration
- Add reCAPTCHA v3 for bot protection
- Verify token before processing

### 5. Message Management
- Admin dashboard to view submitted messages
- Mark messages as read/unread
- Delete old messages

## Error Handling

### Validation Errors (400)
```json
{
  "success": false,
  "errors": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

### Server Errors (500)
```json
{
  "success": false,
  "message": "Failed to send message. Please try again later."
}
```

## Email Notifications

When `RESEND_API_KEY` is configured, the system will automatically send a confirmation email to the user.

### Email Configuration
- **From**: `Portfolio <onboarding@resend.dev>`
- **To**: User's email address
- **Subject**: `Message Received - Anjana Unni P`

### Email Template
The email confirms receipt and assures the user that their message will be responded to soon.

## Security Considerations

- ✅ Input validation using Zod
- ✅ Error messages don't expose internal details
- ✅ API key safely stored in environment variables
- ✅ Type-safe TypeScript implementation
- ✅ CORS enabled for same-origin requests

## Development

### Local Testing
```bash
# Start dev server
pnpm dev

# Test API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"This is a long test message"}'
```

### Building
```bash
pnpm build
```

## Files Modified

1. **components/contact.tsx**
   - Added form state management
   - Implemented API integration
   - Added success/error feedback UI

2. **app/api/contact/route.ts**
   - Created new API route
   - Added validation logic
   - Implemented email notification

## Next Steps

1. **Database Integration**: Connect to PostgreSQL to store messages
2. **Email Setup**: Configure Resend API key for notifications
3. **Admin Dashboard**: Create admin panel to view submitted messages
4. **Rate Limiting**: Add request throttling
5. **Analytics**: Track form submissions and conversion rates

## Support

For issues or questions about the contact form setup, refer to the inline comments in the code files or check the main README.
