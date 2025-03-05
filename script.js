function firstNonRepeatedChar(str) {

	let mapContainer =  new Map()

	 for(chars of str){
		mapContainer.set(chars ,  (mapContainer.get(chars) || 0 ) + 1)
	 }

	 for(chars of str){
		  if(mapContainer.get(chars) == 1){
			   return chars 
		  }
	 }
	return null 

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
