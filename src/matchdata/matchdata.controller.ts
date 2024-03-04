import { Body, Controller, Post } from "@nestjs/common";
import { MatchDataService } from "./matchdata.service";

@Controller('transfer-data')
export class MatchDataController {
    
    constructor(private readonly matchDataService: MatchDataService) {

    }

    @Post()
    async transferDataCron(@Body('match_id') match_id: String ):Promise<String> {
        
        await this.matchDataService.executeMatchTransferCron("match_id");
        return 'cron executed';
    }

}