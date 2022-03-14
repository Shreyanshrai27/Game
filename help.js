function computerPlay()
{
    let symbol=Math.floor(Math.random()*10);
    if(symbol%3==0)
        return "rock";
    else if(symbol %3==1)
        return "paper";
    else
        return "scissors";
}
function Playround(playerSelection,computerSelection)
{
    if(computerSelection=="rock")
    {
        if(playerSelection.toLowerCase()=="paper")
        return("You Win! paper beats rock");
        else if(playerSelection.toLowerCase()=="rock")
        return("It's a tie");
        else
        return("You lose! rock beats scissors");
    }
    else if(computerSelection=="scissors")
    {
        if(playerSelection.toLowerCase()=="paper")
        return("You lose! scissors beats paper");
        else if(playerSelection.toLowerCase()=="scissors")
        return("It's a tie");
        else
        return("You win! rock beats scissors");
    }
    else
    {
        if(playerSelection.toLowerCase()=="paper")
        return("It's a tie");
        else if(playerSelection.toLowerCase()=="sciccors")
        return("You win! scissors beats paper");
        else
        return("you lose! rock beats paper");
    }
}

function game()
{
    for(let i=1;i<=5;i++)
    {
        let play_select=prompt("Enter your choice user");
        console.log(Playround(play_select,computerPlay()));
    }
}

game();