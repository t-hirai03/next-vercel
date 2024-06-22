import { useQuery } from '@tanstack/react-query'

import ApiClient from '@/lib/api-client'
import { SalmonRunData, ApiResponse } from '@/types'

const fetchSalmonRunData = async (): Promise<SalmonRunData[]> => {
  const res = await new ApiClient().get<ApiResponse>(
    'https://spla3.yuu26.com/api/coop-grouping/schedule'
  )
  return res.results
}

export const useFetchSalmonRun = (): SalmonRunData[] | [] => {
  const { data } = useQuery<SalmonRunData[]>({
    queryKey: ['salmonRunData'],
    queryFn: fetchSalmonRunData,
  })

  return data ?? []
}
