import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type Advertiser = {
  __typename?: 'Advertiser'
  campaigns?: Maybe<Array<Campaign>>
  createdAt: Scalars['DateTime']
  favorites?: Maybe<Array<Favorite>>
  name: Scalars['String']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type AdvertiserOrderByWithRelationInput = {
  campaigns?: InputMaybe<CampaignOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  favorites?: InputMaybe<FavoriteOrderByRelationAggregateInput>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AdvertiserRelationFilter = {
  is?: InputMaybe<AdvertiserWhereInput>
  isNot?: InputMaybe<AdvertiserWhereInput>
}

export enum AdvertiserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AdvertiserWhereInput = {
  AND?: InputMaybe<Array<AdvertiserWhereInput>>
  NOT?: InputMaybe<Array<AdvertiserWhereInput>>
  OR?: InputMaybe<Array<AdvertiserWhereInput>>
  campaigns?: InputMaybe<CampaignListRelationFilter>
  createdAt?: InputMaybe<StringFilter>
  favorites?: InputMaybe<FavoriteListRelationFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<StringFilter>
}

export type AdvertiserWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type Agent = {
  __typename?: 'Agent'
  billboardTimeline?: Maybe<Array<BillboardTimeline>>
  billboardsStatuses?: Maybe<Array<BillboardStatus>>
  campaignTimeline?: Maybe<Array<CampaignTimeline>>
  campaignsStatuses?: Maybe<Array<CampaignStatus>>
  createdAt: Scalars['DateTime']
  name: Scalars['String']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type AgentOrderByWithRelationInput = {
  billboardTimeline?: InputMaybe<BillboardTimelineOrderByRelationAggregateInput>
  billboardsStatuses?: InputMaybe<BillboardStatusOrderByRelationAggregateInput>
  campaignTimeline?: InputMaybe<CampaignTimelineOrderByRelationAggregateInput>
  campaignsStatuses?: InputMaybe<CampaignStatusOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AgentRelationFilter = {
  is?: InputMaybe<AgentWhereInput>
  isNot?: InputMaybe<AgentWhereInput>
}

export enum AgentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AgentWhereInput = {
  AND?: InputMaybe<Array<AgentWhereInput>>
  NOT?: InputMaybe<Array<AgentWhereInput>>
  OR?: InputMaybe<Array<AgentWhereInput>>
  billboardTimeline?: InputMaybe<BillboardTimelineListRelationFilter>
  billboardsStatuses?: InputMaybe<BillboardStatusListRelationFilter>
  campaignTimeline?: InputMaybe<CampaignTimelineListRelationFilter>
  campaignsStatuses?: InputMaybe<CampaignStatusListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AgentWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type AggregateCountOutput = {
  __typename?: 'AggregateCountOutput'
  count: Scalars['Int']
}

export type Billboard = {
  __typename?: 'Billboard'
  address?: Maybe<Scalars['String']>
  angle?: Maybe<Scalars['Int']>
  billboardTimeline?: Maybe<Array<BillboardTimeline>>
  booked?: Maybe<Scalars['Boolean']>
  bookings?: Maybe<Array<Booking>>
  campaignsCount?: Maybe<Scalars['Int']>
  createdAt: Scalars['DateTime']
  elevation?: Maybe<Scalars['Int']>
  favorites?: Maybe<Array<Favorite>>
  height: Scalars['Float']
  id: Scalars['Int']
  images?: Maybe<Array<Scalars['String']>>
  impressionsPerDay?: Maybe<Scalars['Int']>
  lat: Scalars['Float']
  lng: Scalars['Float']
  minBookingDays?: Maybe<Scalars['Int']>
  name: Scalars['String']
  owner?: Maybe<Owner>
  ownerId: Scalars['String']
  pricePerDay?: Maybe<Scalars['Float']>
  status?: Maybe<BillboardStatus>
  totalBookingDays?: Maybe<Scalars['Int']>
  type: BillboardType
  updatedAt: Scalars['DateTime']
  width: Scalars['Float']
}

export type BillboardListRelationFilter = {
  every?: InputMaybe<BillboardWhereInput>
  none?: InputMaybe<BillboardWhereInput>
  some?: InputMaybe<BillboardWhereInput>
}

export type BillboardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BillboardOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>
  angle?: InputMaybe<SortOrder>
  billboardTimeline?: InputMaybe<BillboardTimelineOrderByRelationAggregateInput>
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  elevation?: InputMaybe<SortOrder>
  favorites?: InputMaybe<FavoriteOrderByRelationAggregateInput>
  height?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  images?: InputMaybe<SortOrder>
  impressionsPerDay?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  minBookingDays?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  owner?: InputMaybe<OwnerOrderByWithRelationInput>
  ownerId?: InputMaybe<SortOrder>
  pricePerDay?: InputMaybe<SortOrder>
  status?: InputMaybe<BillboardStatusOrderByWithRelationInput>
  type?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  width?: InputMaybe<SortOrder>
}

export type BillboardPublic = {
  __typename?: 'BillboardPublic'
  angle?: Maybe<Scalars['Int']>
  elevation?: Maybe<Scalars['Int']>
  height: Scalars['Float']
  id: Scalars['Int']
  images?: Maybe<Array<Scalars['String']>>
  impressionsPerDay?: Maybe<Scalars['Int']>
  lat: Scalars['Float']
  lng: Scalars['Float']
  minBookingDays?: Maybe<Scalars['Int']>
  pricePerDay?: Maybe<Scalars['Float']>
  type: BillboardType
  width: Scalars['Float']
}

export type BillboardRelationFilter = {
  is?: InputMaybe<BillboardWhereInput>
  isNot?: InputMaybe<BillboardWhereInput>
}

export enum BillboardScalarFieldEnum {
  Address = 'address',
  Angle = 'angle',
  CreatedAt = 'createdAt',
  Elevation = 'elevation',
  Height = 'height',
  Id = 'id',
  Images = 'images',
  ImpressionsPerDay = 'impressionsPerDay',
  Lat = 'lat',
  Lng = 'lng',
  MinBookingDays = 'minBookingDays',
  Name = 'name',
  OwnerId = 'ownerId',
  PricePerDay = 'pricePerDay',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Width = 'width',
}

export type BillboardStatus = {
  __typename?: 'BillboardStatus'
  agent?: Maybe<Agent>
  agentId?: Maybe<Scalars['String']>
  billboard?: Maybe<Billboard>
  billboardId: Scalars['Int']
  createdAt: Scalars['DateTime']
  notes?: Maybe<Scalars['String']>
  status?: Maybe<BillboardStatusType>
  updatedAt: Scalars['DateTime']
}

export type BillboardStatusListRelationFilter = {
  every?: InputMaybe<BillboardStatusWhereInput>
  none?: InputMaybe<BillboardStatusWhereInput>
  some?: InputMaybe<BillboardStatusWhereInput>
}

export type BillboardStatusOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BillboardStatusOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>
  agentId?: InputMaybe<SortOrder>
  billboard?: InputMaybe<BillboardOrderByWithRelationInput>
  billboardId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type BillboardStatusRelationFilter = {
  is?: InputMaybe<BillboardStatusWhereInput>
  isNot?: InputMaybe<BillboardStatusWhereInput>
}

export enum BillboardStatusScalarFieldEnum {
  AgentId = 'agentId',
  BillboardId = 'billboardId',
  CreatedAt = 'createdAt',
  Notes = 'notes',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum BillboardStatusType {
  Inprogress = 'INPROGRESS',
  Live = 'LIVE',
  New = 'NEW',
  OnHold = 'ON_HOLD',
  Rejected = 'REJECTED',
  Verified = 'VERIFIED',
}

export type BillboardStatusWhereInput = {
  AND?: InputMaybe<Array<BillboardStatusWhereInput>>
  NOT?: InputMaybe<Array<BillboardStatusWhereInput>>
  OR?: InputMaybe<Array<BillboardStatusWhereInput>>
  agent?: InputMaybe<AgentRelationFilter>
  agentId?: InputMaybe<StringFilter>
  billboard?: InputMaybe<BillboardRelationFilter>
  billboardId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  notes?: InputMaybe<StringFilter>
  status?: InputMaybe<EnumBillboardStatusTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type BillboardStatusWhereUniqueInput = {
  billboardId?: InputMaybe<Scalars['Int']>
}

export type BillboardTimeline = {
  __typename?: 'BillboardTimeline'
  agent?: Maybe<Agent>
  agentId?: Maybe<Scalars['String']>
  billboard?: Maybe<Billboard>
  billboardId: Scalars['Int']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  notes?: Maybe<Scalars['String']>
  status?: Maybe<BillboardStatusType>
  updatedAt: Scalars['DateTime']
}

export type BillboardTimelineListRelationFilter = {
  every?: InputMaybe<BillboardTimelineWhereInput>
  none?: InputMaybe<BillboardTimelineWhereInput>
  some?: InputMaybe<BillboardTimelineWhereInput>
}

export type BillboardTimelineOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BillboardTimelineOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>
  agentId?: InputMaybe<SortOrder>
  billboard?: InputMaybe<BillboardOrderByWithRelationInput>
  billboardId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum BillboardTimelineScalarFieldEnum {
  AgentId = 'agentId',
  BillboardId = 'billboardId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Notes = 'notes',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type BillboardTimelineWhereInput = {
  AND?: InputMaybe<Array<BillboardTimelineWhereInput>>
  NOT?: InputMaybe<Array<BillboardTimelineWhereInput>>
  OR?: InputMaybe<Array<BillboardTimelineWhereInput>>
  agent?: InputMaybe<AgentRelationFilter>
  agentId?: InputMaybe<StringFilter>
  billboard?: InputMaybe<BillboardRelationFilter>
  billboardId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  notes?: InputMaybe<StringFilter>
  status?: InputMaybe<EnumBillboardStatusTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type BillboardTimelineWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export enum BillboardType {
  Classic = 'CLASSIC',
  Led = 'LED',
  Neon = 'NEON',
  ThreeDimensional = 'THREE_DIMENSIONAL',
  Vinyl = 'VINYL',
}

export type BillboardWhereInput = {
  AND?: InputMaybe<Array<BillboardWhereInput>>
  NOT?: InputMaybe<Array<BillboardWhereInput>>
  OR?: InputMaybe<Array<BillboardWhereInput>>
  address?: InputMaybe<StringFilter>
  angle?: InputMaybe<IntFilter>
  billboardTimeline?: InputMaybe<BillboardTimelineListRelationFilter>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  elevation?: InputMaybe<IntFilter>
  favorites?: InputMaybe<FavoriteListRelationFilter>
  height?: InputMaybe<FloatFilter>
  id?: InputMaybe<IntFilter>
  images?: InputMaybe<StringListFilter>
  impressionsPerDay?: InputMaybe<IntFilter>
  lat?: InputMaybe<FloatFilter>
  lng?: InputMaybe<FloatFilter>
  minBookingDays?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  owner?: InputMaybe<OwnerRelationFilter>
  ownerId?: InputMaybe<StringFilter>
  pricePerDay?: InputMaybe<FloatFilter>
  status?: InputMaybe<BillboardStatusRelationFilter>
  type?: InputMaybe<EnumBillboardTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  width?: InputMaybe<FloatFilter>
}

export type BillboardWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Booking = {
  __typename?: 'Booking'
  billboard?: Maybe<Billboard>
  billboardId: Scalars['Int']
  campaign?: Maybe<Campaign>
  campaignId: Scalars['Int']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  pricePerDay?: Maybe<Scalars['Float']>
  updatedAt: Scalars['DateTime']
}

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInput>
  none?: InputMaybe<BookingWhereInput>
  some?: InputMaybe<BookingWhereInput>
}

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BookingOrderByWithRelationInput = {
  billboard?: InputMaybe<BillboardOrderByWithRelationInput>
  billboardId?: InputMaybe<SortOrder>
  campaign?: InputMaybe<CampaignOrderByWithRelationInput>
  campaignId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  pricePerDay?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum BookingScalarFieldEnum {
  BillboardId = 'billboardId',
  CampaignId = 'campaignId',
  CreatedAt = 'createdAt',
  Id = 'id',
  PricePerDay = 'pricePerDay',
  UpdatedAt = 'updatedAt',
}

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>
  NOT?: InputMaybe<Array<BookingWhereInput>>
  OR?: InputMaybe<Array<BookingWhereInput>>
  billboard?: InputMaybe<BillboardRelationFilter>
  billboardId?: InputMaybe<IntFilter>
  campaign?: InputMaybe<CampaignRelationFilter>
  campaignId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  pricePerDay?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type BookingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type BookingWithInCampaign = {
  billboard: ConnectOnlyBillboardInput
  pricePerDay: Scalars['Int']
}

export type Campaign = {
  __typename?: 'Campaign'
  advertiser?: Maybe<Advertiser>
  advertiserId: Scalars['String']
  bookings?: Maybe<Array<Booking>>
  campaignTimeline?: Maybe<Array<CampaignTimeline>>
  createdAt: Scalars['DateTime']
  endDate: Scalars['DateTime']
  id: Scalars['Int']
  name: Scalars['String']
  startDate: Scalars['DateTime']
  status?: Maybe<CampaignStatus>
  totalCost?: Maybe<Scalars['Int']>
  totalDays: Scalars['Int']
  updatedAt: Scalars['DateTime']
}

export type CampaignListRelationFilter = {
  every?: InputMaybe<CampaignWhereInput>
  none?: InputMaybe<CampaignWhereInput>
  some?: InputMaybe<CampaignWhereInput>
}

export type CampaignOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CampaignOrderByWithRelationInput = {
  advertiser?: InputMaybe<AdvertiserOrderByWithRelationInput>
  advertiserId?: InputMaybe<SortOrder>
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  endDate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  startDate?: InputMaybe<SortOrder>
  status?: InputMaybe<CampaignStatusOrderByWithRelationInput>
  timeline?: InputMaybe<CampaignTimelineOrderByRelationAggregateInput>
  totalDays?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type CampaignRelationFilter = {
  is?: InputMaybe<CampaignWhereInput>
  isNot?: InputMaybe<CampaignWhereInput>
}

export enum CampaignScalarFieldEnum {
  AdvertiserId = 'advertiserId',
  CreatedAt = 'createdAt',
  EndDate = 'endDate',
  Id = 'id',
  Name = 'name',
  StartDate = 'startDate',
  TotalDays = 'totalDays',
  UpdatedAt = 'updatedAt',
}

export type CampaignStatus = {
  __typename?: 'CampaignStatus'
  agent?: Maybe<Agent>
  agentId?: Maybe<Scalars['String']>
  campaign?: Maybe<Campaign>
  campaignId: Scalars['Int']
  campaignTimeline?: Maybe<Array<CampaignTimeline>>
  createdAt: Scalars['DateTime']
  status: CampaignStatusType
  updatedAt: Scalars['DateTime']
}

export type CampaignStatusListRelationFilter = {
  every?: InputMaybe<CampaignStatusWhereInput>
  none?: InputMaybe<CampaignStatusWhereInput>
  some?: InputMaybe<CampaignStatusWhereInput>
}

export type CampaignStatusOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CampaignStatusOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>
  agentId?: InputMaybe<SortOrder>
  campaign?: InputMaybe<CampaignOrderByWithRelationInput>
  campaignId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type CampaignStatusRelationFilter = {
  is?: InputMaybe<CampaignStatusWhereInput>
  isNot?: InputMaybe<CampaignStatusWhereInput>
}

export enum CampaignStatusScalarFieldEnum {
  AgentId = 'agentId',
  CampaignId = 'campaignId',
  CreatedAt = 'createdAt',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum CampaignStatusType {
  Inprogress = 'INPROGRESS',
  Live = 'LIVE',
  New = 'NEW',
  OnHold = 'ON_HOLD',
  Rejected = 'REJECTED',
  Verified = 'VERIFIED',
}

export type CampaignStatusWhereInput = {
  AND?: InputMaybe<Array<CampaignStatusWhereInput>>
  NOT?: InputMaybe<Array<CampaignStatusWhereInput>>
  OR?: InputMaybe<Array<CampaignStatusWhereInput>>
  agent?: InputMaybe<AgentRelationFilter>
  agentId?: InputMaybe<StringFilter>
  campaign?: InputMaybe<CampaignRelationFilter>
  campaignId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<EnumCampaignStatusTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CampaignStatusWhereUniqueInput = {
  campaignId?: InputMaybe<Scalars['Int']>
}

export type CampaignTimeline = {
  __typename?: 'CampaignTimeline'
  agent?: Maybe<Agent>
  agentId?: Maybe<Scalars['String']>
  campaign?: Maybe<Campaign>
  campaignId: Scalars['Int']
  campaignStatus?: Maybe<CampaignStatus>
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  notes?: Maybe<Scalars['String']>
  status: CampaignStatusType
  updatedAt: Scalars['DateTime']
}

export type CampaignTimelineListRelationFilter = {
  every?: InputMaybe<CampaignTimelineWhereInput>
  none?: InputMaybe<CampaignTimelineWhereInput>
  some?: InputMaybe<CampaignTimelineWhereInput>
}

export type CampaignTimelineOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CampaignTimelineOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>
  agentId?: InputMaybe<SortOrder>
  campaign?: InputMaybe<CampaignOrderByWithRelationInput>
  campaignId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum CampaignTimelineScalarFieldEnum {
  AgentId = 'agentId',
  CampaignId = 'campaignId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Notes = 'notes',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type CampaignTimelineWhereInput = {
  AND?: InputMaybe<Array<CampaignTimelineWhereInput>>
  NOT?: InputMaybe<Array<CampaignTimelineWhereInput>>
  OR?: InputMaybe<Array<CampaignTimelineWhereInput>>
  agent?: InputMaybe<AgentRelationFilter>
  agentId?: InputMaybe<StringFilter>
  campaign?: InputMaybe<CampaignRelationFilter>
  campaignId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  notes?: InputMaybe<StringFilter>
  status?: InputMaybe<EnumCampaignStatusTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CampaignTimelineWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type CampaignWhereInput = {
  AND?: InputMaybe<Array<CampaignWhereInput>>
  NOT?: InputMaybe<Array<CampaignWhereInput>>
  OR?: InputMaybe<Array<CampaignWhereInput>>
  advertiser?: InputMaybe<AdvertiserRelationFilter>
  advertiserId?: InputMaybe<StringFilter>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  endDate?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  startDate?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<CampaignStatusRelationFilter>
  timeline?: InputMaybe<CampaignTimelineListRelationFilter>
  totalDays?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CampaignWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type ConnectOnlyBillboardInput = {
  connect: BillboardWhereUniqueInput
}

export type CreateAdvertiserInput = {
  name: Scalars['String']
  uid: Scalars['String']
}

export type CreateAgentInput = {
  name: Scalars['String']
  uid: Scalars['String']
}

export type CreateBillboardInput = {
  address?: InputMaybe<Scalars['String']>
  angle?: InputMaybe<Scalars['Int']>
  elevation?: InputMaybe<Scalars['Int']>
  height: Scalars['Float']
  images?: InputMaybe<Array<Scalars['String']>>
  impressionsPerDay?: InputMaybe<Scalars['Int']>
  lat: Scalars['Float']
  lng: Scalars['Float']
  minBookingDays?: InputMaybe<Scalars['Int']>
  name: Scalars['String']
  ownerId: Scalars['String']
  pricePerDay?: InputMaybe<Scalars['Float']>
  type: BillboardType
  width: Scalars['Float']
}

export type CreateBillboardStatusInput = {
  agentId?: InputMaybe<Scalars['String']>
  billboardId: Scalars['Int']
  notes?: InputMaybe<Scalars['String']>
  status?: InputMaybe<BillboardStatusType>
}

export type CreateBillboardTimelineInput = {
  agentId?: InputMaybe<Scalars['String']>
  billboardId: Scalars['Int']
  notes?: InputMaybe<Scalars['String']>
  status?: InputMaybe<BillboardStatusType>
}

export type CreateBookingInput = {
  billboardId: Scalars['Int']
  campaignId: Scalars['Int']
  pricePerDay?: InputMaybe<Scalars['Float']>
}

export type CreateCampaignInput = {
  advertiserId: Scalars['String']
  bookings: Array<BookingWithInCampaign>
  endDate: Scalars['DateTime']
  name: Scalars['String']
  startDate: Scalars['DateTime']
}

export type CreateCampaignStatusInput = {
  agentId?: InputMaybe<Scalars['String']>
  campaignId: Scalars['Int']
  status: CampaignStatusType
}

export type CreateCampaignTimelineInput = {
  agentId?: InputMaybe<Scalars['String']>
  campaignId: Scalars['Int']
  notes?: InputMaybe<Scalars['String']>
  status: CampaignStatusType
}

export type CreateFavoriteInput = {
  advertiserId: Scalars['String']
  billboardId: Scalars['Int']
}

export type CreateOwnerInput = {
  name: Scalars['String']
  uid: Scalars['String']
}

export type DateFilterInput = {
  endDate: Scalars['String']
  startDate: Scalars['String']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
}

export type EnumBillboardStatusTypeFilter = {
  equals?: InputMaybe<BillboardStatusType>
  in?: InputMaybe<Array<BillboardStatusType>>
  not?: InputMaybe<BillboardStatusType>
  notIn?: InputMaybe<Array<BillboardStatusType>>
}

export type EnumBillboardTypeFilter = {
  equals?: InputMaybe<BillboardType>
  in?: InputMaybe<Array<BillboardType>>
  not?: InputMaybe<BillboardType>
  notIn?: InputMaybe<Array<BillboardType>>
}

export type EnumCampaignStatusTypeFilter = {
  equals?: InputMaybe<CampaignStatusType>
  in?: InputMaybe<Array<CampaignStatusType>>
  not?: InputMaybe<CampaignStatusType>
  notIn?: InputMaybe<Array<CampaignStatusType>>
}

export type Favorite = {
  __typename?: 'Favorite'
  advertiser: Advertiser
  advertiserId: Scalars['String']
  billboard: Billboard
  billboardId: Scalars['Int']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type FavoriteListRelationFilter = {
  every?: InputMaybe<FavoriteWhereInput>
  none?: InputMaybe<FavoriteWhereInput>
  some?: InputMaybe<FavoriteWhereInput>
}

export type FavoriteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type FavoriteOrderByWithRelationInput = {
  advertiser?: InputMaybe<AdvertiserOrderByWithRelationInput>
  advertiserId?: InputMaybe<SortOrder>
  billboard?: InputMaybe<BillboardOrderByWithRelationInput>
  billboardId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum FavoriteScalarFieldEnum {
  AdvertiserId = 'advertiserId',
  BillboardId = 'billboardId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export type FavoriteUnique = {
  advertiserId: Scalars['String']
  billboardId: Scalars['Int']
}

export type FavoriteWhereInput = {
  AND?: InputMaybe<Array<FavoriteWhereInput>>
  NOT?: InputMaybe<Array<FavoriteWhereInput>>
  OR?: InputMaybe<Array<FavoriteWhereInput>>
  advertiser?: InputMaybe<AdvertiserRelationFilter>
  advertiserId?: InputMaybe<StringFilter>
  billboard?: InputMaybe<BillboardRelationFilter>
  billboardId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type FavoriteWhereUniqueInput = {
  advertiserId_billboardId?: InputMaybe<FavoriteUnique>
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Scalars['Float']>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<Scalars['Float']>
  notIn?: InputMaybe<Scalars['Float']>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Scalars['Int']>
}

export type LocationFilterInput = {
  nw_lat: Scalars['Float']
  nw_lng: Scalars['Float']
  se_lat: Scalars['Float']
  se_lng: Scalars['Float']
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  displayName: Scalars['String']
  email: Scalars['String']
  expiresIn: Scalars['String']
  idToken: Scalars['String']
  kind: Scalars['String']
  localId: Scalars['String']
  refreshToken: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createAdvertiser: Advertiser
  createAgent: Agent
  createBillboard: Billboard
  createBillboardStatus: BillboardStatus
  createBillboardTimeline: BillboardTimeline
  createBooking: Booking
  createCampaign: Campaign
  createCampaignStatus: CampaignStatus
  createCampaignTimeline: CampaignTimeline
  createFavorite: Favorite
  createOwner: Owner
  login: LoginOutput
  refreshToken: RefreshTokenOutput
  register: RegisterOutput
  removeAdvertiser: Advertiser
  removeAgent: Agent
  removeBillboard: Billboard
  removeBillboardStatus: BillboardStatus
  removeBillboardTimeline: BillboardTimeline
  removeBooking: Booking
  removeCampaign: Campaign
  removeCampaignStatus: CampaignStatus
  removeCampaignTimeline: CampaignTimeline
  removeFavorite: Favorite
  removeOwner: Owner
  setAdmin: Scalars['Boolean']
  setRole: Scalars['Boolean']
  updateAdvertiser: Advertiser
  updateAgent: Agent
  updateBillboard: Billboard
  updateBillboardStatus: BillboardStatus
  updateBillboardTimeline: BillboardTimeline
  updateBooking: Booking
  updateCampaign: Campaign
  updateCampaignStatus: CampaignStatus
  updateCampaignTimeline: CampaignTimeline
  updateFavorite: Favorite
  updateOwner: Owner
}

export type MutationCreateAdvertiserArgs = {
  createAdvertiserInput: CreateAdvertiserInput
}

export type MutationCreateAgentArgs = {
  createAgentInput: CreateAgentInput
}

export type MutationCreateBillboardArgs = {
  createBillboardInput: CreateBillboardInput
}

export type MutationCreateBillboardStatusArgs = {
  createBillboardStatusInput: CreateBillboardStatusInput
}

export type MutationCreateBillboardTimelineArgs = {
  createBillboardTimelineInput: CreateBillboardTimelineInput
}

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput
}

export type MutationCreateCampaignArgs = {
  createCampaignInput: CreateCampaignInput
}

export type MutationCreateCampaignStatusArgs = {
  createCampaignStatusInput: CreateCampaignStatusInput
}

export type MutationCreateCampaignTimelineArgs = {
  createCampaignTimelineInput: CreateCampaignTimelineInput
}

export type MutationCreateFavoriteArgs = {
  createFavoriteInput: CreateFavoriteInput
}

export type MutationCreateOwnerArgs = {
  createOwnerInput: CreateOwnerInput
}

export type MutationLoginArgs = {
  credentials: LoginInput
}

export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput
}

export type MutationRegisterArgs = {
  credentials: RegisterInput
}

export type MutationRemoveAdvertiserArgs = {
  where?: InputMaybe<AdvertiserWhereUniqueInput>
}

export type MutationRemoveAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>
}

export type MutationRemoveBillboardArgs = {
  where?: InputMaybe<BillboardWhereUniqueInput>
}

export type MutationRemoveBillboardStatusArgs = {
  where?: InputMaybe<BillboardStatusWhereUniqueInput>
}

export type MutationRemoveBillboardTimelineArgs = {
  where?: InputMaybe<BillboardTimelineWhereUniqueInput>
}

export type MutationRemoveBookingArgs = {
  where?: InputMaybe<BookingWhereUniqueInput>
}

export type MutationRemoveCampaignArgs = {
  where?: InputMaybe<CampaignWhereUniqueInput>
}

export type MutationRemoveCampaignStatusArgs = {
  where?: InputMaybe<CampaignStatusWhereUniqueInput>
}

export type MutationRemoveCampaignTimelineArgs = {
  where?: InputMaybe<CampaignTimelineWhereUniqueInput>
}

export type MutationRemoveFavoriteArgs = {
  where?: InputMaybe<FavoriteWhereUniqueInput>
}

export type MutationRemoveOwnerArgs = {
  where?: InputMaybe<OwnerWhereUniqueInput>
}

export type MutationSetAdminArgs = {
  uid: Scalars['String']
}

export type MutationSetRoleArgs = {
  setRoleInput: SetRoleInput
}

export type MutationUpdateAdvertiserArgs = {
  updateAdvertiserInput: UpdateAdvertiserInput
}

export type MutationUpdateAgentArgs = {
  updateAgentInput: UpdateAgentInput
}

export type MutationUpdateBillboardArgs = {
  updateBillboardInput: UpdateBillboardInput
}

export type MutationUpdateBillboardStatusArgs = {
  updateBillboardStatusInput: UpdateBillboardStatusInput
}

export type MutationUpdateBillboardTimelineArgs = {
  updateBillboardTimelineInput: UpdateBillboardTimelineInput
}

export type MutationUpdateBookingArgs = {
  updateBookingInput: UpdateBookingInput
}

export type MutationUpdateCampaignArgs = {
  updateCampaignInput: UpdateCampaignInput
}

export type MutationUpdateCampaignStatusArgs = {
  updateCampaignStatusInput: UpdateCampaignStatusInput
}

export type MutationUpdateCampaignTimelineArgs = {
  updateCampaignTimelineInput: UpdateCampaignTimelineInput
}

export type MutationUpdateFavoriteArgs = {
  updateFavoriteInput: UpdateFavoriteInput
}

export type MutationUpdateOwnerArgs = {
  updateOwnerInput: UpdateOwnerInput
}

export type Owner = {
  __typename?: 'Owner'
  billboards?: Maybe<Array<Billboard>>
  createdAt: Scalars['DateTime']
  name: Scalars['String']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type OwnerOrderByWithRelationInput = {
  billboards?: InputMaybe<BillboardOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type OwnerRelationFilter = {
  is?: InputMaybe<OwnerWhereInput>
  isNot?: InputMaybe<OwnerWhereInput>
}

export enum OwnerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type OwnerWhereInput = {
  AND?: InputMaybe<Array<OwnerWhereInput>>
  NOT?: InputMaybe<Array<OwnerWhereInput>>
  OR?: InputMaybe<Array<OwnerWhereInput>>
  billboards?: InputMaybe<BillboardListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type OwnerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  advertiser?: Maybe<Advertiser>
  advertiserMe?: Maybe<Advertiser>
  advertisers: Array<Advertiser>
  agent?: Maybe<Agent>
  agentMe?: Maybe<Agent>
  agents: Array<Agent>
  allBillboardTimelines: Array<BillboardTimeline>
  billboard: Billboard
  billboardAggregate: AggregateCountOutput
  billboardStatus: BillboardStatus
  billboardStatuses: Array<BillboardStatus>
  billboardTimeline: Array<BillboardTimeline>
  billboardTimelineInstance: BillboardTimeline
  billboards: Array<Billboard>
  booking: Booking
  bookings: Array<Booking>
  bookingsCount: AggregateCountOutput
  campaign: Campaign
  campaignAggregate: AggregateCountOutput
  campaignStatus: CampaignStatus
  campaignStatuses: Array<CampaignStatus>
  campaignTimeline: CampaignTimeline
  campaignTimelines: Array<CampaignTimeline>
  campaigns: Array<Campaign>
  favorite?: Maybe<Favorite>
  favorites: Array<Favorite>
  favoritesCount: AggregateCountOutput
  myBillboards: Array<Billboard>
  myBookings: Array<Booking>
  myCampaigns: Array<Campaign>
  owner?: Maybe<Owner>
  ownerMe?: Maybe<Owner>
  owners: Array<Owner>
  searchBillboards: Array<BillboardPublic>
}

export type QueryAdvertiserArgs = {
  where?: InputMaybe<AdvertiserWhereUniqueInput>
}

export type QueryAdvertiserMeArgs = {
  where?: InputMaybe<AdvertiserWhereUniqueInput>
}

export type QueryAdvertisersArgs = {
  cursor?: InputMaybe<AdvertiserWhereUniqueInput>
  distinct?: InputMaybe<Array<AdvertiserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AdvertiserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AdvertiserWhereInput>
}

export type QueryAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>
}

export type QueryAgentMeArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>
}

export type QueryAgentsArgs = {
  cursor?: InputMaybe<AgentWhereUniqueInput>
  distinct?: InputMaybe<Array<AgentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AgentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AgentWhereInput>
}

export type QueryAllBillboardTimelinesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BillboardTimelineScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BillboardTimelineOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BillboardTimelineWhereInput>
}

export type QueryBillboardArgs = {
  where?: InputMaybe<BillboardWhereUniqueInput>
}

export type QueryBillboardAggregateArgs = {
  BillboardWhereInput?: InputMaybe<BillboardWhereInput>
}

export type QueryBillboardStatusArgs = {
  where?: InputMaybe<BillboardStatusWhereUniqueInput>
}

export type QueryBillboardStatusesArgs = {
  cursor?: InputMaybe<BillboardStatusWhereUniqueInput>
  distinct?: InputMaybe<Array<BillboardStatusScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BillboardStatusOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BillboardStatusWhereInput>
}

export type QueryBillboardTimelineArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BillboardTimelineScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BillboardTimelineOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BillboardTimelineWhereInput>
}

export type QueryBillboardTimelineInstanceArgs = {
  where?: InputMaybe<BillboardTimelineWhereUniqueInput>
}

export type QueryBillboardsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BillboardScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BillboardOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BillboardWhereInput>
}

export type QueryBookingArgs = {
  where?: InputMaybe<BookingWhereUniqueInput>
}

export type QueryBookingsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryBookingsCountArgs = {
  BookingWhereInput?: InputMaybe<BookingWhereInput>
}

export type QueryCampaignArgs = {
  where?: InputMaybe<CampaignWhereUniqueInput>
}

export type QueryCampaignAggregateArgs = {
  CampaignWhereInput?: InputMaybe<CampaignWhereInput>
}

export type QueryCampaignStatusArgs = {
  where?: InputMaybe<CampaignStatusWhereUniqueInput>
}

export type QueryCampaignStatusesArgs = {
  cursor?: InputMaybe<CampaignStatusWhereUniqueInput>
  distinct?: InputMaybe<Array<CampaignStatusScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CampaignStatusOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CampaignStatusWhereInput>
}

export type QueryCampaignTimelineArgs = {
  where?: InputMaybe<CampaignTimelineWhereUniqueInput>
}

export type QueryCampaignTimelinesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<CampaignTimelineScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CampaignTimelineOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CampaignTimelineWhereInput>
}

export type QueryCampaignsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<CampaignScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CampaignOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CampaignWhereInput>
}

export type QueryFavoriteArgs = {
  where?: InputMaybe<FavoriteWhereUniqueInput>
}

export type QueryFavoritesArgs = {
  cursor?: InputMaybe<FavoriteWhereUniqueInput>
  distinct?: InputMaybe<Array<FavoriteScalarFieldEnum>>
  orderBy?: InputMaybe<Array<FavoriteOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<FavoriteWhereInput>
}

export type QueryFavoritesCountArgs = {
  FavoriteWhereInput?: InputMaybe<FavoriteWhereInput>
}

export type QueryMyBillboardsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BillboardScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BillboardOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BillboardWhereInput>
}

export type QueryMyBookingsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryMyCampaignsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<CampaignScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CampaignOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CampaignWhereInput>
}

export type QueryOwnerArgs = {
  where?: InputMaybe<OwnerWhereUniqueInput>
}

export type QueryOwnersArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<OwnerWhereInput>
}

export type QuerySearchBillboardsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  dateFilter: DateFilterInput
  distinct?: InputMaybe<Array<BillboardScalarFieldEnum>>
  locationFilter: LocationFilterInput
  orderBy?: InputMaybe<Array<BillboardOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BillboardWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RefreshTokenInput = {
  refresh_token: Scalars['String']
}

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput'
  access_token: Scalars['String']
  expires_in: Scalars['String']
  id_token: Scalars['String']
  project_id: Scalars['String']
  refresh_token: Scalars['String']
  token_type: Scalars['String']
  user_id: Scalars['String']
}

export type RegisterInput = {
  displayName?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  password: Scalars['String']
}

export type RegisterOutput = {
  __typename?: 'RegisterOutput'
  displayName: Scalars['String']
  email: Scalars['String']
  expiresIn: Scalars['String']
  idToken: Scalars['String']
  kind: Scalars['String']
  localId: Scalars['String']
  refreshToken: Scalars['String']
}

/** Enum for roles */
export enum RoleEnum {
  Admin = 'admin',
  Moderator = 'moderator',
}

export type SetRoleInput = {
  role: RoleEnum
  uid: Scalars['String']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>
  has?: InputMaybe<Scalars['String']>
  hasEvery?: InputMaybe<Array<Scalars['String']>>
  hasSome?: InputMaybe<Array<Scalars['String']>>
  isEmpty?: InputMaybe<Scalars['Boolean']>
}

export type UpdateAdvertiserInput = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type UpdateAgentInput = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type UpdateBillboardInput = {
  address?: InputMaybe<Scalars['String']>
  angle?: InputMaybe<Scalars['Int']>
  elevation?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Float']>
  id: Scalars['Int']
  images?: InputMaybe<Array<Scalars['String']>>
  impressionsPerDay?: InputMaybe<Scalars['Int']>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  minBookingDays?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  ownerId?: InputMaybe<Scalars['String']>
  pricePerDay?: InputMaybe<Scalars['Float']>
  type?: InputMaybe<BillboardType>
  width?: InputMaybe<Scalars['Float']>
}

export type UpdateBillboardStatusInput = {
  agentId?: InputMaybe<Scalars['String']>
  billboardId: Scalars['Int']
  notes?: InputMaybe<Scalars['String']>
  status?: InputMaybe<BillboardStatusType>
}

export type UpdateBillboardTimelineInput = {
  agentId?: InputMaybe<Scalars['String']>
  billboardId?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  notes?: InputMaybe<Scalars['String']>
  status?: InputMaybe<BillboardStatusType>
}

export type UpdateBookingInput = {
  billboardId?: InputMaybe<Scalars['Int']>
  campaignId?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  pricePerDay?: InputMaybe<Scalars['Float']>
}

export type UpdateCampaignInput = {
  advertiserId?: InputMaybe<Scalars['String']>
  endDate?: InputMaybe<Scalars['DateTime']>
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
  startDate?: InputMaybe<Scalars['DateTime']>
}

export type UpdateCampaignStatusInput = {
  agentId?: InputMaybe<Scalars['String']>
  campaignId: Scalars['Int']
  status?: InputMaybe<CampaignStatusType>
}

export type UpdateCampaignTimelineInput = {
  agentId?: InputMaybe<Scalars['String']>
  campaignId?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  notes?: InputMaybe<Scalars['String']>
  status?: InputMaybe<CampaignStatusType>
}

export type UpdateFavoriteInput = {
  advertiserId?: InputMaybe<Scalars['String']>
  advertiserId_billboardId?: InputMaybe<FavoriteUnique>
  billboardId?: InputMaybe<Scalars['Int']>
}

export type UpdateOwnerInput = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type WhereUniqueInputNumber = {
  id?: InputMaybe<Scalars['Int']>
}

export type BillboardFieldsFragment = {
  __typename?: 'Billboard'
  id: number
  height: number
  width: number
  angle?: number | null
  name: string
  address?: string | null
  createdAt: any
  pricePerDay?: number | null
  images?: Array<string> | null
  totalBookingDays?: number | null
  minBookingDays?: number | null
  booked?: boolean | null
  lat: number
  lng: number
  status?: {
    __typename?: 'BillboardStatus'
    status?: BillboardStatusType | null
  } | null
}

export type CampaignFieldsFragment = {
  __typename?: 'Campaign'
  id: number
  name: string
  startDate: any
  endDate: any
  createdAt: any
  advertiserId: string
  updatedAt: any
  status?: { __typename?: 'CampaignStatus'; status: CampaignStatusType } | null
  bookings?: Array<{
    __typename?: 'Booking'
    billboardId: number
    pricePerDay?: number | null
  }> | null
}

export type BillboardFieldsMinimalFragment = {
  __typename?: 'Billboard'
  id: number
  name: string
  address?: string | null
  createdAt: any
  pricePerDay?: number | null
  totalBookingDays?: number | null
  campaignsCount?: number | null
  status?: {
    __typename?: 'BillboardStatus'
    status?: BillboardStatusType | null
  } | null
}

export type BillboardsQueryVariables = Exact<{
  where?: InputMaybe<BillboardWhereInput>
  orderBy?: InputMaybe<
    Array<BillboardOrderByWithRelationInput> | BillboardOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<
    Array<BillboardScalarFieldEnum> | BillboardScalarFieldEnum
  >
}>

export type BillboardsQuery = {
  __typename?: 'Query'
  billboards: Array<{
    __typename?: 'Billboard'
    id: number
    height: number
    width: number
    angle?: number | null
    name: string
    address?: string | null
    createdAt: any
    pricePerDay?: number | null
    images?: Array<string> | null
    totalBookingDays?: number | null
    minBookingDays?: number | null
    booked?: boolean | null
    lat: number
    lng: number
    status?: {
      __typename?: 'BillboardStatus'
      status?: BillboardStatusType | null
    } | null
  }>
  billboardAggregate: { __typename?: 'AggregateCountOutput'; count: number }
}

export type MyBillboardsQueryVariables = Exact<{
  where?: InputMaybe<BillboardWhereInput>
  orderBy?: InputMaybe<
    Array<BillboardOrderByWithRelationInput> | BillboardOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<
    Array<BillboardScalarFieldEnum> | BillboardScalarFieldEnum
  >
}>

export type MyBillboardsQuery = {
  __typename?: 'Query'
  myBillboards: Array<{
    __typename?: 'Billboard'
    id: number
    name: string
    address?: string | null
    createdAt: any
    pricePerDay?: number | null
    totalBookingDays?: number | null
    campaignsCount?: number | null
    status?: {
      __typename?: 'BillboardStatus'
      status?: BillboardStatusType | null
    } | null
  }>
  billboardAggregate: { __typename?: 'AggregateCountOutput'; count: number }
}

export type EarningsQueryVariables = Exact<{
  where?: InputMaybe<BillboardWhereInput>
  orderBy?: InputMaybe<
    Array<BillboardOrderByWithRelationInput> | BillboardOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<
    Array<BillboardScalarFieldEnum> | BillboardScalarFieldEnum
  >
}>

export type EarningsQuery = {
  __typename?: 'Query'
  billboards: Array<{
    __typename?: 'Billboard'
    id: number
    height: number
    width: number
    angle?: number | null
    name: string
    address?: string | null
    createdAt: any
    pricePerDay?: number | null
    images?: Array<string> | null
    totalBookingDays?: number | null
    minBookingDays?: number | null
    booked?: boolean | null
    lat: number
    lng: number
    status?: {
      __typename?: 'BillboardStatus'
      status?: BillboardStatusType | null
    } | null
  }>
  billboardAggregate: { __typename?: 'AggregateCountOutput'; count: number }
}

export type GetFavotireBillboardsQueryVariables = Exact<{
  where?: InputMaybe<BillboardWhereInput>
  orderBy?: InputMaybe<
    Array<BillboardOrderByWithRelationInput> | BillboardOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<
    Array<BillboardScalarFieldEnum> | BillboardScalarFieldEnum
  >
}>

export type GetFavotireBillboardsQuery = {
  __typename?: 'Query'
  billboards: Array<{
    __typename?: 'Billboard'
    id: number
    height: number
    width: number
    angle?: number | null
    name: string
    address?: string | null
    createdAt: any
    pricePerDay?: number | null
    images?: Array<string> | null
    totalBookingDays?: number | null
    minBookingDays?: number | null
    booked?: boolean | null
    lat: number
    lng: number
    status?: {
      __typename?: 'BillboardStatus'
      status?: BillboardStatusType | null
    } | null
  }>
  billboardAggregate: { __typename?: 'AggregateCountOutput'; count: number }
}

export type CreateBillboardMutationVariables = Exact<{
  createBillboardInput: CreateBillboardInput
}>

export type CreateBillboardMutation = {
  __typename?: 'Mutation'
  createBillboard: { __typename?: 'Billboard'; id: number }
}

export type CampaignsQueryVariables = Exact<{
  distinct?: InputMaybe<
    Array<CampaignScalarFieldEnum> | CampaignScalarFieldEnum
  >
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<WhereUniqueInputNumber>
  orderBy?: InputMaybe<
    Array<CampaignOrderByWithRelationInput> | CampaignOrderByWithRelationInput
  >
  where?: InputMaybe<CampaignWhereInput>
}>

export type CampaignsQuery = {
  __typename?: 'Query'
  campaigns: Array<{
    __typename?: 'Campaign'
    id: number
    name: string
    startDate: any
    endDate: any
    createdAt: any
    advertiserId: string
    updatedAt: any
    status?: {
      __typename?: 'CampaignStatus'
      status: CampaignStatusType
    } | null
    bookings?: Array<{
      __typename?: 'Booking'
      billboardId: number
      pricePerDay?: number | null
    }> | null
  }>
  campaignAggregate: { __typename?: 'AggregateCountOutput'; count: number }
}

export type MyCampaignsQueryVariables = Exact<{
  distinct?: InputMaybe<
    Array<CampaignScalarFieldEnum> | CampaignScalarFieldEnum
  >
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<WhereUniqueInputNumber>
  orderBy?: InputMaybe<
    Array<CampaignOrderByWithRelationInput> | CampaignOrderByWithRelationInput
  >
  where?: InputMaybe<CampaignWhereInput>
}>

export type MyCampaignsQuery = {
  __typename?: 'Query'
  myCampaigns: Array<{
    __typename?: 'Campaign'
    totalCost?: number | null
    totalDays: number
    id: number
    name: string
    startDate: any
    endDate: any
    createdAt: any
    advertiserId: string
    updatedAt: any
    status?: {
      __typename?: 'CampaignStatus'
      status: CampaignStatusType
    } | null
    bookings?: Array<{
      __typename?: 'Booking'
      billboardId: number
      pricePerDay?: number | null
    }> | null
  }>
  campaignAggregate: { __typename?: 'AggregateCountOutput'; count: number }
}

export type CreateAgentMutationVariables = Exact<{
  createAgentInput: CreateAgentInput
}>

export type CreateAgentMutation = {
  __typename?: 'Mutation'
  createAgent: {
    __typename?: 'Agent'
    name: string
    createdAt: any
    uid: string
    updatedAt: any
  }
}

export type CreateAdvertiserMutationVariables = Exact<{
  createAdvertiserInput: CreateAdvertiserInput
}>

export type CreateAdvertiserMutation = {
  __typename?: 'Mutation'
  createAdvertiser: {
    __typename?: 'Advertiser'
    name: string
    createdAt: any
    uid: string
    updatedAt: any
  }
}

export type LoginMutationVariables = Exact<{
  credentials: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginOutput'
    refreshToken: string
    localId: string
    kind: string
    idToken: string
    expiresIn: string
    email: string
    displayName: string
  }
}

export type SearchBillboardsQueryVariables = Exact<{
  locationFilter: LocationFilterInput
  dateFilter: DateFilterInput
  where?: InputMaybe<BillboardWhereInput>
  orderBy?: InputMaybe<
    Array<BillboardOrderByWithRelationInput> | BillboardOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<
    Array<BillboardScalarFieldEnum> | BillboardScalarFieldEnum
  >
}>

export type SearchBillboardsQuery = {
  __typename?: 'Query'
  searchBillboards: Array<{
    __typename?: 'BillboardPublic'
    id: number
    pricePerDay?: number | null
    minBookingDays?: number | null
    images?: Array<string> | null
    lat: number
    lng: number
    elevation?: number | null
    height: number
    width: number
    type: BillboardType
    angle?: number | null
    impressionsPerDay?: number | null
  }>
}

export type CreateOwnerMutationVariables = Exact<{
  createOwnerInput: CreateOwnerInput
}>

export type CreateOwnerMutation = {
  __typename?: 'Mutation'
  createOwner: {
    __typename?: 'Owner'
    updatedAt: any
    uid: string
    name: string
    createdAt: any
  }
}

export type GetOwnerQueryVariables = Exact<{
  where?: InputMaybe<OwnerWhereUniqueInput>
}>

export type GetOwnerQuery = {
  __typename?: 'Query'
  owner?: {
    __typename?: 'Owner'
    updatedAt: any
    uid: string
    name: string
    createdAt: any
    billboards?: Array<{ __typename?: 'Billboard'; id: number }> | null
  } | null
}

export type OwnerMeQueryVariables = Exact<{ [key: string]: never }>

export type OwnerMeQuery = {
  __typename?: 'Query'
  ownerMe?: {
    __typename?: 'Owner'
    updatedAt: any
    uid: string
    name: string
    createdAt: any
    billboards?: Array<{ __typename?: 'Billboard'; id: number }> | null
  } | null
}

export type AdvertiserMeQueryVariables = Exact<{ [key: string]: never }>

export type AdvertiserMeQuery = {
  __typename?: 'Query'
  advertiserMe?: {
    __typename?: 'Advertiser'
    updatedAt: any
    uid: string
    name: string
    createdAt: any
  } | null
}

export type AgentMeQueryVariables = Exact<{ [key: string]: never }>

export type AgentMeQuery = {
  __typename?: 'Query'
  agentMe?: {
    __typename?: 'Agent'
    name: string
    uid: string
    createdAt: any
    updatedAt: any
  } | null
}

export type GetRolesQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['String']>
}>

export type GetRolesQuery = {
  __typename?: 'Query'
  agent?: { __typename?: 'Agent'; uid: string } | null
  owner?: { __typename?: 'Owner'; uid: string } | null
  advertiser?: { __typename?: 'Advertiser'; uid: string } | null
}

export type CreateCampaignMutationVariables = Exact<{
  createCampaignInput: CreateCampaignInput
}>

export type CreateCampaignMutation = {
  __typename?: 'Mutation'
  createCampaign: { __typename?: 'Campaign'; id: number }
}

export type RemoveFavoriteMutationVariables = Exact<{
  where?: InputMaybe<FavoriteWhereUniqueInput>
}>

export type RemoveFavoriteMutation = {
  __typename?: 'Mutation'
  removeFavorite: {
    __typename?: 'Favorite'
    advertiserId: string
    billboardId: number
  }
}

export type CreateFavoriteMutationVariables = Exact<{
  createFavoriteInput: CreateFavoriteInput
}>

export type CreateFavoriteMutation = {
  __typename?: 'Mutation'
  createFavorite: {
    __typename?: 'Favorite'
    advertiserId: string
    billboardId: number
  }
}

export type GetFavoriteQueryVariables = Exact<{
  where?: InputMaybe<FavoriteWhereUniqueInput>
}>

export type GetFavoriteQuery = {
  __typename?: 'Query'
  favorite?: {
    __typename?: 'Favorite'
    advertiserId: string
    billboardId: number
  } | null
}

export type GetAgentQueryVariables = Exact<{
  where?: InputMaybe<AgentWhereUniqueInput>
}>

export type GetAgentQuery = {
  __typename?: 'Query'
  agent?: {
    __typename?: 'Agent'
    name: string
    uid: string
    createdAt: any
    updatedAt: any
  } | null
}

export type AgentQueryVariables = Exact<{
  where?: InputMaybe<AgentWhereUniqueInput>
}>

export type AgentQuery = {
  __typename?: 'Query'
  agent?: {
    __typename?: 'Agent'
    name: string
    uid: string
    createdAt: any
    updatedAt: any
  } | null
}

export type GetAdvertiserQueryVariables = Exact<{
  where?: InputMaybe<AdvertiserWhereUniqueInput>
}>

export type GetAdvertiserQuery = {
  __typename?: 'Query'
  advertiser?: {
    __typename?: 'Advertiser'
    name: string
    uid: string
    createdAt: any
    updatedAt: any
  } | null
}

export type CreateBillboardTimelineMutationVariables = Exact<{
  createBillboardTimelineInput: CreateBillboardTimelineInput
}>

export type CreateBillboardTimelineMutation = {
  __typename?: 'Mutation'
  createBillboardTimeline: { __typename?: 'BillboardTimeline'; id: number }
}

export type CreateCampaignTimelineMutationVariables = Exact<{
  createCampaignTimelineInput: CreateCampaignTimelineInput
}>

export type CreateCampaignTimelineMutation = {
  __typename?: 'Mutation'
  createCampaignTimeline: { __typename?: 'CampaignTimeline'; id: number }
}

export type FavoritesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<FavoriteWhereInput>
  orderBy?: InputMaybe<
    Array<FavoriteOrderByWithRelationInput> | FavoriteOrderByWithRelationInput
  >
}>

