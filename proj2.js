var users=[];

let images=["images/prof1.jpg","images/prof2.jpg","images/prof3.jpg","images/prof4.jpg","images/prof5.jpg","images/prof6.jpg"];
	
	axios.get("https://jsonplaceholder.typicode.com/users")
	.then(function(response){
	
		users = response.data;
		let showData="";
		
		for(var i=0 ; i < users.length ; i++) {
			var rand = images[Math.floor(Math.random() * images.length)];
		showData = showData + `<div class="col-md-4 cc"> 
									<div class="panel panel-primary">
										<div class="panel-body"><img src=  "${rand}" class="img-responsive wow shake" height="150px" width="200px"></div> 
										<div class="panel-footer"> <span>Name:</span> ${users[i].name} <br> <span>UserName:</span> ${users[i].username} <br> <span>eMail:</span> ${users[i].email}</div>
									</div>
								</div>`
								
		}
		console.log(showData);
	document.getElementById("data").innerHTML = showData;
	
	});