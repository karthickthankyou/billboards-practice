import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { FavoritesModule } from './models/favorites/favorites.module'
import { OwnersModule } from './models/owners/owners.module'
import { AgentsModule } from './models/agents/agents.module'
import { AdvertisersModule } from './models/advertisers/advertisers.module'
import { BillboardsModule } from './models/billboards/billboards.module'
import { BillboardStatusesModule } from './models/billboard-statuses/billboard-statuses.module'
import { BillboardTimelinesModule } from './models/billboard-timelines/billboard-timelines.module'
import { CampaignsModule } from './models/campaigns/campaigns.module'
import { BookingsModule } from './models/bookings/bookings.module'
import { CampaignStatusesModule } from './models/campaign-statuses/campaign-statuses.module'
import { CampaignTimelinesModule } from './models/campaign-timelines/campaign-timelines.module'
import { PrismaModule } from './common/prisma/prisma.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),

    PrismaModule,

    FavoritesModule,
    OwnersModule,
    AgentsModule,
    AdvertisersModule,
    BillboardsModule,
    BillboardStatusesModule,
    BillboardTimelinesModule,
    CampaignsModule,
    BookingsModule,
    CampaignStatusesModule,
    CampaignTimelinesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
