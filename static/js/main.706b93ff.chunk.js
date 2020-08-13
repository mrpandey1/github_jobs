(this.webpackJsonpgithub_jobs=this.webpackJsonpgithub_jobs||[]).push([[0],{157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),o=t(19),s=t(7),m=t(11),i=t(12),u=t.n(i),p="make-request",b="get-data",E="error",d="update_has_next_page",g="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";function h(e,a){switch(a.type){case p:return{loading:!0,jobs:[]};case b:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case E:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case d:return Object(s.a)(Object(s.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var y=t(161),f=t(165);function j(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement(f.a,null,1!==a&&r.a.createElement(f.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(f.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&r.a.createElement(f.a.Ellipsis,null),a>2&&r.a.createElement(f.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(f.a.Item,{active:!0},a),n&&r.a.createElement(f.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(f.a.Next,{onClick:function(){return c(1)}}))}var v=t(162),k=t(48);function N(e){var a=e.params,t=e.onParamChange;return r.a.createElement(v.a,{className:"mb-4"},r.a.createElement(v.a.Row,{className:"align-items-end"},r.a.createElement(v.a.Group,{as:k.a},r.a.createElement(v.a.Label,null,"Description"),r.a.createElement(v.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),r.a.createElement(v.a.Group,{as:k.a},r.a.createElement(v.a.Label,null,"Location"),r.a.createElement(v.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})),r.a.createElement(v.a.Group,{as:k.a,xs:"auto",className:"ml-2"},r.a.createElement(v.a.Check,{onChange:t,value:"{params.full_time",label:"Only full time",type:"checkbox",className:"mb-2"}))))}var O=t(164),x=t(159),C=t(160),w=t(163),P=t(29),_=t.n(P);function S(e){var a=e.job,t=Object(n.useState)(!1),c=Object(m.a)(t,2),l=c[0],o=c[1];return r.a.createElement(O.a,{className:"mb-3"},r.a.createElement(O.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(O.a.Title,{className:"mb-3"},a.title," - ",r.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),r.a.createElement(O.a.Subtitle,{className:"text-muted md-3"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(x.a,{variant:"secondary",className:"mr-2 px-2 py-2 my-2"},a.type),r.a.createElement(x.a,{variant:"secondary",className:"px-2 py-2 my-2"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(_.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",height:"50",alt:a.company,src:a.company_logo})),r.a.createElement(O.a.Text,null,r.a.createElement(C.a,{onClick:function(){return o((function(e){return!e}))},variant:"primary"},l?"Hide Details":"View Details"),r.a.createElement(w.a,{in:l},r.a.createElement("div",{className:"mt-4"},r.a.createElement(_.a,{source:a.description}))))))}var T=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),i=Object(m.a)(l,2),f=i[0],v=i[1],k=function(e,a){var t=Object(n.useReducer)(h,{jobs:[],loading:!0}),r=Object(m.a)(t,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source();l({type:p}),u.a.get(g,{cancelToken:t.token,params:Object(s.a)({markdown:!0,page:a},e)}).then((function(e){l({type:b,payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||l({type:E,payload:{error:e}})}));var n=u.a.CancelToken.source();return u.a.get(g,{cancelToken:n.token,params:Object(s.a)({markdown:!0,page:a+1},e)}).then((function(e){l({type:d,payload:{hasNextPage:0!==e.data.lenght}})})).catch((function(e){u.a.isCancel(e)||l({type:E,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,f),O=k.jobs,x=k.loading,C=k.error,w=k.hasNextPage;return r.a.createElement(y.a,{className:"my-4"},r.a.createElement("h1",{className:"mb-4"},"GitHub Jobs"),r.a.createElement(N,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;v(1),c((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(o.a)({},a,t))}))}}),r.a.createElement(j,{page:f,setPage:v,hasNextPage:w}),x&&r.a.createElement("h1",null," Loading ... "),C&&r.a.createElement("h1",null,"Error try refreshing"),O.map((function(e){return r.a.createElement(S,{key:e.id,job:e})})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))},52:function(e,a,t){e.exports=t(157)}},[[52,1,2]]]);
//# sourceMappingURL=main.706b93ff.chunk.js.map