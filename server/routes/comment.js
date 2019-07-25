let express = require('express');
let router = express.Router();

let commentController = require('../controllers/comment');

router.get('/movie/:movie_id/comment', commentController.displayList);

router.post('/movie/:movie_id/comment/add', commentController.processAddComment);

router.post('/movie/:movie_id/comment/edit/:id', commentController.processAddComment);

router.post('/movie/:movie_id/comment/:id/reply', commentController.processAddReplyToComment);

router.get('/movie/:movie_id/comment/delete/:id', commentController.processDeleteComment);


module.exports = router;