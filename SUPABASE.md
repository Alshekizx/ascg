All editable website content comes from the shared ASGC Supabase project `szrrdgiivhfhvugemvfu`: page text and lists, events, programmes, news, publications, leadership, partners, media and website settings. No local sample-data fallback remains.

Contact, partnership and newsletter forms save private submissions. Event registration uses the database RPC to check registration availability, duplicates and capacity. Success is displayed only after the database acknowledges the write. Failed submissions preserve typed input.

`useContent` shares live responses between components and refreshes via realtime, focus and polling. Homepage counters use aggregate database statistics. Founder details are shared leadership records. Contact details, brand images, social links and map destination are shared website settings. Blank social destinations and placeholder legal links are removed. Additional published pages resolve by their URL name.

Browser code uses the publishable key. Private messages and account data are not readable by public visitors. Database migrations, fixture cleanup, the protected account-management function and the audit report are in the admin repository under `supabase/`.

Temporary test records are intentionally present in Supabase and marked for later cleanup. No secret or service-role key is stored in the frontend.
