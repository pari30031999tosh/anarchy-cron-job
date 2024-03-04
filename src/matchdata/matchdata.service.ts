import { Injectable } from "@nestjs/common";
import { MatchData } from "./matchdata.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { materialize } from "rxjs";
import { ClientMatchInfo } from "./clientMatchInfo.model";
import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class MatchDataService {
    //fetch data from match database
    //process it
    //insert it into user-specific match data
    constructor(
        @InjectModel('matchData') private readonly matchDataModel: Model<MatchData>,
        @InjectModel('clientMatchInfo') private readonly clientMatchInfoModel: Model<ClientMatchInfo>) {}

    async executeMatchTransferCron(match_id: string){
    
       //below functionality will go into cron
       
       

    //    let matchesData = await this.matchDataModel.findById(match_id).exec();
       
    //    const clientMatchInfoData = new this.clientMatchInfoModel({
    //             match_id: match_id,
    //             match_arena: matchesData.arena,
    //             total_kills: 4,
    //             money_earned: 12,
    //         })
    //     let createdClientMatchInfo =  await clientMatchInfoData.save();  
    //     console.log("created clientmatchinfo", createdClientMatchInfo);  
    }

    @Cron(CronExpression.EVERY_30_SECONDS)
       async handleCron() {
        console.log("cron execution starting")
        //schema:
        //source: matchData, destination: clientMatchInfo
        //step1. fetch the data of matches in batches.
        //       for simulation purpose, i am getting all the data present in match db 
        //       and putting one by one to client info, we will implement some logic for 
        //       how to put an identifier in source db to make sure already present data 
        //       in destination db is not processed again
        //       for now i have used for loop, better implementation would be using promise.AllSettled in step2
        //step2. one by one process and save in clientInfo db(for parallel processing, we can implement promise.AllSettled())
        let matchesData: any = await this.matchDataModel.find().exec();
        for(const match of matchesData){
            console.log("match=============", match);
            const clientMatchInfoData = new this.clientMatchInfoModel({
                match_id: match._id,
                match_arena: match.arena,
                total_kills: 4,
                money_earned: 12,
            })
            let createdClientMatchInfo =  await clientMatchInfoData.save();  
            console.log("created clientmatchinfo for match_id", match.match_id); 
        }

        console.log("cron execution ending")
        
       }
}