export type FavoritesQuery = {
  __typename?: 'Query'
  favorites: Array<{
    __typename?: 'Favorite'
    billboard: {
      __typename?: 'Billboard'
      id: number
      height: number
      width: number
      angle?: number | null
      name: string
      address?: string | null
      createdAt: any
      pricePerDay?: number | null
      images?: Array<string> | null
      totalBookingDays?: number | null
      minBookingDays?: number | null
      booked?: boolean | null
      lat: number
      lng: number
      status?: {
        __typename?: 'BillboardStatus'
        status?: BillboardStatusType | null
      } | null
    }
  }>
  favoritesCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type MyBookingsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<
    Array<BookingOrderByWithRelationInput> | BookingOrderByWithRelationInput
  >
  where?: InputMaybe<BookingWhereInput>
}>

export type MyBookingsQuery = {
  __typename?: 'Query'
  myBookings: Array<{
    __typename?: 'Booking'
    id: number
    createdAt: any
    pricePerDay?: number | null
    billboard?: { __typename?: 'Billboard'; name: string } | null
    campaign?: {
      __typename?: 'Campaign'
      name: string
      startDate: any
      endDate: any
    } | null
  }>
  bookingsCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export const namedOperations = {
  Query: {
    billboards: 'billboards',
    myBillboards: 'myBillboards',
    earnings: 'earnings',
    GetFavotireBillboards: 'GetFavotireBillboards',
    campaigns: 'campaigns',
    myCampaigns: 'myCampaigns',
    SearchBillboards: 'SearchBillboards',
    getOwner: 'getOwner',
    ownerMe: 'ownerMe',
    advertiserMe: 'advertiserMe',
    agentMe: 'agentMe',
    getRoles: 'getRoles',
    getFavorite: 'getFavorite',
    getAgent: 'getAgent',
    agent: 'agent',
    getAdvertiser: 'getAdvertiser',
    favorites: 'favorites',
    myBookings: 'myBookings',
  },
  Mutation: {
    createBillboard: 'createBillboard',
    CreateAgent: 'CreateAgent',
    CreateAdvertiser: 'CreateAdvertiser',
    Login: 'Login',
    createOwner: 'createOwner',
    createCampaign: 'createCampaign',
    removeFavorite: 'removeFavorite',
    createFavorite: 'createFavorite',
    createBillboardTimeline: 'createBillboardTimeline',
    createCampaignTimeline: 'createCampaignTimeline',
  },
  Fragment: {
    BillboardFields: 'BillboardFields',
    CampaignFields: 'CampaignFields',
    BillboardFieldsMinimal: 'BillboardFieldsMinimal',
  },
}
export const BillboardFieldsFragmentDoc = /*#__PURE__*/ gql`
  fragment BillboardFields on Billboard {
    id
    height
    width
    angle
    name
    address
    createdAt
    pricePerDay
    status {
      status
    }
    images
    totalBookingDays
    minBookingDays
    booked
    lat
    lng
  }
`
export const CampaignFieldsFragmentDoc = /*#__PURE__*/ gql`
  fragment CampaignFields on Campaign {
    id
    name
    startDate
    endDate
    createdAt
    advertiserId
    updatedAt
    status {
      status
    }
    bookings {
      billboardId
      pricePerDay
    }
  }
`
export const BillboardFieldsMinimalFragmentDoc = /*#__PURE__*/ gql`
  fragment BillboardFieldsMinimal on Billboard {
    id
    name
    address
    createdAt
    pricePerDay
    status {
      status
    }
    totalBookingDays
    campaignsCount
  }
`
export const BillboardsDocument = /*#__PURE__*/ gql`
  query billboards(
    $where: BillboardWhereInput
    $orderBy: [BillboardOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [BillboardScalarFieldEnum!]
  ) {
    billboards(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...BillboardFields
    }
    billboardAggregate(BillboardWhereInput: $where) {
      count
    }
  }
  ${BillboardFieldsFragmentDoc}
`

/**
 * __useBillboardsQuery__
 *
 * To run a query within a React component, call `useBillboardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBillboardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBillboardsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useBillboardsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BillboardsQuery,
    BillboardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BillboardsQuery, BillboardsQueryVariables>(
    BillboardsDocument,
    options,
  )
}
export function useBillboardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BillboardsQuery,
    BillboardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BillboardsQuery, BillboardsQueryVariables>(
    BillboardsDocument,
    options,
  )
}
export type BillboardsQueryHookResult = ReturnType<typeof useBillboardsQuery>
export type BillboardsLazyQueryHookResult = ReturnType<
  typeof useBillboardsLazyQuery
>
export type BillboardsQueryResult = Apollo.QueryResult<
  BillboardsQuery,
  BillboardsQueryVariables
>
export const MyBillboardsDocument = /*#__PURE__*/ gql`
  query myBillboards(
    $where: BillboardWhereInput
    $orderBy: [BillboardOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [BillboardScalarFieldEnum!]
  ) {
    myBillboards(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...BillboardFieldsMinimal
    }
    billboardAggregate(BillboardWhereInput: $where) {
      count
    }
  }
  ${BillboardFieldsMinimalFragmentDoc}
`

/**
 * __useMyBillboardsQuery__
 *
 * To run a query within a React component, call `useMyBillboardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyBillboardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyBillboardsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useMyBillboardsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MyBillboardsQuery,
    MyBillboardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyBillboardsQuery, MyBillboardsQueryVariables>(
    MyBillboardsDocument,
    options,
  )
}
export function useMyBillboardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyBillboardsQuery,
    MyBillboardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyBillboardsQuery, MyBillboardsQueryVariables>(
    MyBillboardsDocument,
    options,
  )
}
export type MyBillboardsQueryHookResult = ReturnType<
  typeof useMyBillboardsQuery
>
export type MyBillboardsLazyQueryHookResult = ReturnType<
  typeof useMyBillboardsLazyQuery
>
export type MyBillboardsQueryResult = Apollo.QueryResult<
  MyBillboardsQuery,
  MyBillboardsQueryVariables
>
export const EarningsDocument = /*#__PURE__*/ gql`
  query earnings(
    $where: BillboardWhereInput
    $orderBy: [BillboardOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [BillboardScalarFieldEnum!]
  ) {
    billboards(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...BillboardFields
    }
    billboardAggregate(BillboardWhereInput: $where) {
      count
    }
  }
  ${BillboardFieldsFragmentDoc}
`

/**
 * __useEarningsQuery__
 *
 * To run a query within a React component, call `useEarningsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEarningsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEarningsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useEarningsQuery(
  baseOptions?: Apollo.QueryHookOptions<EarningsQuery, EarningsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<EarningsQuery, EarningsQueryVariables>(
    EarningsDocument,
    options,
  )
}
export function useEarningsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EarningsQuery,
    EarningsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<EarningsQuery, EarningsQueryVariables>(
    EarningsDocument,
    options,
  )
}
export type EarningsQueryHookResult = ReturnType<typeof useEarningsQuery>
export type EarningsLazyQueryHookResult = ReturnType<
  typeof useEarningsLazyQuery
>
export type EarningsQueryResult = Apollo.QueryResult<
  EarningsQuery,
  EarningsQueryVariables
>
export const GetFavotireBillboardsDocument = /*#__PURE__*/ gql`
  query GetFavotireBillboards(
    $where: BillboardWhereInput
    $orderBy: [BillboardOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [BillboardScalarFieldEnum!]
  ) {
    billboards(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...BillboardFields
    }
    billboardAggregate(BillboardWhereInput: $where) {
      count
    }
  }
  ${BillboardFieldsFragmentDoc}
`

/**
 * __useGetFavotireBillboardsQuery__
 *
 * To run a query within a React component, call `useGetFavotireBillboardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavotireBillboardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavotireBillboardsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useGetFavotireBillboardsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFavotireBillboardsQuery,
    GetFavotireBillboardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetFavotireBillboardsQuery,
    GetFavotireBillboardsQueryVariables
  >(GetFavotireBillboardsDocument, options)
}
export function useGetFavotireBillboardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFavotireBillboardsQuery,
    GetFavotireBillboardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetFavotireBillboardsQuery,
    GetFavotireBillboardsQueryVariables
  >(GetFavotireBillboardsDocument, options)
}
export type GetFavotireBillboardsQueryHookResult = ReturnType<
  typeof useGetFavotireBillboardsQuery
>
export type GetFavotireBillboardsLazyQueryHookResult = ReturnType<
  typeof useGetFavotireBillboardsLazyQuery
>
export type GetFavotireBillboardsQueryResult = Apollo.QueryResult<
  GetFavotireBillboardsQuery,
  GetFavotireBillboardsQueryVariables
>
export const CreateBillboardDocument = /*#__PURE__*/ gql`
  mutation createBillboard($createBillboardInput: CreateBillboardInput!) {
    createBillboard(createBillboardInput: $createBillboardInput) {
      id
    }
  }
`
export type CreateBillboardMutationFn = Apollo.MutationFunction<
  CreateBillboardMutation,
  CreateBillboardMutationVariables
>

/**
 * __useCreateBillboardMutation__
 *
 * To run a mutation, you first call `useCreateBillboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBillboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBillboardMutation, { data, loading, error }] = useCreateBillboardMutation({
 *   variables: {
 *      createBillboardInput: // value for 'createBillboardInput'
 *   },
 * });
 */
export function useCreateBillboardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBillboardMutation,
    CreateBillboardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateBillboardMutation,
    CreateBillboardMutationVariables
  >(CreateBillboardDocument, options)
}
export type CreateBillboardMutationHookResult = ReturnType<
  typeof useCreateBillboardMutation
