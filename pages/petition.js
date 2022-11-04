import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('https://bvpk.org')
  })

  return <p>Redirecting...</p>
}
