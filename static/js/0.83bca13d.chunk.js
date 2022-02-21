(this.webpackJsonpreshell=this.webpackJsonpreshell||[]).push([[0],{521:function(e,t,n){"use strict";var i=n(84),r=n(153),a=n(518),o=n(27),c=n(519),s=n.n(c),u=n(638),l=n.n(u),p=n(597),d=n(43),v=["children","className","canOverflow"];t.a=function Center(e){var t=e.children,n=e.className,c=e.canOverflow,u=void 0!==c&&c,f=Object(a.a)(e,v),g=Object(o.useState)(null),h=Object(r.a)(g,2),m=h[0],b=h[1],O=Object(p.a)(m,u);return Object(d.jsx)("div",{className:s()(l.a.center,u&&O&&l.a.overflown,n),children:Object(d.jsx)("div",Object(i.a)(Object(i.a)({ref:b},f),{},{className:l.a["inner-wrap"],children:t}))})}},527:function(e,t,n){"use strict";var i=n(84),r=n(518),a=n(3),o=n(4),c=n(6),s=n(5),u=n(27),l=n(598),p=n(519),d=n.n(p),v=n(602),f=n.n(v),g=n(43),h=["children","className"],m=function(e){Object(c.a)(Full,e);var t=Object(s.a)(Full);function Full(){return Object(a.a)(this,Full),t.apply(this,arguments)}return Object(o.a)(Full,[{key:"render",value:function render(){var e=this.props,t=e.children,n=e.className,a=Object(r.a)(e,h);return Object(g.jsx)(l.a,Object(i.a)(Object(i.a)({},a),{},{className:d()(f.a.full,n),children:t}))}}]),Full}(u.Component),b=m;t.a=b},534:function(e,t,n){"use strict";var i=n(84),r=n(518),a=n(27),o=n.n(a),c=n(527),s=n(519),u=n.n(s),l=n(603),p=n.n(l),d=n(43),v=["isVisible","children","className"],f=o.a.forwardRef((function Cover(e,t){var n=e.isVisible,a=void 0===n||n,o=e.children,s=(e.className,Object(r.a)(e,v));return Object(d.jsx)(c.a,Object(i.a)(Object(i.a)({ref:t},s),{},{className:u()(p.a.cover,a?"":p.a["no-display"]),children:o}))}));t.a=f},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return useServiceClass}));var i=n(84),r=n(153),a=n(57),o=n(27),c=n(551);function useServiceClass(e){var t=Object(c.a)().startServiceClass,n=Object(o.useMemo)((function(){return t(e)}),[e,t]),s=Object(o.useState)({}),u=Object(r.a)(s,2),l=u[0],p=u[1];return Object(o.useEffect)((function(){var e=function _handleServiceUpdate(){p(Object(i.a)({},n.getState()))};return e(),n.on(a.a,e),function unmount(){n.off(a.a,e)}}),[n]),{serviceInstance:n,serviceState:l}}},541:function(e,t,n){"use strict";n.d(t,"a",(function(){return useForceUpdate}));var i=n(153),r=n(27);function useForceUpdate(){var e=Object(r.useRef)(!1);Object(r.useEffect)((function(){return e.current=!1,function unmount(){e.current=!0}}));var t=Object(r.useState)(!1),n=Object(i.a)(t,2)[1];return Object(r.useCallback)((function(){!e.current&&n((function(e){return!e}))}),[])}},546:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p}));var i=n(3),r=n(4),a=n(6),o=n(5),c=n(57),s=function(e){Object(a.a)(ScreenService,e);var t=Object(o.a)(ScreenService);function ScreenService(){var e;Object(i.a)(this,ScreenService);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).setTitle("Screen Service"),e.setState({screenWidth:null,screenHeight:null}),function(){var t=function _handleViewportResize(){var t=e._detectScreenResolution(),n=t.width,i=t.height;e.setState({screenWidth:n,screenHeight:i})};window.addEventListener("resize",t),e.registerCleanupHandler((function(){window.removeEventListener("resize",t)})),t()}(),e}return Object(r.a)(ScreenService,[{key:"getScreenResolution",value:function getScreenResolution(){var e=this.getState();return{width:e.screenWidth,height:e.screenHeight}}},{key:"_detectScreenResolution",value:function _detectScreenResolution(){return{width:window.innerWidth,height:window.innerHeight}}}]),ScreenService}(c.b),u="desktop",l="mobile",p=function(e){Object(a.a)(UIParadigmService,e);var t=Object(o.a)(UIParadigmService);function UIParadigmService(){var e;Object(i.a)(this,UIParadigmService);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).setTitle("UI Paradigm Service"),e._screenService=e.useServiceClass(s),e.setState({uiParadigm:null,isAutoSet:!0}),function(){var t=function _handleUIParadigmAutoDetect(){e.getState().isAutoSet&&e.setState({uiParadigm:e._detectUIParadigm()})};e.proxyOn(e._screenService,c.a,(function(){return t()})),t()}(),e}return Object(r.a)(UIParadigmService,[{key:"setStaticUIParadigm",value:function setStaticUIParadigm(e){if(e!==u&&e!==l&&null!==e)throw new Error('uiParadigm must be set to "'.concat(u,'", "').concat(l,'", or null'));e?this.setState({uiParadigm:e,isAutoSet:!1}):this.setState({uiParadigm:this._detectUIParadigm(),isAutoSet:!0})}},{key:"getIsAutoSet",value:function getIsAutoSet(){return this.getState().isAutoSet}},{key:"getUIParadigm",value:function getUIParadigm(){return this.getState().uiParadigm}},{key:"_detectUIParadigm",value:function _detectUIParadigm(){var e=this._screenService.getState(),t=e.screenWidth,n=e.screenHeight,i=u;return(t<640||n<480)&&(i=l),i}}]),UIParadigmService}(c.b)},551:function(e,t,n){"use strict";n.d(t,"a",(function(){return useServicesContext}));var i=n(27),r=n(552);function useServicesContext(){return Object(i.useContext)(r.a)}},552:function(e,t,n){"use strict";var i=n(566);n.d(t,"a",(function(){return i.a})),t.b=i.b},566:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return UIServicesProvider}));var i=n(27),r=n.n(i),a=n(103),o=n(174),c=n(541),s=n(43),u=r.a.createContext({});function UIServicesProvider(t){var n=t.children,r=Object(c.a)(),l=Object(i.useMemo)((function(){return a.a.getUIServiceManager()}),[]);Object(i.useEffect)((function(){var t=function _handleServiceAddedOrRemoved(){e((function(){r()}))};return l.on(o.a,t),l.on(o.b,t),function unmount(){l.off(o.a,t),l.off(o.b,t)}}),[r,l]);var p=Object(i.useCallback)((function(e){return l.startServiceClass(e)}),[l]);return Object(s.jsx)(u.Provider,{value:{services:l&&l.getChildren(),startServiceClass:p},children:n})}}).call(this,n(108).setImmediate)},567:function(e,t,n){"use strict";n.d(t,"a",(function(){return useLocationAppRegistrationID}));var i=n(153),r=n(27),a=n(520);function useLocationAppRegistrationID(){var e=Object(a.e)(),t=Object(r.useState)(null),n=Object(i.a)(t,2),o=n[0],c=n[1];return Object(r.useEffect)((function(){var t,n=null===(t=e.pathname)||void 0===t?void 0:t.substring(1);c(n)}),[e]),o}},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return useAnimation}));var i=n(27);n(615);function useAnimation(e){var t=e.domElement,n=e.animationName,r=e.animationDuration,a=void 0===r?"1s":r,o=e.animationDelay,c=void 0===o?"0s":o,s=e.onAnimationEnd,u=e.animationEngine,l=void 0===u?"animate.css":u,p=e.isDisabled,d=void 0!==p&&p,v=e.shouldRun,f=void 0===v||v;"string"!==typeof a&&console.warn('animationDuration should be a string (i.e. "1s")'),"string"!==typeof c&&console.warn('animationDelay should be a string (i.e. "0s")');var g=Object(i.useRef)(s);Object(i.useEffect)((function(){if(f&&t){if(!d){var e=t.classList;if(t.style.visibility="visible",t.style.animationDuration=a,t.style.animationDelay=c,"animate.css"!==l)throw new Error("Unsupported animation engine: ".concat(l));!function(){var i="animate__animated";e.contains(i)||t.classList.add(i),e.contains("animate__"+n)||t.classList.add("animate__"+n)}();var i=g.current;return t.addEventListener("animationend",i),function unmount(){t.removeEventListener("animationend",i)}}t.style.visibility="visible"}}),[l,n,a,c,t,d,f])}},577:function(e,t,n){"use strict";n.d(t,"a",(function(){return usePreload}));var i=n(153),r=n(27),a=n(631),o=n.n(a);function usePreload(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(0),u=Object(i.a)(s,2),l=u[0],p=u[1],d=Object(r.useRef)(e);return Object(r.useEffect)((function(){var e=d.current;if(e.length){var t=new o.a;t.onprogress=function(e){p(e.progress)},t.oncomplete=function(){c(!0)},t.fetch(e)}else c(!0),p(100)}),[]),{isPreloaded:a,progress:l}}},593:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var i=n(27),r=n.n(i),a=n(537),o=n(45),c=n(1),s=n.n(c),u=n(10),l=n(3),p=n(4),d=n(6),v=n(5),f=n(57),g=n(14),h=n(24),m=n(17),b=n(15),O=n.n(b),A={},R=function(e){Object(d.a)(AppRegistration,e);var t=Object(v.a)(AppRegistration);function AppRegistration(e){var n;return Object(l.a)(this,AppRegistration),(n=t.call(this))._appDescriptor=e,A[e.id]=Object(g.a)(n),n}return Object(p.a)(AppRegistration,[{key:"getAppDescriptor",value:function getAppDescriptor(){return this._appDescriptor}},{key:"getID",value:function getID(){return this._appDescriptor.id}},{key:"getTitle",value:function getTitle(){return this._appDescriptor.title}},{key:"getMenu",value:function getMenu(){return this._appDescriptor.menu}},{key:"getIsPinned",value:function getIsPinned(){return Boolean(this._appDescriptor.isPinned)}},{key:"getIsPinnedToDock",value:function getIsPinnedToDock(){return Boolean(this._appDescriptor.isPinnedToDock)}},{key:"getIsAutoStart",value:function getIsAutoStart(){return Boolean(this._appDescriptor.isAutoStart)}},{key:"destroy",value:function(){var e=Object(u.a)(s.a.mark((function _callee(){return s.a.wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return delete A[this._appDescriptor.id],e.abrupt("return",Object(h.a)(Object(m.a)(AppRegistration.prototype),"destroy",this).call(this));case 2:case"end":return e.stop()}}),_callee,this)})));return function destroy(){return e.apply(this,arguments)}}()},{key:"updateAppDescriptor",value:function updateAppDescriptor(e){this._appDescriptor=e,this.emit(b.EVT_UPDATED)}}],[{key:"addOrUpdateAppRegistration",value:function addOrUpdateAppRegistration(e){var t=e.id;return A[t]?(A[t].updateAppDescriptor(e),A[t]):new AppRegistration(e)}},{key:"removeAppRegistration",value:function(){var e=Object(u.a)(s.a.mark((function _callee2(e){var t;return s.a.wrap((function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:if(t=null,t="object"===typeof appDescriptor?e.id:e,!A[t]){n.next=4;break}return n.abrupt("return",A[t].destroy());case 4:case"end":return n.stop()}}),_callee2)})));return function removeAppRegistration(t){return e.apply(this,arguments)}}()}]),AppRegistration}(O.a),j=function(e){Object(d.a)(AppRegistrationCollection,e);var t=Object(v.a)(AppRegistrationCollection);function AppRegistrationCollection(){return Object(l.a)(this,AppRegistrationCollection),t.apply(this,arguments)}return Object(p.a)(AppRegistrationCollection,[{key:"addChild",value:function addChild(e){if(!(e instanceof R))throw new TypeError("appRegistration is not an AppRegistration");return Object(h.a)(Object(m.a)(AppRegistrationCollection.prototype),"addChild",this).call(this,e)}},{key:"addAppRegistration",value:function addAppRegistration(e){return this.addChild(e)}},{key:"removeAppRegistration",value:function removeAppRegistration(e){return this.removeChild(e)}},{key:"getAppRegistrations",value:function getAppRegistrations(){return this.getChildren().sort((function(e,t){var n=e.getTitle(),i=t.getTitle();return n<i?1:i>n?-1:0})).reverse()}}]),AppRegistrationCollection}(b.PhantomCollection),_=function(e){Object(d.a)(AppRuntime,e);var t=Object(v.a)(AppRuntime);function AppRuntime(e){var n;if(Object(l.a)(this,AppRuntime),!(e instanceof R))throw new TypeError("appRegistration is not an AppRegistration");return(n=t.call(this))._appRegistration=e,n.proxyOn(n._appRegistration,b.EVT_UPDATED,(function(e){n.emit(b.EVT_UPDATED,e)})),n.proxyOnce(n._appRegistration,b.EVT_DESTROYED,(function(){n.getIsDestroying()||n.destroy()})),n._windowController=null,n.registerCleanupHandler(Object(u.a)(s.a.mark((function _callee(){return s.a.wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:n.getIsDestroying()||n._windowController.destroy(),n._windowController=null,delete n._appRegistration;case 3:case"end":return e.stop()}}),_callee)})))),n}return Object(p.a)(AppRuntime,[{key:"bringToTop",value:function bringToTop(){if(this._windowController)return this._windowController.bringToTop()}},{key:"__INTERNAL__setWindowController",value:function __INTERNAL__setWindowController(e){this._windowController=e}},{key:"getWindowController",value:function getWindowController(){return this._windowController}},{key:"getRegistration",value:function getRegistration(){return this._appRegistration}},{key:"getRegistrationID",value:function getRegistrationID(){return this._appRegistration.getID()}},{key:"getAppDescriptor",value:function getAppDescriptor(){var e;return null===(e=this._appRegistration)||void 0===e?void 0:e.getAppDescriptor()}},{key:"getEnvironment",value:function getEnvironment(){return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})}}]),AppRuntime}(O.a),S=function(e){Object(d.a)(AppRuntimeCollection,e);var t=Object(v.a)(AppRuntimeCollection);function AppRuntimeCollection(){return Object(l.a)(this,AppRuntimeCollection),t.apply(this,arguments)}return Object(p.a)(AppRuntimeCollection,[{key:"addChild",value:function addChild(e){if(!(e instanceof _))throw new TypeError("appRuntime is not an AppRuntime");return Object(h.a)(Object(m.a)(AppRuntimeCollection.prototype),"addChild",this).call(this,e)}},{key:"addAppRuntime",value:function addAppRuntime(e){return this.addChild(e)}},{key:"removeAppRuntime",value:function removeAppRuntime(e){return this.removeChild(e)}},{key:"getAppRuntimes",value:function getAppRuntimes(){return this.getChildren()}}]),AppRuntimeCollection}(b.PhantomCollection),y=function(e){Object(d.a)(AppOrchestrationService,e);var t=Object(v.a)(AppOrchestrationService);function AppOrchestrationService(){var e;Object(l.a)(this,AppOrchestrationService);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).setTitle("App Orchestration Service"),e._appRegistrationCollection=e.bindCollectionClass(j),e._appRuntimeCollection=e.bindCollectionClass(S),e}return Object(p.a)(AppOrchestrationService,[{key:"getAppRegistrationTitleWithDescriptorID",value:function getAppRegistrationTitleWithDescriptorID(e){var t=this._appRegistrationCollection.getAppRegistrations().find((function(t){return t.getID()===e}));if(t)return t.getTitle();console.warn("Could not locate appRegistration with id: ".concat(e))}},{key:"addOrUpdateAppRegistration",value:function addOrUpdateAppRegistration(e){var t=R.addOrUpdateAppRegistration(e);this._appRegistrationCollection.addAppRegistration(t)}},{key:"_launchAppRegistration",value:function _launchAppRegistration(e){var t=new _(e);return this._appRuntimeCollection.addAppRuntime(t),t}},{key:"activateAppRegistration",value:function activateAppRegistration(e){this.getActiveAppRegistrations().includes(e)?this.getAppRuntimes().filter((function(t){return t.getRegistration()===e})).forEach((function(e){return e.bringToTop()})):this._launchAppRegistration(e)}},{key:"activateAppRegistrationID",value:function activateAppRegistrationID(e){var t=this.getAppRegistrations().find((function(t){return t.getID()===e}));t?this.activateAppRegistration(t):this.log.warn("Unknown appRegistration with id: ".concat(e))}},{key:"closeAppRuntime",value:function(){var e=Object(u.a)(s.a.mark((function _callee(e){return s.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.destroy());case 1:case"end":return t.stop()}}),_callee)})));return function closeAppRuntime(t){return e.apply(this,arguments)}}()},{key:"getAppRegistrations",value:function getAppRegistrations(){return this._appRegistrationCollection.getAppRegistrations()}},{key:"getAppRegistrationWithID",value:function getAppRegistrationWithID(e){return this.getAppRegistrations().find((function(t){return t.getID()===e}))}},{key:"getActiveAppRegistrations",value:function getActiveAppRegistrations(){return Object(o.a)(new Set(this.getAppRuntimes().map((function(e){return e.getRegistration()}))))}},{key:"getAppRuntimes",value:function getAppRuntimes(){return this._appRuntimeCollection.getAppRuntimes()}},{key:"getAppRuntimesWithRegistrationID",value:function getAppRuntimesWithRegistrationID(e){return this.getAppRuntimes().filter((function(t){return t.getRegistrationID()===e}))}}]),AppOrchestrationService}(f.b),D=y,C=n(607),w=n(43),I=r.a.createContext({});t.b=function AppOrchestrationProvider(e){var t=e.children,n=Object(a.a)(D).serviceInstance,i=n.getActiveAppRegistrations(),r=n.getAppRegistrations(),o=n.getAppRuntimes(),c=n.activateAppRegistration,s=n.activateAppRegistrationID,u=n.addOrUpdateAppRegistration,l=n.getAppRegistrationTitleWithDescriptorID,p=n.getAppRuntimesWithRegistrationID;return Object(C.a)(r,c),Object(w.jsx)(I.Provider,{value:{activeAppRegistrations:i,appRegistrations:r,appRuntimes:o,activateAppRegistration:c,activateAppRegistrationID:s,addOrUpdateAppRegistration:u,getAppRegistrationTitleWithDescriptorID:l,getAppRuntimesWithRegistrationID:p},children:t})}},594:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(153),r=n(27),a=n.n(r),o=n(15),c=n(541),s=document.title;var u=n(537),l=n(546),p=n(43),d=a.a.createContext({});t.b=function DesktopProvider(e){var t=e.children,n=Object(r.useState)(!1),a=Object(i.a)(n,2),v=a[0],f=a[1],g=Object(u.a)(l.c).serviceInstance,h=function useActiveWindowController(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],u=Object(c.a)();return Object(r.useEffect)((function(){var e=function _handleUpdate(e){n?e&&void 0===e.title||(document.title="".concat(n.getTitle()," | ").concat(s),u()):document.title=s};if(e(),n){var t=function _handleDestruct(){a(null)};return n.on(o.EVT_UPDATED,e),n.once(o.EVT_DESTROYED,t),function unmount(){n.off(o.EVT_UPDATED,e),n.off(o.EVT_DESTROYED,t)}}}),[n,u]),{activeWindowController:n,setActiveWindowController:a}}(),m=h.activeWindowController,b=h.setActiveWindowController;return Object(p.jsx)(d.Provider,{value:{activeWindowController:m,setActiveWindowController:b,uiParadigm:g.getUIParadigm(),isUIParadigmAutoSet:g.getIsAutoSet(),setStaticUIParadigm:g.setStaticUIParadigm,isProfiling:v,setIsProfiling:f},children:t})}},596:function(e,t,n){"use strict";var i=n(84),r=n(153),a=n(518),o=n(27),c=n(577),s=n(570),u=n(519),l=n.n(u),p=n(632),d=n.n(p),v=n(43),f=["className","children","animationName","animationDuration","animationDelay","animationEngine","preloadResources","onAnimationEnd","tag","inline","disabled"];t.a=function Animation(e){var t=e.className,n=e.children,u=e.animationName,p=e.animationDuration,g=e.animationDelay,h=e.animationEngine,m=void 0===h?"animate.css":h,b=e.preloadResources,O=void 0===b?[]:b,A=e.onAnimationEnd,R=void 0===A?function(){return null}:A,j=e.tag,_=void 0===j?"div":j,S=e.inline,y=void 0!==S&&S,D=e.disabled,C=void 0!==D&&D,w=Object(a.a)(e,f),I=Object(o.useState)(null),k=Object(r.a)(I,2),E=k[0],P=k[1],T=Object(c.a)(O).isPreloaded;Object(s.a)({domElement:E,animationName:u,animationDuration:p,animationDelay:g,animationEngine:m,onAnimationEnd:R,isDisabled:C});var U=Object(o.useMemo)((function(){return _}),[_]);return T?Object(v.jsx)(U,Object(i.a)(Object(i.a)({},w),{},{ref:P,className:l()(d.a.animation,y?d.a.inline:null,t),children:n})):null}},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return useOverflowDetection}));var i=n(153),r=n(27);function getIsElOverflown(e){if(e){var t=e.offsetHeight,n=e.offsetWidth,i=e.parentNode,r=null===i||void 0===i?void 0:i.clientHeight,a=null===i||void 0===i?void 0:i.clientWidth;return r<t||a<n}return!1}var a=n(535),o=n.n(a),c=n(166),s=n(575);function useOverflowDetection(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(r.useRef)(null),a=Object(r.useCallback)((function(){return getIsElOverflown(e)}),[e]),s=Object(r.useState)(a),u=Object(i.a)(s,2),l=u[0],p=u[1];n.current=l;var d=Object(r.useMemo)(c.a,[]);return Object(r.useEffect)((function(){if(t&&e){var i=!1,r=function checkIsOverflown(){if(!i){var e=n.current,t=a();e!==t&&p(t)}},c=new ResizeObserver((function(){o()(r,d)}));return c.observe(e),c.observe(e.parentNode),function unmount(){i=!0,c.observe(e),c.unobserve(e.parentNode)}}}),[t,e,a,d]),l}window.ResizeObserver||Object(s.install)()},598:function(e,t,n){"use strict";var i=n(84),r=n(518),a=n(27),o=n(519),c=n.n(o),s=n(601),u=n.n(s),l=n(43),p=["className","children","isAccelerated","onMount"];t.a=function StackingContext(e){var t=e.className,n=e.children,o=e.isAccelerated,s=void 0!==o&&o,d=e.onMount,v=void 0===d?function(){return null}:d,f=Object(r.a)(e,p),g=Object(a.useRef)(v),h=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=h.current;e&&(0,g.current)(e)}),[]),Object(l.jsx)("div",Object(i.a)(Object(i.a)({ref:h},f),{},{className:c()(u.a["stacking-context"],s&&u.a.accelerated,t),children:n}))}},601:function(e,t,n){e.exports={"stacking-context":"StackingContext_stacking-context__3KDjJ",accelerated:"StackingContext_accelerated__E4pfU"}},602:function(e,t,n){e.exports={full:"Full_full__3xUwm"}},603:function(e,t,n){e.exports={cover:"Cover_cover__3qNO7","no-display":"Cover_no-display__vixgE"}},607:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return useAppRuntimesAutoStart}));var i=n(45),r=n(74),a=n(27),o=n(567);function useAppRuntimesAutoStart(t,n){var c=Object(a.useRef)(!1),s=Object(o.a)();Object(a.useEffect)((function(){if(t.length&&!c.current){c.current=!0;var a,o=Object(r.a)(Object(i.a)(t).filter((function(e){return e.getIsAutoStart()})).reverse());try{for(o.s();!(a=o.n()).done;){var u=a.value;n(u)}}catch(l){o.e(l)}finally{o.f()}e((function(){if(s){var e=t.find((function(e){return e.getID()===s}));e&&n(e)}}))}}),[s,t,n])}}).call(this,n(108).setImmediate)},632:function(e,t,n){e.exports={animation:"Animation_animation__1HH_d",inline:"Animation_inline__3Lb1U"}},638:function(e,t,n){e.exports={center:"Center_center__PZFg8",overflown:"Center_overflown__LMy0-","inner-wrap":"Center_inner-wrap__2OIMV"}}}]);
//# sourceMappingURL=0.83bca13d.chunk.js.map