>
export type CreateBillboardMutationResult =
  Apollo.MutationResult<CreateBillboardMutation>
export type CreateBillboardMutationOptions = Apollo.BaseMutationOptions<
  CreateBillboardMutation,
  CreateBillboardMutationVariables
>
export const CampaignsDocument = /*#__PURE__*/ gql`
  query campaigns(
    $distinct: [CampaignScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: WhereUniqueInputNumber
    $orderBy: [CampaignOrderByWithRelationInput!]
    $where: CampaignWhereInput
  ) {
    campaigns(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      ...CampaignFields
    }
    campaignAggregate(CampaignWhereInput: $where) {
      count
    }
  }
  ${CampaignFieldsFragmentDoc}
`

/**
 * __useCampaignsQuery__
 *
 * To run a query within a React component, call `useCampaignsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCampaignsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignsQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCampaignsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CampaignsQuery,
    CampaignsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CampaignsQuery, CampaignsQueryVariables>(
    CampaignsDocument,
    options,
  )
}
export function useCampaignsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CampaignsQuery,
    CampaignsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CampaignsQuery, CampaignsQueryVariables>(
    CampaignsDocument,
    options,
  )
}
export type CampaignsQueryHookResult = ReturnType<typeof useCampaignsQuery>
export type CampaignsLazyQueryHookResult = ReturnType<
  typeof useCampaignsLazyQuery
>
export type CampaignsQueryResult = Apollo.QueryResult<
  CampaignsQuery,
  CampaignsQueryVariables
>
export const MyCampaignsDocument = /*#__PURE__*/ gql`
  query myCampaigns(
    $distinct: [CampaignScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: WhereUniqueInputNumber
    $orderBy: [CampaignOrderByWithRelationInput!]
    $where: CampaignWhereInput
  ) {
    myCampaigns(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      ...CampaignFields
      totalCost
      totalDays
    }
    campaignAggregate(CampaignWhereInput: $where) {
      count
    }
  }
  ${CampaignFieldsFragmentDoc}
`

