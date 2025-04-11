//your JS code here. If required.

function removal() {
	var dele =document.getElementById("colorSelect");
	var selele= dele.selectedIndex;
	if(selele !== -1){
		dele.remove(selele)
	}
}