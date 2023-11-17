import { RequestHandler } from "express"
import DailyLog from "../model/dailyLog"

function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

export const getAllUsersDailyLog: RequestHandler = async (req, res) => {
    try{
       const userId = req.user.userId;

       const dailyLogId = req.params.dailyLogId;

       const dailyLog = await DailyLog.findOne({user: userId, _id: dailyLogId});

       if(!dailyLog) {
        res.status(404).json({message: 'DailyLog not found'});
       }

       res.status(200).json({dailyLog});
    } catch (error) {
        console.error('Error fetching DailyLog:', error);
        res.status(500).json({message:'Internal Server Error'})
    }

}

export const getUserCurrentDailyLog: RequestHandler = async (req, res) => {
    try{
        const userId = req.user.userId;

        const currentDate = new Date();
        const formattedDate = formatDate(currentDate)

        const dailyLog = await DailyLog.findOne({user: userId, date: formattedDate});

        if(!dailyLog) {
            res.status(404).json({message:'Current DailyLog not found'});
        }

        res.status(200).json({dailyLog});        
    } catch (error) {
        console.error('Error fetching DailyLog:', error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}