/**
 * __useMyCampaignsQuery__
 *
 * To run a query within a React component, call `useMyCampaignsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCampaignsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCampaignsQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMyCampaignsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MyCampaignsQuery,
    MyCampaignsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyCampaignsQuery, MyCampaignsQueryVariables>(
    MyCampaignsDocument,
    options,
  )
}
export function useMyCampaignsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyCampaignsQuery,
    MyCampaignsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyCampaignsQuery, MyCampaignsQueryVariables>(
    MyCampaignsDocument,
    options,
  )
}
export type MyCampaignsQueryHookResult = ReturnType<typeof useMyCampaignsQuery>
export type MyCampaignsLazyQueryHookResult = ReturnType<
  typeof useMyCampaignsLazyQuery
>
export type MyCampaignsQueryResult = Apollo.QueryResult<
  MyCampaignsQuery,
  MyCampaignsQueryVariables
>
export const CreateAgentDocument = /*#__PURE__*/ gql`
  mutation CreateAgent($createAgentInput: CreateAgentInput!) {
    createAgent(createAgentInput: $createAgentInput) {
      name
      createdAt
      uid
      updatedAt
    }
  }
`
export type CreateAgentMutationFn = Apollo.MutationFunction<
  CreateAgentMutation,
  CreateAgentMutationVariables
