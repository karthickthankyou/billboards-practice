import { gql } from 'graphql-request'

export const BillboardFields = gql`
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
    totalBookingDays
    minBookingDays
    booked
  }
`

export const GetBillboards = gql`
  query GetBillboards(
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
`

export const GetFavotireBillboards = gql`
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
`

export const createBillboard = gql`
  mutation createBillboard($createBillboardInput: CreateBillboardInput!) {
    createBillboard(createBillboardInput: $createBillboardInput) {
      id
    }
  }
`

export const getCampaigns = gql`
  query GetCampaigns(
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
    campaignAggregate(CampaignWhereInput: $where) {
      count
    }
  }
`

export const createAgent = gql`
  mutation CreateAgent($createAgentInput: CreateAgentInput!) {
    createAgent(createAgentInput: $createAgentInput) {
      name
      createdAt
      uid
      updatedAt
    }
  }
`

export const createAdvertiser = gql`
  mutation CreateAdvertiser($createAdvertiserInput: CreateAdvertiserInput!) {
    createAdvertiser(createAdvertiserInput: $createAdvertiserInput) {
      name
      createdAt
      uid
      updatedAt
    }
  }
`

export const Login = gql`
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

export const searchBillboards = gql`
  query SearchBillboards(
    $locationFilter: LocationFilterInput!
    $dateFilter: DateFilterInput
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

export const createOwner = gql`
  mutation createOwner($createOwnerInput: CreateOwnerInput!) {
    createOwner(createOwnerInput: $createOwnerInput) {
      updatedAt
      uid
      name
      createdAt
    }
  }
`

export const getOwner = gql`
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

export const getRoles = gql`
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

export const createCampaign = gql`
  mutation createCampaign($createCampaignInput: CreateCampaignInput!) {
    createCampaign(createCampaignInput: $createCampaignInput) {
      id
    }
  }
`

export const removeFavorite = gql`
  mutation removeFavorite($where: FavoriteWhereUniqueInput) {
    removeFavorite(where: $where) {
      advertiserId
      billboardId
    }
  }
`

export const createFavorite = gql`
  mutation createFavorite($createFavoriteInput: CreateFavoriteInput!) {
    createFavorite(createFavoriteInput: $createFavoriteInput) {
      advertiserId
      billboardId
    }
  }
`
export const getFavorite = gql`
  query getFavorite($where: FavoriteWhereUniqueInput) {
    favorite(where: $where) {
      advertiserId
      billboardId
    }
  }
`

export const GetFavorites = gql`
  query GetFavorites(
    $where: FavoriteWhereInput
    $orderBy: [FavoriteOrderByWithRelationInput!]
    $cursor: FavoriteWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [FavoriteScalarFieldEnum!]
  ) {
    favorites(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      advertiserId
      billboardId
      createdAt
      billboard {
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
  }
`

export const getAgent = gql`
  query getAgent($where: AgentWhereUniqueInput) {
    agent(where: $where) {
      name
      uid
      createdAt
      updatedAt
    }
  }
`
export const getAdvertiser = gql`
  query getAdvertiser($where: AdvertiserWhereUniqueInput) {
    advertiser(where: $where) {
      name
      uid
      createdAt
      updatedAt
    }
  }
`

export const createBillboardTimeline = gql`
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

export const createCampaignTimeline = gql`
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
