(function() {
	var app = angular.module("toDos", []);

	app.controller("ListController", function(){
		this.items = toDoList;
	});

	app.controller("addingToList", function($scope) {
		$scope.task = "add my task here";
	});



	var toDoList = [{
		name: 'bootcamp',
		description: "things I have to do for class",
		tasks: [
			"finish MongoDB tutorial",
			"create Github repo for this week's project",
			"thank Carol for the invite to the Front End meetup",
			"download Robomongo",
			"finish reading Sass docs",
			"update Sass notes for the goup",
			"archive project files",
			"rewatch the Wonder Woman trailer for the one thousandth time"

		]},

		{
			name: "personal",
			description: "things I need to do for me",
			tasks: [
			"switch preferred providers",
			"pick up stuff for taco night",
			"call Uncle Tom",
			"bathe dog before he turns into a ball of dirt",
			"pick up stamps",
			"rewatch Wonder Woman trailer"]
		}

	];

})();



//$("#adding").click(function() {
//    console.log("clicked");
////    $('#textInput').val();
////    $('#textInput').trigger('autoresize');
////        
////    console.log();
//});


