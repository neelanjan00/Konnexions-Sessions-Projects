var c = 0;
var TopScores = [];
var Store = [];
var count = 0;
var flag = 0;
var i = 0;

function CountShow(){
	++c;
	document.getElementById("count").innerHTML = c;
	setTimeout('alert("Stop!");EnterScores();',3000);
}

function EnterScores(){

	count++;
	if(count<=5)
		TopScores.push(c);
	else
	{
		for(i=0;i<4;++i)
		{
			if(TopScores[i]<c)
				TopScores[i]=c;
		}
	}

	for(i=0;i<4;++i)
	{
		if(Store[i]!=TopScores[i])
			flag++;
	}

	if(flag){
		window.alert("Congratulations on making a High Score!");
	}
	else{
		window.alert("Thanks for playing!");
	}

	var html = "<table border='1|1'>";
	for (i = 0; i < TopScores.length; i++) {
    html+="<tr>";
    html+="<td>"+TopScores[i]+"</td>";
    html+="</tr>";
	}

	html+="</table>";
	document.getElementById("Score").innerHTML = html;
	}






		