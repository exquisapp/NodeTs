import express from 'express';

const router: express.Router = express.Router();

import { handleChat } from './../controllers/chat.controller';

router.get('/chat', handleChat);
module.exports = router;