/**
 * Created by gelq on 2017/8/14.
 */
import { Router } from 'express'
// 创建可安装的模块化路由处理程序，Router（）是完整的中间件和路由系统
const router = Router()

const data = {
    "ResponseStatus": {
        "Timestamp": "/Date(1501479914121+0800)/",
        "Ack": "Success",
        "Errors": [],
        "Extension": [
            {
                "Id": "CLOGGING_TRACE_ID",
                "Value": "8678903840575474377"
            },
            {
                "Id": "RootMessageId",
                "Value": "921812-0a022627-417077-138073"
            },
            {
                "Id": "auth",
                "Value": "FD47C3DFCB4354848C568F815A9CE2C23B84228C878E72E99586AEE65CAF86F0"
            }
        ]
    },
    "triptype": 1,
    "xpdtlst": [
        {
            "segno": 1,
            "seqno": 0,
            "xpdttpe": 1,
            "xpdtname": "新郑机场T2贵宾室",
            "xpdtnote": [
                {
                    "noteType": 1,
                    "noteCnt": "http://uploadimg.fws.qa.nt.ctripcorp.com/upload/target/600v0i00000002l90772C.png"
                },
                {
                    "noteType": 1,
                    "noteCnt": "http://uploadimg.fws.qa.nt.ctripcorp.com/upload/target/600w0i00000002lbb60A2.png"
                },
                {
                    "noteType": 1,
                    "noteCnt": "http://uploadimg.fws.qa.nt.ctripcorp.com/upload/target/60030i00000002l7g838D.png"
                },
                {
                    "noteType": 2,
                    "noteCnt": "婴儿免费test"
                },
                {
                    "noteType": 2,
                    "noteCnt": "正餐热食"
                },
                {
                    "noteType": 2,
                    "noteCnt": "小食饮料"
                },
                {
                    "noteType": 2,
                    "noteCnt": "登机提醒"
                },
                {
                    "noteType": 3,
                    "noteCnt": "限时促销"
                },
                {
                    "noteType": 4,
                    "noteCnt": "小食饮料随便吃，比机场快餐还便宜"
                },
                {
                    "noteType": 8,
                    "noteCnt": "体验价"
                },
                {
                    "noteType": 10,
                    "noteCnt": "机场价"
                },
                {
                    "noteType": 5,
                    "noteCnt": "新郑机场T2贵宾室"
                },
                {
                    "noteType": 6,
                    "noteCnt": "3"
                },
                {
                    "noteType": 9,
                    "noteCnt": "0"
                },
                {
                    "noteType": 11,
                    "noteCnt": "300"
                },
                {
                    "noteType": 12,
                    "noteTit": "营业时间",
                    "noteCnt": "00:00-23:59"
                },
                {
                    "noteType": 12,
                    "noteTit": "使用时长",
                    "noteCnt": "2小时"
                },
                {
                    "noteType": 12,
                    "noteTit": "退订规则",
                    "noteCnt": "如在有效期内未使用可免费退订"
                },
                {
                    "noteType": 12,
                    "noteTit": "使用方式",
                    "noteCnt": "凭券码或二维码验证使用，婴儿可免费使用"
                }
            ]
        }
    ]
}

/*function filter (xPrdList) {
    let segno, xpdtnote
    let imgInfo = [], tagsInfo = [], notes = [], instruction, prds = []
    let imgs, tagsPic, tagTop, tagInfo, restName, tagStar, monthMount, tagPrice, price, marketPriceTag, marketPrice, check
    for (let i = 0, l = xPrdList.length; i < l; i++) {
        let prd = xPrdList[i]
        imgs = []; tagsPic = []; instruction = []
        segno = prd.segno
        xpdtnote = prd.xpdtnote
        for (let j = 0, k = xpdtnote.length; j < k; j++) {
            var note = xpdtnote[j]
            var obj = {
                noteTit: note.noteTit || '',
                noteCnt: note.noteCnt || ''
            }
            switch (note.noteType) {
                case 1:
                    imgs.push(obj)
                    break
                case 2 :
                    tagsPic.push(obj)
                    break
                case 3:
                    tagTop = obj
                    break
                case 4 :
                    tagInfo = obj
                    break
                case 5 :
                    restName = obj
                    break
                case 6 :
                    tagStar = obj
                    break
                case 7 :
                    monthMount = obj
                    break
                case 8 :
                    tagPrice = obj
                    break
                case 9 :
                    price = obj
                    break
                case 10 :
                    marketPriceTag = obj
                    break
                case 11 :
                    marketPrice = obj
                    break
                case 12 :
                    instruction.push(obj)
                    break
                case 13 :
                    check = obj
            }
        }
        imgInfo.push({imgs: imgs, tagsPic: tagsPic})
        tagsInfo.push({tagTop: tagTop, tagInfo: tagInfo})
        notes.push({ restName: restName, tagStar: tagStar, monthMount: monthMount, tagPrice: tagPrice, price: price, marketPriceTag: marketPriceTag, marketPrice: marketPrice, check: check })
        prds.push({segno: segno, imgInfo: imgInfo, tagsInfo: tagsInfo, notes: notes, instruction: instruction})
    }
    return prds
}*/

/* GET data listing. */
router.get('/restroom', function (req, res, next) {
    //console.log(data)
    console.log(req.getUrl())
    res.json(data)
    /*let xPrdList, triptype,  xprd
    if (data) {
        // X产品信息
        xPrdList = data.xpdtlst || []
        // 行程类型
        triptype = data.triptype || []
        xprd = filter(xPrdList)
    }
    let xproduct = {
        xprd: xprd,
        triptype: triptype
    }
    console.log(xproduct)
    res.send(xproduct)*/
})

export default router
