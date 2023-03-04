"use strict";

function insert(tablename,dataObject){
   if(insert==''){
	   console.log('Tablename is required.');
   }
   
   let sql = "";
   let columArr = Object.keys(dataObject);
   let valuesArr = Object.values(dataObject);
   let column_str = columArr.join(",");
   let values_str = valuesArr.join("','")
   sql = sql + `INSERT INTO ${tablename}(${column_str}) values('${values_str}')`;
   console.log(sql);
}

insert('student',{
		'name':'Amit', 
		'class':'LKG', 
		'marks':'50', 
});

insert('users',{
		'id':1, 
		'name':'sumit', 
		'gender':'male', 
		'email':'sumit@yahoo.com',
		'password':'sumit@123',
		'mobile':'9876543210',
		'gf':'NA',
		'isMarried':'Yes',
		'crush':'sunny',
});