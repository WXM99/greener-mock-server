let express = require('express');
let router = express.Router();

/* for user login */
router.post('/api/login', function(req, res, next) {
  let userName =  req.body.data.username
  let userPwd   =  req.body.data.password
  if (userPwd === "correctPwd") {
    res.json({code: 200, state: 'SU', msg: userName });
  } else {
    res.json({code: 401, state: 'LOGIN_FAILED', msg: "wrong pwd" });
  }
});

/* for user sign in */
router.post('/api/sign_in', function(req, res, next) {
  let userName =  req.body.data.username
  let userPwd   =  req.body.data.password
  if (userName !== "existedUsername") {
    res.json({code: 200, state: 'SU', msg: userName });
  } else {
    res.json({code: 401, state: 'LOGIN_FAILED', msg: "wrong pwd" });
  }
});

/* for user profile page */
router.get('/api/user_info', function(req, res, next) {
  // no req, identify by checking user's cookie after login
  let userInfo = {
    username: "Xiaomiao.Wei",
    msg: "I like greener app!",
    avatar: "/images/avatars.jpg"
  }
  res.json(userInfo)
});

let eventList = [
  {
    event_id: 0,
    event_name: "Event0",
    event_desc: "good event",
    event_tags: ["outdoor"],
    event_poster: "/images/event.png"
  }, {
    event_id: 1,
    event_name: "Event1",
    event_desc: "good event too",
    event_tags: ["indoor", "virtual"],
    event_poster: "/images/event.png"
  }
]

/* for trending page */
router.get('/api/event/tending', function(req, res, next) {
  // no req, identify by checking user's cookie after login
  let limit = req.query.limit
  let offset = req.query.offset
  res.json(eventList)
});

/* for recommendation page */
router.get('/api/event/recommendation', function(req, res, next) {
  // no req, identify by checking user's cookie after login
  let limit = req.query.limit
  let offset = req.query.offset
  res.json(eventList)
});

/* for event detail page */
router.get('/api/event/detail', function(req, res, next) {
  // no req, identify by checking user's cookie after login
  let id = req.query.event_id
  console.log("event id: ", id)
  res.json({
    event_id: 1,
    event_name: "Event1",
    event_desc: "good event too",
    event_tags: ["indoor", "virtual"],
    event_poster: "/images/event.png",
    event_ratings: 4.99,
    comments: [
      {user: "xmw", msg: "so happy", rates: 5}
    ]
  })
});

module.exports = router;
