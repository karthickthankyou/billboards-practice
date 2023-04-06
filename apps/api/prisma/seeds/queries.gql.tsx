import { gql } from 'graphql-request'

export const billboards = gql`
  query Billboards(
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
      createdAt
    }
  }
`
