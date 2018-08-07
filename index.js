var btns =["STOP","Circle","Square"]
for (x of btns) {
		var btn = document.createElement('button');
		btn.innerHTML = x;
		document.body.appendChild(btn);
		btn.id = x;

    if (btn.innerHTML==="STOP"){
      btn.onclick = function () { clearTimeout ( timerTick ) }}

    if (btn.innerHTML==="Circle"){
      btn.onclick=function tickFunction () {
        var elem = document.createElement ( "div" )
        document.body.appendChild ( elem )
        setElementStyle ( elem )
        elem.style.background="radial-gradient(white, #ADFF2F 50%)"
        timerTick = setTimeout ( tickFunction, 1000 )
      }
    }

    if (btn.innerHTML==="Square"){
      btn.onclick=function tickFunction () {
        var elem = document.createElement ( "div" )
        document.body.appendChild ( elem )
       setElementStyle ( elem )
       elem.style.borderRadius = null
              timerTick = setTimeout ( tickFunction, 1000 )
        }
     }
   }




function setElementStyle ( el ) {
    var colors = [ "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6", "#FF00FF", "#BA55D3", "#9370DB" ]
    var colors2 = [ "#00BFFF", "#1E90FF", "#87CEFA", "#00BFFF", "#1E90FF", "#6495ED", "#7B68EE" ]
    var colorIndex = Math.round ( Math.random () * 6 )
    el.id="myId"
    el.className="myClass"
    el.style.position = "fixed"
    el.style.top = Math.round ( Math.random () * window.innerHeight ) + "px"
    el.style.left = Math.round ( Math.random () * window.innerWidth ) + "px"
    el.style.width = "100px"
    el.style.height = "100px"
    el.style.borderRadius = "100%"
    var clr=colors[colorIndex]
    el.style.backgroundColor = clr
    el.style.opacity=Math.random ()
    el.style.transition="all in 2s"
    el.size = 100
}
