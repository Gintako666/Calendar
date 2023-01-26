(this["webpackJsonpwine-library"]=this["webpackJsonpwine-library"]||[]).push([[0],{36:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),o=n.n(c),r=n(26),i=n(12),s=n(2),l=(n(36),n(18)),d=n.n(l),u=n(9),j=Object(u.b)({name:"addTodo",initialState:{isOpen:!1,selectDate:null,activeTodo:null},reducers:{setSelectDate:function(e,t){e.selectDate=t.payload},setSelectTodo:function(e,t){e.activeTodo=t.payload},deleteSelectTodo:function(e){e.activeTodo=null},setOpenForm:function(e){e.isOpen=!e.isOpen}}}),b=j.actions,h=j.reducer,m={date:new Date,monthData:[],year:(new Date).getFullYear(),month:(new Date).getMonth()},_=Object(u.b)({name:"calendar",initialState:m,reducers:{setMonthNext:function(e){e.date=new Date(e.year,e.month+1),e.year=new Date(e.year,e.month+1).getFullYear(),e.month=new Date(e.year,e.month+1).getMonth()},setMonthPrev:function(e){e.date=new Date(e.year,e.month-1),e.year=new Date(e.year,e.month-1).getFullYear(),e.month=new Date(e.year,e.month-1).getMonth()},setMonth:function(e,t){e.month=t.payload},setYear:function(e,t){e.year=t.payload}}}),f=_.actions,O=_.reducer,v=i.c,p=i.b,x=[31,28,31,30,31,30,31,31,30,31,30,31],w=[6,0,1,2,3,4,5],g={January:0,February:1,March:2,April:3,May:4,June:5,July:6,August:7,September:8,October:9,Novermber:10,December:11},y=function(){for(var e=[],t=1990;t<2030;t+=1)e.push(t);return e},N=Object.keys(g);function S(e,t){for(var n=[],a=new Date(e,t),c=function(e){var t=e.getMonth(),n=e.getFullYear(),a=x[t];return function(e){return!(e%4||!(e%100)&&e%400)}(n)&&t===g.February?a+1:a}(a),o=function(e){var t=e.getDay();return w[t]}(a),r=1,i=0;i<(c+o)/7;i+=1){n[i]=[];for(var s=0;s<7;s+=1)0===i&&s<o||r>c?n[i][s]=void 0:(n[i][s]=new Date(e,t,r),r+=1)}return n}function D(e,t){var n=[];console.log(t),n=S(e,t);var a=function(e,t){return S(e,t-1).slice(-1)[0]}(e,t),c=function(e,t){return S(e,t+1)[0]}(e,t);return a.some((function(e){return void 0===e}))?a.forEach((function(e,t){e&&(n[0][t]=e)})):n.unshift(a),c.some((function(e){return void 0===e}))?c.forEach((function(e,t){e&&(n[n.length-1][t]=e)})):n.push(c),n}var M=n(1),T=function(){var e=p(),t=v((function(e){return e.calendar})),n=t.year,c=t.month,o=v((function(e){return e.addTodo})).selectDate,r=v((function(e){return e.todos})).todos,i=Object(a.useState)(D(n,c)),l=Object(s.a)(i,2),u=l[0],j=l[1],h=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];Object(a.useEffect)((function(){j(D(n,c))}),[c,n]);return Object(M.jsx)("div",{className:"calendar",children:u&&u.map((function(t,n){var a=n*Math.random();return Object(M.jsx)("div",{className:"calendar__week",children:t.map((function(t,n){var a=n*Math.random(),i=r.filter((function(e){return e.date===(null===t||void 0===t?void 0:t.toLocaleDateString().split(".").reverse().join("-"))})).sort((function(e,t){return e.time.localeCompare(t.time)}));return t?Object(M.jsxs)("div",{className:d()("calendar__item",{"calendar__item--disabled":t.getMonth()!==c},{"calendar__item--active":t.toLocaleDateString().split(".").reverse().join("-")===o}),"aria-hidden":!0,onClick:function(){if(t.getMonth()!==c)return e(f.setMonth(t.getMonth())),void e(f.setYear(t.getFullYear()));var n;e((n=t)?b.setSelectDate(n.toLocaleDateString().split(".").reverse().join("-")):b.setSelectDate(n))},children:[Object(M.jsx)("div",{className:"calendar__item__day",children:t.getDate()}),Object(M.jsx)("div",{className:"calendar__item__day-week",children:h[n%7]}),Object(M.jsx)("div",{className:"calendar__item__todos",style:{overflowY:i.length>3?"scroll":"auto"},children:i.map((function(t){return Object(M.jsxs)("button",{type:"button",className:"calendar__item__todo-button",onClick:function(){e(b.setOpenForm()),e(b.setSelectTodo(t))},children:[Object(M.jsx)("p",{className:"calendar__item__todo-button__text",children:t.title})," ",Object(M.jsx)("p",{children:t.time})]},t.refreshDate)}))})]},a):Object(M.jsx)("div",{className:"calendar__item",children:"10"},a)}))},a)}))})},C=function(){var e=p(),t=v((function(e){return e.calendar})),n=t.month,c=t.year,o=Object(a.useState)(!1),r=Object(s.a)(o,2),i=r[0],l=r[1];return Object(M.jsxs)("header",{className:"header",children:[Object(M.jsx)("button",{type:"button",className:"header__button header__button--add-todo",onClick:function(){e(b.setOpenForm())},children:Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(M.jsx)("path",{className:"header__button--add-todo",d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"})})}),Object(M.jsxs)("nav",{className:"header__nav",children:[Object(M.jsx)("button",{type:"button",onClick:function(){e(f.setMonthPrev())},className:"header__button",children:Object(M.jsx)("svg",{className:"header__button__arrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(M.jsx)("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),Object(M.jsxs)("div",{className:"thisMounsYears",children:[N[n]," ",c]}),Object(M.jsx)("button",{type:"button",onClick:function(){e(f.setMonthNext())},className:"header__button",children:Object(M.jsx)("svg",{className:"header__button__arrow header__button__arrow--right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(M.jsx)("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})]}),Object(M.jsxs)("div",{className:"header__selects-wrapper",children:[Object(M.jsx)("button",{type:"button",className:"header__button",onClick:function(){l((function(e){return!e}))},children:Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(M.jsx)("path",{d:"M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"})})}),i&&Object(M.jsxs)("div",{className:"header__selects",children:[Object(M.jsx)("select",{className:"header__selects__item",defaultValue:n,onChange:function(t){console.log("set"),e(f.setMonth(+t.target.value))},children:N.map((function(e,t){return Object(M.jsx)("option",{value:t,children:e},e)}))}),Object(M.jsx)("select",{className:"header__selects__item",defaultValue:c,onChange:function(t){console.log("set"),e(f.setYear(+t.target.value))},children:y().map((function(e){return Object(M.jsx)("option",{value:e,children:e},e)}))})]})]})]})},V=n(10),k=n(6),H={todos:JSON.parse(localStorage.getItem("todos")||"[]")},F=Object(u.b)({name:"todos",initialState:H,reducers:{setTodos:function(e,t){e.todos=[].concat(Object(k.a)(e.todos),Object(k.a)(t.payload))},removeTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t.payload.id}))},editTodo:function(e,t){e.todos=e.todos.map((function(e){return e.id===t.payload.id?t.payload:e}))}}}),z=F.actions,E=F.reducer,Y=function(){var e=p(),t=v((function(e){return e.addTodo})),n=t.activeTodo,c=t.selectDate,o=Object(a.useState)(""),r=Object(s.a)(o,2),i=r[0],l=r[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),h=j[0],m=j[1],_=Object(a.useState)(""),f=Object(s.a)(_,2),O=f[0],x=f[1],w=Object(a.useState)(""),g=Object(s.a)(w,2),y=g[0],N=g[1],S=Object(a.useState)(!0),D=Object(s.a)(S,2),T=D[0],C=D[1],k=Object(a.useCallback)((function(){l(""),m(""),N("")}),[]);return Object(a.useEffect)((function(){return function(){e(b.deleteSelectTodo())}}),[]),Object(a.useEffect)((function(){n&&(l(n.title),m(n.description),x(n.date),N(n.time))}),[n]),Object(a.useEffect)((function(){c&&x(c)}),[c]),Object(a.useEffect)((function(){C(!(i&&h&&O&&y))}),[i,h,O,y]),Object(M.jsxs)("div",{className:"new-idea-item",children:[Object(M.jsx)("button",{type:"button",className:"new-idea-item__close",onClick:function(){return e(b.setOpenForm())},children:"\u2716"}),Object(M.jsx)("h1",{className:"new-idea-item__title",children:n?"Edit idea item":"Add new idea item"}),n?"Created at: ".concat(n.refreshDate):null,Object(M.jsx)("input",{placeholder:"Title goes here",type:"text",className:"new-idea-item__input new-idea-item__input--title",value:i,onChange:function(e){return l(e.target.value)}}),Object(M.jsx)("textarea",{placeholder:"Descriptions",className:"new-idea-item__input new-idea-item__input--text",value:h,onChange:function(e){return m(e.target.value)}}),Object(M.jsxs)("div",{className:"new-idea-item__set-time",children:[Object(M.jsx)("input",{type:"date",className:"new-idea-item__input new-idea-item__input--date",value:O,onChange:function(e){return x(e.target.value)}}),Object(M.jsx)("input",{type:"time",className:"new-idea-item__input new-idea-item__input--time",value:y,onChange:function(e){return N(e.target.value)}})]}),Object(M.jsxs)("div",{className:"new-idea-item__buttons",children:[Object(M.jsx)("button",{className:d()("new-idea-item__button","new-idea-item__button--save",{"is-disabled":T}),disabled:T,type:"button",onClick:function(){var t="".concat((new Date).toLocaleDateString("en-US")," ").concat((new Date).toTimeString().slice(0,8)),a={title:i,description:h,date:O,time:y,refreshDate:t};n?(e(z.editTodo(Object(V.a)({id:n.id},a))),e(b.deleteSelectTodo())):e(z.setTodos([Object(V.a)({id:1e5*Math.random()},a)])),e(b.setOpenForm()),k()},children:"Save"}),c&&Object(M.jsx)("button",{className:"new-idea-item__button new-idea-item__button--delete",type:"button",onClick:function(){n&&(e(z.removeTodo(n)),e(b.deleteSelectTodo()),e(b.setOpenForm())),k()},children:"Delete"})]})]})},J=function(){var e=v((function(e){return e.todos})).todos,t=v((function(e){return e.addTodo})).isOpen,n=function(e,t){var n=Object(a.useState)((function(){try{return JSON.parse(localStorage.getItem(e)||t)}catch(n){return t}})),c=Object(s.a)(n,2),o=c[0],r=c[1];return[o,function(t){r(t),localStorage.setItem(e,JSON.stringify(t))}]}("todos",[]),c=Object(s.a)(n,2)[1];return Object(a.useEffect)((function(){console.log("set"),c(e)}),[e]),Object(M.jsx)("div",{className:"App",children:Object(M.jsxs)("div",{className:"container",children:[Object(M.jsx)(C,{}),Object(M.jsx)(T,{}),t&&Object(M.jsx)(Y,{})]})})},L=n(25),B=Object(u.a)({reducer:{calendar:O,todos:E,addTodo:h}});Object(L.composeWithDevTools)();var A=B;o.a.render(Object(M.jsx)(i.a,{store:A,children:Object(M.jsx)(r.a,{children:Object(M.jsx)(J,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.fdf461ba.chunk.js.map