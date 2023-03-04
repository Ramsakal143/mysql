function deleteRecord(tablename,param){ //
	
	let sql="";
	let pk = Object.keys(param); //key-1 ['std_id']
	let pk_values = Object.values(param); //1,2,3,4,5,6,..
	let pk_str = pk_values.join("','");
	
	sql = sql + `DELETE FROM ${tablename} where ${pk[0]} in ('${pk_str}')`;
	console.log(sql);
	
}

deleteRecord('student',{
   'std_id':[1,2,3,4,5,6,7,8,9]
});
deleteRecord('user',{
   'id':[1001]
})

deleteRecord('order',{
   'order_id':['ord_110168292']
})