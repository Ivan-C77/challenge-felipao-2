// Player Rank Classifier by Trophies --
// Name of the Heroe/Player --
let nickName = "Roronoa Zoro"

// Balance of the Victoies and Defeats --
let result = balance(129, 35)

function balance(victories, defeats){
	return victories - defeats
    }

// categories/rankings --
let rankings = [
	{trophies: [0, 10], ranking: "Iron!"},
	{trophies: [11, 20], ranking: "Bronze!"},
    {trophies: [21, 50], ranking: "Silver!"},
    {trophies: [51, 80], ranking: "Gold!"},
    {trophies: [81, 90], ranking: "Diamond!"},
    {trophies: [91, 100], ranking: "Legendary!"},
    {trophies: [101], ranking: "Imortal!"},
]
let ranking;

for(let i = 0; i < rankings.length; i++){
	if(result >= rankings[i].trophies[0] && result <= rankings[i].trophies[1]){
    	ranking = rankings[i].ranking;
        break;
     }
}

// concatenated results --
console.log("The Heroe " + nickName, "has the balance of " + result, "Victories! and is at the level of " + ranking)