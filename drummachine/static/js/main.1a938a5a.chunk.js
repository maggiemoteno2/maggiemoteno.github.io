(this["webpackJsonpdrum-machine-app"]=this["webpackJsonpdrum-machine-app"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),c=t.n(o),s=(t(13),t(1)),m=t(2),i=t(4),p=t(3),u=t(5),d=[{name:"Q",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",description:"Heater-4_1"},{name:"W",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",description:"Heater-1"},{name:"E",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",description:"Kick_n_Hat"},{name:"A",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",description:"Chord_1"},{name:"S",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",description:"punchy_kick_1"},{name:"D",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",description:"Brk_Snr"},{name:"Z",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",description:"Dry_Ohh"},{name:"X",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",description:"Heater-3"},{name:"C",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",description:"Dsc_Oh"}],l=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(p.a)(a).call(this,e))).powerControl=function(){console.log("Matla",t.state.power),t.setState({power:!t.state.power})},t.playAudio=function(e){return!0!==t.state.power?alert("turn on the power"):new Audio(e).play()},t.state={play:!1,power:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"drum-machine"},r.a.createElement("div",{id:"display"},r.a.createElement("div",{className:"button"},d.map((function(a){return r.a.createElement("button",{onClick:function(){return e.playAudio(a.url)}},a.name," ",e.description," ")})))),r.a.createElement("div",{className:"power"},r.a.createElement("i",{class:"fa fa-power-off fa-3x",onClick:function(){return e.powerControl()},"aria-hidden":"true"})))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"heading"},"Drum Machine"),r.a.createElement(l,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1a938a5a.chunk.js.map