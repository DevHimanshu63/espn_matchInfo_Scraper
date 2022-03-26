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

    // console.log(descArray.text());
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

    // task 4 get the team name


    // task 5  team detail
    let allbatsmanRun=selecTool(".table.batsman>tbody")
    // console.table(allbatsmanRun.html());
    // console.log(allbatsmanRun.length);
    let htmlString = "";
   
    for(let i=0 ;i<allbatsmanRun.length ;i++){
        htmlString+=selecTool(allbatsmanRun[i]).html();

        let allRows = selecTool(allbatsmanRun[i]).find("tr");
        for(let i=0 ;i<allRows.length ;i++){

            let row = selecTool(allRows[i]);
            let firstColmnOfRow = row.find("td")[0];
            if (selecTool(firstColmnOfRow).hasClass("batsman-cell")){

                let playerName = selecTool(row.find("td")[0]).text();
        // console.log(playerName);
        let runs = selecTool(row.find("td")[2]).text();
        let balls = selecTool(row.find("td")[3]).text();
        let numberOf4 = selecTool(row.find("td")[5]).text();
        let numberOf6 = selecTool(row.find("td")[6]).text();
        let sr = selecTool(row.find("td")[7]).text();
        

        console.log(
          `playerName -> ${playerName} runsScored ->  ${runs} ballsPlayed ->  ${balls} numbOfFours -> ${numberOf4} numbOfSixes -> ${numberOf6}  strikeRate-> ${sr}`
        );
            }


        }
        // console.log(allRows.length);
    }
    // console.log(htmlString);


    
}

module.exports={
    getInfofromMatch:getInfofromMatch,

}