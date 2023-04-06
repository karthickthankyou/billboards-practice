import { FieldNamesMarkedBoolean } from 'react-hook-form'

import { SearchBillboardFormType } from '../searchBillboards'
import { SearchBillboardsQueryVariables } from '@billboards-org/network/src/generated'

export const getYesterday = () => {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}

const searchFormAdapter = (
  dirtyFields: FieldNamesMarkedBoolean<SearchBillboardFormType>,
  formData: Partial<
    Pick<
      SearchBillboardFormType,
      | 'dateRange'
      | 'skip'
      | 'take'
      | 'type'
      | 'locationFilter'
      | 'width'
      | 'height'
      | 'pricePerHour'
      | 'impressionsPerDay'
      | 'minBookingDays'
    >
  >,
): SearchBillboardsQueryVariables | null => {
  // Dates
  const endDate = formData.dateRange?.endDate
  const startDate = formData.dateRange?.startDate
  // Locations
  const nw_lat = formData.locationFilter?.nw_lat
  const nw_lng = formData.locationFilter?.nw_lng
  const se_lat = formData.locationFilter?.se_lat
  const se_lng = formData.locationFilter?.se_lng

  const requiredFields =
    !nw_lat || !nw_lng || !se_lat || !se_lng || !endDate || !startDate

  if (requiredFields) {
    return null
  }
  const dateFilter = {
    startDate: startDate,
    endDate: endDate,
  }
  const locationFilter: SearchBillboardsQueryVariables['locationFilter'] = {
    nw_lat,
    nw_lng,
    se_lat,
    se_lng,
  }

  /**
   * Billboards filter
   */

  const width = dirtyFields.width && intFilter(formData.width)
  const height = dirtyFields.height && intFilter(formData.height)
  const minBookingDays =
    dirtyFields.minBookingDays && intFilter(formData.minBookingDays)
  const impressionsPerDay =
    dirtyFields.impressionsPerDay && intFilter(formData.impressionsPerDay)
  const pricePerHour =
    dirtyFields.pricePerHour && intFilter(formData.pricePerHour)
  const type = dirtyFields.type && { in: formData.type || [] }

  const skip = (dirtyFields.skip && formData.skip) || 0
  const take = (dirtyFields.take && formData.take) || 20

  const where: SearchBillboardsQueryVariables['where'] = {
    ...(minBookingDays && { minBookingDays }),
    ...(impressionsPerDay && { impressionsPerDay }),
    ...(width && { width }),
    ...(height && { height }),
    ...(pricePerHour && { pricePerHour }),
    ...(type && { type }),
  }

  const filter: SearchBillboardsQueryVariables = {
    dateFilter,
    locationFilter,
    where,
    skip,
    take,
  }

  return filter
}

const intFilter = (data?: [number, number]) => {
  if (!data) return {}
  const filterObj: { gte?: number; lte?: number } = {}
  if (data[0] !== 0) filterObj['gte'] = data[0]
  if (data[1] !== 0) filterObj['lte'] = data[1]
  return filterObj
}

export { searchFormAdapter, intFilter }
