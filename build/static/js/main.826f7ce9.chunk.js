(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{11:function(e,a,t){},17:function(e,a,t){e.exports=t(34)},22:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),s=(t(22),t(6));const o=["btn--primary","btn--outline","btn--test"],i=["btn--medium","btn--large"],m=e=>{let{children:a,type:t,onClick:n,buttonStyle:l,buttonSize:c}=e;const m=o.includes(l)?l:o[0],d=i.includes(c)?c:i[0];return r.a.createElement(s.b,{to:"/Contact",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(m," ").concat(d),onClick:n,type:t},a))};t(31);var d=function(){const[e,a]=Object(n.useState)(!1),[t,l]=Object(n.useState)(!0),c=()=>a(!1),o=()=>{window.innerWidth<=960?l(!1):l(!0)};return Object(n.useEffect)(()=>{o()},[]),window.addEventListener("resize",o),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(s.b,{to:"Henry",className:"navbar-logo",onClick:c},"Henry Lee"),r.a.createElement("div",{className:"menu-icon",onClick:()=>a(!e)},r.a.createElement("i",{className:e?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:e?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/Experience",className:"nav-links",onClick:c},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/Projects",className:"nav-links",onClick:c},"Projects")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Contact",className:"nav-links-mobile",onClick:c},"Contact"))),t&&r.a.createElement(m,{buttonStyle:"btn--outline"},"Contact"))))};t(8),t(11);var u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement(s.b,{className:"cards__item__link",to:e.path},r.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"cards__item__img",alt:"Travel",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var p=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,"Work Experience"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(u,{src:"images/civic.jpg",text:"Designed a project to assess urban walkability in downtown South Bend, using wearable sensors to monitor pedestrian heart rates \nAnalyzed biometric and location data using Python Pandas, and TensorFlow to create a machine learning model to evaluate pedestrian stress levels and  improve urban walkability in downtown South Bend\n",label:"Lucy Civic Innovation Lab Intern",path:"/Experience"}),r.a.createElement(u,{src:"images/res.jpeg",text:"Conducted tests to measure thermal deformations of machine tools\nAnalyzed data using MATLAB and compiled weekly reports on findings\n",label:"Research Assistant at Notre Dame",path:"/Experience"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(u,{src:"images/paint.jpeg",text:"Painted multiple summers taking on increasing responsibilities each year\nWas responsible for driving the truck to job sites and managing my own crew for part of the summer\nLed and organized team members to efficiently paint entire houses, successfully completing over fifty houses in one summer\n",label:"Painter for Tom Dits and Sons LLC",path:"/Experience"}),r.a.createElement(u,{src:"images/trinity.png",text:"Set up new computers for student use at my old high school\nInstalled software and performed tech maintenance on computers\n",label:"Technician at Trinity School",path:"/Experience"}),r.a.createElement(u,{src:"images/quark.jpg",text:"Conducted summer physics research at Notre Dame as part of the QuarkNet Program",label:"QuarkNet Intern",path:"/Experience"})))))};var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null))},E=t(1);var g=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(u,{src:"images/irishsat.png",text:"Brainstormed for Floating Dragon challenge sent out by NASA and am in the middle of trying to create a prototype in collaboration  with a variety of different college of engineering majors Worked on assembling and problem shooting how the payload in the  project would be deployed Wrote code for deployment of node based on certain altitude",label:"IrishSAT Computing Team",path:"/Projects"}),r.a.createElement(u,{src:"images/burnout.png",text:"Collaborated with a team to make a MATLAB app that visualized a large data set about Med student burnout",label:"Engineering Computing Project",path:"/Projects"}),r.a.createElement(u,{src:"images/sidewalkmodel.png",text:"Created a machine learning model utilizing python libraries such as TensorFlow and Pandas in order to draw correlations  between sidewalk quality and civilian stress",label:"Correlating Stress and Enviroment Data",path:"/Projects"})))))};function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))}var f=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,"Hobbies"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(u,{src:"images/civic.jpg",text:"I love training in the gym with both wieghts and cardio. ",label:"Weight Lifting",path:"/services"}),r.a.createElement(u,{src:"images/res.jpeg",text:"Conducted tests to measure thermal deformations of machine tools\nAnalyzed data using MATLAB and compiled weekly reports on findings\n",label:"Sports",path:"/services"}),r.a.createElement(u,{src:"images/res.jpeg",text:"Conducted tests to measure thermal deformations of machine tools\nAnalyzed data using MATLAB and compiled weekly reports on findings\n",label:"Woodworking",path:"/services"})))))};function v(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null))}var y=t(10);t(32);var N=()=>r.a.createElement("div",{className:"contact-container"},r.a.createElement("img",{src:"/images/henry.jpg",alt:"Henry Lee",className:"profile-photo"}),r.a.createElement("h1",null,"Henry Lee"),r.a.createElement("p",null,"Feel free to reach out to me on any of the following platforms:"),r.a.createElement("div",{className:"contact-icons"},r.a.createElement("a",{href:"https://github.com/hlee26",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.b,{size:70})),r.a.createElement("a",{href:"https://linkedin.com/in/henryjlee21",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.c,{size:70})),r.a.createElement("a",{href:"mailto:hlee26@nd.edu"},r.a.createElement(y.a,{size:70}))));t(33);var _=function(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("img",{src:"/images/domegold-transformed.jpeg",alt:"Background",className:"background-photo"}),r.a.createElement("h1",null,"Henry Lee"),r.a.createElement("p",null,"Hello, my name is Henry. I am currently studying Computer Science at the University of Notre Dame. Throughout my academic journey thus far, I have formed a firm foundation in software engineering, and I am very passionate about predictive modeling with AI and its potential to anticipate future trends or outcomes. Please reach out anytime and Go Irish!"),r.a.createElement("div",{className:"hero-btns"}))};var w=function(){return r.a.createElement(_,null)};var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(d,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/Henry",exact:!0,component:w}),r.a.createElement(E.a,{path:"/Experience",exact:!0,component:h}),r.a.createElement(E.a,{path:"/Projects",component:b}),r.a.createElement(E.a,{path:"/Hobbies",component:v}),r.a.createElement(E.a,{path:"/Contact",component:N}))))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))},8:function(e,a,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.826f7ce9.chunk.js.map