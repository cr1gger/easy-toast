(()=>{"use strict";var t,e,o,s,n,a,i,r,l,c,u,p,d,m,h={380:(t,e,o)=>{o.d(e,{Z:()=>r});var s=o(81),n=o.n(s),a=o(645),i=o.n(a)()(n());i.push([t.id,'svg.easy-toast{display:block;vertical-align:middle}*.easy-toast,.easy-toast::before,.easy-toast::after{z-index:999999;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;line-height:1.5;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}p.easy-toast{margin:0}.easy-toast-block{max-width:20rem;font-size:0.875rem;line-height:1.25rem;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0,0,0,0.3),0 4px 6px -4px rgba(0,0,0,0.3);color:white;margin-top:0.5rem;word-break:break-all}.easy-toast-stack{display:flex;flex-direction:column;margin-top:0.875rem;margin-bottom:0.875rem}.easy-toast-button{display:inline-flex;flex-shrink:0;align-items:center;height:1rem;width:1rem;border-radius:0.375rem;color:rgba(255,255,255,0.5) !important;font-size:0.875rem;line-height:1.25rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;cursor:pointer;text-shadow:none;text-align:center;-webkit-appearance:button;background-color:transparent;background-image:none;margin:0;padding:0;writing-mode:horizontal-tb !important}.easy-toast-button:hover{color:white !important}.easy-toast-svg-close{width:0.875rem;height:0.875rem}.easy-toast-position-top-left{top:1rem;left:1rem}.easy-toast-position-top-middle{top:1rem;left:50%;transform:translate(-50%, 0)}.easy-toast-position-top-right{top:1rem;right:1rem}.easy-toast-position-bottom-left{bottom:1rem;left:1rem}.easy-toast-position-bottom-middle{bottom:1rem;left:50%;transform:translate(-50%, 0)}.easy-toast-position-bottom-right{bottom:1rem;right:1rem}.easy-toast-position-center{top:50%;left:50%;transform:translate(-50%, -50%)}.easy-toast-timeline{border-radius:0.375rem;width:100%;height:0.25rem;opacity:0.5}.et-bg-gray-500{background-color:#6b7280}.et-bg-green-500{background-color:#22c55e}.et-bg-red-500{background-color:#ef4444}.et-bg-yellow-500{background-color:#eab308}.et-bg-green-900{background-color:#14532d}.et-bg-red-900{background-color:#7f1d1d}.et-bg-yellow-900{background-color:#713f12}.et-bg-gray-900{background-color:#111827}.et-flex{display:flex}.et-inline-flex{display:inline-flex}.et-flex-shrink-0{flex-shrink:0}.et-p-4{padding:1rem}.et-px-3{padding-left:0.75rem;padding-right:0.75rem}.et-ml-auto{margin-left:auto}.et-fixed{position:fixed}.et-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}\n',""]);const r=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",s=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),s&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),s&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,s,n,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(s)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(i[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);s&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),n&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=n):u[4]="".concat(n)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function o(t){for(var o=-1,s=0;s<e.length;s++)if(e[s].identifier===t){o=s;break}return o}function s(t,s){for(var a={},i=[],r=0;r<t.length;r++){var l=t[r],c=s.base?l[0]+s.base:l[0],u=a[c]||0,p="".concat(c," ").concat(u);a[c]=u+1;var d=o(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(m);else{var h=n(m,s);s.byIndex=r,e.splice(r,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function n(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,n){var a=s(t=t||[],n=n||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var r=o(a[i]);e[r].references--}for(var l=s(t,n),c=0;c<a.length;c++){var u=o(a[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=l}}},569:t=>{var e={};t.exports=function(t,o){var s=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(o)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var s="";o.supports&&(s+="@supports (".concat(o.supports,") {")),o.media&&(s+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(s+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),s+=o.css,n&&(s+="}"),o.media&&(s+="}"),o.supports&&(s+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},f={};function y(t){var e=f[t];if(void 0!==e)return e.exports;var o=f[t]={id:t,exports:{}};return h[t](o,o.exports,y),o.exports}y.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return y.d(e,{a:e}),e},y.d=(t,e)=>{for(var o in e)y.o(e,o)&&!y.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},y.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),y.nc=void 0,t=y(379),e=y.n(t),o=y(795),s=y.n(o),n=y(569),a=y.n(n),i=y(565),r=y.n(i),l=y(216),c=y.n(l),u=y(589),p=y.n(u),d=y(380),(m={}).styleTagTransform=p(),m.setAttributes=r(),m.insert=a().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=c(),e()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals,window.toast=new class{STACK_CLASS_TL="easy-toast-stack-tl";STACK_CLASS_TR="easy-toast-stack-tr";STACK_CLASS_TM="easy-toast-stack-tm";STACK_CLASS_BR="easy-toast-stack-br";STACK_CLASS_BL="easy-toast-stack-bl";STACK_CLASS_BM="easy-toast-stack-bm";STACK_CLASS_CENTER="easy-toast-stack-center";TIMELINE_CLASS="easy-toast-timeline";POSITION_TR="top-right";POSITION_TM="top-middle";POSITION_TL="top-left";POSITION_BL="bottom-left";POSITION_BM="bottom-middle";POSITION_BR="bottom-right";POSITION_CENTER="center";TYPE_DEFAULT="default";TYPE_SUCCESS="success";TYPE_DANGER="danger";TYPE_WARNING="warning";TYPE_DARK="dark";DEFAULT_CONFIG={duration:3,type:"default",position:"bottom-right",hasCloseButton:!0,showTimeline:!0,autoclose:!0,stopOnHover:!0,events:{click:null,closeClick:null}};notify(t,e={}){let o={...this.DEFAULT_CONFIG,...e},s=this.getStack(o.position),{notify:n,notifyClose:a,notifyTimeline:i}=this.createNotify(t,o);o.stopOnHover&&(n.onmouseenter=function(){n.setAttribute("data-pause","pause")},n.onmouseleave=function(){n.removeAttribute("data-pause");let t=n.getAttribute("data-start"),e=n.getAttribute("data-last");this.startAnimate(n,o,e-t,i.style.width.replace("%",""))}.bind(this)),s.prepend(n);let r=this.startAnimate(n,o);o.hasCloseButton&&("function"==typeof o.events.closeClick?a.onclick=function(t){t.stopPropagation(),o.events.closeClick(t)}:a.onclick=t=>{t.stopPropagation(),this.destroy(n,r)}),"function"==typeof o.events.click&&(n.onclick=function(t){t.stopPropagation(),o.events.click(t)})}startAnimate(t,e,o=null,s=null){t.setAttribute("data-start",Date.now());let n=o?1e3*e.duration-o:1e3*e.duration,a=s??100,i=this.animate({timing:function(t){return a-100*t},draw:o=>{e.showTimeline&&e.autoclose&&(t.setAttribute("data-last",Date.now()),t.querySelector(`.${this.TIMELINE_CLASS}`).style.width=o+"%"),o<1&&e.autoclose&&this.destroy(t,i)},duration:n,notify:t});return i}createNotify(t,e){let o=this.getTypeClass(e.type),s=this.getTimelineClass(e.type),n=document.createElement("div");n.className="easy-toast easy-toast-block "+o;let a=document.createElement("div");a.className="easy-toast et-p-4 et-flex";let i=document.createElement("p");i.className="easy-toast et-px-3",i.innerHTML=t.replaceAll("script","");let r=document.createElement("div");r.className="easy-toast et-ml-auto";let l=document.createElement("button");l.className="easy-toast easy-toast-button",l.innerHTML='\n        <span class="easy-toast et-sr-only">Close</span>\n        <svg class="easy-toast easy-toast-svg-close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>\n        </svg>\n        ';let c=document.createElement("div");return c.className=`easy-toast ${s} ${this.TIMELINE_CLASS}`,a.append(i),e.hasCloseButton&&r.append(l),a.append(r),n.append(a),e.showTimeline&&e.autoclose&&n.append(c),{notify:n,notifyClose:l,notifyTimeline:c}}getStack(t){let e=this.getPositionClasses(t),o=this.getStackClass(t),s=document.querySelector("."+o);if(!s){let t=document.createElement("div");t.className="easy-toast et-fixed "+e,s=document.createElement("div"),s.className="easy-toast easy-toast-stack "+o,t.append(s),document.body.append(t)}return s}destroy(t,e=null){t.remove(),e&&cancelAnimationFrame(e)}getPositionClasses(t){switch(t){case this.POSITION_TL:return"easy-toast-position-top-left";case this.POSITION_TM:return"easy-toast-position-top-middle";case this.POSITION_TR:return"easy-toast-position-top-right";case this.POSITION_BL:return"easy-toast-position-bottom-left";case this.POSITION_BM:return"easy-toast-position-bottom-middle";case this.POSITION_BR:return"easy-toast-position-bottom-right";case this.POSITION_CENTER:return"easy-toast-position-center";default:return"easy-toast-position-bottom-right"}}getStackClass(t){switch(t){case this.POSITION_TL:return this.STACK_CLASS_TL;case this.POSITION_TM:return this.STACK_CLASS_TM;case this.POSITION_TR:return this.STACK_CLASS_TR;case this.POSITION_BL:return this.STACK_CLASS_BL;case this.POSITION_BM:return this.STACK_CLASS_BM;case this.POSITION_BR:return this.STACK_CLASS_BR;case this.POSITION_CENTER:return this.STACK_CLASS_CENTER;default:return this.STACK_CLASS_BR}}getTypeClass(t){switch(t){case this.TYPE_DEFAULT:return"et-bg-gray-500";case this.TYPE_SUCCESS:return"et-bg-green-500";case this.TYPE_DANGER:return"et-bg-red-500";case this.TYPE_WARNING:return"et-bg-yellow-500";case this.TYPE_DARK:return"et-bg-gray-900"}}getTimelineClass(t){switch(t){case this.TYPE_DEFAULT:return"et-bg-gray-900";case this.TYPE_SUCCESS:return"et-bg-green-900";case this.TYPE_DANGER:return"et-bg-red-900";case this.TYPE_WARNING:return"et-bg-yellow-900";case this.TYPE_DARK:return"et-bg-gray-500"}}animate=({timing:t,draw:e,duration:o,notify:s})=>{let n=performance.now();return requestAnimationFrame((function a(i){if(s.getAttribute("data-pause"))return;let r=(i-n)/o;r>1&&(r=1);let l=t(r);return e(l),r<1?requestAnimationFrame(a):void 0}))};testShowAll(){this.notify("Bottom-Right position",{duration:3,type:"default",position:"bottom-right",hasCloseButton:!1,showTimeline:!0,autoclose:!0,stopOnHover:!0,events:{click:null,closeClick:null}}),this.notify("Bottom-Left position",{duration:3,type:"success",position:"bottom-left",hasCloseButton:!0,showTimeline:!1,autoclose:!0,stopOnHover:!0,events:{click:null,closeClick:null}}),this.notify("Bottom-Middle position",{duration:3,type:"warning",position:"bottom-middle",hasCloseButton:!0,showTimeline:!0,autoclose:!1,stopOnHover:!0,events:{click:null,closeClick:null}}),this.notify("Top-Right position",{duration:3,type:"danger",position:"top-right",hasCloseButton:!1,showTimeline:!0,autoclose:!0,stopOnHover:!0,events:{click:null,closeClick:null}}),this.notify("Top-Left position",{duration:3,type:"dark",position:"top-left",hasCloseButton:!0,showTimeline:!0,autoclose:!0,stopOnHover:!0,events:{click:null,closeClick:null}}),this.notify("Top-Middle position",{position:"top-middle",autoclose:!1}),this.notify("Center position",{duration:10,position:"center",type:"success"})}}})();