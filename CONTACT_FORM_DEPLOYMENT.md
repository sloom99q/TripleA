# Contact Form Deployment Guide

## Overview
The contact form is now configured to work on **both localhost development and production deployment** at `triple-a.ae`.

## How It Works

### Architecture
- **Frontend**: React form in `/src/components/pages/Contact/ContactForm.tsx`
- **State**: Zustand store in `/src/store/contactStore.ts`
- **API Route**: Next.js server-side API at `/src/app/api/send-email/route.ts`
- **Email Service**: Resend (https://resend.com)

### Request Flow
1. User fills form and clicks submit
2. Client-side validation checks email format
3. Form data sent to `/api/send-email` endpoint (relative URL, works on any domain)
4. Server validates data and calls Resend API
5. Email sent to `CONTACT_EMAIL` with user's reply-to address
6. Success/error modal displayed to user

## Development (Localhost)

### Setup
1. **Resend API Key** is already set in `.env.local`:
   ```
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Test form**:
   - Go to http://localhost:3000/contact
   - Fill form with valid email (e.g., `test@example.com`)
   - Click Submit
   - Should see "Message Sent" modal
   - Email arrives at `info@triple-a.ae`

## Production Deployment (triple-a.ae)

### Environment Variables
Production uses `.env.production`:
```
CONTACT_EMAIL=info@triple-a.ae
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://triple-a.ae
```

### Deployment Steps

#### Option 1: Vercel (Recommended for Next.js)
1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy (automatically uses `.env.production`)

#### Option 2: Custom Server / VPS
1. Build the project:
   ```bash
   npm run build
   ```
2. Set environment variables on server:
   ```bash
   export RESEND_API_KEY=re_CiETWJ2h_9MHcrnbihqT1uFYQy7hhERda
   export CONTACT_EMAIL=info@triple-a.ae
   export NODE_ENV=production
   ```
3. Start production server:
   ```bash
   npm start
   ```

#### Option 3: Docker
1. Build image with environment variables
2. Environment variables work same as custom server above

### Domain Configuration
- The form works automatically on `triple-a.ae`
- No hardcoded domain references in code
- Relative API path `/api/send-email` works on any domain
- CORS handled automatically by Next.js same-domain requests

## Important Security Notes

✅ **Secure:**
- Resend API key only used on server (not exposed to client)
- Email validation on both client and server
- No sensitive data in responses
- Rate limiting can be added to API route

⚠️ **To Consider:**
- Add rate limiting to prevent spam
- Log submissions to database
- Add CAPTCHA if bot spam occurs
- Monitor Resend email delivery

## Testing Checklist

- [ ] Form works on localhost:3000
- [ ] Email validation rejects invalid emails
- [ ] Valid emails send successfully
- [ ] Success modal appears
- [ ] Email arrives in recipient's inbox
- [ ] Form resets after successful submission
- [ ] Form works on triple-a.ae production
- [ ] All form fields are required
- [ ] Phone number optional validation (currently required)

## Troubleshooting

### Issue: "API key is invalid"
- **Cause**: Invalid or expired Resend API key
- **Fix**: Check `RESEND_API_KEY` in environment variables
- **Get new key**: https://resend.com/api-keys

### Issue: Email not received
- **Check**: 
  - Resend API key is correct
  - Email format is valid
  - Check spam folder
  - Verify `CONTACT_EMAIL` is set correctly

### Issue: CORS errors
- **Should not occur** - Same domain requests handled automatically
- **If occurs on production**: Check Next.js deployment config

## Code Files

- **Form Component**: `src/components/pages/Contact/ContactForm.tsx`
- **State Management**: `src/store/contactStore.ts`
- **API Route**: `src/app/api/send-email/route.ts`
- **Email Template**: `src/components/contacts/emailTemplate.ts`
- **Status Modal**: `src/components/contacts/ContactStatus.tsx`
- **Environment Dev**: `.env.local`
- **Environment Prod**: `.env.production`

## Features Implemented

✅ Client-side email validation with regex
✅ Server-side email validation
✅ Form field validation (all required)
✅ Error messages per field
✅ Loading state during submission
✅ Success modal with message
✅ Error modal with retry option
✅ Resend email integration
✅ HTML email templates
✅ Reply-to user's email
✅ Works on localhost AND production
✅ Domain-agnostic API paths
✅ Secure server-side API key handling

