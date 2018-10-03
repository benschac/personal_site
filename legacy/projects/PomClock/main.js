(function(window) {
  var App = window.App || {};
  'use strict';

  /*
  ==================================================
    Todo: PomClock
      Core Functionality:
        - Get Current Date and Time. (Done)
        - Get Timing Difference. (Done)
        - Show Time Changing. (Done)
        - Create Reset
        - Start Timer (Done)
        - Pause Timer
        - Resume Time
        - Alert when time is complete.
        - Event handler to register click events. (Done)

      Additional Functionality:
        - Pomodoro Button (1 Minutes)
        - Short Break (5 minutes)
        - Long Break (10 minutes)
        - Custom button dropdown (user generated value from dropdown).
        - Drop down to select additional timer length options.
        - Local/Session storage to keep track of time if user closes and reopens app while time is running.
        - Adds Dynamic countdown to title/tab. (Done)
  ==================================================
  */

var MAIN_CLOCK = '[data-clock="main"]';
var START_BUTTON = '[data-clock="start"]';
var STOP_BUTTON = '[data-clock="stop"]';
var RESET_BUTTON = '[data-clock="reset"]';

var clock = document.querySelector(MAIN_CLOCK);
var start = document.querySelector(START_BUTTON);
var stop = document.querySelector(STOP_BUTTON);
var reset = document.querySelector(RESET_BUTTON);
var time;

function conversion(input1, input2) {

  if(typeof input1 === "number") {
    function formatInput(type) {
      if(type === "milliseconds") {
        return ((input1 * 60) * 1000);
      }

      if(type === "seconds") {
        return ((input1 * 60));
      }

      if(type === "minutes") {
        return input1;
      }

      if(type === "hours") {
        return Math.floor(input1 / 60);
      }
    }

    return formatInput;
  }

  function formatTime() {
    var minutes =  Math.floor(((input1  - input2) / 1000) / 60);
    var seconds = Math.floor(((input1  - input2) / 1000) % 60);
    if(seconds < 10) {
      seconds = "0" + seconds;
    }

    if(minutes < 10) {
      minutes = "0" + minutes;
    }

    if(seconds === "00" && minutes === "00") {
      return 'end';
    }

    return "<span class='minutes'>" + minutes + "</span>" + ":" + "<span class='seconds'>" + seconds + "</span>";
  }

  return formatTime;
}

Timer.prototype.increment = function() {
  var d = new Date();
  var time = conversion(this.endTime, d);


  if(this.countDown === 'end') {
    this.stopIncrementer();
    stop.classList.add('hidden');
  }
  this.countDown = time();
  return this.countDown;
}

Timer.prototype.start = function() {
      var d = new Date();
      var f = (d.getTime() + this.milliseconds);
      this.startTime = d;
      this.endTime = new Date(f);

  this.incrementer = setInterval(function() {
    clock.innerHTML = this.increment();
  }.bind(this), 500);
}

Timer.prototype.stopIncrementer = function() {
  // var units = conversion(this.);
  var n = Date.now();
  this.milliseconds = (this.endTime - n);
  console.log('stopinc', this.milliseconds);
  clearInterval(this.incrementer);
}

Timer.prototype.startIncrementer = function() {
  var d = new Date();
  var f = (d.getTime() + this.milliseconds);
  this.startTime = Date.parse(d);
  this.endTime = new Date(f);
  console.log(this.endTime);


  this.incrementer = setInterval(function() {
    clock.innerHTML = this.increment();
  }.bind(this), 500);
}

function Timer(input) {
  var units = conversion(input);
  this.milliseconds = units('milliseconds');
  this.seconds = units('seconds');
  this.minutes = units('minutes');
  this.hours = units('hours');
}

function timeSet(val) {
  time = new Timer(val);
  return time;
}


function buttonHandler() {
  document.addEventListener('click', function(e) {
    var button = e.path[0].innerHTML;

    if(button === "Start") {
      time = timeSet(25);
      time.start();

      reset.classList.add('show');

      stop.classList.add('show');
      stop.classList.remove('hidden');

      e.path[0].classList.remove('show');
      e.path[0].classList.add('hidden');
    }

    if(button === "Stop") {
      e.path[0].innerHTML = "Resume";
      console.log(time);
      time.stopIncrementer();
    }

    if(button === "Resume") {
      e.path[0].innerHTML = "Stop";
      time.startIncrementer();
    }

    if(button === "Reset") {
      time.stopIncrementer();
      time = timeSet(1);
      reset.classList.add('hidden');
      reset.classList.remove('show');

      stop.classList.add('hidden');
      stop.classList.remove('show');

      start.classList.remove('hidden');
      start.classList.add('show');
      console.log(e.path[0]);
    }
  });
}

function init() {
  buttonHandler();
}

init();



App.Timer = Timer;
window.App = App;
})(window);
