'use strict';


function helloServiceShouldAskWhoAreYou(){
    var label = " HelloService ask 'who are you?' when no name is sent to the function<br>";
    var result = "KO";
    if(helloService()==='Who are you ?'){
        result = "OK";
    }
    document.writeln(result + label);
}

function helloServiceShouldSayHelloGuillaume(){
    var label = " HelloService ask 'Hello Guillaume' when i call function with Guillaume<br>  ";
    var result = "KO";
    if(helloService('Guillaume')==='Hello Guillaume'){
        result = "OK";
    }
    document.writeln(result + label);
}

helloServiceShouldAskWhoAreYou();
helloServiceShouldSayHelloGuillaume();