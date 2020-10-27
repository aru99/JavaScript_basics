// Teams_and_scores
var johns_team_average = (89+120+103)/3;
var mikes_team_average = (116+94+123)/3;
var marys_team_average = (97+134+105);

//decideing the winner 

if(johns_team_average > mikes_team_average && johns_team_average > marys_team_average)
    {
    console.log('john is the winner as his average is '+ johns_team_average + '  is greater than Mikes\'s average of'+ mikes_team_average +" and mary\'s average of "+ marys_team_average);
    }else if(mikes_team_average > johns_team_average && mikes_team_average > marys_team_average)
    {
        console.log('Mike is the winner as his average is '+ mikes_team_average + ' which is greater than John\'s average of '+ johns_team_average +" and mary\'s average of "+ marys_team_average);
    }else if (marys_team_average > johns_team_average && marys_team_average > mikes_team_average)
    {
        console.log('mary is the winner as her average is '+ marys_team_average + ' which is greater than john\'s average of '+ johns_team_average +" and mike\'s average of "+ mikes_team_average);
    }else if ( johns_team_average === mikes_team_average && marys_team_average === marys_team_average){
        console.log('None of them is the winner as they all scored same scores');
    }