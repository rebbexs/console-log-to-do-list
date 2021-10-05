let intro = function() {
	prompt('What would you like to do?');

	let toDoList = [ 'walk dog', 'Wash the dishes' ];

	while (intro !== 'quit') {
		if (intro == 'new') {
			let newIntro = prompt('Enter new To Do');
			toDoList.push(newIntro);
			console.log(`You added "${newIntro}" to the list!`);
		} else if (intro == 'list') {
			console.log('**********');
			for (let i = 0; i < toDoList.length; i++) {
				console.log(i, toDoList[i]);
			}
			console.log('**********');
		} else if (intro == 'delete') {
			let index = parseInt(prompt('What is the index of the task you want to delete?'));
			const deleted = toDoList.splice(index, 1);
			console.log(`You deleted "${deleted[0]}" from the list`);
		}

		intro = prompt('What would you like to do?');
	}
	console.log('OK, you quit the app');
};
