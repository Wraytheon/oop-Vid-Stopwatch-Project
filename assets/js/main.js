// ? Duration: property- counts number of seconds between calling start method and calling stop method
// ? Stop: method- stops the timer, can't be stopped if not started
// ? Start: method- starts the timer, can't be stopped if not stopped
// ? reset: method- takes stopwatch to inital state

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    //*?Declaring and initalizing our properties and methods to 0*/
    this.start = function() {
        if (running)
            throw new Error("Stopwatch has already started");
            //*? Validation check: is it already running?*/
        running = true;

        startTime = new Date();
        //? If validation check is passed, set runnin to true and startTime to current date time
    };

    this.stop = function() {
        if (!running)
            throw new Error("Stopwatch has not started");
            //? Validation check: is it already running?
        running = false;
        endTime = new Date();
        //? If validation check is passed, set running to false and endTime to current date time

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
        //? get duration time in seconds and assign the value to 'duration' variable
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, "duration", {
        get: function() { return duration; }
    });
}
