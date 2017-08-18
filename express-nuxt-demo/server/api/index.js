import { Router } from 'express'

import users from './users'
import restroom from './restroom'

const router = Router()

router.use(function (req, res, next) {
  req.getUrl = function () {
    return req.protocol + '://' + req.get('host') + req.originalUrl
  }
  return next()
})
// Add USERS Routes
router.use(users)
router.use(restroom)

// // catch 404 and forward to error handler
// router.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//
// // error handler
// router.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

export default router
