// nest
import { Module } from '@nestjs/common';
// project
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@app/graphql';
import { PlutoClientModule } from '@app/pluto-client';
import { DatabaseModule } from '@app/database';
import { AppServiceIdentity } from 'assets/enums';
import { MercuryConfigModule } from '@app/mercury-config';

@Module({
  imports: [
    // 微服务pluto对应的配置模块
    PlutoClientModule,
    MercuryConfigModule,
    // GraphQL 模块
    GraphQLModule,
    // 数据库模块
    DatabaseModule.forRoot(AppServiceIdentity.Mercury),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
