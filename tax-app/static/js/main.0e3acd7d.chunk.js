(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t){String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return this.substr(!t||t<0?0:+t,e.length)===e}),Array.prototype.find||(Array.prototype.find=function(e){for(var t=this.length,n=0;n<t;n++)if(e(this[n]))return this[n]})},109:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){},118:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);n(68);var a=n(0),r=n.n(a),o=n(62),i=n.n(o),c=(n(108),n(109),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=n(28),u=n(10),d=n(6),m=n(17),p=n(66),h={coreData:{lang:"en"}};var f=Object(m.c)({formState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return Object(d.a)({},e,Object(u.a)({},t.key,t.value));case"CORE":return Object(d.a)({},e,{coreData:Object(d.a)({},e.coreData,t.data)});default:return e}}});var v=Object(m.d)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(m.a)(p.a)),g=function(e){return e},b=function(){return[]},E=function(){return{}};var y=n(1),C=n(2),O=n(5),w=n(3),k=n(4),j=(n(114),{}),x=[];function S(e,t,n){console.log("modPage",e,t),t&&window.scrollTo(0,0),n?window.history.replaceState(null,"",e):window.history.pushState(null,"",e);try{var a=new PopStateEvent("popstate",{state:{}});dispatchEvent(a)}catch(o){var r=document.createEvent("Event");r.initEvent("popstate",!1,!1),dispatchEvent(r)}}var N=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).listenForPopState=function(e){console.log("POPSTATE:",e),n.setState({dt:Date.now()})},n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("popstate",this.listenForPopState)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("popstate",this.listenForPopState)}},{key:"render",value:function(){var e=function(e){var t=j[e];if(t)return t;var n=e.split("/");n.splice(0,1);for(var a=0;a<x.length;a++){var r=x[a](n);if(r)return r}return j["/"]}(window.location.pathname);return e.title&&(document.title=e.title),r.a.createElement(e.Compo,Object.assign({search:window.location.search},e.values))}}],[{key:"defineRoute",value:function(e,t,n){"function"===typeof e?x.push(e):j[e]={Compo:t,title:n}}},{key:"replacePage",value:function(e){S(e,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],!0)}},{key:"changePage",value:function(e){S(e,!(arguments.length>1&&void 0!==arguments[1])||arguments[1])}}]),t}(r.a.Component),L=n(27),P=n.n(L),q=n(45),F=n(7),A=n(16),R=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).onBlur=function(){var e=n.props,t=e.touched,a=e.name,r=e.parent;t||r.onBlurField(a,!0,Object(F.a)(Object(F.a)(n)))},n.onChange=function(e){var t=e.target.value,a=n.props,r=a.name;a.parent.onChangeField(r,t,Object(F.a)(Object(F.a)(n)))},n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.parent,e.coreData,e.name),n=e.path,a=e.showErrors,o=e.touched,i=e.required,c=e.showLabel,l=void 0===c||c,s=e.htmlId,u=e.inputClass,d=e.fieldClass,m=void 0===d?"":d,p=e.component,h=e.validator,f=e.stripProps,v=Object(A.a)(e,["parent","coreData","name","path","showErrors","touched","required","showLabel","htmlId","inputClass","fieldClass","component","validator","stripProps"]),b=p||"input",E=this.props.value||"",y=n+"-"+(s||t),C=n+"-"+t,O=(!!o||a)&&h&&h(E,this.props,n),w=O&&!!O.error,k=w?y+"-fieldError":void 0,j=f?f(v):v,x=w?"form-field ff-invalid":"form-field";return r.a.createElement("div",{className:x+" "+m},l&&r.a.createElement("label",{htmlFor:y},g(C,i)),r.a.createElement(b,Object.assign({"aria-describedby":k,"aria-invalid":w,className:u,id:y,onBlur:this.onBlur,onChange:this.onChange,required:i},j,{value:E})),w&&function(e,t){return r.a.createElement("span",{"aria-live":"assertive",className:"field-error",id:t},function(e,t){if(t)return t.minLength?"Please enter at least "+e.values.minLength+" characters":t.found?'Invalid email, character sequence "'+t.found+'" is not allowed':e.error+" "+JSON.stringify(t);return e.error}(e,e.values),e.required&&" *")}(O,k))}}]),t}(r.a.PureComponent);function T(e,t){var n=t?I:W,a=function(a){function o(e){var a;return Object(y.a)(this,o),(a=Object(O.a)(this,Object(w.a)(o).call(this,e))).setShowErrors=function(e){a.setState({showErrors:e})},a.onBlurField=function(e,n){var r,o=a.props,i=o.touched,c=o.name,l=o.updateRedux,s=o.parent;t?(r=i?Object(q.a)(i):[])[e]=n:r=Object(d.a)({},i,Object(u.a)({},e,n)),l&&l({type:"SET",key:c+"_T",value:r}),s&&s.onBlurField(c,r,Object(F.a)(Object(F.a)(a)))},a.onChangeField=function(e,n){var r,o=a.props,i=o.value,c=o.name,l=o.updateRedux,s=o.parent;t?(r=i?Object(q.a)(i):[])[e]=n:r=Object(d.a)({},i,Object(u.a)({},e,n)),l&&l({type:"SET",key:c,value:r}),s&&s.onChangeField(c,r,Object(F.a)(Object(F.a)(a)))},a.renderField=function(e,t){var o=e.validateSection?e.component:R,i=a.props,c=i.name,l=i.path,s=i.touched,u=void 0===s?n:s,d=i.value,m=void 0===d?n:d,p=i.coreData,h=a.state.showErrors||a.props.showErrors;if(!c)return r.a.createElement(o,Object.assign({},e,t,{coreData:p,parent:Object(F.a)(Object(F.a)(a)),path:l,showErrors:h,touched:u,value:m}));var f=l?l+"-"+c:c;return r.a.createElement(o,Object.assign({},e,t,{coreData:p,key:f+"-"+e.name,parent:Object(F.a)(Object(F.a)(a)),path:f,showErrors:h,touched:u[e.name],value:m[e.name]}))},a.myRef=r.a.createRef(),a.state={},a}return Object(k.a)(o,a),Object(C.a)(o,[{key:"getWrappedInstance",value:function(){return this.myRef.current}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({showErrorsWrap:this.state.showErrors},this.props,{renderField:this.renderField,setShowErrors:this.setShowErrors}))}}]),o}(r.a.PureComponent);return a.defaultProps=e.defaultProps,a}var W={},I=[],B={},M=function(e){return function(t){return t(e)}};function z(e){var t=e.defaultProps&&e.defaultProps.name;return Object(s.b)(function(e,n){var a=n.name||t;return{value:e.formState[a]||B,touched:e.formState[a+"_T"]||B,coreData:e.formState.coreData}},{updateRedux:M},null,{withRef:!0})(e)}function D(e,t,n,a){var r=t.name,o=t.required;if(e){if("string"!==typeof e)return{name:r,path:n,required:o,error:"invalidString"};if(e=e.trim()){var i=t.minLength,c=t.maxLength,l=t.pattern,s=t.nextValidator,u=e.length;if(i&&u<i)return{name:r,path:n,required:o,error:"minLength",values:{minLength:i}};if(c&&u>c)return{name:r,path:n,required:o,error:"maxLength",values:{maxLength:c}};if(l)if(!new RegExp(l).test(e))return{name:r,path:n,required:o,error:"pattern"};if(s){var d=s(e,t,n,a);if(d)return d}return a&&("upper-case"===t.inputClass&&(e=e.toLocaleUpperCase()),a[r]=e),!0}}if(o)return{name:r,path:n,required:o,error:"required"};a&&(a[r]="")}var U=function(e,t){return Object(d.a)({name:e},t,{validator:D})};function _(e,t,n,a){var r=D(e,t,n);if(!0===r){var o=t.name,i=t.required;e=e.trim();var c=[" ","..",".@","@."].find(function(t){return e.indexOf(t)>=0});if(c)return{name:o,path:n,required:i,error:"invalidEmail",values:{found:c}};var l=e.length,s=e.indexOf("@"),u=e.lastIndexOf("@"),d=e.lastIndexOf(".");return d===l-1||s<0||s<u||d<u?{name:o,path:n,required:i,error:"invalidEmail"}:(a&&(a[o]=e),!0)}return r}var H,V,Y=U("homePhone",{maxLength:12,type:"tel",required:!1}),$=U("mobilePhone",{maxLength:12,type:"tel",required:!1,idiot:"38439"}),G=(H="emailAddress",V={maxLength:80,minLength:6,required:!1,spellCheck:!1,htmlId:"otherField",type:"email"},Object(d.a)({name:H},V,{validator:_}));function K(e){e(Y),e($),e(G)}var X=T(function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.renderField,a=e.value,o=void 0===a?{}:a,i=e.touched,c=void 0===i?{}:i,l=n,s=o[Y.name]||o[$.name]||o[G.name],u=!!c[Y.name]&&!!c[$.name]&&!!c[G.name]&&!s,d=parseInt(t);return r.a.createElement(r.a.Fragment,null,d>=0&&r.a.createElement("div",{style:{margin:"16px 0 0 2px",fontWeight:"600",color:"#444",fontSize:"17px"}},"Contact number ",d+1),r.a.createElement(l,Object.assign({},Y,{required:u,sdtupid:87})),r.a.createElement(l,Object.assign({},$,{required:u})),r.a.createElement(l,Object.assign({},G,{required:u})))}}]),t}(r.a.PureComponent)),J=X;function Z(e){var t=e.options,n=e.allowOption,a=e.rangeFrom,o=e.rangeTo,i=e.className,c=Object(A.a)(e,["options","allowOption","rangeFrom","rangeTo","className"]),l=e.value,s=e.required,u=e.id,d=l?"custom-select":"custom-select no-value",m=i?d+" "+i:d;return r.a.createElement("select",Object.assign({},c,{className:m}),(""===l||void 0===l||!1===s)&&r.a.createElement("option",{value:""},g(u+"-pleaseSelect",s)),function(e,t,n,a,o){var i=[];if(a||o){for(var c=a<o?1:-1,l=a;i.push(r.a.createElement("option",{key:l,value:l},l)),l!==o;l+=c);return i}var s=b(e),u=E(e);return s.forEach(function(e){t&&!t(e,n)||i.push(r.a.createElement("option",{key:e,value:e},u[e]||e))}),i}(t,n,e,a,o))}function Q(e){var t=e.id,n=e.label;return r.a.createElement("fieldset",{className:"radio-fieldset",id:t},r.a.createElement("legend",null,g(n)),function(e){var t=e.options,n=e.allowOption,a=e.value,o=e.id,i=e.className,c=e.afterRadio,l=[],s="horizontal"===i?"radio-horizontal":"radio",u=b(t),d=E(t);return u.forEach(function(t){if(!n||n(t,e)){var i=o+"-"+t;if(l.push(r.a.createElement("div",{className:s,key:i},r.a.createElement("input",{id:i,name:o,type:"radio",value:t,checked:t===a,"aria-describedby":e["aria-describedby"],onChange:e.onChange,onBlur:e.onBlur,onClick:ee}),r.a.createElement("label",{htmlFor:i},d[t]||t))),c){var u=c(t);u&&l.push(u)}}}),l}(e))}function ee(e){e.target.focus()}var te=U("taxRef",{maxLength:8,minLength:5,inputClass:"narrow upper-case",required:!0,spellCheck:!1,type:"tel",pattern:"^[0-9]+$"}),ne=U("firstName",{maxLength:16,minLength:2}),ae=U("lastName",{maxLength:30,required:!0}),re=U("username",{placeholder:"Username",autoComplete:"username",type:"text",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"}),oe=U("gender",{component:Q,options:"gender",required:!0,showLabel:!1,label:"Gender",inputClass:"medium",className:"horizontal"}),ie=U("zipCode",{maxLength:12,autoComplete:"postal-code",required:!1,inputClass:"narrow"}),ce={name:"phones",component:J,validateSection:K},le=U("country",{component:Q,options:"country",required:!1,allowOption:function(e,t){return"AR"!==e||!1!==t.allowArgentina},stripProps:function(e){return e},showLabel:!1,label:"Country"}),se=z(T(function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.renderField,t=this.props,n=t.value,a=void 0===n?{}:n,o=t.allowArgentina,i=a.taxRef;return r.a.createElement("fieldset",{className:"form-fieldset"},r.a.createElement("legend",null,g(this.props.name)),e(te),r.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top",width:"50%",paddingRight:"16px",boxSizing:"border-box"}},e(ne)),r.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top",width:"50%"}},e(ae)),e(oe),e(re,{required:!!i}),e(le,{allowArgentina:o,required:this.props.requireCountry||!1}),e(ie),e(ce))}}]),t}(r.a.PureComponent)));function ue(e){return r.a.createElement("fieldset",{className:"form-fieldset"},r.a.createElement("legend",{"aria-label":e["aria-label"]},g(e.name)),e.children)}var de=U("address1",{maxLength:35,required:!0}),me=U("address2",{maxLength:35,required:!1}),pe=U("city",{maxLength:35,required:!1}),he=U("region",{maxLength:35,required:!1,minLength:2}),fe=U("zipCode",{maxLength:12,autoComplete:"postal-code",required:!1,inputClass:"narrow",minLength:4}),ve=U("country",{component:Z,options:"country",required:!0});function ge(e){e(ve),e(de),e(me),e(pe),e(he),e(fe)}var be=T(function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.renderField;return[e(ve),e(de),e(me),e(pe),e(he),e(fe)]}}]),t}(r.a.PureComponent));function Ee(e){var t=e.id,n=e.value,a=e.label,o=e.onChange,i=e.className,c=void 0===i?"checkbox":i,l=Object(A.a)(e,["id","value","label","onChange","className"]);return r.a.createElement("div",{className:c},r.a.createElement("input",Object.assign({},l,{checked:!!n,id:t,onChange:function(){return o({target:{value:!n}})},onClick:ye,type:"checkbox"})),r.a.createElement("label",{htmlFor:t},g(a)))}function ye(e){e.target.focus()}function Ce(e,t,n,a){e||(e={});var r=t.name,o=t.required,i=t.minLength,c=t.maxLength,l=D(e.country,{name:r,required:o},n,a);return l&&l.error?(l.part="country",l):D(e.phone,{name:r,required:o,minLength:i,maxLength:c},n,a)}var Oe=function(e,t){return Object(d.a)({name:e},t,{validator:Ce,component:we})};function we(e){var t,n=e.value||{},a=e.id,o=e.onChange,i=e.onBlur,c=e.options,l=e.minLength,s=e.maxLength,m={required:e.required,"aria-describedby":e["aria-describedby"]},p=function(e){return function(t){o({target:{value:Object(d.a)({},n,Object(u.a)({},e,t.target.value))}})}};function h(e){t=function(e,t,n){var a=e.relatedTarget||document.activeElement;if(a&&a.id)return void(a.id===t||a.id.startsWith(t+"-")||n());return setTimeout(n,25)}(e,a,i)}function f(){clearTimeout(t)}return r.a.createElement("div",null,r.a.createElement("span",{style:{display:"inline-block",verticalAlign:"top",marginRight:"10px"}},r.a.createElement(Z,Object.assign({value:n.country||"",onChange:p("country"),onBlur:h,onFocus:f,id:a+"-country",options:c},m))),r.a.createElement("span",{style:{display:"inline-block",verticalAlign:"top"}},r.a.createElement("input",Object.assign({value:n.phone||"",onChange:p("phone"),onBlur:h,onFocus:f,id:a,type:"text",minLength:l,maxLength:s},m))))}function ke(e){var t=e.children,n=e.id,a=e.onClick,o=e.cnm,i=void 0===o?"default":o;return r.a.createElement("button",{className:"btn btn-"+i,id:n,onClick:a,type:"button"},t)}function je(e,t,n,a,r){return e.validateSection(function(e,o){var i=(e=o?Object(d.a)({},e,o):e).name;if(!e.validateSection){var c=t&&t[i],l=e.validator(c,e,r,n);return l&&l.error&&a.push(l),l}if(void 0!==i){var s=e.isArray?[]:{};!1!==je(e,t&&t[i],s,a,r+"-"+i)&&(n[i]=s)}else je(e,t,n,a,r)},t,e,n,a,r)}new RegExp(/^\d+$/);new RegExp(/^[a-z0-9]+$/i);var xe=U("roomsRequired",{component:Z,required:!0,rangeFrom:1,rangeTo:6,inputClass:"narrow"});function Se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(xe),e(qe,{listLength:t.roomsRequired}),!0}var Ne=T(function(e){var t=e.value,n=(void 0===t?{}:t).roomsRequired,a=e.renderField;return r.a.createElement("div",null,a(xe),a(qe,{listLength:n}),r.a.createElement("br",null),r.a.createElement(ke,{cnm:"primary",onClick:function(){console.log(e.value);var t={},n=[];je({validateSection:Se},e.value,t,n,"paymentPage-checkOutForm"),console.log("OUTPUT",t),console.log("ERRORS",n),e.setShowErrors(!0)}},"Validate"),r.a.createElement(ke,{onClick:function(){return e.setShowErrors(!1)}},"Clear"),r.a.createElement(ke,{onClick:function(){e.setShowErrors(!1),e.parent.onChangeField(e.name,{}),e.parent.onBlurField(e.name,{})}},"Reset"))}),Le=T(function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=e.listLength,n=e.renderField,a=e.repeatThing,o=e.fixedList,i=e.value,c=o?(void 0===i?[]:i).length:parseInt(t);if(!c)return null;for(var l=[],s=0;s<c;s++)l.push(n(Object(d.a)({},a,{name:String(s)})));return r.a.createElement("div",null,l)}}]),t}(r.a.PureComponent),!0);function Pe(e,t,n){for(var a=n.listLength,r=n.fixedList,o=n.repeatThing,i=r?t.length:parseInt(a),c=0;c<i;c++)e(o,{name:String(c)});return!0}var qe=function(e,t){return{name:e,component:Le,validateSection:Pe,repeatThing:t,isArray:!0}}("roomList",function(e){return{name:e,component:X,validateSection:K}}()),Fe=U("carsInHouse",{component:Z,required:!0,rangeFrom:0,rangeTo:4,inputClass:"narrow"}),Ae=U("parkingSpaces",{component:Z,required:!1,rangeFrom:0,rangeTo:2,inputClass:"narrow"}),Re=U("preferredRetireAge",{component:Z,required:!1,rangeFrom:70,rangeTo:55,inputClass:"narrow"}),Te={name:"consentSMS",component:Ee,showLabel:!1,label:"Please send me SMS messages about the progress of my application."},We={name:"consentEmail",component:Ee,showLabel:!1,label:"Sign me up for regular email alerts."},Ie={name:"consentOther",component:Ee,showLabel:!1,label:"Other consent option."},Be=Oe("regNumber",{options:"country",required:!1,minLength:4,maxLength:12}),Me=Oe("langCode",{options:"languages",required:!0,minLength:4,maxLength:12}),ze={name:"homeAddress",component:be,validateSection:ge},De={name:"overseasAddress",component:be,validateSection:ge},Ue={name:"workAddress",component:be,validateSection:ge},_e={name:"contactHome",component:J,validateSection:K},He={name:"contactOver",component:J,validateSection:K},Ve={name:"rooms",component:Ne,validateSection:function(){}},Ye=z(T(function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.renderField;return r.a.createElement("div",null,r.a.createElement(ue,{name:"Rooms","aria-label":"List of rooms and contacts"},e(Ve)),r.a.createElement(ue,{name:"About you"},e(Fe),e(Ae),e(Re),r.a.createElement("div",{style:{marginTop:"16px"}},e(Te),e(We),e(Ie),e(Be),e(Me))),r.a.createElement(ue,{name:"homeAddress"},e(ze),e(_e)),r.a.createElement(ue,{name:"overseasAddress"},e(De),e(He)),r.a.createElement(ue,{name:"workAddress"},e(Ue)))}}]),t}(r.a.PureComponent))),$e=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App bg-light"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:P.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"Tax calculator application.")),r.a.createElement("form",null,r.a.createElement(se,{path:"mainForm",name:"personalRef",requireCountry:!0}),r.a.createElement(se,{path:"mainForm",name:"spouseRef",allowArgentina:!1}),r.a.createElement(Ye,{path:"mainForm",name:"bigForm"}),r.a.createElement("p",{style:{textAlign:"right"}},r.a.createElement(ke,{onClick:function(){return N.changePage("/tax-app/search")}},"Search"),r.a.createElement(ke,{cnm:"secondary",onClick:function(){console.log(v.getState().formState),alert("reset todo")}},"Reset"),r.a.createElement(ke,{cnm:"primary",onClick:function(){return console.log(v.getState().formState),N.changePage("/tax-app/search"),!1}},"Continue"))),r.a.createElement("p",{className:"App-intro"},"Thank you"))}}]),t}(r.a.Component);function Ge(e){return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"#fff"},e),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}))}n(116);function Ke(e){var t=e.text;return t=t||"Page loading...",setTimeout(function(){var e=document.getElementById("loader-text");e&&e.focus()},200),r.a.createElement("div",{className:"loader-body"},r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader antiloader"},r.a.createElement("div",{className:"loader",style:{animation:"spin 0.8s linear infinite"}})))),r.a.createElement("span",{className:"loader-text","aria-live":"assertive",id:"loader-text",tabIndex:"-1"},t))}var Xe=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).goHomePage=function(){n.setState({loading:!0}),setTimeout(function(){window.scrollTo(0,0),N.changePage("/tax-app")},3e3)},n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.state&&this.state.loading,t=e?{"aria-disabled":!0,"aria-hidden":!0,className:"loader-blur"}:{};return r.a.createElement("div",{className:"App bg-light"},r.a.createElement("div",t,r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},r.a.createElement(Ge,{style:{verticalAlign:"top"}})," ","Search page")),r.a.createElement("form",null,r.a.createElement(Ye,{path:"mainForm",name:"bigForm"}),r.a.createElement("p",{style:{textAlign:"right"}},r.a.createElement(ke,{onClick:this.goHomePage},"Home page"),r.a.createElement(ke,{cnm:"primary",onClick:function(){return console.log(v.getState().formState),N.changePage("/tax-app/checkout"),!1}},"Continue"))),r.a.createElement("p",{className:"App-intro"},"Thank you")),e&&r.a.createElement(Ke,null))}}]),t}(r.a.Component),Je=(n(118),"44"),Ze=function(e,t){return Object(d.a)({name:e,component:et,validator:Qe},t)};function Qe(e,t,n,a){var r=t.name,o=t.required;if(e&&e.tel){var i=D(e.tel,t,n);return i.error?i:(a&&(a[r]=e),!0)}if(o)return{name:r,path:n,required:o,error:"required"}}var et=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).docClick=function(e){console.log("DOC CLICK"),n.setState({pop:!1}),document.removeEventListener("click",n.docClick)},n.btn=function(){var e=n.state||{};n.setState({pop:!e.pop}),e.pop||document.addEventListener("click",n.docClick)},n.telChange=function(e){var t=n.props.value||{},a=Object(d.a)({code:Je},t,{tel:e.target.value});n.props.onChange({target:{value:a}})},n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"setCo",value:function(e,t){e.preventDefault();var n=this.props.value||{},a=Object(d.a)({tel:""},n,{code:t});this.props.onChange({target:{value:a}}),this.btn(),document.getElementById(this.props.id+"-picker").focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=void 0===n?{}:n,o=t.id,i=t.onBlur,c=t.minLength,l=t.maxLength,s=t.required,u=this.state||{};return r.a.createElement("div",{className:"phone-input"},r.a.createElement("button",{"aria-label":"Country code",id:o+"-picker",onClick:this.btn,type:"button",onFocus:this.docClick},"+",a.code||Je),u.pop&&r.a.createElement("div",{className:"telpopup"},r.a.createElement("a",{href:"/",onClick:function(t){return e.setCo(t,"44")}},"44 United Kingdom"),r.a.createElement("a",{href:"/",onClick:function(t){return e.setCo(t,"47")}},"47 Norway"),r.a.createElement("a",{href:"/",onClick:function(t){return e.setCo(t,"01")}},"01 United States of America"),r.a.createElement("a",{href:"/",onClick:function(t){return e.setCo(t,"86")}},"86 China")),r.a.createElement("input",{"aria-describedby":this.props["aria-describedby"],id:o,maxLength:l,minLength:c,required:s,type:"tel",onBlur:i,onChange:this.telChange,onFocus:this.docClick,value:a.tel||""}))}}]),t}(r.a.Component);n(61);function tt(e){var t=e.parent;function n(){t.setState({popup:0}),nt("ShowPopup")}function a(){document.getElementById("exampleModalLive").classList.add("modal-hiding"),setTimeout(function(){n()},300)}var o=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"You can cancel this purchase now."),r.a.createElement("p",null,"Your basket will be empty of products"));return setTimeout(function(){nt("exampleModalLive")},100),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"exampleModalLive",className:"modal show",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLiveLabel",style:{display:"block"},onClick:a},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content",onClick:function(e){e.stopPropagation()}},r.a.createElement("div",{className:"modal-header",tabIndex:"0",onFocus:function(){return nt("closePop")}},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLiveLabel"},"Cancel this purchase?"),r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:n},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},o),r.a.createElement("div",{className:"modal-footer"},r.a.createElement(ke,{id:"closePop",onClick:a},"Cancel"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){t.setState({popup:2})}},"Next"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:a},"Save changes"))))),r.a.createElement("div",{className:"modal-backdrop",tabIndex:"0",onFocus:function(){return nt("closePop")}}))}function nt(e){var t=document.getElementById(e);t&&t.focus()}function at(e){var t=e.parent,n=e.popupCode;function a(){t.setState({popup:!1}),rt("ShowPopup")}function o(){document.getElementById("exampleModalLive").classList.add("modal-hiding"),setTimeout(function(){a()},300)}var i=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Pick a language"),r.a.createElement(Z,{options:"languages",onChange:function(e){console.log("LANG",e.target.value)}})),c=r.a.createElement("p",null,"Another popup");return setTimeout(function(){rt("exampleModalLive")},100),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"exampleModalLive",className:"modal show",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLiveLabel",style:{display:"block"},onClick:o},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content",onClick:function(e){e.stopPropagation()}},r.a.createElement("div",{className:"modal-header",tabIndex:"0",onFocus:function(){return rt("closePop")}},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLiveLabel"},"Choose your language"),r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:a},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},2===n?i:c),r.a.createElement("div",{className:"modal-footer"},r.a.createElement(ke,{id:"closePop",onClick:o},"Cancel"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){t.setState({popup:1})}},"Back"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){t.setState({popup:2===n?3:2})}},"Next"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:o},"Change language"))))),r.a.createElement("div",{className:"modal-backdrop",tabIndex:"0",onFocus:function(){return rt("closePop")}}))}function rt(e){var t=document.getElementById(e);t&&t.focus()}var ot=U("cardNumber",{minLength:16,maxLength:16,type:"tel",required:!0}),it=U("cvvNumber",{minLength:3,maxLength:4,type:"tel",required:!0,inputClass:"tiny",pattern:"^[0-9]+$"}),ct=U("nameOnCard",{maxLength:40,minLength:4,inputClass:"upper-case",required:!0,spellCheck:!1,pattern:"^[a-zA-Z ]+$"}),lt={name:"smsTrack",component:Ee,showLabel:!1,label:"Please send me SMS messages to track my order.",required:!0,validator:function(e,t,n,a){var r=t.name,o=t.required;return o&&!e?{name:r,path:n,required:o,error:"required"}:(a&&(a[r]=!!e),!0)}},st=Ze("emergencyPhone",{maxLength:12,minLength:4,required:!0,pattern:"^[0-9]+$"}),ut=Ze("faxNo",{maxLength:10,minLength:6});function dt(e){return e(ot),e(it),e(ct),e(lt),!0}var mt=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).doCheckout=function(){var e,t,a={},r=[];je({validateSection:dt},n.props.value,a,r,"paymentPage-checkOutForm"),console.log("OUTPUT",a),console.log("ERRORS",r),a.smsTrack?(console.log("CHGECKOUT",n.props.value),n.setState({inputErrors:void 0}),e=Object(F.a)(Object(F.a)(n)),t=n.props.value,e.setState({loading:!0,message:"Checking payment details..."}),ft(t).then(function(t){return ht(t,e,"Checking stock and delivery schedule")}).then(function(e){return ft(e)}).then(function(t){return ht(t,e,"Transferring funds")}).then(function(e){return ft(e)}).then(function(t){return ht(t,e,"",!1)}).then(function(e){return function(e,t){if(console.log("paymentFinished",e),!e||"666"===t.cvvNumber)throw new Error("Validation of the CVV number failed");window.scrollTo(0,0),N.changePage("/tax-app")}(e,t)}).catch(function(t){return function(e,t){e.setState({message:"Error occurred"}),alert("An error occurred\n"+t),e.setState({loading:!1})}(e,t)})):(n.setState({inputErrors:Date.now(),errors:r}),n.props.setShowErrors(!0),n.focusToFirstError(r))},n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.name;this.props.updateRedux({type:"SET",key:e+"_T",value:{}})}},{key:"componentDidUpdate",value:function(e,t,n){(this.state||{}).inputErrors;t&&t.inputErrors}},{key:"focusToFirstError",value:function(e){e||(e=this.state.errors||[]);var t=e[0];if(t){var n=t.path+"-"+t.name,a=document.getElementById(n);a&&a.focus()}}},{key:"render",value:function(){var e=this,t=this.props.renderField,n=this.state||{},a=n.loading,o=n.message,i=n.popup,c=a?{"aria-disabled":!0,"aria-hidden":!0,className:"loader-blur"}:{},l=(this.state||{}).inputErrors,s=function(t){return e.setState({inputErrors:void 0,errors:[]}),e.props.setShowErrors(!1),alert("!!!"),t.preventDefault(),!1};return r.a.createElement("div",{className:"App"},r.a.createElement("div",c,r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:P.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"Checkout")),r.a.createElement("form",null,r.a.createElement("h2",null,"Your payment details"),t(ot),t(it),t(ct),r.a.createElement("br",null),t(lt),l&&r.a.createElement("div",{id:"theErrors",tabIndex:"0",className:"alert alert-primary"},"Please correct errors and continue ",l,r.a.createElement("a",{href:"/",onClick:s,tabIndex:"0"},"Please enter a valid credit card number"),r.a.createElement("a",{href:"/",onClick:s,tabIndex:"0"},"Please enter the CVV number")),r.a.createElement("p",{style:{textAlign:"right",marginTop:"12px"}},r.a.createElement(ke,{onClick:function(){window.history.back()}},"Cancel"),r.a.createElement(ke,{id:"ShowPopup",onClick:function(){e.setState({popup:1})}},"Popup"),r.a.createElement(ke,{cnm:"primary",onClick:this.doCheckout},"Make Payment")),r.a.createElement("p",{className:"App-intro"},"Terms & conditions etc here"),t(st),t(ut),r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"Thank you for your patience"))),a&&r.a.createElement(Ke,{text:o}),1===i&&r.a.createElement(tt,{parent:this}),i>=2&&r.a.createElement(at,{parent:this,popupCode:i}))}}]),t}(r.a.Component);mt.defaultProps={name:"checkOutForm",path:"paymentPage"};var pt=z(T(mt));function ht(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return t.setState({message:n,loading:a}),e}function ft(e){return new Promise(function(t){setTimeout(function(){return t(e)},1e3)})}N.defineRoute("/",$e,"React tax application"),N.defineRoute("/tax-app",$e,"React tax application"),N.defineRoute("/tax-app/search",Xe,"React search page"),N.defineRoute("/tax-app/deals",Xe,"React hot deals page"),N.defineRoute("/tax-app/checkout",pt,"Checkout page"),N.defineRoute(function(e){if("payment"===e[1])return{Compo:pt,title:"Payment record {record}",values:{record:e[2]}}});var vt=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null)}}]),t}(r.a.Component);g=function(e,t){return e?e.endsWith("country-pleaseSelect")?t?"Choose a country":"No country selected":e.endsWith("gender-pleaseSelect")?"Please select a gender":e.endsWith("gender-required")?"Please choose a gender":e.endsWith("-pleaseSelect")?t?"Please choose":"Not specified":e.endsWith("-address1")?"First line of address, for example house number and street":e.endsWith("-address2")?"Second line of address":e.endsWith("-city")?"City":e.endsWith("-region")?"State or Province":e.endsWith("-country")?"Country":e.endsWith("-zipCode")?"Zip code":e.endsWith("-firstName")?"First name":e.endsWith("-lastName")?"Surname":e.endsWith("-taxRef")?"Tax Reference Number":e.endsWith("-username")?"User name":e.endsWith("-gender")?"Gender":e.endsWith("-homePhone")?"Home telephone":e.endsWith("-mobilePhone")?"Mobile phone":e.endsWith("-emailAddress")?"Email address":e.endsWith("-carsInHouse")?"How many cars are there in your household?":e.endsWith("-parkingSpaces")?"How many parking spaces do you have exclusive use of?":e.endsWith("-preferredRetireAge")?r.a.createElement("span",null,"What is your preferred retirement age? ",r.a.createElement("b",null,"(optional)")):e.endsWith("-regNumber")?"Registration number and country":e.endsWith("-cardNumber")?"Payment card number":e.endsWith("-cvvNumber")?"CVV":e.endsWith("-nameOnCard")?"Name on card":e.endsWith("-emergencyPhone")?"Emergency contact number":e.endsWith("-faxNo")?"Fax number":{personalRef:"Your personal details",spouseRef:"Your spouse details"}[e]||e:"Undefined"},function(e){b=e}(function(e){return{yesno:["M","F"],gender:["M","F"],country:["GB","US","CN","BW","AR"],months:["01","02","03","04","05","06","07","08","09","10","11","12"],languages:["en","zh","ru","fr"]}[e]||["Y","N"]}),function(e){E=e}(function(e){return{yesno:{Y:"Yes",N:"No"},gender:{M:"Male",F:"Female"},country:{GB:"United Kingdom",US:"United States",CN:"China",BW:"Botswana",AR:"Argentina"},languages:{en:"English",zh:"Chinese",ru:"Russian",fr:"French"}}[e]||{}});setTimeout(function(){return e=vt,void i.a.render(r.a.createElement(s.a,{store:v},r.a.createElement(e,null)),document.getElementById("root"));var e},500),function(){if("serviceWorker"in navigator){if(new URL("/tax-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/tax-app","/service-worker.js");c?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):l(e)})}}(),window.redux=v},27:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},61:function(e,t,n){},67:function(e,t,n){e.exports=n(121)}},[[67,2,1]]]);
//# sourceMappingURL=main.0e3acd7d.chunk.js.map