
updateRecord('student',{
	'name':'sumit',
	'class':'12th',
	'marks':50,
},{
	'id':">='1' OR",
	'mobile':"='9876543210'"
})

function updateRecord(tablename,setColumns,conditions){
	if(tablename == ''){
		console.log('Table is Required.');
		return;
	}
	
	//Set Columns Query:-
	
	let keys = Object.keys(setColumns);
	let values = Object.values(setColumns);
	
	//set name='abc',class='pqr',marks='xyz',....n
	let Klength = keys.length;
	let Vlength = values.length;
	
	let column_str = "";
	let sql = "";
	
	if(Klength == Vlength){
		for(let i=0;i<Klength;i++){
			column_str = column_str + keys[i]+"="+"'"+values[i]+"',";
		}
		
	column_str = column_str.substr(0,(column_str.length)-1);
		
	let condition_columns = Object.keys(conditions);
	let condition_values = Object.values(conditions);
	
	let c_length = condition_columns.length;
	let v_length = condition_values.length;
	
	let condition_str = "";
	
	if(c_length == v_length){
		for(let j=0;j<c_length;j++){
			condition_str = condition_str + condition_columns[j]+condition_values[j]+" ";
		}
	}
	
	    condition_str = condition_str.trim();
		sql = sql + `UPDATE ${tablename} SET ${column_str} WHERE ${condition_str}`;
		console.log(sql);
		
		
	}
	
}