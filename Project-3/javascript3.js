const ck = document.getElementById('clock')
setInterval(function() {
let dt = new Date();
ck.innerHTML=dt.toLocaleTimeString();},1000);
