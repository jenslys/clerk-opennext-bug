# How this was replicated

1. Created a brand new app using instructions on <https://opennext.js.org/cloudflare/get-started>

```bash
npm create cloudflare@latest -- my-next-app --framework=next --experimental
```

1. upgeade to nextjs 15 using offical instructions <https://nextjs.org/docs/app/building-your-application/upgrading/version-15>

## Local setup

1. Fill in `.env.local` -> `cp .env.example .env.local`
1. create `dev.vars` -> `echo "NEXTJS_ENV=development" > .dev.vars`
1. `bun install`
1. `bun run preview`
1. Login with clerk and try to navigate to `/protected`
