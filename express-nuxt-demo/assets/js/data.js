/**
 * Created by gelq on 2017/8/16.
 */
export function filter (xPrdList) {
  let segno, xpdtnote, instruction
  let imgInfo = []
  let tagsInfo = []
  let notes = []
  let prds = []
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
}

export function getUrl(){
  var domain = "";
  var protocol = "http:";

    if (env === 'prod') { // 生产
        domain = protocol === 'https' ? 'sec-m.ctrip.com' : 'm.ctrip.com';
        protocol = "https:";
    } else if(env === 'fws'){ // 其他
        domain = 'gateway.m.fws.qa.nt.ctripcorp.com';
    }
    path = "restapi/soa2/12600/Flight/FlightXProductDetailInfo";
}
