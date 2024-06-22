import cookie from 'js-cookie'
import { useEffect, useState } from 'react'

import { SalmonRunData, ApiResponse } from '@/types'

export const useFetchSalmonRun = () => {
  const [salmonRunData, setSalmonRunData] = useState<SalmonRunData[] | null>(
    null
  )

  useEffect(() => {
    let isMounted = true

    const fetchData = () => {
      const req = new Request(
        'https://spla3.yuu26.com/api/coop-grouping/schedule',
        {
          method: 'GET',
        }
      )
      cookie.set('SameSite', 'None', { secure: true })

      fetch(req)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
          }
          return res.json()
        })
        .then((data: ApiResponse) => {
          if (isMounted) {
            setSalmonRunData(data.results)
          }
        })
        .catch((error) => {
          console.error('Failed to fetch data:', error)
        })
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [])

  return salmonRunData ?? []
}
