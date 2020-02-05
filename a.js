
var array = [];

var n = prompt("How many items to sort?");

for (var i = 0; i < n; i++) {
	array[i] = parseInt(prompt("Enter a number: "));
	console.log(array[i]);
}
document.write(`Before Quick Sort: <br/>`);
document.write(array);
document.write(`<br/><br/><br/>`);
document.write(`After Quick Sort: <br/>`);

//quick sort
quickSort(array, 0, array.length -1);


document.write(array);



function  quickSort(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);  
	/* partition */
	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)
		i++;
		while (parseInt(arr[j]) > pivot)
			j--;
		if (i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}

	/* recursion */
	if (left < j)
		quickSort(arr, left, j);
	if (i < right)
		quickSort(arr, i, right);
	return arr;
}