>

/**
 * __useCreateAgentMutation__
 *
 * To run a mutation, you first call `useCreateAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAgentMutation, { data, loading, error }] = useCreateAgentMutation({
 *   variables: {
 *      createAgentInput: // value for 'createAgentInput'
 *   },
 * });
 */
export function useCreateAgentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAgentMutation,
    CreateAgentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateAgentMutation, CreateAgentMutationVariables>(
    CreateAgentDocument,
    options,
  )
}
export type CreateAgentMutationHookResult = ReturnType<
  typeof useCreateAgentMutation
>
export type CreateAgentMutationResult =
  Apollo.MutationResult<CreateAgentMutation>
export type CreateAgentMutationOptions = Apollo.BaseMutationOptions<
  CreateAgentMutation,
  CreateAgentMutationVariables
>
export const CreateAdvertiserDocument = /*#__PURE__*/ gql`
  mutation CreateAdvertiser($createAdvertiserInput: CreateAdvertiserInput!) {
    createAdvertiser(createAdvertiserInput: $createAdvertiserInput) {
      name
      createdAt
      uid
      updatedAt
    }
  }
`
export type CreateAdvertiserMutationFn = Apollo.MutationFunction<
  CreateAdvertiserMutation,
  CreateAdvertiserMutationVariables
