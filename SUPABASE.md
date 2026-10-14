This website reads published news, publications, and media from the shared Supabase project `szrrdgiivhfhvugemvfu`. Contact enquiries, partnership enquiries, and newsletter subscriptions save to that project's private submissions table.

The database setup and administrator-access script are in the admin repository under `supabase/`. That setup was applied on 14 October 2026 and verified against the live project. Both websites use the same publishable key; a secret or service-role key must never be used in the browser.

Optional Vercel environment overrides are documented in `.env.example`. Set `VITE_ADMIN_URL` to the actual admin website URL to enable the secure administration link at `/admin`.

Form success messages are shown only after Supabase confirms the save. Failed submissions preserve the user's input and display an error. Published content refreshes on navigation, realtime updates, focus, and every 30 seconds.
