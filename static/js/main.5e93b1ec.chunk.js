(this.webpackJsonpmyjobs=this.webpackJsonpmyjobs||[]).push([[0],{111:function(e,a,t){},117:function(e,a,t){},120:function(e,a,t){},237:function(e,a,t){},238:function(e,a,t){},239:function(e,a,t){},240:function(e,a,t){},241:function(e,a,t){},246:function(e,a,t){},247:function(e,a,t){},248:function(e,a,t){},249:function(e,a,t){},250:function(e,a,t){},251:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),c=t(43),i=t.n(c),r=t(4),l=(t(111),t(266)),o=t(62),d=t.n(o),j=t(0),u=function(){var e,a,t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],i=n[1],o=Object(s.useState)(!1),u=Object(r.a)(o,2),p=u[0],b=u[1],h=Object(s.useState)(!1),m=Object(r.a)(h,2),O=m[0],v=m[1],x=Object(s.useState)({}),f=Object(r.a)(x,2),g=f[0],w=f[1],N=function(){localStorage.removeItem("data")},y=function(e){var a=e.name;return Object(j.jsxs)("div",{className:"candidate",children:[Object(j.jsx)("a",{href:"/applied-jobs",className:"apply",children:"Applied Jobs"}),Object(j.jsx)(l.a,{alt:a,src:"/broken-image.jpg",className:"avatar"}),Object(j.jsxs)("div",{className:"drop",children:[Object(j.jsx)(d.a,{className:"dropdown"}),Object(j.jsx)("div",{className:"dropdown-content",children:Object(j.jsx)("a",{href:"/",onClick:N,children:"Logout"})})]})]})},S=function(e){var a=e.name;return Object(j.jsxs)("div",{className:"candidate",children:[Object(j.jsx)("a",{href:"/post-job",className:"apply",children:"Post a Job"}),Object(j.jsx)(l.a,{alt:a,src:"/broken-image.jpg",className:"avatar"}),Object(j.jsxs)("div",{className:"drop",children:[Object(j.jsx)(d.a,{className:"dropdown"}),Object(j.jsx)("div",{className:"dropdown-content",children:Object(j.jsx)("a",{href:"/",onClick:N,children:"Logout"})})]})]})};return Object(s.useEffect)((function(){var e,a,t=window.location.pathname,s=JSON.parse(localStorage.getItem("data"));("/login"===t||"/signup"===t||s)&&i(!1),s&&1==(null===(e=s[0])||void 0===e?void 0:e.userRole)&&(b(!0),w(s)),s&&0==(null===(a=s[0])||void 0===a?void 0:a.userRole)&&(v(!0),w(s))}),[]),Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsxs)("a",{href:"/",className:"brand",children:[Object(j.jsx)("span",{children:"My"}),"Jobs"]}),c&&Object(j.jsx)("a",{href:"/login",className:"login",children:"Login/Signup"}),p?Object(j.jsx)(y,{name:null===(e=g[0])||void 0===e?void 0:e.name}):null,O?Object(j.jsx)(S,{name:null===(a=g[0])||void 0===a?void 0:a.name}):null]})},p=t(22),b=t(6),h=(t(117),t.p+"static/media/desk.a9cb69ae.jpg"),m={landingAchieve:[{title:"Get more visibility",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},{title:"Organize your candidates",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"Verify their abilities",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}]},O=function(){var e=JSON.parse(localStorage.getItem("data")),a=Object(b.g)();Object(s.useEffect)((function(){var t,s;e&&1===(null===(t=e[0])||void 0===t?void 0:t.userRole)?a.push("/home"):e&&0===(null===(s=e[0])||void 0===s?void 0:s.userRole)?a.push("/home-recruiter"):a.push("/")}),[]);var t=function(e){var a=e.title,t=e.desc;return Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("p",{className:"tittle",children:a}),Object(j.jsx)("p",{className:"desc",children:t})]})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"intro",children:Object(j.jsxs)("div",{className:"info",children:[Object(j.jsxs)("div",{className:"greet",children:[Object(j.jsxs)("p",{children:["Welcome to My",Object(j.jsx)("span",{children:"Jobs"})]}),Object(j.jsx)("a",{href:"/login",className:"action",children:" Get Started "})]}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{width:"590px",height:"350px",src:h,alt:"landing asset"})})]})}),Object(j.jsxs)("div",{className:"about",children:[Object(j.jsxs)("div",{className:"goal",children:[Object(j.jsx)("p",{className:"heading",children:"Why Us"}),Object(j.jsx)("div",{className:"achieve",children:m.landingAchieve.map((function(e,a){return Object(j.jsx)(t,{title:e.title,desc:e.desc},a)}))})]}),Object(j.jsxs)("div",{className:"partners",children:[Object(j.jsx)("p",{className:"header",children:"Companies who trust us"}),Object(j.jsx)("div",{className:"companies"})]})]})]})},v=t(3),x=t.n(v),f=t(8),g=(t(120),t(19)),w="https://jobs-api.squareboat.info/api/v1",N=t(10),y=t.n(N),S=t(5),k=S.a().shape({email:S.c().email("Invalid email").required("Enter email"),password:S.c().min(6,"Enter password greater than 6 characters").required("Enter password")}),C=function(){var e=Object(b.g)(),a=function(){return""!==i.email&&""!==i.password},t=Object(g.a)({initialValues:{email:"",password:""},validateOnBlur:!0,validateOnChange:!0,validationSchema:k,onSubmit:function(){var t=Object(f.a)(x.a.mark((function t(){var s,n,c,r,l,o,d,j,u;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=17;break}return t.prev=1,t.next=4,y.a.post("".concat(w,"/auth/login"),i,{headers:{"Content-Type":"application/json"}});case 4:l=t.sent,o=null===l||void 0===l||null===(s=l.data)||void 0===s||null===(n=s.data)||void 0===n?void 0:n.id,d=null===l||void 0===l||null===(c=l.data)||void 0===c||null===(r=c.data)||void 0===r?void 0:r.userRole,j=[],o&&(j.push(null===l||void 0===l||null===(u=l.data)||void 0===u?void 0:u.data),localStorage.setItem("data",JSON.stringify(j))),1===d?e.replace("/home"):e.replace("/home-recruiter"),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(1),i.email="",i.password="",alert(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}()}),s=t.handleSubmit,n=t.handleChange,c=t.errors,i=t.values;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"ceil"}),Object(j.jsxs)("div",{className:"signin",children:[Object(j.jsxs)("form",{onSubmit:s,children:[Object(j.jsx)("p",{className:"header",children:" Login "}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{children:"Email Address"}),Object(j.jsx)("input",{type:"text",name:"email",id:"email",value:i.email,onChange:n,placeholder:"Enter your email",required:!0}),c&&Object(j.jsx)("p",{className:"error",children:c.email})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsxs)("label",{className:"password",children:["Password",Object(j.jsx)("a",{href:"/forgot-password",children:"Forgot Your Password?"})]}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",value:i.password,onChange:n,placeholder:"Enter your password",required:!0}),c&&Object(j.jsx)("p",{className:"error",children:c.password})]}),Object(j.jsx)("div",{className:"submit",children:Object(j.jsx)("button",{type:"submit",className:"login",children:"Login"})})]}),Object(j.jsx)("div",{className:"new_account",children:Object(j.jsxs)("p",{children:["New to MyJobs? ",Object(j.jsx)("a",{href:"/signup",children:" Create an account "})]})})]})]})},F=(t(237),S.a().shape({email:S.c().email("Invalid email address").required("Enter email"),password:S.c().min(6,"Password must be greater than 6").required("Enter password"),name:S.c().required("Field is mandatory"),confirmPassword:S.c().oneOf([S.b("password")],"Password does not match").required("Field is mandatory")})),E=function(){var e=Object(b.g)(),a=Object(s.useState)(0),t=Object(r.a)(a,2),n=t[0],c=t[1],i=Object(g.a)({initialValues:{email:"",password:"",name:"",confirmPassword:"",skills:"",userRole:0},validateOnBlur:!0,validateOnChange:!0,validationSchema:F,onSubmit:function(){var a=Object(f.a)(x.a.mark((function a(){return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.post("".concat(w,"/auth/register"),u,{headers:{"Content-Type":"application/json"}});case 3:0===n?alert("you successfully signed up as a recruiter"):alert("you successfully signed up as a candidate"),e.push("/login"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),alert(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()}),l=i.handleSubmit,o=i.handleChange,d=i.errors,u=i.values;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"ceil"}),Object(j.jsxs)("div",{className:"signup",children:[Object(j.jsxs)("form",{onSubmit:l,children:[Object(j.jsx)("p",{className:"header",children:"SignUp"}),Object(j.jsxs)("div",{className:"selector",children:[Object(j.jsx)("label",{children:"I'm a*"}),Object(j.jsxs)("div",{className:"category",children:[0===n?Object(j.jsx)("span",{className:"opts",style:{background:"#43AFFF",border:"1px solid #43AFFF"},onClick:function(){c(0),u.userRole=0},children:"Recruiter"}):Object(j.jsx)("span",{className:"opts",onClick:function(){c(0),u.userRole=0},children:"Recruiter"}),1===n?Object(j.jsx)("span",{className:"opts",style:{background:"#43AFFF",border:"1px solid #43AFFF"},onClick:function(){c(1),u.userRole=1},children:"Candidate"}):Object(j.jsx)("span",{className:"opts",onClick:function(){c(1),u.userRole=1},children:"Candidate"})]})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{children:"Full Name*"}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",value:u.name,onChange:o,placeholder:"Enter your full name",required:!0}),d&&Object(j.jsx)("p",{className:"error",children:null===d||void 0===d?void 0:d.name})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{children:"Email Address*"}),Object(j.jsx)("input",{type:"text",name:"email",id:"email",value:u.email,onChange:o,placeholder:"Enter your email",required:!0}),d&&Object(j.jsx)("p",{className:"error",children:null===d||void 0===d?void 0:d.email})]}),Object(j.jsxs)("div",{className:"password",children:[Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{children:"Create Password*"}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",value:u.password,onChange:o,placeholder:"Enter your password",required:!0}),d&&Object(j.jsx)("p",{className:"error",children:null===d||void 0===d?void 0:d.password})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{children:"Confirm Password*"}),Object(j.jsx)("input",{type:"password",name:"confirmPassword",id:"confirmPassword",value:u.confirmPassword,onChange:o,placeholder:"Enter your confirm password",required:!0}),d&&Object(j.jsx)("p",{className:"error",children:null===d||void 0===d?void 0:d.confirmPassword})]})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{children:"Skills"}),Object(j.jsx)("input",{type:"text",name:"skills",id:"skills",value:u.skills,onChange:o,placeholder:"Enter your comma sepearted skills"})]}),Object(j.jsx)("div",{className:"submit",children:Object(j.jsx)("button",{type:"submit",className:"login",onClick:l,children:"Sign Up"})})]}),Object(j.jsx)("div",{className:"new_account",children:Object(j.jsxs)("p",{children:["Have an account? ",Object(j.jsx)("a",{href:"/login",children:" Login "})]})})]})]})},I=(t(238),S.a().shape({email:S.c().email("Invalid email").required("Email is required")})),J=function(){var e=Object(b.g)(),a=Object(g.a)({initialValues:{email:""},validateOnBlur:!0,validateOnChange:!0,validationSchema:I,onSubmit:function(){var a=Object(f.a)(x.a.mark((function a(){var t;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.get("".concat(w,"/auth/resetpassword"),c,{headers:{"Content-Type":"application/json"}});case 3:t=a.sent,alert(t),e.push("/reset-password"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),alert(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}()}),t=a.handleSubmit,s=a.handleChange,n=a.errors,c=a.values;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"ceil"}),Object(j.jsxs)("div",{className:"forgot",children:[Object(j.jsx)("p",{className:"header",children:"Forgot your password?"}),Object(j.jsx)("p",{className:"des",children:"Enter the email associated with your account and we\u2019ll send you instructions to reset your password."}),Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{children:"Email Address"}),Object(j.jsx)("input",{type:"text",name:"email",id:"email",value:c.email,onChange:s,placeholder:"Enter your email",required:!0}),n&&Object(j.jsx)("p",{className:"error",children:n.email})]}),Object(j.jsx)("div",{className:"submit",children:Object(j.jsx)("button",{type:"submit",className:"login",children:"Submit"})})]})]})]})},q=(t(239),S.a().shape({password:S.c().min(6,"Password must be greater than 6").required("Enter password"),confirmPassword:S.c().oneOf([S.b("password")],"Password does not match").required("Field is mandatory")})),P=function(){var e=Object(b.g)(),a=Object(g.a)({initialValues:{password:"",confirmPassword:"",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGlzQGdtYWlsLmNvbSIsImlhdCI6MTU5MTEyOTg1NSwiZXhwIjoxNTkxMTMzNDU1fQ.qWTTb-HDhFKsjZbYaKZlLeosKbJQBRERX-pQumFIak4"},validateOnBlur:!0,validateOnChange:!0,validationSchema:q,onSubmit:function(){var a=Object(f.a)(x.a.mark((function a(){var t;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.get("".concat(w,"/auth/resetpassword"),n,{headers:{"Content-Type":"application/json"}});case 3:t=a.sent,alert(t),e.push("/login"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),alert(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}()}),t=a.handleSubmit,s=a.handleChange,n=a.values,c=a.errors;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"ceil"}),Object(j.jsxs)("div",{className:"reset",children:[Object(j.jsx)("p",{className:"header",children:"Reset your password?"}),Object(j.jsx)("p",{className:"des",children:"Enter your new password below."}),Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{children:"New Password"}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",value:n.password,onChange:s,placeholder:"Enter your password",required:!0}),c&&Object(j.jsx)("p",{className:"error",children:null===c||void 0===c?void 0:c.password})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{children:"Confirm New Password"}),Object(j.jsx)("input",{type:"password",name:"confirmPassword",id:"confirmPassword",value:n.confirmPassword,onChange:s,placeholder:"Enter your password",required:!0}),c&&Object(j.jsx)("p",{className:"error",children:null===c||void 0===c?void 0:c.confirmPassword})]}),Object(j.jsx)("div",{className:"submit",children:Object(j.jsx)("button",{type:"submit",className:"login",children:"Reset"})})]})]})]})},_=(t(240),t(241),t(48)),A=t.n(_),R=function(e){var a=e.data,t=e.applied,s=a.description,n=void 0===s?"":s,c=a.id,i=void 0===c?"":c,r=a.location,l=void 0===r?"":r,o=a.title,d=void 0===o?"":o,u=JSON.parse(localStorage.getItem("data"));function p(){return(p=Object(f.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("".concat(w,"/candidates/jobs"),{jobId:i},{headers:{Authorization:null===(a=u[0])||void 0===a?void 0:a.token}});case 3:alert("Your apllication is submited"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),alert("There was some problem submitting your application, please submit later.");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("p",{className:"title",children:d}),Object(j.jsx)("p",{className:"desc",children:n}),Object(j.jsxs)("div",{className:"actions",children:[Object(j.jsxs)("p",{className:"location",children:[Object(j.jsx)(A.a,{style:{fontSize:"15px",color:"#43AFFF"}})," ",l]}),t?null:Object(j.jsx)("button",{className:"apply",onClick:function(){!function(){p.apply(this,arguments)}()},children:"Apply"})]})]})},T=(t(242),t(104)),L=t.n(T),z=(t(246),function(){var e=Object(b.g)();return Object(j.jsxs)("div",{className:"empty_applied",children:[Object(j.jsx)(L.a,{style:{width:"106px",height:"106px",color:"#A9AFBC"}}),Object(j.jsx)("p",{className:"ins",children:"Your applied jobs will show here!"}),Object(j.jsx)("button",{className:"all_jobs",onClick:function(){e.push("/home")},children:"See All Jobs"})]})}),B=function(e){var a,t=e.data,s=e.applied,c=null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data,i=n.a.useState(1),l=Object(r.a)(i,2),o=(l[0],l[1],n.a.useState(10)),d=Object(r.a)(o,2);d[0],d[1];return Object(j.jsxs)("div",{className:"jobs",children:[s?Object(j.jsx)("p",{className:"header",children:"Jobs applied by you"}):Object(j.jsx)("p",{className:"header",children:"Jobs for you"}),Object(j.jsx)("div",{className:"alljobs",children:s?c?null===c||void 0===c?void 0:c.map((function(e){return Object(j.jsx)(R,{data:e,applied:!0},null===e||void 0===e?void 0:e.id)})):Object(j.jsx)(z,{}):null===c||void 0===c?void 0:c.map((function(e){return Object(j.jsx)(R,{data:e,applied:!1},null===e||void 0===e?void 0:e.id)}))})]})},V=function(){var e=Object(b.g)(),a=Object(s.useState)({}),t=Object(r.a)(a,2),n=t[0],c=t[1],i=JSON.parse(localStorage.getItem("data")),l=Object(s.useState)(!1),o=Object(r.a)(l,2),d=o[0],u=o[1];function p(){return(p=Object(f.a)(x.a.mark((function e(){var a,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,y.a.get("".concat(w,"/candidates/jobs"),{headers:{Authorization:null===(a=i[0])||void 0===a?void 0:a.token}});case 4:t=e.sent,c(t),u(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return window.onload=function(){window.location.hash||(window.location=window.location+"#loaded",window.location.reload())},Object(s.useEffect)((function(){localStorage.length>0?function(){p.apply(this,arguments)}():e.push("/"),window.onload()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"ceil"}),d&&"Loading.....",Object(j.jsx)(B,{data:n,applied:!1})]})},M=function(){var e=Object(s.useState)({}),a=Object(r.a)(e,2),t=a[0],n=a[1],c=JSON.parse(localStorage.getItem("data"));function i(){return(i=Object(f.a)(x.a.mark((function e(){var a,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(w,"/candidates/jobs/applied"),{headers:{Authorization:null===(a=c[0])||void 0===a?void 0:a.token}});case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"ceil"}),Object(j.jsx)(B,{data:t,applied:!0})]})},U=(t(247),t(248),function(e){var a=e.value;return Object(j.jsxs)("div",{className:"applicants",children:[Object(j.jsxs)("div",{className:"applicants_header",children:[Object(j.jsx)(l.a,{alt:a.name,src:"/broken-image.jpg",className:"applicants_avatar"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:a.name}),Object(j.jsx)("p",{children:a.email})]})]}),Object(j.jsxs)("div",{className:"applicants_skills",children:[Object(j.jsx)("p",{children:"Skills"}),Object(j.jsx)("p",{children:a.skills})]})]})}),Y=function(e){var a,t,s,n,c=e.data,i=e.close;return Object(j.jsxs)("div",{className:"application_container",children:[Object(j.jsxs)("div",{className:"application_header",children:[Object(j.jsx)("p",{children:"Application for this job"}),Object(j.jsx)("span",{onClick:i,children:"x"})]}),Object(j.jsx)("div",{className:"count",children:Object(j.jsxs)("p",{children:["Totla ",(null===c||void 0===c||null===(a=c.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.length)||0," applications"]})}),Object(j.jsx)("div",{className:"applications",children:null===c||void 0===c||null===(s=c.data)||void 0===s||null===(n=s.data)||void 0===n?void 0:n.map((function(e,a){return Object(j.jsx)(U,{value:e},a)}))})]})},G=function(e){var a=e.data,t=Object(s.useState)({}),n=Object(r.a)(t,2),c=n[0],i=n[1],l=Object(s.useState)(!1),o=Object(r.a)(l,2),d=o[0],u=o[1],p=a.description,b=void 0===p?"":p,h=a.id,m=void 0===h?"":h,O=a.location,v=void 0===O?"":O,g=a.title,N=void 0===g?"":g,S=JSON.parse(localStorage.getItem("data"));function k(){return(k=Object(f.a)(x.a.mark((function e(){var a,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(w,"/recruiters/jobs/").concat(m,"/candidates"),{headers:{Authorization:null===(a=S[0])||void 0===a?void 0:a.token}});case 3:t=e.sent,i(t),u(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,"error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("p",{className:"job_title",children:N}),Object(j.jsx)("p",{className:"desc",children:b}),Object(j.jsxs)("div",{className:"actions",children:[Object(j.jsxs)("p",{className:"location",children:[Object(j.jsx)(A.a,{style:{fontSize:"15px",color:"#43AFFF"}})," ",v]}),Object(j.jsx)("button",{className:"apply",onClick:function(){!function(){k.apply(this,arguments)}()},children:"View Application"})]})]}),d?Object(j.jsx)(Y,{close:function(){u(!1)},data:c}):null]})},W=function(e){var a,t,s=e.data,n=null===s||void 0===s||null===(a=s.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.data;return console.log(n),Object(j.jsxs)("div",{className:"posted_jobs",children:[Object(j.jsx)("p",{className:"title",children:"Jobs posted by you"}),Object(j.jsx)("div",{className:"all_posted_jobs",children:null===n||void 0===n?void 0:n.map((function(e){return Object(j.jsx)(G,{data:e},e.id)}))})]})},Q=(t(249),function(){var e=Object(s.useState)({}),a=Object(r.a)(e,2),t=a[0],n=a[1],c=JSON.parse(localStorage.getItem("data"));function i(){return(i=Object(f.a)(x.a.mark((function e(){var a,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(w,"/recruiters/jobs"),{headers:{Authorization:null===(a=c[0])||void 0===a?void 0:a.token}});case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return window.onload=function(){window.location.hash||(window.location=window.location+"#loaded",window.location.reload())},Object(s.useEffect)((function(){!function(){i.apply(this,arguments)}(),window.onload()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"ceil"}),Object(j.jsx)(W,{data:t})]})}),D=(t(250),S.a().shape({title:S.c().required("Enter job title"),location:S.c().required("Enter job location"),description:S.c().required("Enter job description")})),K=[{name:"landing",path:"/",page:O},{name:"login",path:"/login",page:C},{name:"signup",path:"/signup",page:E},{name:"forgotPassword",path:"/forgot-password",page:J},{name:"resetPassword",path:"/reset-password",page:P},{name:"home",path:"/home",page:V},{name:"appliedJobs",path:"/applied-jobs",page:M},{name:"recruiter",path:"/home-recruiter",page:Q},{name:"postJob",path:"/post-job",page:function(){var e=JSON.parse(localStorage.getItem("data")),a=Object(g.a)({initialValues:{title:"",description:"",location:""},validateOnBlur:!0,validateOnChange:!0,validationSchema:D,onSubmit:function(){var a=Object(f.a)(x.a.mark((function a(){var t;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.post("".concat(w,"/jobs/"),c,{headers:{Authorization:null===(t=e[0])||void 0===t?void 0:t.token}});case 3:alert("Your job is posted"),c.title="",c.description="",c.location="",a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(){return a.apply(this,arguments)}}()}),t=a.handleSubmit,s=a.handleChange,n=a.errors,c=a.values;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"ceil"}),Object(j.jsx)("div",{className:"post_job_form",children:Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsx)("p",{className:"post_job_header",children:"Post a Job"}),Object(j.jsxs)("div",{className:"post_job_inputs",children:[Object(j.jsx)("label",{children:"Job Title*"}),Object(j.jsx)("input",{type:"text",name:"title",id:"title",value:c.title,onChange:s,placeholder:"Enter job title",required:!0}),n.title&&Object(j.jsx)("p",{className:"error",children:n.title})]}),Object(j.jsxs)("div",{className:"post_job_inputs",children:[Object(j.jsx)("label",{children:"Description*"}),Object(j.jsx)("textarea",{type:"text",name:"description",id:"description",value:c.description,onChange:s,rows:"5",placeholder:"Enter job description",required:!0}),n.description&&Object(j.jsx)("p",{className:"error",children:n.description})]}),Object(j.jsxs)("div",{className:"post_job_inputs",children:[Object(j.jsx)("label",{children:"Location*"}),Object(j.jsx)("input",{type:"text",name:"location",id:"location",value:c.location,onChange:s,placeholder:"Enter job location",required:!0}),n.location&&Object(j.jsx)("p",{className:"error",children:n.location})]}),Object(j.jsx)("div",{className:"post_job_submit",children:Object(j.jsx)("button",{type:"submit",children:"Post"})})]})})]})}}];var X=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)(p.a,{children:Object(j.jsxs)(b.d,{children:[K.map((function(e){return Object(j.jsx)(b.b,{exact:!0,path:e.path,component:e.page},e.name)})),Object(j.jsx)(b.a,{to:"/"})]})})]})};i.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(X,{})}),document.getElementById("root"))}},[[251,1,2]]]);
//# sourceMappingURL=main.5e93b1ec.chunk.js.map