import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchDataController } from './matchdata/matchdata.controller';
import { MatchdataModule } from './matchdata/matchdata.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [MatchdataModule, MongooseModule.forRoot('mongodb+srv://pari1999tosh:tT87vpFD@cluster0.uej21xs.mongodb.net/game-db?retryWrites=true&w=majority&appName=Cluster0'), ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
