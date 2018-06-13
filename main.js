function test (message,fonction){
    console.log("bonjour"+ " " + message);
    fonction();
}

test('toto', function(){
    console.log('MON CALLBACK');
})