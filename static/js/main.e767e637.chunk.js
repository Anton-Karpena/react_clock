(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),i=c(3),l=c(5),s=c(4),r=c(1),u=c.n(r),m=(c(12),c(0)),k=function(t){Object(l.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).timerId=void 0,t.state={currentDate:new Date},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({currentDate:new Date}),console.log(t.state.currentDate.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.clockName!==t.clockName&&console.log("The Clock was renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.currentDate;return Object(m.jsxs)("div",{className:"clock__timer",children:["Current time:"," ",t.toLocaleTimeString()]})}}]),c}(u.a.Component),h=function(t){Object(l.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setRandomName=function(){t.setState({clockName:Math.random()})},t}return Object(i.a)(c,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,c=t.clockName;return Object(m.jsxs)("div",{className:"clock",children:[Object(m.jsx)("h1",{className:"clock__title",children:"React clock"}),Object(m.jsxs)("div",{className:"clock__buttons",children:[Object(m.jsx)("button",{className:"clock__button",type:"button",onClick:this.showClock,children:"Show Clock"}),Object(m.jsx)("button",{className:"clock__button",type:"button",onClick:this.hideClock,children:"Hide Clock"}),Object(m.jsx)("button",{className:"clock__button",type:"button",onClick:this.setRandomName,children:"Set random name"})]}),e&&Object(m.jsx)(k,{clockName:c})]})}}]),c}(u.a.Component),b=h;o.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e767e637.chunk.js.map