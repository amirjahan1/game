

var flag = true;

var resultLeft = 0
var resultRight = 0

document.getElementById("result-left").innerHTML = resultLeft;
document.getElementById("result-right").innerHTML = resultRight;



function game(name,num,computer1,computer2)
{
    document.querySelector("."+name).addEventListener("click",
        function()
        {
            if (flag == true)
            {
                var numRight = Math.floor(Math.random() * (6-4+1))+4;
                document.getElementById("num"+num).classList.add("active");
                document.getElementById("num"+numRight).classList.add("active");
                flag = false;

                if (document.querySelector("span."+name).attributes.getNamedItem("data-name").value ===  document.getElementById("num"+numRight).attributes.getNamedItem("data-name").value)
                {
                    document.getElementById("alert").classList.add("active");
                }

                else if ( document.querySelector("#num"+num+".active").attributes.getNamedItem("data-name").value  === name )
                    document.getElementById("alert").classList.remove("active");
                {
                  if( document.querySelector("#num"+numRight).innerHTML == computer1 )
                  {
                      resultRight++;
                      document.getElementById("result-right").innerHTML = resultRight;
                  }

                  else if( document.querySelector("#num"+numRight).innerHTML == computer2 )
                  {
                      resultLeft++;
                      document.getElementById("result-left").innerHTML = resultLeft;
                  }

                }



            }

            else if (flag == false)
            {
                Object.values( document.getElementsByClassName("active")).map(function(item)
                {
                    item.classList.remove("active");
                });
                flag = true;
            }
        }
    );
}


game("rock",1 , "paper", "scissor");
game("paper",2 , "scissor", "rock");
game("scissor",3 , "rock", "paper");




