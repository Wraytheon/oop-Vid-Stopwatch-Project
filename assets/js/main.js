//? Duration: property- counts number of seconds between calling start method and calling stop method
//*timeEnd: method starts a timer with the specified label. A subsequent call to the console. timeEnd() method with the same label will output milliseconds elapsed since the first call was made.
//? Stop: method- stops the timer, can't be stopped if not started
//? Start: method- starts the timer, can't be stopped if not stopped
//? reset: method- takes stopwatch to inital state
//@typescript
function Stopwatch() {
    this.duration = `Total time: ${this.stop}`
    this.start = function() {
        console.time("Timer");
    }
    this.stop = function() {
        console.timeEnd("Timer");
    }
    // this.reset =
}
let sw1 = new Stopwatch();
