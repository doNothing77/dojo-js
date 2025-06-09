

function arrays2d(arr,val){

	// for(const i in items){
	// 	if(items[i] === [0][1]){
	// 		console.log("anda di array awal")
	// 		break;
	// 	} else {
	// 		console.log("yang anda cari tidak ada")
	// 	}

	// }
	for(let i = 0; i < items.length; i++){
		// if(items[i] == )
		for(let j = 0; j < items[i].length; j++){
			if(items[i][j] === val){
				return {row : i, col : j};
			}
		}
	}
	return null
}
	const items = [
		[1,2,3],
		[4,5,6],
		[7,8,9]
	]
const newArrays2d = arrays2d([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
console.log(arrays2d(items, 1))
