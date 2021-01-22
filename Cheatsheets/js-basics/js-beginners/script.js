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

// console.log(`Random Number : ${Math.floor(Math.random()*30)}`);

console.log(parseInt("hello"));
// var a = 2;
// a== 2 ? a%2 ===0?console.log("a is even") : console.log("a is odd"): console.log("a is not 2");

// let a = 2;
// let a = 10;


//Object.freeze

let add = (x,y) => x+y;
console.log(add(3,4 ));

arr1 = [1,2,3,4,5,6];
arr2 = arr1;
arr1[0] = 0;
console.log(`Array1 is : ${arr1}`);
console.log(`Array2 is : ${arr2}`);

// Spread Operator

l1 = [32,464,8587,9789];
l2 = [...l1];
l1[0] = 0;
console.log(`L1 is ${l1}`);
console.log(`l2 is ${l2}`);

// const LOCAL_FORECAST = {
// 	today : {min : 75,max : 78},
// 	tomorrow : {min : 45,max : 50}
// };

// function getMinTemp(forecast) 
// {
// 	const {today : {min : minTemp}} = forecast;
// 	return minTemp;	
// }

// console.log(getMinTemp(LOCAL_FORECAST));

const contactsList = {
	akhila : {number : '24536457',address : {laneNum : 7,houseNum : 9}},
	john : {number : 'w4684uryr',address : {laneNum : 57,houseNum : 245}}
};

// function getLaneNum(contactList,name) {
// 	const {name : {address : {laneNum : num}}} = contactList;
// 	return num;
// }

const {akhila : {address : {laneNum : num}}} = contactsList;
console.log(`Get lane num ${num}`);