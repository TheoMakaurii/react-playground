(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(6),r=n.n(l);n(12);var o=function(e){var t="split ".concat(e.className),n={flex:e.flexBasis};return c.a.createElement("div",{className:t,style:n},e.children)},i=(n(13),n(1)),s=n(2),u=n(4),m=n(3),h=(n(14),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return console.log("Using a class component!"),console.log(this.props),c.a.createElement("span",{className:"tootip"},c.a.createElement("span",{className:"Tooltip-content",style:{color:this.props.color}},this.props.children),c.a.createElement("div",{className:"Tooltip-message"},this.props.message))}}]),n}(c.a.Component));h.defaultProps={color:"#01A800"};var p=h,v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={datetime:new Date},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({datetime:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return c.a.createElement("div",null,"It is ",this.state.datetime.toLocaleTimeString())}}]),n}(a.Component),d=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),console.log("props in constructor",e),(a=t.call(this,e)).handleButtonClick=function(){console.log("props in handleButtonClick",a.props),console.log("state in handleButtonClick",a.state);var e=a.state.count+5;a.setState({count:e})},a.state={count:0},a}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",null,"The current count:",this.state.count," "),c.a.createElement("button",{onClick:this.handleButtonClick},"Add 1"))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleClick=function(e){console.log(a.state.how),a.setState({who:e})},a.state={who:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Greeting"},c.a.createElement("h3",null,"Hello ",this.state.who),c.a.createElement("button",{onClick:function(){return e.handleClick("World")}},"World"),c.a.createElement("button",{onClick:function(){return e.handleClick("Friend")}},"Friend"),c.a.createElement("button",{onClick:function(){return e.handleClick("React")}},"React"))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={count:0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.state.count+1;e.setState({count:t})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"ITS THE BOMB"),this.state.count%2===0&&this.state.count%7!==0&&c.a.createElement("h3",null,"Tock"),this.state.count%2!==0&&this.state.count%7!==0&&c.a.createElement("h3",null,"Tick"),this.state.count%7===0&&0!==this.state.count&&c.a.createElement("h1",null,"BOOM!!!"))}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={chamber:null,spinning:!1},e.handleClick=function(){e.setState({spinning:!0}),e.timeout=setTimeout((function(){var t=Math.ceil(8*Math.random());e.setState({chamber:t,spinning:!1})}),2e3)},e}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"renderDisplay",value:function(){var e=this.state,t=e.chamber,n=e.spinning,a=this.props.rounds;return n?"spinning the chamber":t===a?"BANG!!! OUCH! YOUR DEAD!":"YOU GOT... Lucky!"}},{key:"render",value:function(){return c.a.createElement("div",{className:"Roulette"},c.a.createElement("h3",null,this.renderDisplay()),c.a.createElement("button",{onClick:this.handleClick},"Feeling lucky?"))}}]),n}(a.Component);E.defaultProps={rounds:8};var k=E;var O=function(){return c.a.createElement("main",{className:"App"},c.a.createElement(o,{className:"left",flexBasis:"2"},"This is the content for the left Split. ",c.a.createElement("br",null),c.a.createElement(p,{message:"one more tooltip message"},"Necessitatibus?")),c.a.createElement(o,{className:"right"},"This is the content for the right Split."),c.a.createElement("div",{className:"State-Prac"},c.a.createElement(v,null)),c.a.createElement("div",{className:"State-Prac"},c.a.createElement(d,{count:123})),c.a.createElement("div",{className:"Drill"},c.a.createElement(f,null)),c.a.createElement("div",{className:"Bomb"},c.a.createElement(b,null)),c.a.createElement("div",{className:"Gun"},c.a.createElement(k,{bulletInChamber:6})))};n(15);r.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.4734b8af.chunk.js.map