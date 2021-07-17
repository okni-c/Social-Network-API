const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById);

// /api/thoughts/<userId>
router
  .route('/:userId')
  .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/Thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
