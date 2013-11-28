q.ready(function(){
    q.assert(1,"1 is true")
    q.assert(1,"1 is true")
    q.assert(true,"1 is true")
    q.assert(23 < 100,"1 is true")
    
    q.testLog()
})