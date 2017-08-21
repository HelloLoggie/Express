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

/*export function getUrl(){
  var domain = "";
  var protocol = "http:";

  var env ;

  if (env === 'prod') { // 生产
      domain = protocol === 'https' ? 'sec-m.ctrip.com' : 'm.ctrip.com';
      protocol = "https:";
  } else if(env === 'fws'){ // 其他
      domain = 'gateway.m.fws.qa.nt.ctripcorp.com';
  }
    path = "restapi/soa2/12600/Flight/FlightXProductDetailInfo";
    return protocol + "//" + domain + "/" + path;
}*/

/*
function getQuery(paramName) {
 var path = /\?([^#]*)(#|$)/.exec(document.location.href);
 if (path) {
 path = new RegExp("(^|&)" + encodeURIComponent(paramName).replace(/([\-.*+?^${}()|[\]\/\\])/g, '\\$1') + "=([^&]*)(&|$)", "i").exec(path[1]);
 if (path) return decodeURIComponent(path[2]);
 }
 return null;
 }

 function getData(path, data, callback) {
 var XmlHttp = new XMLHttpRequest();
 XmlHttp.open("POST", path, true);
 XmlHttp.setRequestHeader("Content-Type", "application/json");
 XmlHttp.onreadystatechange = function () {
 if (XmlHttp.readyState == 4) {
 var Result = false;
 if (XmlHttp.status == 200) {
 Result = XmlHttp.responseText;
 }else{
 console.log( XmlHttp.status );
 }
 XmlHttp = null;

 callback && callback(Result);
 }
 };

 XmlHttp.send(JSON.stringify(data));
 }

 var env = getQuery('env');
 var qInfo = getQuery('queryInfo');
 var param = {
 "head": {
 "cid": "12001132610000020998",
 // "cid": "",
 "ctok": "",
 "cver": "611",
 "lang": "01",
 "sid": "8890",
 "syscode": "12",
 // "auth": ""
 "auth": "FD47C3DFCB4354848C568F815A9CE2C23B84228C878E72E99586AEE65CAF86F0"
 },
 "ver": 0,
 "stype": 0,
 "qInfo": qInfo
 };
*/
