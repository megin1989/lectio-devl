webpackJsonp([34866721043124],{217:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.CampaignPageQuery=void 0;var u=n(3),c=r(u),s=n(7),f=a(s),p=n(69),d=r(p),m={data:f.object.isRequired},y=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){for(var e,t=this.props.data.allcampagin.edges,n=this.props.data.assignments.edges,a=this.props.location.pathname,r=a.split("/"),o=0;o<r.length;o++)r[o]=r[o].replace(/^\s*/,"").replace(/\s*$/,""),e=r[o];var l,i,u=new Array;t.forEach(function(t){var n=t.node;n.campaigns.forEach(function(t){var n=t.id,a=t.name,r=t.contents;n==e&&(console.log(a),i=a,r.forEach(function(e){var t=(e.id,e.name,e.identity);l=btoa("assignment:"+t),u.push(l)}))})});var s=new Array;new Array;return n.forEach(function(e){var t,n,a=e.node;for(n=0;n<=u.length;n++)t=a.id,u[n]==t&&s.push({id:a.id,title:a.title})}),console.log("aa=>"+JSON.stringify(s)),c.default.createElement("div",{style:{marginBottom:"5rem"}},c.default.createElement("section",{className:"campagin",style:{textAlign:"center"}},c.default.createElement("h2",null,i),c.default.createElement("nav",null,c.default.createElement("ul",{style:{listStyle:"none",width:"100%"}},s.map(function(e,t){var n=e.id,a=e.title;return c.default.createElement("div",null,c.default.createElement("li",null,c.default.createElement(d.default,{to:"/assignmentdetails/"+n,style:{textDecoration:"none"}},"  ",a)))})))))},t}(c.default.Component);y.propTypes=m,t.default=y;t.CampaignPageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-assignments-template-js-c8c69fa72e1187c55901.js.map