>

/**
 * __useCreateAdvertiserMutation__
 *
 * To run a mutation, you first call `useCreateAdvertiserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdvertiserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdvertiserMutation, { data, loading, error }] = useCreateAdvertiserMutation({
 *   variables: {
 *      createAdvertiserInput: // value for 'createAdvertiserInput'
 *   },
 * });
 */
export function useCreateAdvertiserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAdvertiserMutation,
    CreateAdvertiserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateAdvertiserMutation,
    CreateAdvertiserMutationVariables
  >(CreateAdvertiserDocument, options)
}
export type CreateAdvertiserMutationHookResult = ReturnType<
  typeof useCreateAdvertiserMutation
>
export type CreateAdvertiserMutationResult =
  Apollo.MutationResult<CreateAdvertiserMutation>
export type CreateAdvertiserMutationOptions = Apollo.BaseMutationOptions<
  CreateAdvertiserMutation,
  CreateAdvertiserMutationVariables
>
export const LoginDocument = /*#__PURE__*/ gql`
  mutation Login($credentials: LoginInput!) {
    login(credentials: $credentials) {
      refreshToken
      localId
      kind
      idToken
      expiresIn
      email
      displayName
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const SearchBillboardsDocument = /*#__PURE__*/ gql`
  query SearchBillboards(
    $locationFilter: LocationFilterInput!
    $dateFilter: DateFilterInput!
    $where: BillboardWhereInput
    $orderBy: [BillboardOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [BillboardScalarFieldEnum!]
  ) {
    searchBillboards(
      locationFilter: $locationFilter
      dateFilter: $dateFilter
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      pricePerDay
      minBookingDays
      images
      lat
      lng
      elevation
      height
      width
      type
      angle
      impressionsPerDay
    }
  }
`

/**
 * __useSearchBillboardsQuery__
 *
 * To run a query within a React component, call `useSearchBillboardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBillboardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBillboardsQuery({
 *   variables: {
 *      locationFilter: // value for 'locationFilter'
 *      dateFilter: // value for 'dateFilter'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useSearchBillboardsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchBillboardsQuery,
    SearchBillboardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchBillboardsQuery, SearchBillboardsQueryVariables>(
    SearchBillboardsDocument,
    options,
  )
}
export function useSearchBillboardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchBillboardsQuery,
    SearchBillboardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SearchBillboardsQuery,
    SearchBillboardsQueryVariables
  >(SearchBillboardsDocument, options)
}
export type SearchBillboardsQueryHookResult = ReturnType<
  typeof useSearchBillboardsQuery
>
export type SearchBillboardsLazyQueryHookResult = ReturnType<
  typeof useSearchBillboardsLazyQuery
>
export type SearchBillboardsQueryResult = Apollo.QueryResult<
  SearchBillboardsQuery,
  SearchBillboardsQueryVariables
>
export const CreateOwnerDocument = /*#__PURE__*/ gql`
  mutation createOwner($createOwnerInput: CreateOwnerInput!) {
    createOwner(createOwnerInput: $createOwnerInput) {
      updatedAt
      uid
      name
      createdAt
    }
  }
`
export type CreateOwnerMutationFn = Apollo.MutationFunction<
  CreateOwnerMutation,
  CreateOwnerMutationVariables
>

/**
 * __useCreateOwnerMutation__
 *
 * To run a mutation, you first call `useCreateOwnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOwnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOwnerMutation, { data, loading, error }] = useCreateOwnerMutation({
 *   variables: {
 *      createOwnerInput: // value for 'createOwnerInput'
 *   },
 * });
 */
export function useCreateOwnerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOwnerMutation,
    CreateOwnerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateOwnerMutation, CreateOwnerMutationVariables>(
    CreateOwnerDocument,
    options,
  )
}
export type CreateOwnerMutationHookResult = ReturnType<
  typeof useCreateOwnerMutation
>
export type CreateOwnerMutationResult =
  Apollo.MutationResult<CreateOwnerMutation>
export type CreateOwnerMutationOptions = Apollo.BaseMutationOptions<
  CreateOwnerMutation,
  CreateOwnerMutationVariables
>
export const GetOwnerDocument = /*#__PURE__*/ gql`
  query getOwner($where: OwnerWhereUniqueInput) {
    owner(where: $where) {
      updatedAt
      uid
      name
      createdAt
      billboards {
        id
      }
    }
  }
`

/**
 * __useGetOwnerQuery__
 *
 * To run a query within a React component, call `useGetOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnerQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetOwnerQuery(
  baseOptions?: Apollo.QueryHookOptions<GetOwnerQuery, GetOwnerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOwnerQuery, GetOwnerQueryVariables>(
    GetOwnerDocument,
    options,
  )
}
export function useGetOwnerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOwnerQuery,
    GetOwnerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOwnerQuery, GetOwnerQueryVariables>(
    GetOwnerDocument,
    options,
  )
}
export type GetOwnerQueryHookResult = ReturnType<typeof useGetOwnerQuery>
export type GetOwnerLazyQueryHookResult = ReturnType<
  typeof useGetOwnerLazyQuery
>
export type GetOwnerQueryResult = Apollo.QueryResult<
  GetOwnerQuery,
  GetOwnerQueryVariables
>
export const OwnerMeDocument = /*#__PURE__*/ gql`
  query ownerMe {
    ownerMe {
      updatedAt
      uid
      name
      createdAt
      billboards {
        id
      }
    }
  }
`

/**
 * __useOwnerMeQuery__
 *
 * To run a query within a React component, call `useOwnerMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useOwnerMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOwnerMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useOwnerMeQuery(
  baseOptions?: Apollo.QueryHookOptions<OwnerMeQuery, OwnerMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<OwnerMeQuery, OwnerMeQueryVariables>(
    OwnerMeDocument,
    options,
  )
}
export function useOwnerMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    OwnerMeQuery,
    OwnerMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<OwnerMeQuery, OwnerMeQueryVariables>(
    OwnerMeDocument,
    options,
  )
}
export type OwnerMeQueryHookResult = ReturnType<typeof useOwnerMeQuery>
export type OwnerMeLazyQueryHookResult = ReturnType<typeof useOwnerMeLazyQuery>
export type OwnerMeQueryResult = Apollo.QueryResult<
  OwnerMeQuery,
  OwnerMeQueryVariables
>
export const AdvertiserMeDocument = /*#__PURE__*/ gql`
  query advertiserMe {
    advertiserMe {
      updatedAt
      uid
      name
      createdAt
    }
  }
`

/**
 * __useAdvertiserMeQuery__
 *
 * To run a query within a React component, call `useAdvertiserMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdvertiserMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdvertiserMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdvertiserMeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AdvertiserMeQuery,
    AdvertiserMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdvertiserMeQuery, AdvertiserMeQueryVariables>(
    AdvertiserMeDocument,
    options,
  )
}
export function useAdvertiserMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdvertiserMeQuery,
    AdvertiserMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdvertiserMeQuery, AdvertiserMeQueryVariables>(
    AdvertiserMeDocument,
    options,
  )
}
export type AdvertiserMeQueryHookResult = ReturnType<
  typeof useAdvertiserMeQuery
>
export type AdvertiserMeLazyQueryHookResult = ReturnType<
  typeof useAdvertiserMeLazyQuery
>
export type AdvertiserMeQueryResult = Apollo.QueryResult<
  AdvertiserMeQuery,
  AdvertiserMeQueryVariables
>
export const AgentMeDocument = /*#__PURE__*/ gql`
  query agentMe {
    agentMe {
      name
      uid
      createdAt
      updatedAt
    }
  }
`

/**
 * __useAgentMeQuery__
 *
 * To run a query within a React component, call `useAgentMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAgentMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAgentMeQuery(
  baseOptions?: Apollo.QueryHookOptions<AgentMeQuery, AgentMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AgentMeQuery, AgentMeQueryVariables>(
    AgentMeDocument,
    options,
  )
}
export function useAgentMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AgentMeQuery,
    AgentMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AgentMeQuery, AgentMeQueryVariables>(
    AgentMeDocument,
    options,
  )
}
export type AgentMeQueryHookResult = ReturnType<typeof useAgentMeQuery>
export type AgentMeLazyQueryHookResult = ReturnType<typeof useAgentMeLazyQuery>
export type AgentMeQueryResult = Apollo.QueryResult<
  AgentMeQuery,
  AgentMeQueryVariables
>
export const GetRolesDocument = /*#__PURE__*/ gql`
  query getRoles($uid: String) {
    agent: agent(where: { uid: $uid }) {
      uid
    }
    owner: owner(where: { uid: $uid }) {
      uid
    }
    advertiser: advertiser(where: { uid: $uid }) {
      uid
    }
  }
`

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useGetRolesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(
    GetRolesDocument,
    options,
  )
}
export function useGetRolesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRolesQuery,
    GetRolesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(
    GetRolesDocument,
    options,
  )
}
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>
export type GetRolesLazyQueryHookResult = ReturnType<
  typeof useGetRolesLazyQuery
