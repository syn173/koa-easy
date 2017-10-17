(function(){
  var timerH = document.getElementById('js_hour');
  var timerM = document.getElementById('js_minute');
  var timerS = document.getElementById('js_second');

  var endTime = new Date();
  endTime.setHours(endTime.getHours() + 24);

  var endTimestamp = endTime.getTime();
  function countDown() {
    var now = Date.now();
    if (now > endTimestamp) {
      // do someting
      return;
    }
    var delt = parseInt((endTimestamp - now) / 1000, 10);
    var hh = Math.floor(delt / 3600);
    var mm = Math.floor(delt % 3600 / 60);
    var ss = delt % 60;
    timerH.innerText = fillNumber(hh);
    timerM.innerText = fillNumber(mm);
    timerS.innerText = fillNumber(ss);
    setTimeout(countDown, 1000);
  }

  function fillNumber(n) {
    return n > 10 ? n : '0' + n;
  }

  countDown();
})();