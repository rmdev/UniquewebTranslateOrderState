/*! For license information please see uniqueweb-translate-order-state.js.LICENSE.txt */
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p=(window.__sw__.assetPath + '/bundles/uniquewebtranslateorderstate/'),r(r.s="70dO")}({"3JhQ":function(t,e,r){var n=r("ygxi");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r("P8hj").default)("5902663a",n,!0,{})},"70dO":function(t,e,r){"use strict";r.r(e);r("3JhQ");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),s=new O(n||[]);return o(i,"_invoke",{value:L(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var h={};function p(){}function g(){}function v(){}var m={};l(m,s,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(N([])));w&&w!==e&&r.call(w,s)&&(m=w);var b=v.prototype=p.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function a(o,i,s,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==n(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,u)}),(function(t){a("throw",t,s,u)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return a("throw",t,s,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return q()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=f(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function N(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:q}}function q(){return{value:void 0,done:!0}}return g.prototype=v,o(b,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:g,configurable:!0}),g.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},S(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new x(d(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(b),l(b,c,"Generator"),l(b,s,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function o(t,e,r,n,a,o,i){try{var s=t[o](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,a)}var i=Shopware,s=i.Component,u=i.Mixin,c=Shopware.Data.Criteria;s.register("uniqueweb-translate-order-state-index",{template:'<sw-page class="uniqueweb-translate-order-state-index">\r\n    <template slot="smart-bar-header">\r\n        <h2>\r\n            {{ $tc(\'sw-order.list.textOrders\') }}\r\n            <sw-icon name="regular-chevron-right-xs" small></sw-icon>\r\n            {{ $tc(\'uniqueweb-translate-order-state.general.title\') }}\r\n\r\n            <span v-if="!isLoading" class="sw-page__smart-bar-amount">\r\n                ({{ total }})\r\n            </span>\r\n        </h2>\r\n    </template>\r\n\r\n    <template #language-switch>\r\n        <sw-language-switch @on-change="onChangeLanguage"></sw-language-switch>\r\n    </template>\r\n\r\n    <template slot="content">\r\n        <sw-entity-listing\r\n                v-if="entitySearchable"\r\n                :repository="stateMachineStateRepository"\r\n                :columns="stateMachineStateColumns"\r\n                :items="orderStates"\r\n                detail-route="uniqueweb.translate.order.state.detail"\r\n                :is-loading="isLoading"\r\n                :allow-inline-edit="true"\r\n                :show-selection="false"\r\n                :allow-edit="true"\r\n                :allow-view="true"\r\n                :allowDelete="false"\r\n                full-page\r\n                @update-records="updateTotal"\r\n        >\r\n        </sw-entity-listing>\r\n\r\n        <template v-if="!isLoading && !total">\r\n            <sw-empty-state :title="$tc(\'uniqueweb-translate-order-state.index.messageEmpty\')"></sw-empty-state>\r\n        </template>\r\n    </template>\r\n</sw-page>',inject:["repositoryFactory"],mixins:[u.getByName("listing")],data:function(){return{isLoading:!1,orderStates:null,total:0,sortBy:"createdAt",sortDirection:"DESC"}},computed:{stateMachineStateRepository:function(){return this.repositoryFactory.create("state_machine_state")},stateMachineStateCriteria:function(){return new c(this.page,this.limit).addSorting(c.sort(this.sortBy,this.sortDirection))},stateMachineStateColumns:function(){return this.getStateMachineStateColumns()}},methods:{getList:function(){var t,e=this;return(t=a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.addQueryScores(e.term,e.stateMachineStateCriteria);case 3:if(r=t.sent,e.entitySearchable){t.next=8;break}return e.isLoading=!1,e.total=0,t.abrupt("return",!1);case 8:return t.abrupt("return",e.stateMachineStateRepository.search(r).then((function(t){return e.isLoading=!1,e.total=t.total,e.orderStates=t,e.orderStates})));case 9:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,u,"next",t)}function u(t){o(i,n,a,s,u,"throw",t)}s(void 0)}))})()},onChangeLanguage:function(){this.getList()},updateTotal:function(t){var e=t.total;this.total=e},getStateMachineStateColumns:function(){return[{property:"name",label:"sw-product.list.columnName",routerLink:"uniqueweb.translate.order.state.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"technicalName",label:"uniqueweb-translate-order-state.index.columnTechnicalName",allowResize:!0}]}}});r("SkeD");Shopware.Component.register("uniqueweb-translate-order-state-detail",{template:'<sw-page class="uniqueweb-predefined-carts-detail">\r\n    <template #smart-bar-header>\r\n        <h2>{{ $tc(\'uniqueweb-translate-order-state.general.title\') }}</h2>\r\n    </template>\r\n\r\n    <template #smart-bar-actions>\r\n        <sw-button\r\n                class="cancel-action"\r\n                :disabled="orderState !== null && isLoading"\r\n                @click="onCancel">\r\n            {{ $tc(\'global.default.cancel\') }}\r\n        </sw-button>\r\n\r\n        <sw-button-process\r\n                v-model="isSaveSuccessful"\r\n                class="uniqueweb-translate-order-state-detail__save-action"\r\n                variant="primary"\r\n                :is-loading="isLoading"\r\n                :disabled="isLoading"\r\n                :process-success="isSaveSuccessful"\r\n                @process-finish="saveFinish"\r\n                @click.prevent="onSave">\r\n            {{ $tc(\'global.default.save\') }}\r\n        </sw-button-process>\r\n    </template>\r\n\r\n    <template #language-switch>\r\n        <sw-language-switch\r\n                :disabled="orderState.isNew()"\r\n                @on-change="onChangeLanguage">\r\n        </sw-language-switch>\r\n    </template>\r\n\r\n    <template #content>\r\n        <sw-card-view>\r\n            <div v-if="isLoading">\r\n                <sw-skeleton></sw-skeleton>\r\n            </div>\r\n            <div v-else>\r\n                <sw-language-info\r\n                        :entity-description="$tc(\'uniqueweb-translate-order-state.general.title\')"\r\n                        :is-new-entity="orderState.isNew()">\r\n                </sw-language-info>\r\n\r\n                <sw-card :title="$tc(\'uniqueweb-translate-order-state.detail.cardTitleGroupInfo\')" positionIdentifier="uniqueweb-translate-order-state-detail">\r\n                    <sw-container columns="9fr" gap="0">\r\n                        <sw-text-field\r\n                                v-model="orderState.name"\r\n                                required\r\n                                :placeholder="orderState.translated.name"\r\n                                :label="$tc(\'sw-product.list.columnName\')">\r\n                        </sw-text-field>\r\n                    </sw-container>\r\n                </sw-card>\r\n            </div>\r\n        </sw-card-view>\r\n    </template>\r\n</sw-page>',inject:["repositoryFactory"],mixins:["placeholder","notification"],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},metaInfo:function(){return{title:this.$createTitle()}},data:function(){return{orderState:{},isLoading:!1,isSaveSuccessful:!1}},computed:{stateMachineStateRepository:function(){return this.repositoryFactory.create("state_machine_state")}},created:function(){this.orderState=this.stateMachineStateRepository.create(Shopware.Context.api),this.getOrderState()},methods:{getOrderState:function(){var t=this;return Shopware.Context.api.inheritance=!0,this.isLoading=!0,this.stateMachineStateRepository.get(this.$route.params.id,Shopware.Context.api).then((function(e){t.orderState=e})).catch((function(e){t.createNotificationError({message:e})})).finally((function(){t.isLoading=!1}))},onSave:function(){var t=this;this.isLoading=!0,this.stateMachineStateRepository.save(this.orderState,Shopware.Context.api).then((function(){t.isSaveSuccessful=!0,t.isLoading=!1}))},saveFinish:function(){this.isSaveSuccessful=!1},onCancel:function(){this.$router.push({name:"uniqueweb.translate.order.state.index"})},onChangeLanguage:function(){this.getOrderState()}}});var l=r("T6sd"),d=r("fDtk");Shopware.Module.register("uniqueweb-translate-order-state",{type:"plugin",name:"translate-order-state",title:"uniqueweb-translate-order-state.general.title",description:"uniqueweb-translate-order-state.general.description",color:"#A092F0",icon:"regular-info-circle",snippets:{"en-GB":d,"de-DE":l},routes:{index:{component:"uniqueweb-translate-order-state-index",path:"index"},detail:{component:"uniqueweb-translate-order-state-detail",path:"detail/:id",meta:{parentPath:"uniqueweb.translate.order.state.index"}}},navigation:[{id:"uniqueweb-translate-order-state",label:"uniqueweb-translate-order-state.general.title",path:"uniqueweb.translate.order.state.index",color:"#A092F0",icon:"regular-info-circle",parent:"sw-order",position:40}]})},P8hj:function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},a=0;a<e.length;a++){var o=e[a],i=o[0],s={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}r.r(e),r.d(e,"default",(function(){return p}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},d=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,r,a){c=r,d=a||{};var i=n(t,e);return g(i),function(e){for(var r=[],a=0;a<i.length;a++){var s=i[a];(u=o[s.id]).refs--,r.push(u)}e?g(i=n(t,e)):i=[];for(a=0;a<r.length;a++){var u;if(0===(u=r[a]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}}function g(t){for(var e=0;e<t.length;e++){var r=t[e],n=o[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(m(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(a=0;a<r.parts.length;a++)i.push(m(r.parts[a]));o[r.id]={id:r.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function m(t){var e,r,n=document.querySelector("style["+f+'~="'+t.id+'"]');if(n){if(c)return l;n.parentNode.removeChild(n)}if(h){var a=u++;n=s||(s=v()),e=b.bind(null,n,a,!1),r=b.bind(null,n,a,!0)}else n=v(),e=S.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function b(t,e,r,n){var a=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function S(t,e){var r=e.css,n=e.media,a=e.sourceMap;if(n&&t.setAttribute("media",n),d.ssrId&&t.setAttribute(f,e.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},SkeD:function(t,e,r){var n=r("V0H0");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r("P8hj").default)("36416014",n,!0,{})},T6sd:function(t){t.exports=JSON.parse('{"uniqueweb-translate-order-state":{"general":{"title":"Status","description":"Übersicht Bestellstatus"},"index":{"messageEmpty":"Noch kein Bestellstatus verfügbar","columnTechnicalName":"Technischer Name"},"detail":{"cardTitleGroupInfo":"Allgemein"}}}')},V0H0:function(t,e,r){},fDtk:function(t){t.exports=JSON.parse('{"uniqueweb-translate-order-state":{"general":{"title":"State","description":"Overview order state"},"index":{"messageEmpty":"No order states available yet","columnTechnicalName":"Technical name"},"detail":{"cardTitleGroupInfo":"General"}}}')},ygxi:function(t,e,r){}});
//# sourceMappingURL=uniqueweb-translate-order-state.js.map