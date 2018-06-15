// $('.btn').click(function(){
//     var input = $('.in-one')[0].value;
//     var input_2 = $('.in-two')[0].value;
//     alert(input)

// })  

// function btn(){
    

    
//     xhr.open('GET','http://localhost/',true);
// }


var btn = document.getElementsByClassName('in-two')[0].value;
var btn1 = document.getElementsByClassName('in-one')[0].value;


var xhr = new XMLHttpRequest();
//通信成功 ，为4
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            console.log(xhr.responseText);
        }else{
            console.error(xhr.statusText);
        }
    }
};
xhr.onerror = function (e){
    console.error(xhr.statusText);
};
xhr.open('GET','http://127.0.0.1/',true);
xhr.send(null);