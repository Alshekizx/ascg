export default function ContentStatus({
  loading,
  error,
}: {
  loading: boolean
  error: string
}) {
  if (!loading && !error) return null
  return (
    <p role="status" className="px-6 py-4 text-center text-sm text-gray-600">
      {loading ? "Loading…" : error}
    </p>
  )
}
