// Function to flatten a multi dimensional array to one dimensional array.

function arrayflatten(arrayA){
  	var flattenArray=new Array(); //Single Dimensional Array to be returned
  	for(key in arrayA){ //Loop through all elements
  		//Check if element is an array
      	if(Array.isArray(arrayA[key])){
			//Call recursive function on array to get single dimensional array
        	flattenArray=flattenArray.concat(arrayflatten(arrayA[key]));
      	} else{
			//Push the element end of the result array
        	flattenArray.push(arrayA[key]);
      	}
  	}
  	//return the result array
  	return flattenArray 
}

//Test
console.log(arrayflatten([[1,2,[3,4]],5]));
