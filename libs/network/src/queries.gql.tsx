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
    images
    totalBookingDays
    minBookingDays
    booked
    lat
    lng
  }
`

export const BillboardFieldsMinimal = gql`
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

export const billboards = gql`
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
`

export const myBillboards = gql`
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
`

export const earnings = gql`
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

export const campaigns = gql`
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

export const ownerMe = gql`
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

// export const GetFavorites = gql`
//   query GetFavorites(
//     $where: FavoriteWhereInput
//     $orderBy: [FavoriteOrderByWithRelationInput!]
//     $cursor: FavoriteWhereUniqueInput
//     $take: Int
//     $skip: Int
//     $distinct: [FavoriteScalarFieldEnum!]
//   ) {
//     favorites(
//       where: $where
//       orderBy: $orderBy
//       cursor: $cursor
//       take: $take
//       skip: $skip
//       distinct: $distinct
//     ) {
//       advertiserId
//       billboardId
//       createdAt
//       billboard {
//         id
//         pricePerDay
//         minBookingDays
//         images
//         lat
//         lng
//         elevation
//         height
//         width
//         type
//         angle
//         impressionsPerDay
//       }
//     }
//   }
// `

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

export const agent = gql`
  query agent($where: AgentWhereUniqueInput) {
    agent(where: $where) {
      name
      uid
      createdAt
      updatedAt
    }
  }
`

export const agentMe = gql`
  query agentMe {
    agentMe {
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

export const favorites = gql`
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
`
export const myBookings = gql`
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
