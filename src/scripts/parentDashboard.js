function main() {
	initWelcome();
	initTable();
	initApplicationButtons();

}
let eml = localStorage["email"];
main();

function initWelcome(){
	//Changes Welcome sign
	findUserByEmail(eml).then((response) => {
		$('#welcome').text("Welcome " + response.name.fname +"!");
	});
}

function initApplicationButtons(){
	$('button').on('mouseover', function(){
		$(this).css('cursor', 'pointer');
		$(this).css('background-color', 'rgb(73, 73, 73)');
	}).on('mouseout', function(){
		$(this).css('cursor', 'default');
		$(this).css('background-color', 'rgb(185, 185, 185)');
	});

	//New Application
	$('#newApplicationButton').on('click', function(){
		window.location.href = "camperApplication1.html";
	});
	//Account Settings
	$('#accountSettingsButton').on('click', function(){
		window.location.href = "accountSettings.html";
	});

	//Yes No Buttons
	$('#removeYesButton').on('click', function() {
		//TODO: Remove Application
		removeCamperByID($(this).val()).then((response) => {
			$('#applicationMessage').text('Your application has been removed.');
			$('.smallButtons').css('display', 'none');
			location.reload();
		});
	});
	$('#removeNoButton').on('click', function() {
		$('#applicationMessage').text('Your application was not removed.');
		$('.smallButtons').css('display', 'none');
	});
}

function initTable(){
	//Get campers from database and add to table
	findCampersByEmail(eml).then((response) => {
		if(response.length > 0){
			for(let camper of response){
				let status = camper.status; //Options: Approved, Pending, Declined, and Not Submitted
				let week = "Unavailble";
				if(status == "Approved"){
					week = camper.week;
				}
				addRowToTable(camper.name.fname, status, week, camper._id);
				$('.viewApplicationButton, .removeApplicationButton').on('mouseover', function(){
					$(this).css('cursor', 'pointer');
					$(this).css('background-color', 'rgb(73, 73, 73)');
				}).on('mouseout', function(){
					$(this).css('cursor', 'default');
					$(this).css('background-color', 'rgb(185, 185, 185)');
				});
				//View Application
				$('.viewApplicationButton').on('click', function(){
					let dataHaveApplication = false;
					if(dataHaveApplication){
						//TODO: View Application
					}
					else{
						$('#applicationMessage').text('You do not have an application to review.');
					}
					
				});
			}
		}
	});	
}
function addRowToTable(name, status, week, id){
	let camperTableDiv = document.getElementById("camperTableDiv");
		let table = document.createElement("table");
		table.setAttribute('id', 'camperTable');
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
			let p1 = document.createElement("p");
				p1.innerHTML = "Name: " + name;
			td1.appendChild(p1);
		tr.append(td1);
		let td2 = document.createElement("td");
			let p2 = document.createElement("p");
				p2.innerHTML = "Status: " + status;
		td2.appendChild(p2);
		tr.append(td2);
		let td3 = document.createElement("td");
			let p3 = document.createElement("p");
				p3.innerHTML = "Week: " + week;
		td3.appendChild(p3);
		tr.append(td3);
		let td4 = document.createElement("td");
			let button1 = document.createElement("button");
				button1.setAttribute('class', 'viewApplicationButton');
				button1.innerHTML = "View Application";
		td4.appendChild(button1);
		tr.append(td4);
		let td5 = document.createElement("td");
			let button2 = document.createElement("button");
				button2.setAttribute('class', 'removeApplicationButton');
				button2.innerHTML = "Remove Application";
				//Remove Application
				button2.addEventListener('click', () => {
					$('#removeYesButton').attr('value', id);
					$('#applicationMessage').text("Are you sure you want to remove _____'s application?");
					$('.smallButtons').css('display', 'inline');
				});
		td5.appendChild(button2);
		tr.append(td5);
		table.appendChild(tr);
	camperTableDiv.appendChild(table);
}


//--------------------------------------------------- API Calls -------------------------------------------------------------
//Find by email
async function findUserByEmail(eml) {
	try {
		const response = await axios.get('http://localhost:3013/rest/account/' + eml);
		return response.data;
	}catch (err) {
		console.log("Can not connect to server.");
		console.log(err);
	}
}
//Find if there is camper(s) with that email.
async function findCampersByEmail(eml) {
	try {
		const response = await axios.get('http://localhost:3013/rest/camper/email/' + eml );
		return response.data;
	}catch (err) {
		console.log("Can not connect to server.");
		console.log(err);
	}
}
//Removes a camper by ID
async function removeCamperByID(id) {
	try {
		const response = await axios.delete('http://localhost:3013/rest/camper/id/' + id);
		return response.data;
	}catch (err) {
		console.log("Can not connect to server.");
		console.log(err);
	}
}