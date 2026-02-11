## Expo Go vs Production

| Environment      | Redirect URL                            |
| ---------------- | --------------------------------------- |
| Expo Go (dev)    | `exp://127.0.0.1:8081/--/auth/callback` |
| Dev build / Prod | `myapp://auth/callback`                 |
| Web fallback     | `https://yourdomain.com/auth/callback`  |

Why expo:// exists

- Expo Go runs inside the Expo app
- It uses the exp:// protocol internally
- Real apps do not use exp://

## How to test a deep link

`npx expo start`
`npx expo uri-scheme open myapp://auth/callback`

**NOTE**: Expo GO URLS do not work in TestFlight/ Play Store builds


## SMTP (Simple Mail Transfer Protocol)
SMTP is the standard TCP/IP application-layer protocol used to send, relay, and deliver email messages between servers across the internet. It serves as the backbone for outgoing mail, moving messages from a client to a receivers server. 

Choice service providers: 
1. Brevo
2. AWS

Hosted Zones: 
- mangaloopapp.com (domain) 
- mangaloopmarketplace.mangaloop.com (email address)


