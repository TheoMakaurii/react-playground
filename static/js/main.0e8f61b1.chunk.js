(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(12),n(1)),i=n(2),u=n(4),s=n(3),h=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={datetime:new Date},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){t.setState({datetime:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",null,"It is ",this.state.datetime.toLocaleTimeString())}}]),n}(a.Component),m=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(o.a)(this,n),console.log("props in constructor",t),(a=e.call(this,t)).handleButtonClick=function(){console.log("props in handleButtonClick",a.props),console.log("state in handleButtonClick",a.state);var t=a.state.count+5;a.setState({count:t})},a.state={count:0},a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"The current count:",this.state.count," "),r.a.createElement("button",{onClick:this.handleButtonClick},"Add 1"))}}]),n}(a.Component),d=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleClick=function(t){console.log(a.state.how),a.setState({who:t})},a.state={who:""},a}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"Greeting"},r.a.createElement("h3",null,"Hello ",this.state.who),r.a.createElement("button",{onClick:function(){return t.handleClick("World")}},"World"),r.a.createElement("button",{onClick:function(){return t.handleClick("Friend")}},"Friend"),r.a.createElement("button",{onClick:function(){return t.handleClick("React")}},"React"))}}]),n}(a.Component),v=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={count:0},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){var e=t.state.count+1;t.setState({count:e})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"ITS THE BOMB"),this.state.count%2===0&&this.state.count%7!==0&&r.a.createElement("h3",null,"Tock"),this.state.count%2!==0&&this.state.count%7!==0&&r.a.createElement("h3",null,"Tick"),this.state.count%7===0&&0!==this.state.count&&r.a.createElement("h1",null,"BOOM!!!"))}}]),n}(a.Component),b=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={chamber:null,spinning:!1},t.handleClick=function(){t.setState({spinning:!0}),t.timeout=setTimeout((function(){var e=Math.ceil(8*Math.random());t.setState({chamber:e,spinning:!1})}),2e3)},t}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"renderDisplay",value:function(){var t=this.state,e=t.chamber,n=t.spinning,a=this.props.rounds;return n?"spinning the chamber":e===a?"BANG!!! OUCH! YOUR DEAD!":"YOU GOT... Lucky!"}},{key:"render",value:function(){return r.a.createElement("div",{className:"Roulette"},r.a.createElement("h3",null,this.renderDisplay()),r.a.createElement("button",{onClick:this.handleClick},"Feeling lucky?"))}}]),n}(a.Component);b.defaultProps={rounds:8};var f=b,p=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={currentTabIndex:0},t.handleButtonClick=function(e){t.setState({currentTabIndex:e})},t}return Object(i.a)(n,[{key:"renderButtons",value:function(){var t=this;return this.props.tabs.map((function(e,n){return r.a.createElement("button",{key:n,onClick:function(){return t.handleButtonClick(n)}},e.name)}))}},{key:"renderContent",value:function(){var t=this.props.tabs[this.state.currentTabIndex];return r.a.createElement("div",{className:"content"},t.content)}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderButtons(),this.props.tabs.length&&this.renderContent())}}]),n}(a.Component);p.defaultProps={tabs:[]};var k=p,E=[{name:"first tab",content:"twinkle, twinkle"},{name:"second tab",content:"little star"},{name:"third tab",content:"how I wonder"},{name:"fourth tab",content:"what you are"},{name:"fifth tab",content:"up above the world so high"},{name:"sixth tab",content:"like a diamond in the sky"},{name:"seventh tab",content:"twinkle, twinkle"},{name:"eigth tab",content:"little star"},{name:"ninth tab",content:"how I wonder"},{name:"tenth tab",content:"what you are..."}];var O=function(){return r.a.createElement("main",{className:"App"},r.a.createElement("div",{className:"State-Prac"},r.a.createElement(h,null)),r.a.createElement("div",{className:"State-Prac"},r.a.createElement(m,{count:123})),r.a.createElement("div",{className:"Drill"},r.a.createElement(d,null)),r.a.createElement("div",{className:"Bomb"},r.a.createElement(v,null)),r.a.createElement("div",{className:"Gun"},r.a.createElement(f,{bulletInChamber:6})),r.a.createElement("div",{className:"Tabs"},r.a.createElement(k,{tabs:E})))};n(13);l.a.render(r.a.createElement(O,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0e8f61b1.chunk.js.map