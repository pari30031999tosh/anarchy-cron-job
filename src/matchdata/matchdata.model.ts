import * as mongoose from 'mongoose';

export const matchDataSchema = new mongoose.Schema({
    arena: {type: String, required: true},
    description: {type: String, required: true},
    playersCount: {type: Number, required: true}
});

export interface MatchData {
    
    
         id: string;
         arena: string;
         description: string;
         playersCount: number;
            
        

}