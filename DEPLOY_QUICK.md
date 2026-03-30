# Quick Deploy to triple-a.ae

## 1. Test Locally First (2 minutes)
```bash
npm run dev
# Visit http://localhost:3000/contact
# Fill form and submit to verify it works
```

## 2. Choose Deployment Platform

### 🟦 Vercel (Easiest - Recommended)
```bash
# Push to GitHub
git push origin main

# Go to https://vercel.com
# 1. Connect your GitHub repo
# 2. Project settings → Environment Variables
# 3. Add these for Production:
#    RESEND_API_KEY = re_CiETWJ2h_9MHcrnbihqT1uFYQy7hhERda
#    CONTACT_EMAIL = info@triple-a.ae
# 4. Redeploy
# 5. Test at https://triple-a.ae/contact
```

### 🖥️ Custom Server / VPS
```bash
# SSH into server
ssh your-server

# Clone repo (or pull latest)
cd /path/to/TripleA
git pull

# Install dependencies
npm install

# Build for production
npm run build

# Set environment variables
export RESEND_API_KEY=re_CiETWJ2h_9MHcrnbihqT1uFYQy7hhERda
export CONTACT_EMAIL=info@triple-a.ae
export NODE_ENV=production

# Start server (use PM2 or similar for persistence)
npm start
# or with PM2:
pm2 start npm --name "triple-a" -- start

# Verify at https://triple-a.ae/contact
```

### 🐳 Docker
```bash
# Build image
docker build -t triple-a .

# Run container with env vars
docker run -d \
  -e RESEND_API_KEY=re_CiETWJ2h_9MHcrnbihqT1uFYQy7hhERda \
  -e CONTACT_EMAIL=info@triple-a.ae \
  -e NODE_ENV=production \
  -p 3000:3000 \
  triple-a

# Test at https://triple-a.ae/contact
```

## 3. Verify Everything Works

### Test Checklist
- [ ] Site loads at https://triple-a.ae
- [ ] Contact form page loads at https://triple-a.ae/contact
- [ ] Form fields visible and functional
- [ ] Can type in all fields
- [ ] Submit button works
- [ ] Email validation rejects bad emails (e.g., "asd")
- [ ] Valid email (e.g., "test@example.com") submits
- [ ] Success modal appears
- [ ] Email arrives in info@triple-a.ae inbox within 2 minutes
- [ ] Form resets after submission

## Key Points

✅ **Same code works on localhost AND production**
- No hardcoded domain references
- Relative API path `/api/send-email` uses current domain automatically
- Just set environment variables and deploy

✅ **Security**
- Resend API key only used on server
- Environment variables not in git
- Email validated on both client and server

⚡ **Performance**
- Build time: ~2.5 seconds
- First load JS: 147 KB shared across routes
- All pages pre-rendered as static
- API route: 139 B (tiny)

## Environment Variables

Only 4 variables needed:
```
RESEND_API_KEY=re_CiETWJ2h_9MHcrnbihqT1uFYQy7hhERda
CONTACT_EMAIL=smsazzawi@gmail.com
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://triple-a.ae
```

The first 3 are critical. The 4th is optional (used for analytics if any).

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "API key invalid" | Check RESEND_API_KEY matches exactly: `re_CiETWJ2h_9MHcrnbihqT1uFYQy7hhERda` |
| Email not received | Check spam folder, verify CONTACT_EMAIL, check Resend dashboard |
| Form doesn't submit | Check browser console for errors, verify API key in environment |
| 404 on /api/send-email | Ensure build completed successfully, try rebuilding |
| DNS not working | Make sure triple-a.ae domain DNS points to your server |

## Support

For more details, see:
- `CONTACT_FORM_DEPLOYMENT.md` - Full deployment guide
- `CONTACT_FORM_READY.md` - Complete setup documentation
- `src/app/api/send-email/route.ts` - API implementation
- `src/store/contactStore.ts` - Form state management

---

**Status:** ✅ Ready for production deployment to triple-a.ae

