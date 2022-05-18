function show(pul,ay) {
    for (var i = 1; i < ay; i++) {
        console.log( i + 'ci ay ' + parseInt(pul/ay) );
    } 

    if ((pul - (parseInt(pul/ay)*ay))!==0) {
        console.log( i + 'ci ay' + (pul - (parseInt(pul/ay)*ay)));
    }
};




var array=[{name:"Murad",degree:90},
{name:"Ali",degree:99},
{name:"Veli",degree:90},
{name:"Gulchin",degree:97},
{name:"George",degree:51},
{name:"Martin",degree:45},
{name:"Murad",degree:90},
{name:"Murad",degree:90},
{name:"Murad",degree:90},


]


function checkDegree(point) {
 for (var iterator of array) {
       
            if (point>=91&& point<=100 && iterator.degree>=91&&iterator.degree<=100 ) {
                console.log('high honor student ' + iterator.name);
            } else if(point>=81&& point<=90 && iterator.degree>=81&&iterator.degree<=90) {
                console.log('high student ' + iterator.name);
            }else if(point>=65&& point<=84 && iterator.degree>=65&&iterator.degree<=84){
                result='Adi student'
            }else if( point<=64 && iterator.degree<=64){
                result='kesilmis student';
            }else{
               console.log('tapilmadi');
            }  
        
        
    }
 

}


let a= [1,2,3,4,5]


function vurma(arr, callback) {
    for (const iterator of arr) {
       
            console.log( callback(iterator) );
        
        
    }
   

}




