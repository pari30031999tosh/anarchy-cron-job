import * as mongoose from 'mongoose';

export const clientMatchInfoSchema = new mongoose.Schema({
    match_id: {type:String, required :true},
    match_arena: {type: String, required: true},
    total_kills: {type: Number, required: true},
    money_earned: {type: Number, required: true},
});

export interface ClientMatchInfo {
    
    
         id: string;
         match_id: string;
         match_arena: string;
         total_kills: number;
         money_earned: number;
            
        

}