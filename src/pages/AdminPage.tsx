export default function AdminPage() {
  const adminUrl = import.meta.env.VITE_ADMIN_URL
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0d1e35] text-white text-center gap-6">
      <img src="/ASGC_White_Logo.png" alt="ASGC" className="w-32" />
      <h1 className="text-2xl font-bold">ASGC Administration</h1>
      <p>Manage ASGC content through the secure administrator website.</p>
      {adminUrl && /^https:\/\//.test(adminUrl) && (
        <a href={adminUrl} className="rounded bg-[#B8963E] px-6 py-3">
          Open Admin Portal
        </a>
      )}
    </main>
  )
}
