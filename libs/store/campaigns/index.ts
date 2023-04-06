import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchBillboardsQuery } from '@billboards-org/network/src/generated'

type CampaignsSliceType = {
  billboards: SearchBillboardsQuery['searchBillboards']
}

const initialState: CampaignsSliceType = {
  billboards: [],
}

const campaigns = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    addBillboardToCampaign: (
      state,
      action: PayloadAction<CampaignsSliceType['billboards'][number]>,
    ) => {
      console.log('action', action.payload)
      state.billboards.push(action.payload)
    },
    removeBillboardFromCampaign: (state, action: PayloadAction<number>) => {
      state.billboards = state.billboards.filter(
        (billboard) => billboard.id !== action.payload,
      )
    },
    resetCampaign: (state) => initialState,
  },
})

export const {
  addBillboardToCampaign,
  removeBillboardFromCampaign,
  resetCampaign,
} = campaigns.actions

export const campaignReducer = campaigns.reducer