>
export type GetRolesQueryResult = Apollo.QueryResult<
  GetRolesQuery,
  GetRolesQueryVariables
>
export const CreateCampaignDocument = /*#__PURE__*/ gql`
  mutation createCampaign($createCampaignInput: CreateCampaignInput!) {
    createCampaign(createCampaignInput: $createCampaignInput) {
      id
    }
  }
`
export type CreateCampaignMutationFn = Apollo.MutationFunction<
  CreateCampaignMutation,
  CreateCampaignMutationVariables
>

/**
 * __useCreateCampaignMutation__
 *
 * To run a mutation, you first call `useCreateCampaignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCampaignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCampaignMutation, { data, loading, error }] = useCreateCampaignMutation({
 *   variables: {
 *      createCampaignInput: // value for 'createCampaignInput'
 *   },
 * });
 */
export function useCreateCampaignMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCampaignMutation,
    CreateCampaignMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCampaignMutation,
    CreateCampaignMutationVariables
  >(CreateCampaignDocument, options)
}
export type CreateCampaignMutationHookResult = ReturnType<
  typeof useCreateCampaignMutation
>
export type CreateCampaignMutationResult =
  Apollo.MutationResult<CreateCampaignMutation>
export type CreateCampaignMutationOptions = Apollo.BaseMutationOptions<
  CreateCampaignMutation,
  CreateCampaignMutationVariables
>
export const RemoveFavoriteDocument = /*#__PURE__*/ gql`
  mutation removeFavorite($where: FavoriteWhereUniqueInput) {
    removeFavorite(where: $where) {
      advertiserId
      billboardId
    }
  }
`
export type RemoveFavoriteMutationFn = Apollo.MutationFunction<
  RemoveFavoriteMutation,
  RemoveFavoriteMutationVariables
>

