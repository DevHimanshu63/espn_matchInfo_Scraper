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

    // task1 : venue and date of the match  

    console.log(descArray.text());
    let desc=(descArray.text().split(","));
    // console.log(desc);
    let dateofMatch=desc[2];
    let placeOfthematch=desc[1]
    console.log(placeOfthematch);
    console.log(dateofMatch);

    // task 2:- teams name
    

    // task 3 :- result of match who is win or loss
    let resultofMatch=selecTool(".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text")
    console.log(resultofMatch.text());
    
}

module.exports={
    getInfofromMatch:getInfofromMatch,

}