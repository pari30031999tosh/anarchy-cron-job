import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MatchDataController } from "./matchdata.controller";
import { MatchDataService } from "./matchdata.service";
import { matchDataSchema } from "./matchdata.model";
import { clientMatchInfoSchema } from "./clientMatchInfo.model";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
    imports: [MongooseModule.forFeature([{name: 'matchData', schema: matchDataSchema}]),
              MongooseModule.forFeature([{name: 'clientMatchInfo', schema: clientMatchInfoSchema}]),
              ScheduleModule.forRoot() 
            ],
    controllers: [MatchDataController],
    providers: [MatchDataService]
})
export class MatchdataModule {

}