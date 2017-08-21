import { Router } from 'express'

let queryString = require('querystring')
var obj={name:"一介布衣",url:"http://yijiebuyi.com"};
var param = queryString.stringify(obj);
console.log(param)
var newobj = queryString.parse(param);
console.log(typeof newobj, newobj)
// 创建可安装的模块化路由处理程序，Router（）是完整的中间件和路由系统
const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
