/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
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
  campaigns: Array<Campaign>
  createdAt: Scalars['DateTime']
  favorites: Array<Favorite>
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
  billboardTimeline: Array<BillboardTimeline>
  billboardsStatuses: Array<BillboardStatus>
  campaignTimeline: Array<CampaignTimeline>
  campaignsStatuses: Array<CampaignStatus>
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

export type Billboard = {
  __typename?: 'Billboard'
  address?: Maybe<Scalars['String']>
  angle?: Maybe<Scalars['Int']>
  billboardStatus: BillboardStatus
  billboardTimeline: Array<BillboardTimeline>
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']
  elevation?: Maybe<Scalars['Int']>
  favorites: Array<Favorite>
  height: Scalars['Int']
  id: Scalars['Int']
  images?: Maybe<Array<Scalars['String']>>
  impressionsPerDay?: Maybe<Scalars['Int']>
  lat: Scalars['Float']
  lng: Scalars['Float']
  minBookingDays?: Maybe<Scalars['Int']>
  owner: Owner
  ownerId: Scalars['String']
  pricePerDay?: Maybe<Scalars['Int']>
  type: BillboardType
  updatedAt: Scalars['DateTime']
  width: Scalars['Int']
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
  height: Scalars['Int']
  id: Scalars['Int']
  images?: Maybe<Array<Scalars['String']>>
  impressionsPerDay?: Maybe<Scalars['Int']>
  lat: Scalars['Float']
  lng: Scalars['Float']
  minBookingDays?: Maybe<Scalars['Int']>
  pricePerDay?: Maybe<Scalars['Int']>
  type: BillboardType
  width: Scalars['Int']
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
  billboard: Billboard
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
  Approved = 'APPROVED',
  InstallationInprogress = 'INSTALLATION_INPROGRESS',
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
  agent: Agent
  agentId?: Maybe<Scalars['String']>
  billboard: Billboard
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
  billboard: Billboard
  billboardId: Scalars['Int']
  campaign: Campaign
  campaignId: Scalars['Int']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  pricePerDay?: Maybe<Scalars['Int']>
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
  advertiser: Advertiser
  advertiserId: Scalars['String']
  bookings: Array<Booking>
  campaignTimeline: Array<CampaignTimeline>
  createdAt: Scalars['DateTime']
  endDate: Scalars['DateTime']
  id: Scalars['Int']
  name: Scalars['String']
  startDate: Scalars['DateTime']
  status: CampaignStatus
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
  UpdatedAt = 'updatedAt',
}

export type CampaignStatus = {
  __typename?: 'CampaignStatus'
  agent: Agent
  agentId?: Maybe<Scalars['String']>
  campaign: Campaign
  campaignId: Scalars['Int']
  campaignTimeline: Array<CampaignTimeline>
  createdAt: Scalars['DateTime']
  status?: Maybe<CampaignStatusType>
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
  campaignTimeline?: InputMaybe<CampaignTimelineOrderByRelationAggregateInput>
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
  Approved = 'APPROVED',
  InstallationInprogress = 'INSTALLATION_INPROGRESS',
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
  campaignTimeline?: InputMaybe<CampaignTimelineListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<EnumCampaignStatusTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CampaignStatusWhereUniqueInput = {
  campaignId?: InputMaybe<Scalars['Int']>
}

export type CampaignTimeline = {
  __typename?: 'CampaignTimeline'
  agent: Agent
  agentId?: Maybe<Scalars['String']>
  campaign: Campaign
  campaignId: Scalars['Int']
  campaignStatus: CampaignStatus
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  notes?: Maybe<Scalars['String']>
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
  status?: InputMaybe<CampaignStatusOrderByWithRelationInput>
  updatedAt?: InputMaybe<SortOrder>
}

export enum CampaignTimelineScalarFieldEnum {
  AgentId = 'agentId',
  CampaignId = 'campaignId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Notes = 'notes',
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
  status?: InputMaybe<CampaignStatusRelationFilter>
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
  height: Scalars['Int']
  images?: InputMaybe<Array<Scalars['String']>>
  impressionsPerDay?: InputMaybe<Scalars['Int']>
  lat: Scalars['Float']
  lng: Scalars['Float']
  minBookingDays?: InputMaybe<Scalars['Int']>
  ownerId: Scalars['String']
  pricePerDay?: InputMaybe<Scalars['Int']>
  type: BillboardType
  width: Scalars['Int']
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
  pricePerDay?: InputMaybe<Scalars['Int']>
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
  status?: InputMaybe<CampaignStatusType>
}

export type CreateCampaignTimelineInput = {
  agentId?: InputMaybe<Scalars['String']>
  campaignId: Scalars['Int']
  notes?: InputMaybe<Scalars['String']>
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
  billboards: Array<Billboard>
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
  advertiser: Advertiser
  advertisers: Array<Advertiser>
  agent: Agent
  agents: Array<Agent>
  allBillboardTimelines: Array<BillboardTimeline>
  billboard: Billboard
  billboardStatus: BillboardStatus
  billboardStatuses: Array<BillboardStatus>
  billboardTimeline: Array<BillboardTimeline>
  billboardTimelineInstance: BillboardTimeline
  billboards: Array<Billboard>
  booking: Booking
  bookings: Array<Booking>
  campaign: Campaign
  campaignStatus: CampaignStatus
  campaignStatuses: Array<CampaignStatus>
  campaignTimeline: CampaignTimeline
  campaignTimelines: Array<CampaignTimeline>
  campaigns: Array<Campaign>
  favorite: Favorite
  favorites: Array<Favorite>
  owner: Owner
  owners: Array<Owner>
  searchBillboards: Array<BillboardPublic>
}

export type QueryAdvertiserArgs = {
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

export type QueryCampaignArgs = {
  where?: InputMaybe<CampaignWhereUniqueInput>
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
  dateFilter?: InputMaybe<DateFilterInput>
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
  height?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  images?: InputMaybe<Array<Scalars['String']>>
  impressionsPerDay?: InputMaybe<Scalars['Int']>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  minBookingDays?: InputMaybe<Scalars['Int']>
  ownerId?: InputMaybe<Scalars['String']>
  pricePerDay?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<BillboardType>
  width?: InputMaybe<Scalars['Int']>
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
  pricePerDay?: InputMaybe<Scalars['Int']>
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
  billboards: Array<{ __typename?: 'Billboard'; createdAt: any }>
}

export const BillboardsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Billboards' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BillboardWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BillboardOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'WhereUniqueInputNumber' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'BillboardScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billboards' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BillboardsQuery, BillboardsQueryVariables>
