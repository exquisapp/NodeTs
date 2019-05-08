import {Request, Response} from 'express';
import fs from 'fs';

export const handleChat = async (req: Request, res: Response, next: any) => {
    const { query: { message } } = req;

    if (message){
        try {
            const template =  `const chats = '<p class="chat">${message}</p>'`;
            fs.writeFile('./client/chats.js', template, (err) => {
                if (err) throw err;
                console.log('Saved!');
            });
            res.status(200).json({msg: "good"});
        } catch(error){
            console.log(error);
            res.status(500).json({ "error": "An internal error has occured"});
        }
        
    }

    next();
    return;
}
