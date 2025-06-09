var vectorArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

function innerLoops(){
    for(let i = 0; i < vectorArray.length; i++){
        for(let j = 0; j < vectorArray.length; j++){
            if(vectorArray[i][j]){
                console.log(vectorArray);
                break
            }
            break
        }
        break
    }
    return null
}

innerLoops()