(this.webpackJsonpmy_community_landmark=this.webpackJsonpmy_community_landmark||[]).push([[0],{33:function(e,t,a){e.exports=a(54)},39:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),c=a(14),i=a(8),u=a(9),s=a(11),m=a(10),d=a(12),p=a(56),h=a(15),f=a(55),b=a(57),E=a(58),v=a(61),g=a(59),y=a(60),k=(a(39),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(h.a)(n)),n.state={collapsed:!0},n}return Object(u.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(f.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},r.a.createElement(p.a,null,r.a.createElement(b.a,{tag:c.b,to:"/"},"My_Community_Landmark"),r.a.createElement(E.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(v.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},r.a.createElement("ul",{className:"navbar-nav flex-grow"},r.a.createElement(g.a,null,r.a.createElement(y.a,{tag:c.b,className:"text-dark",to:"/"},"Home")),r.a.createElement(g.a,null,r.a.createElement(y.a,{tag:c.b,className:"text-dark",to:"/counter"},"Counter")),r.a.createElement(g.a,null,r.a.createElement(y.a,{tag:c.b,className:"text-dark",to:"/fetch-data"},"Fetch data")))))))}}]),a}(n.Component));k.displayName=k.name;var w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(p.a,null,this.props.children))}}]),a}(n.Component);w.displayName=w.name;var j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello, world!"),r.a.createElement("p",null,"Welcome to your new single-page application, built with:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://get.asp.net/"},"ASP.NET Core")," and ",r.a.createElement("a",{href:"https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"},"C#")," for cross-platform server-side code"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://facebook.github.io/react/"},"React")," for client-side code"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://getbootstrap.com/"},"Bootstrap")," for layout and styling")),r.a.createElement("p",null,"To help you get started, we have also set up:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Client-side navigation"),". For example, click ",r.a.createElement("em",null,"Counter")," then ",r.a.createElement("em",null,"Back")," to return here."),r.a.createElement("li",null,r.a.createElement("strong",null,"Development server integration"),". In development mode, the development server from ",r.a.createElement("code",null,"create-react-app")," runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file."),r.a.createElement("li",null,r.a.createElement("strong",null,"Efficient production builds"),". In production mode, development-time features are disabled, and your ",r.a.createElement("code",null,"dotnet publish")," configuration produces minified, efficiently bundled JavaScript files.")),r.a.createElement("p",null,"The ",r.a.createElement("code",null,"ClientApp")," subdirectory is a standard React application based on the ",r.a.createElement("code",null,"create-react-app")," template. If you open a command prompt in that directory, you can run ",r.a.createElement("code",null,"npm")," commands such as ",r.a.createElement("code",null,"npm test")," or ",r.a.createElement("code",null,"npm install"),"."))}}]),a}(n.Component);j.displayName=j.name;var C=a(22),O=a.n(C),N=a(31),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={forecasts:[],loading:!0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.populateWeatherData()}},{key:"render",value:function(){var e=this.state.loading?r.a.createElement("p",null,r.a.createElement("em",null,"Loading...")):a.renderForecastsTable(this.state.forecasts);return r.a.createElement("div",null,r.a.createElement("h1",{id:"tabelLabel"},"Weather forecast"),r.a.createElement("p",null,"This component demonstrates fetching data from the server."),e)}},{key:"populateWeatherData",value:function(){var e=Object(N.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("weatherforecast");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({forecasts:a,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"renderForecastsTable",value:function(e){return r.a.createElement("table",{className:"table table-striped","aria-labelledby":"tabelLabel"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Temp. (C)"),r.a.createElement("th",null,"Temp. (F)"),r.a.createElement("th",null,"Summary"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.date},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.temperatureC),r.a.createElement("td",null,e.temperatureF),r.a.createElement("td",null,e.summary))}))))}}]),a}(n.Component);x.displayName=x.name;var T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={currentCount:0},n.incrementCounter=n.incrementCounter.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"incrementCounter",value:function(){this.setState({currentCount:this.state.currentCount+1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Counter"),r.a.createElement("p",null,"This is a simple example of a React component."),r.a.createElement("p",{"aria-live":"polite"},"Current count: ",r.a.createElement("strong",null,this.state.currentCount)),r.a.createElement("button",{className:"btn btn-primary",onClick:this.incrementCounter},"Increment"))}}]),a}(n.Component);T.displayName=T.name;a(53);var L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition((function(e){console.log("Latitude is:",e.coords.latitude),console.log("Longitude is:",e.coords.longitude),console.log("Name is :",e.displayName)}))}},{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(d.a,{exact:!0,path:"/",component:j}),r.a.createElement(d.a,{path:"/counter",component:T}),r.a.createElement(d.a,{path:"/fetch-data",component:x}))}}]),a}(n.Component);L.displayName=L.name;var W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=document.getElementsByTagName("base")[0].getAttribute("href"),S=document.getElementById("root");o.a.render(r.a.createElement(c.a,{basename:F},r.a.createElement(L,null)),S),function(){if("serviceWorker"in navigator){if(new URL("/mycommunitylandmark",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/mycommunitylandmark","/service-worker.js");W?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):D(e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.6d84ea26.chunk.js.map