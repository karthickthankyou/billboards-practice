import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export type LocationInfo = { placeName: string; latLng: [number, number] }

export type SearchSliceType = {
  recentSearches: LocationInfo[]
  placeName: string | null
  endTime: string | null
  startTime: string | null
  locationInfo: {
    nw_lat: number
    nw_lng: number
    se_lat: number
    se_lng: number
  } | null
  type: string | null
  pricePerDay: number | null
  minHeight: number | null
  minWeight: number | null

  skip?: number
  take?: number
}

const initialState: SearchSliceType = {
  recentSearches: [],
  placeName: null,
  startTime: new Date().toISOString(),
  endTime: null,
  type: null,
  locationInfo: null,
  pricePerDay: null,
  minHeight: null,
  minWeight: null,
}

const SearchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setRecentSearch: (state, action: PayloadAction<LocationInfo>) => {
      const recentSearches = [action.payload, ...state.recentSearches]
      state.recentSearches = recentSearches.slice(0, 3)
    },
    setSearchFilter: (state, action: PayloadAction<SearchSliceType>) =>
      action.payload,
    setPlaceName: (
      state,
      action: PayloadAction<SearchSliceType['placeName']>,
    ) => {
      state.placeName = action.payload
    },
    setStartTime: (
      state,
      action: PayloadAction<SearchSliceType['startTime']>,
    ) => {
      state.startTime = action.payload
    },
    setEndTime: (state, action: PayloadAction<SearchSliceType['endTime']>) => {
      state.endTime = action.payload
    },
    setLocationInfo: (
      state,
      action: PayloadAction<SearchSliceType['locationInfo']>,
    ) => {
      state.locationInfo = action.payload
    },
    resetSearchFilter: () => initialState,
  },
})

export const {
  setSearchFilter,
  setLocationInfo,
  resetSearchFilter,
  setEndTime,
  setStartTime,
  setRecentSearch,
} = SearchSlice.actions

export const selectSearchFilters = (state: RootState) => state.search
export const selectRecentSearches = (state: RootState) =>
  state.search.recentSearches

export const searchReducer = SearchSlice.reducer
