"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[257],{8257:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n=r(2791),s=r(8687),u=r(4165),c=r(5861),a=r(9086),o=(r(985),function(e,t){return(0,c.Z)((0,u.Z)().mark((function r(){var n;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.j.get("users?page=".concat(e,"&count=").concat(t));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})))()}),i=function(e){return(0,c.Z)((0,u.Z)().mark((function t(){var r;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.j.post("follow/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()},l=function(e){return(0,c.Z)((0,u.Z)().mark((function t(){var r;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.j.delete("follow/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()},f=r(1250);function p(e){return{type:f.Z.ADD_FRIEND,userId:e}}function d(e){return{type:f.Z.DELETE_FRIEND,userId:e}}function _(e){return{type:f.Z.SET_CURRENT_PAGE,currentPage:e}}function v(e,t){return{type:f.Z.TOGGLE_IS_WAIT_SUBSCRIBE,isFetching:e,userId:t}}function h(e,t){return function(){var r=(0,c.Z)((0,u.Z)().mark((function r(n){var s;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o(e,t);case 3:s=r.sent,n((a=!1,{type:f.Z.TOGGLE_IS_FETCHING,isFetching:a})),n((c=s.items,{type:f.Z.SET_USERS,users:c})),n((u=s.totalCount,{type:f.Z.SET_TOTAL_COUNT,totalCount:u})),n(_(e)),r.next=13;break;case 10:throw r.prev=10,r.t0=r.catch(0),new Error(r.t0);case 13:case"end":return r.stop()}var u,c,a}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()}var m=r(328),x=r(4942),Z=r(885),w=r(1694),b=r.n(w),j="styles_Root__SWqGI",k="styles_Root__item__29qU0",C="styles_Root__item_selected__XsGM0",E=r(184);function g(e){for(var t=e.className,r=e.totalCount,u=e.pageSize,c=e.currentPage,a=e.portionSize,o=(0,s.I0)(),i=(0,n.useState)(1),l=(0,Z.Z)(i,2),f=l[0],p=l[1],d=Math.ceil(r/u),_=[],v=1;v<=d;v++)_.push(v);var m=Math.ceil(d/a),w=(f-1)*a,g=f*a;return(0,E.jsxs)("ul",{className:b()(j,t),children:[f>1&&(0,E.jsx)("button",{onClick:function(){return p(f-1)},children:"prev"}),_.filter((function(e){return e>=w&&e<=g})).map((function(e,t){return(0,E.jsx)("li",{className:b()((0,x.Z)({},C,c===e),k),onClick:function(){o(h(e,u))},children:e},t)})),f<m&&(0,E.jsx)("button",{onClick:function(){return p(f+1)},children:"next"})]})}g.defaultProps={className:"",portionSize:10};var I=g,N=r(3504),S=r(4353),y="Item_Root__m0vom",T="Item_img__3uGUm",R="Item_button__-VqCU";function G(e){var t=e.className,r=e.userid,n=e.photos,a=e.status,o=e.name,f=e.followed,_=e.subscribersList,h=(0,s.I0)();return(0,E.jsxs)("li",{className:b()(y,t),children:[(0,E.jsxs)(N.OL,{to:"/profile/"+r,children:[(0,E.jsx)("img",{src:n.large?n.large:S,className:T,alt:""}),(0,E.jsx)("span",{children:a}),(0,E.jsx)("br",{}),(0,E.jsx)("span",{children:o})]}),(0,E.jsx)("div",{children:f?(0,E.jsx)("button",{disabled:_.some((function(e){return e===r})),className:R,onClick:function(){var e;h((e=r,function(){var t=(0,c.Z)((0,u.Z)().mark((function t(r){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(v(!0,e)),t.next=4,l(e);case 4:0===t.sent.resultCode&&r(d(e)),r(v(!1,e)),t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(0),new Error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))},children:"delete friend"}):(0,E.jsx)("button",{disabled:_.some((function(e){return e===r})),className:R,onClick:function(){var e;h((e=r,function(){var t=(0,c.Z)((0,u.Z)().mark((function t(r){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(v(!0,e)),t.next=4,i(e);case 4:0===t.sent.resultCode&&r(p(e)),r(v(!1,e)),t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(0),new Error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))},children:"add friend"})})]},r)}G.defaultProps={className:""};var L=G,U="Users_users__aDvLq",P="Users_user__list__boRgM";var D=function(){var e=(0,s.I0)(),t=(0,s.v9)((function(e){return e.users.pageSize})),r=(0,s.v9)((function(e){return e.users.currentPage})),u=(0,s.v9)((function(e){return e.users.users})),c=(0,s.v9)((function(e){return e.users.totalCount})),a=(0,s.v9)((function(e){return e.users.isFetching})),o=(0,s.v9)((function(e){return e.users.subscribersList}));return(0,n.useEffect)((function(){e(h(r,t))}),[r,e,t]),a?(0,E.jsx)(m.Z,{}):(0,E.jsxs)("div",{className:U,children:[(0,E.jsx)(I,{totalCount:c,pageSize:t,currentPage:r}),(0,E.jsx)("ul",{className:P,children:u.map((function(e,t){return(0,E.jsx)(L,{userid:e.id,photos:e.photos,status:e.status,name:e.name,followed:e.followed,subscribersList:o},t)}))})]})}}}]);
//# sourceMappingURL=257.b0ab4ebc.chunk.js.map