(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{39:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(33),i=c.n(n),r=c(4),s=(c(39),c(15)),l=c(0),o=function(){return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,to:"/",activeClassName:"current",className:"navig-link",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,to:"/about",className:"navig-link",activeClassName:"current",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,to:"/blog/page/1",className:"navig-link",activeClassName:"current",children:"Blog"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,to:"/projects",className:"navig-link",activeClassName:"current",children:"Projects"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,to:"/contact",className:"navig-link",activeClassName:"current",children:"Contact"})})]})})},j=c.p+"static/media/jadapic.27c2290b.jpeg",d=function(){return Object(l.jsxs)("div",{className:"home-content",children:[Object(l.jsxs)("div",{className:"home-left left-grid-item",children:[Object(l.jsx)("h1",{children:"Hi! I'm Jada Lilleboe."}),Object(l.jsx)("h2",{children:"I'm a computer science student at the University of Minnesota Twin-Cities."}),Object(l.jsx)("p",{children:"Feel free to explore this site to learn more about me!"})]}),Object(l.jsx)("div",{className:"right-grid-item jada-picture",children:Object(l.jsx)("img",{src:j,alt:"Jada Lilleboe",className:"img-fluid"})})]})},b=c.p+"static/media/jadapic2.0e74f163.jpeg",h=function(){return Object(l.jsxs)("div",{className:"about-content",children:[Object(l.jsx)("div",{className:"left-grid-item jada-picture-2",children:Object(l.jsx)("img",{className:"img-fluid",src:b,alt:"placecholder"})}),Object(l.jsxs)("div",{className:"right-grid-item about-info",children:[Object(l.jsx)("h1",{children:"About Me"}),Object(l.jsx)("p",{children:"Hi! My name is Jada Lilleboe, and I am currently a sophomore student at the University of Minnesota Twin-Cities. I am pursuing a B.A. in Computer Science and a minor in Technical Writing and Communication. I became interested in computer science after taking an introductory progamming course at the U (and enjoying it very much). I'm an officer of the UMN student group ACM-W, and a staunch advocate for the retention of women in computing and technology."}),Object(l.jsx)("p",{children:"I was born in Minneapolis, MN and grew up in Cottage Grove, MN. I graduated from Park High School in 2020 with summa cum laude distinction. While in high school, I participated in theater, choir, and marching band."}),Object(l.jsx)("p",{children:"Lately, coding and making interactive web applications have been my main hobbies. I enjoy web development because there's so much to learn, and so many different areas to try out like front-end, back-end, etc."}),Object(l.jsx)("p",{children:"Some of my other hobbies are reading, yoga, and spending time with friends and family."}),Object(l.jsxs)("p",{children:["Feel free to reach out to me about anything! I'm always happy to chat, and all of my contact information can be found on the ",Object(l.jsx)(r.b,{to:"/contact",className:"paragraph-link",children:"contact page"}),"."]})]})]})},m=c(73),u=c(74),p=c(72),x=function(e){var t=e.title,c=e.excerpt,a=e.id,n=e.date;return Object(l.jsx)(m.a,{children:Object(l.jsxs)(m.a.Body,{children:[Object(l.jsx)(m.a.Title,{children:t}),Object(l.jsx)(m.a.Subtitle,{className:"mb-2 text-muted",children:n}),Object(l.jsx)(m.a.Text,{children:c}),Object(l.jsx)(r.b,{to:"/blog/post/".concat(a),children:Object(l.jsx)(u.a,{children:"Read More"})})]})})},g=function(e){var t=e.pageNum,c=e.posts,a=9*t,n=a-9,i=function(e){var t=new Date(e),c=t.getFullYear(),a=t.getMonth(),n=t.getDate();return["January","February","March","April","May","June","July","August","September","October","November","December"][a]+" "+n+", "+c},s=c.slice(n,a);return 1===parseInt(t)?Object(l.jsxs)("div",{className:"blog-content",children:[Object(l.jsx)("h1",{style:{textAlign:"center",padding:20},children:"Jada's Blog"}),Object(l.jsx)(p.a,{children:s.map((function(e,t){return Object(l.jsx)(x,{title:e.title,excerpt:e.excerpt,id:e.id,date:i(e.date)},t)}))})]}):a>c.length?Object(l.jsxs)("div",{className:"blog-content",children:[Object(l.jsx)("h1",{style:{textAlign:"center",padding:20},children:"Jada's Blog"}),Object(l.jsx)(p.a,{children:s.map((function(e,t){return Object(l.jsx)(x,{title:e.title,excerpt:e.excerpt,id:e.id},t)}))}),Object(l.jsx)(r.b,{to:"/blog/page/".concat(parseInt(t)-1),children:Object(l.jsx)(u.a,{style:{margin:10},children:"<-"})})]}):Object(l.jsxs)("div",{className:"blog-content",children:[Object(l.jsx)("h1",{style:{textAlign:"center"},children:"Jada's Blog"}),Object(l.jsx)(p.a,{children:s.map((function(e,t){return Object(l.jsx)(x,{title:e.title,excerpt:e.excerpt,id:e.id},t)}))}),Object(l.jsx)(r.b,{to:"/blog/page/".concat(parseInt(t)-1),children:Object(l.jsx)(u.a,{style:{margin:10},children:"<-"})}),Object(l.jsx)(r.b,{to:"/blog/page/".concat(parseInt(t)+1),children:Object(l.jsx)(u.a,{style:{margin:10},children:"->"})})]})},O=c(3),f=c(22),v=c.n(f),y="/api/posts",k=function(){return v.a.get(y).then((function(e){return e.data}))},N=function(e){var t=v.a.get(y+"/"+e);return console.log(y+"/"+e),t.then((function(e){return e.data}))},w=function(e){var t=e.id,c=Object(O.f)(),n=new DOMParser,i=Object(a.useState)({}),o=Object(s.a)(i,2),j=o[0],d=o[1];Object(a.useEffect)((function(){N(t).then((function(e){d(e)})).catch((function(){return console.log("there was an error")}))}),[t]);var b=n.parseFromString(j.content,"text/html");return Object(l.jsxs)("div",{className:"blog-post",children:[Object(l.jsxs)("div",{className:"blog-post-content",children:[Object(l.jsx)("p",{className:"blog-post-info",style:{padding:"10px 15px 0px"},children:function(e){var t=new Date(e),c=t.getFullYear(),a=t.getMonth(),n=t.getDate();return["January","February","March","April","May","June","July","August","September","October","November","December"][a]+" "+n+", "+c}(j.date)}),Object(l.jsxs)("p",{className:"blog-post-info",style:{padding:"0px 15px 0px"},children:["By ",Object(l.jsx)(r.b,{to:"/about",children:"Jada Lilleboe"})]}),Object(l.jsx)("h1",{children:j.title}),Object(l.jsx)("div",{className:"blog-post-text",dangerouslySetInnerHTML:{__html:b.body.innerHTML},style:{textAlign:"left",padding:"30px"}})]}),Object(l.jsx)(u.a,{style:{margin:10,backgroundColor:"black",borderColor:"white"},onClick:function(){return c.goBack()},children:"<-"})]})},I=function(){return Object(l.jsxs)("div",{className:"contact-content",children:[Object(l.jsx)("h1",{children:"Contact Information"}),Object(l.jsxs)("div",{className:"contact-group",children:[Object(l.jsx)("h2",{children:"Feel free to contact me by any of the below methods."}),Object(l.jsxs)("p",{children:["E-mail: ",Object(l.jsx)("a",{className:"paragraph-link",href:"mailto: lilleboejada@gmail.com",children:"lilleboejada@gmail.com"})]}),Object(l.jsxs)("p",{children:["Phone: ",Object(l.jsx)("a",{className:"paragraph-link",href:"tel:6512423092",children:"651-242-3092"})]}),Object(l.jsx)("a",{className:"paragraph-link",href:"https://www.linkedin.com/in/jadalilleboe/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})]})]})},C=c.p+"static/media/email.e7cb8613.png",S=c.p+"static/media/survivorapi.2de2d5ed.png",L=function(e){var t=e.img,c=e.title,a=e.text,n=e.ghLink,i=e.otherLink,r=e.otherLinkText;return Object(l.jsxs)(m.a,{style:{maxWidth:"30rem",height:"fit-content",overflow:"hidden",display:"inline-block",color:"white",backgroundColor:"#126948",margin:"20px",flexGrow:0},children:[Object(l.jsx)(m.a.Img,{src:t}),Object(l.jsxs)(m.a.Body,{children:[Object(l.jsx)(m.a.Title,{children:c}),Object(l.jsx)(m.a.Text,{children:a}),Object(l.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(l.jsx)(u.a,{className:"project-button",style:{backgroundColor:"#d2b48c",color:"black",marginBottom:10},children:"GitHub Repository"})}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:Object(l.jsx)(u.a,{className:"project-button",style:{backgroundColor:"#d2b48c",color:"black",maxHeight:"5em"},children:r})})]})]})},M=function(){return Object(l.jsxs)("div",{className:"projects-content",children:[Object(l.jsx)("h1",{style:{padding:20},children:"Projects"}),Object(l.jsxs)("div",{className:"projects-cards",children:[Object(l.jsx)(L,{className:"project-1",img:C,title:"Subreddit Email Summaries",text:"This is a full-stack web application that allows users to sign-up for a daily, weekly, or monthly subreddit summary sent via e-mail.",ghLink:"https://github.com/jadalilleboe/subreddit_summaries",otherLink:"http://subredditemailsummary.com",otherLinkText:"Subreddit Email Summary Signup Website"}),Object(l.jsx)(L,{className:"project-2",img:S,title:"Survivor Database & API",text:"For this project, I used web scraping tools to make a database about CBS's show Survivor. I then built an API that could query the data.",ghLink:"https://github.com/jadalilleboe/survivor-db-api",otherLink:"https://www.postman.com/jlillebo/workspace/survivor-api/overview",otherLinkText:"Postman Collection"}),Object(l.jsx)(L,{className:"project-3",img:"https://via.placeholder.com/150x75",title:"Wellness Wendell",text:"Work in progress. The idea is to make a web app where users can customize wellness messages sent to to them via text.",otherLinkText:""})]})]})},J=c(16),T=function(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)("p",{className:"copyright",children:"\xa9 2021 by Jada Lilleboe."}),Object(l.jsxs)("ul",{className:"socials-bar",children:[Object(l.jsx)("li",{children:Object(l.jsx)(J.SocialIcon,{url:"https://www.linkedin.com/in/jadalilleboe/",target:"_blank"})}),Object(l.jsx)("li",{children:Object(l.jsx)(J.SocialIcon,{url:"https://github.com/jadalilleboe",bgColor:"white",target:"_blank"})}),Object(l.jsx)("li",{children:Object(l.jsx)(J.SocialIcon,{url:"https://www.tiktok.com/@codeforbeginners?lang=en",bgColor:"white",target:"_blank"})})]})]})},A=(c(69),c(70),function(e){var t=e.posts;return Object(l.jsxs)(O.c,{children:[Object(l.jsx)(O.a,{exact:!0,path:"/",component:d}),Object(l.jsx)(O.a,{exact:!0,path:"/contact",component:I}),Object(l.jsx)(O.a,{exact:!0,path:"/projects",component:M}),Object(l.jsx)(O.a,{path:"/blog/page/:pageNum",render:function(e){return Object(l.jsx)(g,{pageNum:e.match.params.pageNum,posts:t})}}),Object(l.jsx)(O.a,{exact:!0,path:"/blog/post/:id",render:function(e){return Object(l.jsx)(w,{id:e.match.params.id})}}),Object(l.jsx)(O.a,{exact:!0,path:"/about",component:h})]})}),B=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){k().then((function(e){e.reverse(),n(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("div",{className:"content-wrapper",children:[Object(l.jsx)(o,{}),Object(l.jsx)(A,{posts:c}),Object(l.jsx)(T,{})]})};i.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.47a726ee.chunk.js.map