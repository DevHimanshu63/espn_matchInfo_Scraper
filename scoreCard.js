const request =require("request");
const cheerio=require("cheerio");



function getInfofromMatch(url){
    // console.log("from all scorecarc.js"+"   "+  url);
    request(url,cb);

}

function cb(err , res ,html){
    if(err){
        console.log(err);
    }else{
        matchdetail(html);
    }
}

function matchdetail(html){
    let selecTool=cheerio.load(html)
    // load html of all match
    // console.log(selecTool.text());
    let descArray=selecTool(".match-header-info.match-info-MATCH")
    console.log(descArray.text());
}

module.exports={
    getInfofromMatch:getInfofromMatch,

}