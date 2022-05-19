var ue=Object.defineProperty,_e=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var ae=(s,t,o)=>t in s?ue(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,B=(s,t)=>{for(var o in t||(t={}))he.call(t,o)&&ae(s,o,t[o]);if(ie)for(var o of ie(t))fe.call(t,o)&&ae(s,o,t[o]);return s},Z=(s,t)=>_e(s,pe(t));import{o as c,c as d,p as x,a as N,b as e,d as w,e as b,r as F,A as ge,P as me,N as ve,f as E,w as $,g as j,h as m,u as l,S as ye,F as P,i as be,j as G,t as k,k as y,l as I,v as V,m as $e,n as g,q as we,s as le,R as O,x as Se,y as re,z as R,B as q,C as T,D as K,E as ke,G as Ie,T as Te,H as Ve,I as Ue,J as Le,O as xe}from"./vendor.05521578.js";const Ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}};Ne();var S=(s,t)=>{const o=s.__vccOpts||s;for(const[i,n]of t)o[i]=n;return o};const Ce={},Fe=s=>(x("data-v-2e14fdd1"),s=s(),N(),s),Me={class:"footer"},qe=Fe(()=>e("div",{class:"content has-text-centered"},[e("p",null,[e("strong",null,"Wellness"),w(" by Jeremy Segarra.")])],-1)),Ee=[qe];function Pe(s,t){return c(),d("footer",Me,Ee)}var Re=S(Ce,[["render",Pe],["__scopeId","data-v-2e14fdd1"]]),De="/assets/wellness-logo.png";const Oe=["src"],Ae=b({setup(s){const t=["/assets/thomas-bormans-pcpsVsyFp_s-unsplash.jpg","/assets/kelly-sikkema-6aY-6B3MiZ4-unsplash.jpg","/assets/brett-jordan-MwkDKpOQmGc-unsplash.jpg","/assets/fabian-blank-pElSkGRA2NU-unsplash.jpg","/assets/krakenimages-376KN_ISplE-unsplash.jpg","/assets/kelly-sikkema-6aY-6B3MiZ4-unsplash.jpg","/assets/towfiqu-barbhuiya-0ITvgXAU5Oo-unsplash.jpg","/assets/towfiqu-barbhuiya-jpqyfK7GB4w-unsplash.jpg"],o=F([ge,me,ve]);return(i,n)=>(c(),E(l(be),{spaceBetween:30,centeredSlides:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:l(o),class:"mySwiper"},{default:$(()=>[(c(),d(P,null,j(t,a=>m(l(ye),{key:a},{default:$(()=>[e("img",{src:a},null,8,Oe)]),_:2},1024)),64))]),_:1},8,["modules"]))}});function Be(){const s=new Date;return`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`}const se="/api/";async function Q(s){return fetch(se+s).then(t=>t.json())}function X(s,t,o,i){let n={headers:i};return console.log("Im inside my fetch modulerAPI, and the body is",t),console.log("The url is",s),t&&(n={method:o!=null?o:"POST",cache:"no-cache",credentials:"same-origin",headers:B({"Content-Type":"application/json"},i),body:JSON.stringify(t)}),fetch(se+s,n).then(a=>a.json())}async function je(s,t){const o=await fetch(se+s,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(!o.ok){const n=await o.json();throw console.log("this is the data in MyFetch",n),n}return await o.json()}const J=G("friends",{state:()=>({friendsList:[],allUsers:[],pendingRequests:[]}),actions:{async filteredDataArray(s){console.log("Im inside the filteredDataArray in pinia"),console.log("This is the searchfield",s);const o=await L().api("friends/filter",{searchField:s},"PUT");console.log("This is the filteredFriends",o),this.friendsList=o},async addFriend(s){const o=L().session.user;if(!o)throw new Error("You must be logged in to add friends");const i=JSON.parse(JSON.stringify(this.pendingRequests[s]));try{const n=await X(`friends/add_friend/${o._id}`,i,"POST");console.log("This is the response to add a new user",n),this.pendingRequests.splice(s,1),console.log("This is the current state locally pending requests",this.pendingRequests),this.friendsList.push(i),console.log("This is the current state locally friends list",this.friendsList)}catch(n){console.log("This is the error for the add friend",n)}},async removePendingRequest(s,t){const i=L().session.user;let n;if(!i)throw new Error("You must be logged in to add friends");t==="friend-list"?(n=JSON.parse(JSON.stringify(this.friendsList[s])),this.friendsList.splice(s,1)):(n=JSON.parse(JSON.stringify(this.pendingRequests[s])),this.pendingRequests.splice(s,1)),console.log("This is the user to be removed",n),console.log("This is the user without parseing",this.friendsList[s]);try{const a=await X(`friends/deny_request/${i._id}`,Z(B({},n),{currentTab:t}),"PATCH");console.log("This is the response to remove a pending request or friend",a)}catch(a){console.log("This is the error for the remove pending request or friend",a)}},async friendRequest(s){const o=L().session.user;if(!o)throw new Error("You must be logged in to send requests");const i=JSON.parse(JSON.stringify(this.allUsers[s]));console.log("We click addFriend button and find the user in the list by id, Then we send the that id to the api, to then add the body of the request to that users pending request list ",i);try{const n=await je(`friends/friend_request/${i._id}`,{username:o.username,email:o.email,pic:o.pic});console.log("Im in the try catch here is the response, ",n.data)}catch(n){console.log("this is the error in the try catch",n)}},async fetchAll(){this.allUsers=(await Q("users")).data},async fetchFriends(){const s=L();if(!s.session.user)throw new Error("You must be logged in to fetch friends");const t=(await Q(`friends/${s.session.user._id}`)).data;this.friendsList=t.friendsList},async fetchPendingRequests(){const s=L();if(!s.session.user)throw new Error("You must be logged in to fetch friends");const t=(await Q(`friends/${s.session.user._id}`)).data;this.pendingRequests=t.pendingRequests}}}),H=G("user",{state:()=>({date:Be(),friendsStore:J(),sessionStore:L(),list:[]}),actions:{randomNumberGenerator(){return Math.floor(Math.random()*30)+1},async editUser(s){const t=this.sessionStore.session.user;if(!t)throw new Error("User not logged in");console.log("this is the session user",t.username);const o=await this.sessionStore.api("users/edit-user",s,"PATCH");console.log("this is the session user take 2",t.username),t.firstName=s.firstName,t.lastName=s.lastName,console.log("This is the edit response",o)},async addToDo(s){const t=this.sessionStore.session.user;if(!t)throw new Error("User not logged in");const o={message:s};await this.sessionStore.api("messages",o,"POST"),t.myMessages.push(o)},deleteToDo(s){const t=this.sessionStore.session.user;if(!t)throw new Error("User not logged in");const i={message:t.myMessages[s].message,currentTab:"my-list"};console.log("this is the payload in the client",i),this.sessionStore.api("messages/delete-message",i,"DELETE"),t.myMessages.splice(s,1)},async setNewUser(s,t,o,i,n){const a={firstName:s,lastName:t,username:o,email:i,password:n,pic:`https://randomuser.me/api/portraits/men/${this.randomNumberGenerator()}.jpg`,recievedMessages:[],myMessages:[],sentMessages:[],pendingRequests:[],friendsList:[]},u=await fetch("http://localhost:3001/api/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!u.ok)throw console.log("this is in the not ok"),await u.json()},async deleteMessage(s,t,o){const i=this.sessionStore.session.user;let n;if(!i)throw new Error("You are not logged in");switch(t){case"my-list":n=i.myMessages.splice(s,1);break;case"recieved":n=i.recievedMessages.splice(s,1);break;default:n=i.sentMessages.splice(s,1)}const a=Z(B({},n[0]),{currentTab:t});console.log("This is the payload: ",a);const u=await this.sessionStore.api("messages/delete-message",a,"DELETE");console.log("This is the delete message: ",u)},async sendMessage(s,t){const o=this.sessionStore.session.user;if(!o)throw new Error("You are not logged in");const i=JSON.parse(JSON.stringify(o.friendsList[s])),n={message:t,reciever:i.username,sender:o.username,date:this.date};o.sentMessages.push(B({},n));const a=await this.sessionStore.api("messages/send",n,"POST");console.log("This is the sent message response",a)}}}),Je={class:"panel-block is-active"},He=e("span",{class:"panel-icon"},[e("i",{class:"fas fa-book","aria-hidden":"true"})],-1),Ye=b({props:["todo"],setup(s){const t=s;return console.log("Im the prop todo",t.todo),(o,i)=>(c(),d("div",{onClick:i[0]||(i[0]=n=>o.$emit("delete"))},[e("a",Je,[He,w(" "+k(t.todo),1)])]))}}),Ke={class:"section"},Ge={class:"panel is-info"},ze=e("p",{class:"panel-heading"},"Reminders",-1),We={class:"panel-block"},Ze={class:"control has-icons-left"},Qe=["onKeydown"],Xe=e("span",{class:"icon is-left"},[e("i",{class:"fa-solid fa-clipboard-check"})],-1),es=b({setup(s){const t=y(""),o=y(""),i=H(),n=i.sessionStore.session.user;if(!n)throw new Error("No user found in session");const a=n.myMessages;function u(){i.addToDo(o.value),v()}function r(h){i.deleteToDo(h)}function v(){t.value="",o.value=""}return(h,p)=>(c(),d("div",Ke,[e("article",Ge,[ze,e("div",We,[e("p",Ze,[I(e("input",{class:"input is-info",type:"text",placeholder:"New ToDo","onUpdate:modelValue":p[0]||(p[0]=_=>o.value=_),onKeydown:$e(u,["enter"])},null,40,Qe),[[V,o.value]]),Xe])]),(c(!0),d(P,null,j(l(a),(_,f)=>(c(),E(Ye,{key:f,todo:_.message,onDelete:C=>r(f)},null,8,["todo","onDelete"]))),128))])]))}});const ss={class:"container"},ts=b({setup(s){return(t,o)=>(c(),d("div",ss,[m(Ae),m(es)]))}});var os=S(ts,[["__scopeId","data-v-35cccece"]]);const z=s=>(x("data-v-17c03253"),s=s(),N(),s),ns={class:"field"},is=z(()=>e("p",null,[e("strong",null,"Username")],-1)),as={class:"control has-icons-left has-icons-right"},ls=z(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-envelope"})],-1)),rs={key:0,style:{color:"red"}},cs={class:"field"},ds=z(()=>e("p",null,[e("strong",null,"Password")],-1)),us={class:"control has-icons-left has-icons-right"},_s=["type"],ps=z(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-lock"})],-1)),hs=["onClick"],fs={key:0,class:"fa-solid fa-eye-slash eye"},gs={key:1,class:"fa-solid fa-eye"},ms={key:0,style:{color:"red"}},vs=b({setup(s){const t=L(),o=y(""),i=y(""),n=y(!1),a=F({type:!1,message:""}),u=F({type:!1,message:""});function r(){t.Login(o.value,i.value).then(()=>{a.type=!1,u.type=!1,J().fetchPendingRequests(),M.push("/home")}).catch(p=>{p.message==="User not found please re-enter username"?(a.type=!0,u.type=!1,a.message=p.message):(a.type=!1,u.type=!0,u.message=p.message)})}function v(){console.log(n.value),n.value=!n.value}function h(p){p.preventDefault()}return(p,_)=>(c(),d(P,null,[e("div",ns,[is,e("p",as,[I(e("input",{class:"input",type:"email",placeholder:"Type your username","onUpdate:modelValue":_[0]||(_[0]=f=>o.value=f)},null,512),[[V,o.value]]),ls]),l(a).type?(c(),d("p",rs,k(l(a).message),1)):g("",!0)]),e("div",cs,[ds,e("p",us,[I(e("input",{class:"input",type:n.value?"test":"password",placeholder:"Type your password","onUpdate:modelValue":_[1]||(_[1]=f=>i.value=f)},null,8,_s),[[we,i.value]]),ps,e("span",{class:"icon is-small is-right",style:{cursor:"pointer"},onClick:le(v,["prevent"]),onMousedown:h,"aria-hidden":"true"},[n.value?(c(),d("i",fs)):(c(),d("i",gs))],40,hs)]),l(u).type?(c(),d("p",ms,k(l(u).message),1)):g("",!0)]),e("div",{class:"field"},[e("div",{class:"section"},[e("p",{class:"control"},[e("button",{class:"button is-info is-fullwidth is-rounded login-brand",onClick:r}," Login ")])])])],64))}});var ys=S(vs,[["__scopeId","data-v-17c03253"]]);const bs=s=>(x("data-v-f42e9fb6"),s=s(),N(),s),$s=Se('<div class="section" data-v-f42e9fb6><p data-v-f42e9fb6><strong data-v-f42e9fb6>Sign In Using</strong></p><button class="button google-brand brand" data-v-f42e9fb6><i class="fa-brands fa-google" data-v-f42e9fb6></i></button><button class="button twitter-brand brand" data-v-f42e9fb6><i class="fa-brands fa-twitter" data-v-f42e9fb6></i></button><button class="button facebook-brand brand" data-v-f42e9fb6><i class="fa-brands fa-facebook" data-v-f42e9fb6></i></button></div>',1),ws={class:"field"},Ss={class:"section"},ks=bs(()=>e("p",null,[e("strong",null,"Or Sign Up Using")],-1)),Is=w("Sign Up"),Ts=b({setup(s){return(t,o)=>(c(),d(P,null,[$s,e("div",ws,[e("div",Ss,[ks,m(l(O),{to:"/signup",class:"button signup-brand is-rounded is-info"},{default:$(()=>[Is]),_:1})])])],64))}});var Vs=S(Ts,[["__scopeId","data-v-f42e9fb6"]]);const Us={},Ls={class:"section"},xs={class:"title"};function Ns(s,t){return c(),d("div",Ls,[e("h1",xs,[re(s.$slots,"default",{},void 0,!0)])])}var te=S(Us,[["render",Ns],["__scopeId","data-v-2cdc62be"]]);const Cs=s=>(x("data-v-3748dc6c"),s=s(),N(),s),Fs={class:"columns is-mobile"},Ms={class:"column is-four-fifths is-offset-1"},qs=w("Login"),Es=Cs(()=>e("p",null,[e("strong",null,"Note To Professor:"),w(" to easily log in without creating an account use donald. "),e("strong",null,"Username:"),w(" donald, "),e("strong",null,"Password:"),w(" Qq1!1111 ")],-1)),Ps=b({setup(s){return(t,o)=>{const i=R("Card");return c(),d("div",Fs,[e("div",Ms,[m(te,null,{default:$(()=>[qs]),_:1}),Es,m(i,null,{default:$(()=>[m(ys),m(Vs)]),_:1})])])}}});var Rs=S(Ps,[["__scopeId","data-v-3748dc6c"]]);const U=s=>(x("data-v-07af1cfe"),s=s(),N(),s),Ds=["onSubmit"],Os={class:"field"},As=U(()=>e("label",{class:"label"},"First Name",-1)),Bs={class:"control has-icons-left has-icons-right"},js=U(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-user"})],-1)),Js={key:0,class:"help is-danger"},Hs={class:"field"},Ys=U(()=>e("label",{class:"label"},"Last Name",-1)),Ks={class:"control has-icons-left has-icons-right"},Gs=U(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-user"})],-1)),zs={key:0,class:"help is-danger"},Ws={class:"field"},Zs=U(()=>e("label",{class:"label"},"Username",-1)),Qs={class:"control has-icons-left has-icons-right"},Xs=U(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-user"})],-1)),et={key:0,class:"help is-danger"},st={class:"field"},tt=U(()=>e("label",{class:"label"},"Email",-1)),ot={class:"control has-icons-left has-icons-right"},nt=U(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-envelope"})],-1)),it={key:0,class:"help is-danger"},at={class:"field"},lt=U(()=>e("label",{class:"label"},"Password",-1)),rt={class:"control has-icons-left"},ct=U(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-lock"})],-1)),dt={key:0,class:"help is-danger"},ut=w(" Password must contain "),_t=U(()=>e("br",null,null,-1)),pt={key:0},ht={key:1},ft={key:2},gt={key:3},mt={key:4},vt={class:"field"},yt=U(()=>e("label",{class:"label"},"Verify Password",-1)),bt={class:"control has-icons-left"},$t=U(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-lock"})],-1)),wt={key:0,class:"help is-danger"},St={class:"field is-grouped-centered is-horizontal"},kt=U(()=>e("p",{class:"control"},[e("button",{class:"button is-info",type:"submit"},"Submit")],-1)),It={class:"control"},Tt=w(" Cancel "),Vt=b({setup(s){const t=H(),o=y(!1),i=F({value:"",isValid:!0}),n=F({value:"",isValid:!0}),a=F({name:"",isValid:!0,isTaken:!1,error:"Username field cannot be empty "}),u=F({value:"",isValid:!0}),r=F({value:"",verify:"",passwordIsValid:!0,verifyIsValid:!0,whitespace:!1,length:!1,uppercase:!1,lowercase:!1,symbol:!1,digit:!1});q(()=>i.value,()=>{i.isValid=i.value!==""}),q(()=>n.value,()=>{n.isValid=n.value!==""}),q(()=>a.name,()=>{a.isValid=a.name!=="",a.error="Username field cannot be empty "}),q(()=>u.value,()=>{const p=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;u.isValid=u.value!==""||p.test(u.value),u.isValid=p.test(u.value)}),q(()=>r.value,()=>{const p=/(?=.*[A-Z])/,_=/^(?=.*[a-z])/,f=/^(?=.*[0-9])/,C=/^.{8,16}$/,Y=/^(?=.*[~!@#$%^&*()--+={}\[\]|\\:;<>,.?/_₹])/;r.passwordIsValid=r.value==="",r.digit=f.test(r.value),r.uppercase=p.test(r.value),r.lowercase=_.test(r.value),r.length=C.test(r.value),r.symbol=Y.test(r.value),r.passwordIsValid=r.digit&&r.length&&r.lowercase&&r.uppercase&&r.symbol}),q(()=>r.verify,()=>{r.verifyIsValid=r.verify!==""&&r.value===r.verify});function v(){o.value=i.value!==""&&n.value!==""&&a.name!==""&&u.value!==""&&r.value!==""}function h(){if(v(),o.value===!1){i.isValid=!1,n.isValid=!1,a.isValid=!1,u.isValid=!1,r.passwordIsValid=!1,r.verifyIsValid=!1;return}if(r.verify===""){r.verifyIsValid=!1;return}console.log(i.value,n.value,a.name,u.value,r.value),t.setNewUser(i.value,n.value,a.name,u.value,r.value).then(()=>{M.push("/")}).catch(p=>{console.log("Im inside the catch block of the signup form",p.errors[0]),p.errors[0].type==="username"&&(console.log("Im inside the username error"),a.isTaken=!0,a.error=p.errors[0].message,a.isValid=!1)})}return(p,_)=>(c(),d("form",{onSubmit:le(h,["prevent"])},[e("div",Os,[As,e("div",Bs,[I(e("input",{class:T(["input",l(i).isValid?"is-info":"is-danger"]),type:"text",placeholder:"first name","onUpdate:modelValue":_[0]||(_[0]=f=>l(i).value=f)},null,2),[[V,l(i).value,void 0,{trim:!0}]]),js]),l(i).isValid?g("",!0):(c(),d("p",Js," First name field cannot be empty "))]),e("div",Hs,[Ys,e("div",Ks,[I(e("input",{class:T(["input",l(n).isValid?"is-info":"is-danger"]),type:"text",placeholder:"last name","onUpdate:modelValue":_[1]||(_[1]=f=>l(n).value=f)},null,2),[[V,l(n).value,void 0,{trim:!0}]]),Gs]),l(n).isValid?g("",!0):(c(),d("p",zs," Last name field cannot be empty "))]),e("div",Ws,[Zs,e("div",Qs,[I(e("input",{class:T(["input",l(a).isValid?"is-info":"is-danger"]),type:"text",placeholder:"Enter a username","onUpdate:modelValue":_[2]||(_[2]=f=>l(a).name=f)},null,2),[[V,l(a).name,void 0,{trim:!0}]]),Xs]),l(a).isValid?g("",!0):(c(),d("p",et,k(l(a).error),1))]),e("div",st,[tt,e("div",ot,[I(e("input",{class:T(["input",l(u).isValid?"is-info":"is-danger"]),type:"email",placeholder:"Enter your email","onUpdate:modelValue":_[3]||(_[3]=f=>l(u).value=f)},null,2),[[V,l(u).value,void 0,{trim:!0}]]),nt]),l(u).isValid?g("",!0):(c(),d("p",it," Please enter a valid email "))]),e("div",at,[lt,e("div",rt,[I(e("input",{class:T(["input",l(r).passwordIsValid?"is-info":"is-danger"]),type:"password",placeholder:"Password",autocomplete:"new-password","onUpdate:modelValue":_[4]||(_[4]=f=>l(r).value=f)},null,2),[[V,l(r).value,void 0,{trim:!0}]]),ct]),l(r).passwordIsValid?g("",!0):(c(),d("p",dt,[ut,_t,e("ul",null,[l(r).length?g("",!0):(c(),d("li",pt,"8 to 16 characters")),l(r).uppercase?g("",!0):(c(),d("li",ht,"at least 1 uppercase character")),l(r).lowercase?g("",!0):(c(),d("li",ft,"at least 1 lowercase character")),l(r).symbol?g("",!0):(c(),d("li",gt,"at least 1 symbol")),l(r).digit?g("",!0):(c(),d("li",mt,"at least 1 number"))])]))]),e("div",vt,[yt,e("div",bt,[I(e("input",{class:T(["input",l(r).verifyIsValid?"is-info":"is-danger"]),type:"password",placeholder:"Password",autocomplete:"new-password","onUpdate:modelValue":_[5]||(_[5]=f=>l(r).verify=f)},null,2),[[V,l(r).verify,void 0,{trim:!0}]]),$t]),l(r).verifyIsValid?g("",!0):(c(),d("p",wt," Password does not match"))]),e("div",St,[kt,e("p",It,[m(l(O),{class:"button is-light",to:"/"},{default:$(()=>[Tt]),_:1})])])],40,Ds))}});var Ut=S(Vt,[["__scopeId","data-v-07af1cfe"]]);const Lt={class:"columns is-mobile"},xt={class:"column is-half is-offset-one-quarter"},Nt=w("Sign Up"),Ct=b({setup(s){return(t,o)=>{const i=R("Card");return c(),d("div",Lt,[e("div",xt,[m(te,null,{default:$(()=>[Nt]),_:1}),m(i,null,{default:$(()=>[m(Ut)]),_:1})])])}}});var Ft=S(Ct,[["__scopeId","data-v-4e76a110"]]);const W=s=>(x("data-v-d7f5f642"),s=s(),N(),s),Mt={class:"message-header"},qt=W(()=>e("strong",null,"Sent By:",-1)),Et=W(()=>e("br",null,null,-1)),Pt=W(()=>e("strong",null,"Date:",-1)),Rt=W(()=>e("i",{class:"fa-solid fa-reply"},null,-1)),Dt=w(" Reply "),Ot=[Rt,Dt],At={class:"message-body"},Bt=b({props:["message","list","index"],setup(s){const t=s,o=H(),i=y(!1);function n(){o.deleteMessage(t.index,t.list,t.message)}function a(){console.log("Im in reply message"),M.push("/friendslist")}return(u,r)=>(c(),d("article",{class:T(["message",i.value?"is-primary":"is-info"])},[e("div",Mt,[e("p",null,[qt,w(" "+k(t.message.sender)+" ",1),Et,Pt,w(" "+k(t.message.date),1)]),t.list==="recieved"?(c(),d("label",{key:0,onClick:a,class:"checkbox"},Ot)):g("",!0),e("button",{class:"delete","aria-label":"delete",onClick:n})]),e("div",At,k(t.message.message),1)],2))}});var jt=S(Bt,[["__scopeId","data-v-d7f5f642"]]);const Jt={class:"tabs is-toggle is-fullwidth is-small"},Ht=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fa-solid fa-inbox","aria-hidden":"true"})]),e("span",null,"Recieved")],-1),Yt=[Ht],Kt=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fa-solid fa-share","aria-hidden":"true"})]),e("span",null,"Sent")],-1),Gt=[Kt],zt={class:"columns is-mobile"},Wt={class:"column is-four-fifths is-offset-1"},Zt=b({setup(s){const o=L().session.user;if(!o)throw new Error("No user found");const i=o.sentMessages,n=o.recievedMessages,a=y("recieved"),u=K(()=>{switch(a.value){case"recieved":return n;case"sent":return i}});function r(v){a.value=v}return(v,h)=>(c(),d("section",null,[e("div",Jt,[e("ul",null,[e("li",{onClick:h[0]||(h[0]=p=>r("recieved")),class:T({"is-active":a.value==="recieved"})},Yt,2),e("li",{onClick:h[1]||(h[1]=p=>r("sent")),class:T({"is-active":a.value==="sent"})},Gt,2)])]),e("div",zt,[e("div",Wt,[(c(!0),d(P,null,j(l(u),(p,_)=>(c(),E(jt,{key:p,index:_,message:p,list:a.value},null,8,["index","message","list"]))),128))])])]))}}),ce=G("budget",{state:()=>({budget:0,list:[],sessionStore:L()}),actions:{async createBudget(){const s=this.sessionStore.session.user;if(console.log("This is the user in budget store",s),!s)throw new Error("User not logged in");const t={user:s.username,balance:0,items:[]},o=await this.sessionStore.api("budget/create",t,"POST");console.log("This is the response in the client",o),this.list.length>0&&(this.list=o.items.map(i=>({itemDescription:i.itemDescription,amount:i.amount}))),console.log("This is the response budget in create budget",o.budget),this.budget=o.budget,console.log("This is the list in the client",this.list)},async addItem(s,t){const o=this.sessionStore.session.user;if(console.log("This is the user in budget store",o),!o)throw new Error("User not logged in");const i={itemDescription:s,amount:t},n=await this.sessionStore.api("budget/add-item",i,"POST");this.budget=n.budget,this.list=n.items.map(a=>({itemDescription:a.itemDescription,amount:a.amount}))},async removeItem(s,t){const o=this.sessionStore.session.user;if(console.log("This is the user in budget store",o),!o)throw new Error("User not logged in");const i=this.list[s],n=await this.sessionStore.api("budget/delete-item",i,"DELETE");console.log("This is the response to delete item",n),this.list.splice(s,1)},async addFunds(s){if(!this.sessionStore.session.user)throw new Error("User not logged in");const o=await this.sessionStore.api("budget/add-funds",{budget:s},"PUT");console.log("This is the response in the client to add funds",o),this.budget=+o,console.log("This is the budget in the client",this.budget)},async removeFunds(s){if(!this.sessionStore.session.user)throw new Error("User not logged in");const o=await this.sessionStore.api("budget/remove-funds",{budget:s},"PUT");console.log("This is the response in the client to remove funds",o),this.budget=+o,console.log("This is the budget in the client",this.budget)}}});const Qt={},Xt={class:"card"},eo={class:"card-content"},so={class:"content"};function to(s,t){return c(),d("div",Xt,[e("div",eo,[e("div",so,[re(s.$slots,"default")])])])}var ee=S(Qt,[["render",to]]);const oo={class:"message is-primary"},no={class:"message-header"},io={class:"message-body"},ao=b({props:["desc","item","index"],setup(s){const t=s;return(o,i)=>(c(),d("article",oo,[e("div",no,[e("p",null,[e("strong",null,"Purchased Item: "+k(t.index),1)]),e("button",{class:"delete","aria-label":"delete",onClick:i[0]||(i[0]=n=>o.$emit("delete"))})]),e("div",io," You spent $"+k(+t.item)+" on "+k(t.desc),1)]))}});const oe=s=>(x("data-v-0b877b88"),s=s(),N(),s),lo={class:"columns is-mobile"},ro={class:"column"},co=w(" Balance "),uo={class:"fa-solid fa-dollar-sign"},_o={class:"field has-addons funds"},po={class:"control"},ho={class:"field"},fo=oe(()=>e("p",null,"New Item",-1)),go={class:"control has-icons-left has-icons-right"},mo=oe(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fa-solid fa-dollar-sign"})],-1)),vo={class:"field"},yo={class:"control has-icons-left"},bo=oe(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fa-solid fa-cart-shopping"})],-1)),$o=b({setup(s){const t=ce(),o=y(""),i=y(""),n=y(""),a=y(!1);function u(){a.value=!a.value}function r(){t.addFunds(+o.value),o.value=""}function v(){t.addItem(i.value,+n.value),n.value="",i.value=""}function h(){t.removeFunds(+o.value),o.value=""}function p(_){t.removeItem(_,+n.value)}return(_,f)=>(c(),d("div",lo,[e("div",ro,[m(ee,{class:"balance"},{default:$(()=>[e("p",null,[co,e("i",uo,[e("span",null,k(l(t).$state.budget),1)])]),e("div",_o,[e("p",po,[I(e("input",{class:"input",type:"text",placeholder:"Amount of money","onUpdate:modelValue":f[0]||(f[0]=C=>o.value=C)},null,512),[[V,o.value]])])]),e("a",{class:"button",onClick:r}," Add Funds "),e("a",{class:"button",onClick:h}," Remove Funds "),e("a",{class:"button",onClick:u}," Add New Item ")]),_:1}),a.value?(c(),E(ee,{key:0,class:"balance"},{default:$(()=>[e("div",ho,[fo,e("p",go,[I(e("input",{class:"input",type:"text",placeholder:"Amount","onUpdate:modelValue":f[1]||(f[1]=C=>n.value=C)},null,512),[[V,n.value]]),mo])]),e("div",vo,[e("p",yo,[I(e("input",{class:"input",type:"text",placeholder:"Item","onUpdate:modelValue":f[2]||(f[2]=C=>i.value=C)},null,512),[[V,i.value]]),bo])]),e("p",{class:"control"},[e("a",{class:"button",onClick:v}," Add")])]),_:1})):g("",!0),(c(!0),d(P,null,j(l(t).$state.list,(C,Y)=>(c(),E(ao,{desc:C.itemDescription,item:C.amount,index:Y,onDelete:ti=>p(Y)},null,8,["desc","item","index","onDelete"]))),256))])]))}});var wo=S($o,[["__scopeId","data-v-0b877b88"]]);const So=b({setup(s){return(t,o)=>(c(),E(wo))}});const de=s=>(x("data-v-083ffdc3"),s=s(),N(),s),ko={class:"control"},Io={class:"card-content"},To={class:"media"},Vo={class:"media-left"},Uo={class:"image is-120x120"},Lo=["src"],xo={class:"media-right"},No={class:"title is-4"},Co=de(()=>e("hr",null,null,-1)),Fo={class:"subtitle is-6"},Mo={key:0,class:"field"},qo=de(()=>e("div",{class:"field-label is-normal"},null,-1)),Eo={class:"field-body"},Po={class:"field"},Ro={class:"control"},Do={class:"card-footer"},Oo=b({props:["list","index","currentTab"],setup(s){const t=s,o=J(),i=H(),n=y("");function a(h){o.friendRequest(h)}function u(h){o.addFriend(h)}function r(h){o.removePendingRequest(h,t.currentTab)}function v(h){i.sendMessage(h,n.value),n.value=""}return(h,p)=>(c(),d("div",ko,[e("div",Io,[e("div",To,[e("div",Vo,[e("figure",Uo,[e("img",{src:s.list.pic,alt:"Placeholder image"},null,8,Lo)])]),e("div",xo,[e("p",No,k(t.list.username),1),Co,e("p",Fo,k(t.list.email),1)])]),t.currentTab==="friend-list"?(c(),d("div",Mo,[qo,e("div",Eo,[e("div",Po,[e("p",Ro,[I(e("input",{class:"input is-rounded",type:"email",placeholder:"Send Message","onUpdate:modelValue":p[0]||(p[0]=_=>n.value=_)},null,512),[[V,n.value]])])])])])):g("",!0)]),e("footer",Do,[t.currentTab==="active-users"?(c(),d("button",{key:0,href:"#",class:"card-footer-item button is-info",onClick:p[1]||(p[1]=_=>a(t.index))}," Send Friend Request ")):g("",!0),t.currentTab==="friend-list"?(c(),d("button",{key:1,href:"#",class:"card-footer-item button is-info",onClick:p[2]||(p[2]=_=>v(t.index))}," Send Message ")):g("",!0),t.currentTab==="pending-requests"?(c(),d("button",{key:2,href:"#",class:"card-footer-item button is-info",onClick:p[3]||(p[3]=_=>u(t.index))}," Add ")):g("",!0),t.currentTab==="friend-list"||t.currentTab==="pending-requests"?(c(),d("button",{key:3,href:"#",class:"card-footer-item button is-danger",onClick:p[4]||(p[4]=_=>r(t.index))}," Remove ")):g("",!0)])]))}});var Ao=S(Oo,[["__scopeId","data-v-083ffdc3"]]);const Bo={class:"tabs is-toggle is-fullwidth is-small"},jo=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fa-solid fa-user-group"})]),e("span",null,"Friends")],-1),Jo=[jo],Ho=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fa-solid fa-people-pulling"})]),e("span",null,"Pending Requests")],-1),Yo=[Ho],Ko=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fa-solid fa-people-group","aria-hidden":"true"})]),e("span",null,"Active Users")],-1),Go=[Ko],zo={class:"container"},Wo=e("template",{slot:"empty"},[w("No results found")],-1),Zo=b({setup(s){const t=J();t.fetchAll(),t.fetchFriends(),t.fetchPendingRequests();const o=y("friend-list"),i=y("");function n(r){o.value=r}const a=K(()=>{switch(o.value){case"friend-list":return t.friendsList;case"pending-requests":return t.pendingRequests;case"active-users":return t.allUsers}});function u(){console.log("Im inside select friends"),t.filteredDataArray(i.value)}return(r,v)=>{const h=R("o-autocomplete"),p=R("o-field");return c(),d("article",null,[e("div",Bo,[e("ul",null,[e("li",{onClick:v[0]||(v[0]=_=>n("friend-list")),class:T({"is-active":o.value==="friend-list"})},Jo,2),e("li",{onClick:v[1]||(v[1]=_=>n("pending-requests")),class:T({"is-active":o.value==="pending-requests"})},Yo,2),e("li",{onClick:v[2]||(v[2]=_=>n("active-users")),class:T({"is-active":o.value==="active-users"})},Go,2)])]),e("div",zo,[e("section",null,[m(p,{label:"Find a Friend"},{default:$(()=>[m(h,{rounded:"",expanded:"",placeholder:"Friends Name",icon:"search",modelValue:i.value,"onUpdate:modelValue":v[3]||(v[3]=_=>i.value=_),clearable:"",onKeyup:u},{default:$(()=>[Wo]),_:1},8,["modelValue"])]),_:1})])]),(c(!0),d(P,null,j(l(a),(_,f)=>(c(),E(Ao,{key:_,list:_,index:f,currentTab:o.value},null,8,["list","index","currentTab"]))),128))])}}});const ne=s=>(x("data-v-7face7e0"),s=s(),N(),s),Qo={class:"columns is-mobile"},Xo={class:"column is-four-fifths is-offset-1"},en=w("User Profile"),sn=ne(()=>e("p",{class:"edit"},[e("strong",null,"Edit User")],-1)),tn={class:"field"},on={class:"control has-icons-left"},nn=ne(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fa-solid fa-user-pen"})],-1)),an={key:0,class:"help is-danger"},ln={class:"field"},rn={class:"control has-icons-left"},cn=ne(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fa-solid fa-user-pen"})],-1)),dn={key:0,class:"help is-danger"},un=b({setup(s){const t=H(),o=y(!1),i=F({value:"",isValid:!0}),n=F({value:"",isValid:!0});q(()=>i.value,()=>{i.isValid=i.value!==""}),q(()=>n.value,()=>{n.isValid=n.value!==""});function a(){o.value=i.value!==""&&n.value!==""}function u(){if(console.log("Im in edit"),a(),o.value===!1){i.isValid=!1,n.isValid=!1;return}const v={firstName:i.value,lastName:n.value};t.editUser(v).then(()=>{console.log("Im inside the .then"),M.push("/home")}).catch(h=>{console.log("Im inside the .catch"),console.log(h)})}function r(){console.log("Im in cancel"),M.push("/home")}return(v,h)=>{const p=R("Card");return c(),d("div",Qo,[e("div",Xo,[m(te,null,{default:$(()=>[en]),_:1}),m(p,null,{default:$(()=>[sn,e("div",tn,[e("p",on,[I(e("input",{class:T(["input",l(i).isValid?"is-info":"is-danger"]),type:"text",placeholder:"Firstname","onUpdate:modelValue":h[0]||(h[0]=_=>l(i).value=_)},null,2),[[V,l(i).value]]),nn,l(i).isValid?g("",!0):(c(),d("p",an," First name field cannot be empty "))])]),e("div",ln,[e("p",rn,[I(e("input",{class:T(["input",l(n).isValid?"is-info":"is-danger"]),type:"text",placeholder:"Lastname","onUpdate:modelValue":h[1]||(h[1]=_=>l(n).value=_)},null,2),[[V,l(n).value]]),cn,l(n).isValid?g("",!0):(c(),d("p",dn," Last name field cannot be empty "))])]),e("div",{class:"field"},[e("p",{class:"control"},[e("button",{class:"button is-success",onClick:u},"Edit"),e("button",{class:"button is-success space",onClick:r}," Cancel ")])])]),_:1})])])}}});var _n=S(un,[["__scopeId","data-v-7face7e0"]]);const pn=[{path:"/",component:Rs},{path:"/home",component:os},{path:"/signup",component:Ft},{path:"/todo",component:Zt},{path:"/budget",component:So},{path:"/friendslist",component:Zo},{path:"/edit-user",component:_n}],M=ke({history:Ie(),routes:pn,linkActiveClass:"is-active"});M.beforeEach((s,t)=>{const o=["/home","/todo","/budget","/friendslist","/edit-user"],i=L();if(o.includes(s.path)&&!i.$state.session.user)return"/"});const L=G("login",{state:()=>({isLoggedIn:!1,session:{user:null}}),actions:{async Login(s,t){const o=await this.api("users/login",{username:s,password:t},"POST");if(console.log("This is the response before we check if its ok",o),o.message){console.log("Im not ok");const n=o;throw this.session.user=null,console.log("this is the error",n),n}console.log("This is right after the response is not ok and we swet loggin to true heres the data",o),this.session.user=o,this.isLoggedIn=!0;const i=ce();i.createBudget(),i.addItem("",0)},async Logout(){this.session.user=null,this.isLoggedIn=!1,M.push("/")},async api(s,t,o,i={}){var n,a;((n=this.session.user)==null?void 0:n.token)&&(i.Authorization=`Bearer ${this.session.user.token}`);try{const u=await X(s,t,o,i);if((a=u.errors)==null?void 0:a.length)throw console.log("Im throwing the errors down"),{message:u.errors.join(", ")};return await u.data}catch(u){return console.log("Im catching those errors i threw here ",u),u}}}});const hn=s=>(x("data-v-225ec5a7"),s=s(),N(),s),fn={class:"media"},gn={class:"image is-220x220"},mn=["src"],vn={class:"media-content"},yn={class:"content"},bn=w("Welcome Back "),$n=hn(()=>e("br",null,null,-1)),wn=b({setup(s){const o=L().session.user;if(!o)throw"User not Found";const i=y(o.username),n=y(o.pic);function a(){M.push("/edit-user")}return(u,r)=>(c(),d("article",fn,[e("figure",{class:"media-left",onClick:a},[e("a",gn,[e("img",{src:n.value},null,8,mn)])]),e("div",vn,[e("div",yn,[e("p",null,[e("strong",null,[bn,$n,w(k(i.value)+"!",1)])])])])]))}});var Sn=S(wn,[["__scopeId","data-v-225ec5a7"]]);const A=s=>(x("data-v-222552b5"),s=s(),N(),s),kn={class:"navbar-start"},In=A(()=>e("strong",null,"Home",-1)),Tn=A(()=>e("strong",null,"Messages",-1)),Vn={key:0,class:"icon"},Un=A(()=>e("i",{class:"fa-regular fa-envelope"},null,-1)),Ln=[Un],xn={key:1,class:"tag is-danger"},Nn=A(()=>e("strong",null,"Friends List ",-1)),Cn={key:0,class:"icon"},Fn=A(()=>e("i",{class:"fa-regular fa-bell"},null,-1)),Mn=[Fn],qn={key:1,class:"tag is-danger"},En=A(()=>e("strong",null,"Budget",-1)),Pn={key:0,class:"navbar-end"},Rn={class:"navbar-item"},Dn=b({props:{display:String},setup(s){const t=J(),o=L(),i=K(()=>t.pendingRequests.length),n=K(()=>{const u=o.session.user;if(!u)throw new Error("No logged in user found");return u.recievedMessages.length});function a(){o.Logout()}return(u,r)=>(c(),d("div",{class:T(["navbar-menu",s.display]),id:"nav-links"},[e("div",kn,[m(l(O),{to:"/home",class:"navbar-item"},{default:$(()=>[In]),_:1}),m(l(O),{to:"/todo",class:"navbar-item"},{default:$(()=>[Tn,l(o).isLoggedIn&&l(n)>0?(c(),d("span",Vn,Ln)):g("",!0),l(o).isLoggedIn&&l(n)>0?(c(),d("span",xn,k(l(n)),1)):g("",!0)]),_:1}),m(l(O),{to:"/friendslist",class:"navbar-item"},{default:$(()=>[Nn,l(o).isLoggedIn&&l(t).pendingRequests.length>0?(c(),d("span",Cn,Mn)):g("",!0),l(o).isLoggedIn&&l(t).pendingRequests.length>0?(c(),d("span",qn,k(l(i)),1)):g("",!0)]),_:1}),m(l(O),{to:"/budget",class:"navbar-item"},{default:$(()=>[En]),_:1})]),l(o).isLoggedIn?(c(),d("div",Pn,[e("div",Rn,[m(Sn)]),e("div",{class:"navbar-item"},[e("div",{class:"buttons"},[e("a",{class:"button is-primary",onClick:a},"Logout")])])])):g("",!0)],2))}});var On=S(Dn,[["__scopeId","data-v-222552b5"]]);const An={},Bn={class:"navbar-burger"},jn=e("span",null,null,-1),Jn=e("span",null,null,-1),Hn=e("span",null,null,-1),Yn=[jn,Jn,Hn];function Kn(s,t){return c(),d("a",Bn,Yn)}var Gn=S(An,[["render",Kn]]);const zn=s=>(x("data-v-d0dfedc6"),s=s(),N(),s),Wn={class:"navbar is-light"},Zn={class:"navbar-brand"},Qn=zn(()=>e("a",{class:"navbar-item"},[e("img",{src:De,alt:"image of happy person",style:{"max-height":"80px"},width:"100"})],-1)),Xn=b({setup(s){const t=y(!1),o=y("");y(!1);function i(){t.value=!t.value,t.value?o.value="is-active":o.value="none"}return(n,a)=>(c(),d("nav",Wn,[e("div",Zn,[Qn,m(Gn,{onClick:i})]),m(On,{clicked:t.value,display:o.value},null,8,["clicked","display"])]))}});var ei=S(Xn,[["__scopeId","data-v-d0dfedc6"]]);const si=b({setup(s){return(t,o)=>{const i=R("HeaderNavbar"),n=R("router-view");return c(),d(P,null,[m(i),m(n,null,{default:$(({Component:a})=>[m(Te,{mode:"out-in","enter-active-class":"animate__animated animate__fadeIn animate__faster","leave-active-class":"animate__animated animate__fadeOut animate__faster"},{default:$(()=>[(c(),E(Ve(a)))]),_:2},1024)]),_:1})],64)}}});const D=Ue(si);D.component("Footer",Re);D.component("HeaderNavbar",ei);D.component("Card",ee);D.use(M);D.use(Le());D.use(xe);D.mount("#app");