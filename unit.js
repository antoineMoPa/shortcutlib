/*

WORKFLOW:

Define/run asserts
    q.assert(cond,"planting potatoes inside garden")

Define/run equality tests
    q.equal(a,b,"...")

Define/run deep equality tests (Not yet implemented)
    q.deepEqual(a,b,"...")

Do a benchmark test
    //How many test per seconds, over 300 miliseconds
    console.log(
        q.bench(function(){},{method:"perSecond",length:300})
    )
    //OR
    //How many miliseconds for 100 executions
    console.log(
        q.bench(function(){},{method:"timeTo",repeats:100})
    )

Show test log
    console.log(q.testLog())

Erase tests logs and bench to start anew
    q.clearTests()

*/

(function(q){

    //So this is a really small testing framework
    
    var testResults,
        successes = [],
        fails = [],
        warnings = [],
        benches = []

    q.assert = function(cond,msg){
        if(cond === true)
            successes.push("True assert: " + msg)
        else
            fails.push("False assert: " + msg)
    }
    
    q.equal = function(a,b,msg){
        if(a === b){
            successes.push("Equal: " + msg)
        }
        else if(a == b){
            successes.push(msg)
            warnings.push("Not strictly equal: " + msg)
        }
        else{
            fails.push("Not equal: " + msg)
        }
    }
    
    q.clearTest = function(){
        testResults = ""
        successes = []
        fails = []
        warnings = []
        benches = []
    }
    
    q.testLog = function(){
        console.log("q testLog")
        console.log(successes.length+" successes")
        console.log(fails.length+" failures")
        console.log(warnings.length+" warnings")
        q.successLog()
        q.failLog() 
        q.warningLog() 
    }    
    q.successLog = function(){
        console.log("successes:")
        for(var i = 0; i < successes.length; i++){
            console.log(successes[i])
        }
    }
    
    //Not to be confused with failblog...
    q.failLog = function(){
        for(var i = 0; i < fails.length; i++){
            console.log(fails[i])
        }
    }

    //Not to be confused with failblog...
    q.warningLog = function(){
        for(var i = 0; i < warnings.length; i++){
            console.log(warnings[i])
        }
    }

    q.bench = function(callback,settings){
        settings = q.extend(
                       settings,
                       { 
                           method:"timeTo",
                           repeat:100,length:100
                       }
                   )
        
        var err = function(msg){
            console.log("In q.bench, " + msg)
        }
        if(settings.method == "timeTo"){
            if(typeof settings.repeat != 'number'){
                err("Settings.repeat must be a number")
                return
            }
            var initialTime = new Date().getTime()
            for(var i = 0; i<settings.repeat; i++){
                callback()
            }
            return new Date().getTime()-initialTime + "ms"
        }
        else if(settings.method == "perSecond"){
            var initialTime = new Date().getTime()
            var endTime = settings.length
            var stop = false
            var i = 0
            setTimeout(function(){stop=true},settings.length)
            while(!stop && i++)
                callback()
            return i/settings.length*1000+" times per seconds"
        }
        else{
            err("settings.method is set to a bad value")
        }
    }
    
})(shortcutLib);
