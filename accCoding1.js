//creating an arrow function to calculate average, takes parameters the three scored of the team 
const team_average = (score1, score2,score3) =>{
    const cacl_average = (score1 + score2 + score3)/3
    return cacl_average;
}

// score comparator 
const score_comparision = (avg_score1, avg_score2) => {
    if (avg_score1 > avg_score2) {
       return console.log(`team1 wins with a score of ${avg_score1} vs ${avg_score2}`);
    }else if(avg_score2 > avg_score1){
        return console.log(`team2 wins with a score of : ${avg_score2} vs ${avg_score1}`);
    }
}

console.log(score_comparision(team_average(10,20,30), team_average(20,30,40)));