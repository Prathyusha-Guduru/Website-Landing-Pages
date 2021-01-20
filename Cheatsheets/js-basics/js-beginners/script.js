arr = [['Prathyusha',18],['Siddhu',8],['vall',33]];
arr.push(['sreeram',35]);
console.log(arr);
popped = arr.pop();
console.log(arr);
console.log(popped);
shifted = arr.shift();
console.log(shifted);

arr.unshift(['Prathyusha',20]);
console.log(arr);

i =0;
do{
	i++;
	console.log(i);
}
while (i<5)


var contacts = [
	{
		Name : "Akira Chan",
		number : "2453564678",
		hobbies : ["Anime","Kpop","K-Drama"]
	},
	{
		Name : "Kopam Lo Kathi",
		number : "q3r34wwt35y",
		hobbies : ["cussing-other-people","k-drama","k-pop"]
	},
	{
		Name : "iCE CREAM",
		number : "q3r34wwt35y",
		hobbies : ["melting","spoiling clothes","blinks"]
	}
]

function lookUpProfile(name,prop)
{
	for(var i = 0;i<contacts.length;i++)
	{
		if(name === contacts[i].Name)
		{
			if(contacts[i][prop] != undefined){
				console.log(contacts[i][prop]);
			}
			else{
				console.log("Property not present");
			}
		}
	}
}


// lookUpProfile("Akira Chan","hobbies");
// lookUpProfile("Akira Chan","hello");

console.log(Math.random());