/**
 * __useRemoveFavoriteMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteMutation, { data, loading, error }] = useRemoveFavoriteMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveFavoriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveFavoriteMutation,
    RemoveFavoriteMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RemoveFavoriteMutation,
    RemoveFavoriteMutationVariables
  >(RemoveFavoriteDocument, options)
}
export type RemoveFavoriteMutationHookResult = ReturnType<
  typeof useRemoveFavoriteMutation
>
export type RemoveFavoriteMutationResult =
  Apollo.MutationResult<RemoveFavoriteMutation>
export type RemoveFavoriteMutationOptions = Apollo.BaseMutationOptions<
  RemoveFavoriteMutation,
  RemoveFavoriteMutationVariables
>
export const CreateFavoriteDocument = /*#__PURE__*/ gql`
  mutation createFavorite($createFavoriteInput: CreateFavoriteInput!) {
    createFavorite(createFavoriteInput: $createFavoriteInput) {
      advertiserId
      billboardId
    }
  }
`
export type CreateFavoriteMutationFn = Apollo.MutationFunction<
  CreateFavoriteMutation,
  CreateFavoriteMutationVariables
>

/**
 * __useCreateFavoriteMutation__
 *
 * To run a mutation, you first call `useCreateFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFavoriteMutation, { data, loading, error }] = useCreateFavoriteMutation({
 *   variables: {
 *      createFavoriteInput: // value for 'createFavoriteInput'
 *   },
 * });
 */
export function useCreateFavoriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateFavoriteMutation,
    CreateFavoriteMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateFavoriteMutation,
    CreateFavoriteMutationVariables
  >(CreateFavoriteDocument, options)
}
export type CreateFavoriteMutationHookResult = ReturnType<
  typeof useCreateFavoriteMutation
>
export type CreateFavoriteMutationResult =
  Apollo.MutationResult<CreateFavoriteMutation>
export type CreateFavoriteMutationOptions = Apollo.BaseMutationOptions<
  CreateFavoriteMutation,
  CreateFavoriteMutationVariables
>
export const GetFavoriteDocument = /*#__PURE__*/ gql`
  query getFavorite($where: FavoriteWhereUniqueInput) {
    favorite(where: $where) {
      advertiserId
      billboardId
    }
  }
`

/**
 * __useGetFavoriteQuery__
 *
 * To run a query within a React component, call `useGetFavoriteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoriteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoriteQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetFavoriteQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFavoriteQuery,
    GetFavoriteQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetFavoriteQuery, GetFavoriteQueryVariables>(
    GetFavoriteDocument,
    options,
  )
}
export function useGetFavoriteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFavoriteQuery,
    GetFavoriteQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetFavoriteQuery, GetFavoriteQueryVariables>(
    GetFavoriteDocument,
    options,
  )
}
export type GetFavoriteQueryHookResult = ReturnType<typeof useGetFavoriteQuery>
export type GetFavoriteLazyQueryHookResult = ReturnType<
  typeof useGetFavoriteLazyQuery
>
export type GetFavoriteQueryResult = Apollo.QueryResult<
  GetFavoriteQuery,
  GetFavoriteQueryVariables
>
export const GetAgentDocument = /*#__PURE__*/ gql`
  query getAgent($where: AgentWhereUniqueInput) {
    agent(where: $where) {
      name
      uid
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetAgentQuery__
 *
 * To run a query within a React component, call `useGetAgentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAgentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAgentQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAgentQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAgentQuery, GetAgentQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAgentQuery, GetAgentQueryVariables>(
    GetAgentDocument,
    options,
  )
}
export function useGetAgentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAgentQuery,
    GetAgentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAgentQuery, GetAgentQueryVariables>(
    GetAgentDocument,
    options,
  )
}
export type GetAgentQueryHookResult = ReturnType<typeof useGetAgentQuery>
export type GetAgentLazyQueryHookResult = ReturnType<
  typeof useGetAgentLazyQuery
>
export type GetAgentQueryResult = Apollo.QueryResult<
  GetAgentQuery,
  GetAgentQueryVariables
>
export const AgentDocument = /*#__PURE__*/ gql`
  query agent($where: AgentWhereUniqueInput) {
    agent(where: $where) {
      name
      uid
      createdAt
      updatedAt
    }
  }
`

/**
 * __useAgentQuery__
 *
 * To run a query within a React component, call `useAgentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAgentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAgentQuery(
  baseOptions?: Apollo.QueryHookOptions<AgentQuery, AgentQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AgentQuery, AgentQueryVariables>(
    AgentDocument,
    options,
  )
}
export function useAgentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AgentQuery, AgentQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AgentQuery, AgentQueryVariables>(
    AgentDocument,
    options,
  )
}
export type AgentQueryHookResult = ReturnType<typeof useAgentQuery>
export type AgentLazyQueryHookResult = ReturnType<typeof useAgentLazyQuery>
export type AgentQueryResult = Apollo.QueryResult<
  AgentQuery,
  AgentQueryVariables
>
export const GetAdvertiserDocument = /*#__PURE__*/ gql`
  query getAdvertiser($where: AdvertiserWhereUniqueInput) {
    advertiser(where: $where) {
      name
      uid
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetAdvertiserQuery__
 *
 * To run a query within a React component, call `useGetAdvertiserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdvertiserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdvertiserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAdvertiserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAdvertiserQuery,
    GetAdvertiserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAdvertiserQuery, GetAdvertiserQueryVariables>(
    GetAdvertiserDocument,
    options,
  )
}
export function useGetAdvertiserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAdvertiserQuery,
    GetAdvertiserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAdvertiserQuery, GetAdvertiserQueryVariables>(
    GetAdvertiserDocument,
    options,
  )
}
export type GetAdvertiserQueryHookResult = ReturnType<
  typeof useGetAdvertiserQuery
>
export type GetAdvertiserLazyQueryHookResult = ReturnType<
  typeof useGetAdvertiserLazyQuery
>
export type GetAdvertiserQueryResult = Apollo.QueryResult<
  GetAdvertiserQuery,
  GetAdvertiserQueryVariables
>
export const CreateBillboardTimelineDocument = /*#__PURE__*/ gql`
  mutation createBillboardTimeline(
    $createBillboardTimelineInput: CreateBillboardTimelineInput!
  ) {
    createBillboardTimeline(
      createBillboardTimelineInput: $createBillboardTimelineInput
    ) {
      id
    }
  }
`
export type CreateBillboardTimelineMutationFn = Apollo.MutationFunction<
  CreateBillboardTimelineMutation,
  CreateBillboardTimelineMutationVariables
>

/**
 * __useCreateBillboardTimelineMutation__
 *
 * To run a mutation, you first call `useCreateBillboardTimelineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBillboardTimelineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBillboardTimelineMutation, { data, loading, error }] = useCreateBillboardTimelineMutation({
 *   variables: {
 *      createBillboardTimelineInput: // value for 'createBillboardTimelineInput'
 *   },
 * });
 */
export function useCreateBillboardTimelineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBillboardTimelineMutation,
    CreateBillboardTimelineMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateBillboardTimelineMutation,
    CreateBillboardTimelineMutationVariables
  >(CreateBillboardTimelineDocument, options)
}
export type CreateBillboardTimelineMutationHookResult = ReturnType<
  typeof useCreateBillboardTimelineMutation
>
export type CreateBillboardTimelineMutationResult =
  Apollo.MutationResult<CreateBillboardTimelineMutation>
export type CreateBillboardTimelineMutationOptions = Apollo.BaseMutationOptions<
  CreateBillboardTimelineMutation,
  CreateBillboardTimelineMutationVariables
>
export const CreateCampaignTimelineDocument = /*#__PURE__*/ gql`
  mutation createCampaignTimeline(
    $createCampaignTimelineInput: CreateCampaignTimelineInput!
  ) {
    createCampaignTimeline(
      createCampaignTimelineInput: $createCampaignTimelineInput
    ) {
      id
    }
  }
`
export type CreateCampaignTimelineMutationFn = Apollo.MutationFunction<
  CreateCampaignTimelineMutation,
  CreateCampaignTimelineMutationVariables
>

/**
 * __useCreateCampaignTimelineMutation__
 *
 * To run a mutation, you first call `useCreateCampaignTimelineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCampaignTimelineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCampaignTimelineMutation, { data, loading, error }] = useCreateCampaignTimelineMutation({
 *   variables: {
 *      createCampaignTimelineInput: // value for 'createCampaignTimelineInput'
 *   },
 * });
 */
export function useCreateCampaignTimelineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCampaignTimelineMutation,
    CreateCampaignTimelineMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCampaignTimelineMutation,
    CreateCampaignTimelineMutationVariables
  >(CreateCampaignTimelineDocument, options)
}
export type CreateCampaignTimelineMutationHookResult = ReturnType<
  typeof useCreateCampaignTimelineMutation
>
export type CreateCampaignTimelineMutationResult =
  Apollo.MutationResult<CreateCampaignTimelineMutation>
export type CreateCampaignTimelineMutationOptions = Apollo.BaseMutationOptions<
  CreateCampaignTimelineMutation,
  CreateCampaignTimelineMutationVariables
>
export const FavoritesDocument = /*#__PURE__*/ gql`
  query favorites(
    $skip: Int
    $take: Int
    $where: FavoriteWhereInput
    $orderBy: [FavoriteOrderByWithRelationInput!]
  ) {
    favorites(skip: $skip, take: $take, where: $where, orderBy: $orderBy) {
      billboard {
        ...BillboardFields
      }
    }
    favoritesCount(FavoriteWhereInput: $where) {
      count
    }
  }
  ${BillboardFieldsFragmentDoc}
`

/**
 * __useFavoritesQuery__
 *
 * To run a query within a React component, call `useFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoritesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFavoritesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FavoritesQuery,
    FavoritesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FavoritesQuery, FavoritesQueryVariables>(
    FavoritesDocument,
    options,
  )
}
export function useFavoritesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FavoritesQuery,
    FavoritesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FavoritesQuery, FavoritesQueryVariables>(
    FavoritesDocument,
    options,
  )
}
export type FavoritesQueryHookResult = ReturnType<typeof useFavoritesQuery>
export type FavoritesLazyQueryHookResult = ReturnType<
  typeof useFavoritesLazyQuery
>
export type FavoritesQueryResult = Apollo.QueryResult<
  FavoritesQuery,
  FavoritesQueryVariables
>
export const MyBookingsDocument = /*#__PURE__*/ gql`
  query myBookings(
    $skip: Int
    $take: Int
    $orderBy: [BookingOrderByWithRelationInput!]
    $where: BookingWhereInput
  ) {
    myBookings(skip: $skip, take: $take, orderBy: $orderBy, where: $where) {
      id
      createdAt
      billboard {
        name
      }
      campaign {
        name
        startDate
        endDate
      }
      pricePerDay
    }
    bookingsCount(BookingWhereInput: $where) {
      count
    }
  }
`

/**
 * __useMyBookingsQuery__
 *
 * To run a query within a React component, call `useMyBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyBookingsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMyBookingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MyBookingsQuery,
    MyBookingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyBookingsQuery, MyBookingsQueryVariables>(
    MyBookingsDocument,
    options,
  )
}
export function useMyBookingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyBookingsQuery,
    MyBookingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyBookingsQuery, MyBookingsQueryVariables>(
    MyBookingsDocument,
    options,
  )
}
export type MyBookingsQueryHookResult = ReturnType<typeof useMyBookingsQuery>
export type MyBookingsLazyQueryHookResult = ReturnType<
  typeof useMyBookingsLazyQuery
>
export type MyBookingsQueryResult = Apollo.QueryResult<
  MyBookingsQuery,
  MyBookingsQueryVariables
>
