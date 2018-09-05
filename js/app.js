document.getElementById('startDate').addEventListener("change", getStartDate);
document.getElementById('range').addEventListener("change", getRange);



function getStartDate() {

	var startDate =  new Date(document.getElementById('startDate').value);
	startDate.setDate(startDate.getDate() +1);

	console.log(startDate);
	
	return startDate;

}

function getRange(){
	
	//var range = new Number (document.getElementById('range').value);
	var range = document.getElementById('range').value;
	console.log(range);
	
	return range;
}

function getEndDate() {
	var endDate = getStartDate();
		var addRange = getRange();
		endDate.setDate(endDate.getDate() + addRange);

	console.log(endDate);

	return endDate;
}

function printDates() {
		var range = getRange();
		var startDate = getStartDate(); 
		//var x= new Number;


		for (x=0; x<range; x++){
			

			startDate.setDate(startDate.getDate()+1);
			


			var td = document.createElement("TD");        // Create a <button> element
			var t = document.createTextNode(startDate.getDate());       // Create a text node
			td.appendChild(t);                                // Append the text to <button>
			document.body.appendChild(td);  


			//console.log(startDate);
			
		
		}
		

}

function numberOfMonths() {
	var numberMonths = Math.ceil(getRange() / 30);
	if (getRange() <= 28) {
		numberMonths = 1;
	}

	console.log(numberMonths);

	return (numberMonths);
}

function makeTables() {
	
	var y = numberOfMonths();
	var monthList = new Date;
	var monthList = getStartDate();
	numberOfWeeks = getRange()/7;

	var monthName = [
	"January", "Febuary","March", "April", "May", "June","July", "August","September", "October", "November", "December"];
	

	var startTable = "<table style='width:500px'>"
	var weekHeading = "<tr><th style='background-color:white'>Sunday</th><th style='background-color:white'>Monday</th><th style='background-color:white'>Tuesday</th><th style='background-color:white'>Wednsday</th><th style='background-color:white'>Thursday</th><th style='background-color:white'>Friday</th><th style='background-color:white'>Saturday</th></tr>";
	//var dayLabel = "<tr><td style='background-color:yellow'>1</td><td style='background-color:lightgreen'>2</td><td style='background-color:lightgreen'>3</td><td style='background-color:lightgreen'>4</td><td style='background-color:lightgreen'>5</td><td style='background-color:lightgreen'>6</td><td style='background-color:yellow'>7</td></tr>";
	//var dayLabel = "<tr><td style='background-color:yellow'>"+getStartDate().getDate()+"</td><td style='background-color:lightgreen'>"+ getStartDate().getDate() + "</td><td style='background-color:lightgreen'>"+getStartDate().getDate()+"</td><td style='background-color:lightgreen'>"+getStartDate().getDate()+"</td><td style='background-color:lightgreen'>"+getStartDate().getDate()+"</td><td style='background-color:lightgreen'>"+getStartDate().getDate()+"</td><td style='background-color:yellow'>"+getStartDate().getDate()+"</td></tr>";
	var dayLabel = "<tr><td style='background-color:yellow'>1</td><td style='background-color:lightgreen'>2</td><td style='background-color:lightgreen'>3</td><td style='background-color:lightgreen'>4</td><td style='background-color:lightgreen'>5</td><td style='background-color:lightgreen'>6</td><td style='background-color:yellow'>7</td></tr>" +
					"<tr><td style='background-color:yellow'>8</td><td style='background-color:lightgreen'>9</td><td style='background-color:lightgreen'>10</td><td style='background-color:lightgreen'>11</td><td style='background-color:lightgreen'>12</td><td style='background-color:lightgreen'>13</td><td style='background-color:yellow'>14</td></tr>" +
					"<tr><td style='background-color:yellow'>15</td><td style='background-color:lightgreen'>16</td><td style='background-color:lightgreen'>17</td><td style='background-color:lightgreen'>18</td><td style='background-color:lightgreen'>19</td><td style='background-color:lightgreen'>20</td><td style='background-color:yellow'>21</td></tr>" +
					"<tr><td style='background-color:yellow'>22</td><td style='background-color:lightgreen'>23</td><td style='background-color:lightgreen'>24</td><td style='background-color:lightgreen'>25</td><td style='background-color:lightgreen'>26</td><td style='background-color:lightgreen'>27</td><td style='background-color:yellow'>28</td></tr>" +
					"<tr><td style='background-color:yellow'>29</td><td style='background-color:lightgreen'>30</td><td style='background-color:grey'></td><td style='background-color:grey'></td><td style='background-color:grey'></td><td style='background-color:grey'></td><td style='background-color:grey'></td></tr>"
	var endTable = '</table>';



// Month & year Label
	 for (x=0; x<y; x++) {
		var n = monthName[monthList.getMonth()];
	 	var monthHeading = "<h1 style='background-color:lightgreen; width:500px; text-align:center'><strong>" + n +" " + monthList.getFullYear()  + "</strong>";
	 	monthList.setMonth(monthList.getMonth()+1);


	  	document.write(monthHeading);
	  	


//Week Label
	  	document.write(startTable)
		
	  	document.write(weekHeading);
	  	document.write(dayLabel);
	  	document.write(endTable);
	  	

	}



}