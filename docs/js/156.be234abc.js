(self["webpackChunkblobs"]=self["webpackChunkblobs"]||[]).push([[156],{5156:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>ze});var r=i(3673);const o=(0,r.HX)("data-v-18f41d65"),n=o(((e,t,i,n,a,s)=>{const l=(0,r.up)("buddies-component"),c=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(c,{class:"row items-start justify-around ummmm"},{default:o((()=>[(0,r.Wm)(l)])),_:1})}));var a=i(2323);const s=(0,r.HX)("data-v-406a8cd2");(0,r.dD)("data-v-406a8cd2");const l={class:"game-canvas-container col row justify-around"},c=(0,r.Uk)("Info"),u=(0,r.Uk)("Buddies: "),d=(0,r.Uk)("Eggs "),h=(0,r.Uk)("Unhatched"),p=(0,r.Uk)("Ready To Hatch"),g=(0,r.Uk)("Expired"),b={class:"col-3 column"};(0,r.Cn)();const f=s(((e,t,i,o,n,f)=>{const m=(0,r.up)("q-card-section"),y=(0,r.up)("q-card"),v=(0,r.up)("buddies-controls");return(0,r.wg)(),(0,r.j4)("div",l,[(0,r.Wm)(y,{bordered:"",class:"col-3 info-column"},{default:s((()=>[(0,r.Wm)(m,{class:"text-h3"},{default:s((()=>[c])),_:1}),(0,r.Wm)(m,{horizontal:"",class:"text-h5 justify-between"},{default:s((()=>[(0,r.Wm)(m,null,{default:s((()=>[u])),_:1}),(0,r.Wm)(m,{class:"value"},{default:s((()=>[(0,r.Uk)((0,a.zw)(e.activeBuddies),1)])),_:1})])),_:1}),(0,r.Wm)(m,{class:"text-h5 justify-between"},{default:s((()=>[d])),_:1}),(0,r.Wm)(m,{horizontal:"",class:"column"},{default:s((()=>[(0,r.Wm)(m,{horizontal:"",class:"justify-between"},{default:s((()=>[(0,r.Wm)(m,null,{default:s((()=>[h])),_:1}),(0,r.Wm)(m,{class:"value"},{default:s((()=>[(0,r.Uk)((0,a.zw)(e.unhatchedBuddies),1)])),_:1})])),_:1}),(0,r.Wm)(m,{horizontal:"",class:"justify-between"},{default:s((()=>[(0,r.Wm)(m,null,{default:s((()=>[p])),_:1}),(0,r.Wm)(m,{class:"value"},{default:s((()=>[(0,r.Uk)((0,a.zw)(e.readyEggs),1)])),_:1})])),_:1}),(0,r.Wm)(m,{horizontal:"",class:"justify-between"},{default:s((()=>[(0,r.Wm)(m,null,{default:s((()=>[g])),_:1}),(0,r.Wm)(m,{class:"value"},{default:s((()=>[(0,r.Uk)((0,a.zw)(e.expiredEggs),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)("div",{id:"p5-container",ref:"p5Container",class:"col-auto column items-center buddies-plate",onSelectstart:t[1]||(t[1]=t=>e.doNothing(t)),onContextmenu:t[2]||(t[2]=t=>e.doNothing(t))},null,544),(0,r.Wm)("div",b,[(0,r.Wm)(v)])])}));var m=i(5777),y=i(2943),v=i(930),w=i.n(v),O=i(5718),P=i(556),j=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};const x="sketchstore";P.storeInstance.hasModule(x)&&P.storeInstance.unregisterModule(x);let k=class extends O.g4{constructor(){super(...arguments),Object.defineProperty(this,"mainSketch",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"resourceGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"mainGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"overlayGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"debugGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"debugOn",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"frameRate",{enumerable:!0,configurable:!0,writable:!0,value:144})}get isDebug(){return this.debugOn}get playing(){var e;return(null===(e=this.mainSketch)||void 0===e?void 0:e.isLooping())||!1}initP(e){this.mainSketch=e}initBackground(e){this.backgroundGraphic=e}initResources(e){this.resourceGraphic=e}initGraphics(e){this.mainGraphic=e}initOverlay(e){this.overlayGraphic=e}initDebugOverlay(e){this.debugGraphic=e}setDebug(e){this.debugOn=e}setFrameRate(e){var t;this.frameRate=e,null===(t=this.mainSketch)||void 0===t||t.frameRate(e)}play(){var e;null===(e=this.mainSketch)||void 0===e||e.loop()}pause(){var e;null===(e=this.mainSketch)||void 0===e||e.noLoop()}step(){var e;null===(e=this.mainSketch)||void 0===e||e.redraw()}clearScreen(){var e,t,i,r;null===(e=this.mainGraphic)||void 0===e||e.clear(),null===(t=this.mainGraphic)||void 0===t||t.background(0),null===(i=this.resourceGraphic)||void 0===i||i.clear(),null===(r=this.resourceGraphic)||void 0===r||r.background(0)}togglePlayState(){this.playing?this.pause():this.play()}setLoopState(e){e?this.play():this.pause()}toggleDebug(){this.setDebug(!this.debugOn)}};j([O.mm],k.prototype,"initP",null),j([O.mm],k.prototype,"initBackground",null),j([O.mm],k.prototype,"initResources",null),j([O.mm],k.prototype,"initGraphics",null),j([O.mm],k.prototype,"initOverlay",null),j([O.mm],k.prototype,"initDebugOverlay",null),j([O.mm],k.prototype,"setDebug",null),j([O.mm],k.prototype,"setFrameRate",null),j([O.mm],k.prototype,"play",null),j([O.mm],k.prototype,"pause",null),j([O.mm],k.prototype,"step",null),j([O.mm],k.prototype,"clearScreen",null),j([O.aU],k.prototype,"togglePlayState",null),j([O.aU],k.prototype,"setLoopState",null),j([O.aU],k.prototype,"toggleDebug",null),k=j([(0,O.Yl)({name:x,store:P.storeInstance,dynamic:!0,namespaced:!0,stateFactory:!0})],k);const S=(0,O.rT)(k);class W{getGoals(e,t,i){const r=t.position;if(!r)return[];const o=[],n=25;return r.x<n&&o.push(e.createVector(t.maxSpeed,t.velocity.y)),r.x>e.width-n&&o.push(e.createVector(-t.maxSpeed,t.velocity.y)),r.y<n&&o.push(e.createVector(t.velocity.x,t.maxSpeed)),r.y>e.height-n&&o.push(e.createVector(t.velocity.x,-t.maxSpeed)),o}getForces(e,t,i){return[]}}class B{getGoals(e,t,i){return[]}getForces(e,t,i){const r=i.buddies,o=[];for(const n of r){if(t===n)continue;const i=n.body.entries();for(let r=0;r<i.length;r+=5){const n=i[r];o.push(M(e,n.position,t.position))}}return o}}class V{getGoals(e,t,i){return[]}getForces(e,t,i){const r=[],o=i.eggs;for(const n of o)r.push(M(e,n.position,t.position));return r}}class E{getGoals(e,t,i){return[]}getForces(e,t,i){const r=[],o=i.plants;for(const n of o)r.push(M(e,n.position,t.position).mult(8));return r}}class R{constructor(){Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.ticks=0}getGoals(e,t,i){return[]}getForces(e,t,i){this.ticks++;const r=[];return r.push(v.Vector.random2D()),r}}function M(e,t,i){const r=v.Vector.sub(t,i),o=r.mag();if(o>500)return e.createVector();const n=-100/(o*o);return r.normalize(),n&&!isNaN(n)&&isFinite(n)&&r.mult(n),r}function C(e,t){const i=e.hue(t),r=e.saturation(t),o=e.brightness(t),n=(i+180)%360,a=e.color(n,r,o);return[t,a]}function D(e,t){const i=e.hue(t),r=e.saturation(t),o=e.brightness(t),n=(i+5)%360,a=(i-5)%360,s=e.color(n,r,o),l=e.color(a,r,o);return[t,s,l]}function A(e){return e.color(e.random(360),e.random(40,100),e.random(80,100))}var F=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};const G="buddystore";P.storeInstance.hasModule(G)&&P.storeInstance.unregisterModule(G);let _=class extends O.g4{constructor(){super(...arguments),Object.defineProperty(this,"ageLimit",{enumerable:!0,configurable:!0,writable:!0,value:300}),Object.defineProperty(this,"buddyLength",{enumerable:!0,configurable:!0,writable:!0,value:50}),Object.defineProperty(this,"colorRange",{enumerable:!0,configurable:!0,writable:!0,value:[0,90]}),Object.defineProperty(this,"focused",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"colors",{enumerable:!0,configurable:!0,writable:!0,value:[{color:"red",animal:"cat"},{color:"orange",animal:"crow"},{color:"yellow",animal:"dog"},{color:"green",animal:"dove"},{color:"blue",animal:"dragon"},{color:"purple",animal:"fish"},{color:"cyan",animal:"frog"},{color:"grey",animal:"hippo"},{color:"brown",animal:"horse"},{color:"lime",animal:"kiwi-bird"},{color:"teal",animal:"otter"},{color:"indigo",animal:"spider"}]})}incrementFocus(){this.focused++,this.focused%=this.colors.length}setFocus(e){this.focused=this.colors.indexOf(e)}setAgeLimit(e){this.ageLimit=Math.max(0,e)}setBuddyLength(e){this.buddyLength=e}get focusedColor(){return this.colors[this.focused]}};F([O.mm],_.prototype,"incrementFocus",null),F([O.mm],_.prototype,"setFocus",null),F([O.mm],_.prototype,"setAgeLimit",null),F([O.mm],_.prototype,"setBuddyLength",null),_=F([(0,O.Yl)({name:G,store:P.storeInstance,dynamic:!0,namespaced:!0})],_);const T=(0,O.rT)(_);class L{constructor(){Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"tail",{enumerable:!0,configurable:!0,writable:!0,value:0})}enqueue(e){this.data[this.tail]=e,this.tail++}dequeue(){if(this.isEmpty())throw Error("Nothing in Queue");const e=this.data[this.head];return delete this.data[this.head],this.head++,this.isEmpty()&&(this.head=0,this.tail=0),e}peek(){if(!this.isEmpty())return this.data[this.head]}peekTail(){if(!this.isEmpty())return this.data[this.tail-1]}size(){return this.tail-this.head}isEmpty(){return this.tail===this.head}entries(){return Object.values(this.data)}}class I{constructor(e,t,i=A(e),r=1){Object.defineProperty(this,"p",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"position",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"generation",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"age",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"hatchAge",{enumerable:!0,configurable:!0,writable:!0,value:500}),Object.defineProperty(this,"expirationAge",{enumerable:!0,configurable:!0,writable:!0,value:1e3}),Object.defineProperty(this,"outline",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.outline=C(e,i)[1],this.color.setAlpha(.1)}update(){this.age++}draw(){this.render(),this.renderDebug()}render(){const e=S.mainGraphic;e&&(e.push(),e.translate(this.position.x,this.position.y),e.fill(this.alphaColor(this.color)),e.stroke(this.alphaColor(this.outline)),e.rotate(e.random(-.05,.05)*e.TWO_PI),e.ellipse(0,0,this.width,this.height),e.pop())}renderDebug(){const e=S.debugGraphic;e&&S.isDebug&&(e.push(),e.fill(0,0,100,1),e.textSize(32),e.textAlign(e.CENTER,e.BASELINE),e.text(this.debugText,this.position.x,this.position.y-32),e.pop())}alphaColor(e){const t=this.p.color(e);return t.setAlpha(this.alpha),t}get debugText(){return this.expired?`<${this.age}>`:this.ready?`(${this.age})`:`[${this.age}]`}get size(){const e=this.expired?10:this.ready?this.expirationAge-this.age:this.age;return 5*Math.pow(e,.3)}get width(){return.8*this.size+(this.almostReady?5*this.p.sin((this.age+50)/100*(50/this.timeUntilReady)*this.p.TWO_PI):0)}get height(){return this.size+(this.almostReady?4*this.p.sin(this.age/100*(100/this.timeUntilReady)*this.p.TWO_PI):0)}get alpha(){return this.ready?(this.expirationAge-this.age)/(this.expirationAge-this.hatchAge):1}get almostReady(){return this.timeUntilReady<.4*this.hatchAge}get timeUntilReady(){return Math.abs(this.hatchAge-this.age)}get ready(){return this.age>=this.hatchAge}get expired(){return this.age>=this.expirationAge}hatch(e){return new H(e,this.position,D(this.p,this.color),this.generation)}}function z(){return[new W,new B,new V,new E,new R]}class U{constructor(e,t,i=A(e)){Object.defineProperty(this,"p",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"position",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,writable:!0,value:i}),this.color.setAlpha(.27)}render(){this.p.push(),this.p.noStroke(),this.p.fill(this.color),this.p.translate(this.position.x,this.position.y),this.p.circle(0,0,this.position.z),this.p.pop()}renderDebug(){const e=S.debugGraphic,t=S.mainSketch;if(!e||!t||!S.debugOn)return;e.push();const i=this.position.x,r=this.position.y,o=t.mouseX-i,n=t.mouseY-r;e.stroke(0,0,100,1),e.strokeWeight(1),e.noFill();const a=t.atan2(n,o)-t.atan2(r,i);e.translate(i,r),e.rotate(a),e.line(0,0,30,30),e.pop()}copy(e,t,i){const r=v.Vector.add(this.position,e);return r.z=t,new U(this.p,r,i)}}class H{constructor(e,t,i=D(e,A(e)),r=1){Object.defineProperty(this,"p",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"colors",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"generation",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"age",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"alive",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"velocity",{enumerable:!0,configurable:!0,writable:!0,value:v.Vector.random2D()}),Object.defineProperty(this,"acceleration",{enumerable:!0,configurable:!0,writable:!0,value:new v.Vector}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:15}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"secondaryColor",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"drives",{enumerable:!0,configurable:!0,writable:!0,value:z()}),Object.defineProperty(this,"stomach",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"stomachCapacity",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"calories",{enumerable:!0,configurable:!0,writable:!0,value:100}),this.secondaryColor=C(e,i[0])[1],this.secondaryColor.setAlpha(.8),t.z=this.velocity.mag(),this.body=new L,this.body.enqueue(new U(e,t.copy(),this.colors[0]))}get maxSpeed(){return this.size/4}get maxLength(){return T.buddyLength}get position(){var e,t;return null!==(t=null===(e=this.body.peekTail())||void 0===e?void 0:e.position)&&void 0!==t?t:new v.Vector}get allDone(){return 1===this.body.size()}update(e){this.age++,this.age>T.ageLimit&&T.ageLimit<=600&&(this.alive=!1),this.move(e)}draw(){this.render(),this.renderDebug()}render(){this.p.noStroke();const e=this.body.entries();for(let t=0;t<e.length-1;t++){const i=e[t];i.render(),i.position.z*=.99}this.alive&&this.drawForce(this.velocity,this.position)}renderDebug(){const e=S.debugGraphic;e&&S.isDebug&&(e.push(),e.fill(0,0,100,1),e.textSize(32),e.textAlign(e.CENTER),e.text(this.debugText,this.position.x,this.position.y-20),e.pop())}get debugText(){return`${this.age} - ${this.generation}`}move(e){for(const t of this.drives){for(const i of t.getGoals(this.p,this,e))this.steer(i);for(const i of t.getForces(this.p,this,e))this.applyForce(i)}this.changeVelocity()}applyForce(e){e.div(this.size),this.acceleration.add(e)}drawForce(e,t){const i=w().Vector.mult(e,10).add(t);this.p.push(),this.p.stroke(this.secondaryColor),this.p.strokeWeight(4),this.p.noFill(),this.p.line(t.x,t.y,i.x,i.y),this.p.pop()}changeVelocity(){if(this.velocity.add(this.acceleration).limit(this.maxSpeed),!this.alive){const e=this.body.size()/10;for(let t=0;t<e;t++)this.body.dequeue();return}while(this.body.size()>=this.maxLength)this.body.dequeue();const e=this.body.peekTail();if(!e)return;const t=Math.floor(this.age/10)%this.colors.length,i=this.colors[t],r=e.copy(this.velocity,2*this.size/this.p.max(this.velocity.mag(),1),i);this.body.enqueue(r),this.acceleration.mult(0)}steer(e){e.sub(this.velocity),e.limit(3),this.applyForce(e)}toEgg(){return new I(this.p,this.position,this.colors[0],this.generation+1)}}var q=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};const N="gamestore";P.storeInstance.hasModule(N)&&P.storeInstance.unregisterModule(N);let Y=class extends O.g4{constructor(){super(...arguments),Object.defineProperty(this,"maxBuddies",{enumerable:!0,configurable:!0,writable:!0,value:2}),Object.defineProperty(this,"fogValue",{enumerable:!0,configurable:!0,writable:!0,value:10}),Object.defineProperty(this,"MAX_FOG_VALUE",{enumerable:!0,configurable:!0,writable:!0,value:10}),Object.defineProperty(this,"MAX_MAX_BUDDIES",{enumerable:!0,configurable:!0,writable:!0,value:50}),Object.defineProperty(this,"posseGetter",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}get posseMaybe(){return this.posseGetter}setMaxBuddies(e){this.maxBuddies=Math.max(0,Math.min(e,this.MAX_MAX_BUDDIES))}setFogValue(e){this.fogValue=Math.max(0,Math.min(e,this.MAX_FOG_VALUE))}alterFog(e){this.fogValue+=e}initPosse(e){this.posseGetter=()=>e}isItGettingDarker(){this.alterFog(1)}iThinkItsClearingUp(){this.alterFog(-1)}};q([O.mm],Y.prototype,"setMaxBuddies",null),q([O.mm],Y.prototype,"setFogValue",null),q([O.mm],Y.prototype,"alterFog",null),q([O.mm],Y.prototype,"initPosse",null),q([O.aU],Y.prototype,"isItGettingDarker",null),q([O.aU],Y.prototype,"iThinkItsClearingUp",null),Y=q([(0,O.Yl)({name:N,store:P.storeInstance,dynamic:!0,namespaced:!0})],Y);const X=(0,O.rT)(Y);function $(e,t){const i=[],r=[];return e.forEach((e=>{t(e)?i.push(e):r.push(e)})),[i,r]}var Z=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};const Q="statsstore";P.storeInstance.hasModule(Q)&&P.storeInstance.unregisterModule(Q);let K=class extends O.g4{constructor(){super(...arguments),Object.defineProperty(this,"eggsHatched",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"eggsExpired",{enumerable:!0,configurable:!0,writable:!0,value:0})}addEgg(){this.eggsHatched++}uhOhEggWentBad(){this.eggsExpired++}};Z([O.mm],K.prototype,"addEgg",null),Z([O.mm],K.prototype,"uhOhEggWentBad",null),K=Z([(0,O.Yl)({name:Q,store:P.storeInstance,dynamic:!0,namespaced:!0})],K);const J=(0,O.rT)(K);class ee{constructor(e,t,i=A(e),r=1){Object.defineProperty(this,"p",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"position",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"generation",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"age",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"audrey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.audrey=new te(e,t,i,r)}update(){this.age++}draw(){this.render(),this.renderDebug()}render(){const e=S.resourceGraphic;e&&this.audrey.draw()}renderDebug(){const e=S.debugGraphic;if(e&&S.isDebug){e.push(),e.fill(0,0,100,1),e.textSize(16),e.textAlign(e.CENTER,e.BASELINE),e.text(this.debugText,this.position.x,this.position.y-16),e.noFill(),e.stroke(e.color(0,0,100,1)),e.ellipse(this.position.x,this.position.y,this.size);for(const t of this.audrey.frondPoints)e.ellipse(t.pos.x,t.pos.y,5);e.pop()}}alphaColor(e){const t=this.p.color(e);return t.setAlpha(this.alpha),t}get debugText(){return`PLANT ${this.age}`}get size(){return 50}get width(){return this.size}get height(){return this.size}get alpha(){return 1}}class te{constructor(e,t,i=A(e),r=1){Object.defineProperty(this,"p",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"position",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"generation",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"numPoints",{enumerable:!0,configurable:!0,writable:!0,value:20}),Object.defineProperty(this,"frondPoints",{enumerable:!0,configurable:!0,writable:!0,value:this.initFronds()})}initFronds(){const e=Array.from({length:this.numPoints}).map(((e,t,i)=>t/i.length));return this.p.shuffle(e).map(((e,t,i)=>{const r=t/i.length,o=50*e,n=.2*this.p.TWO_PI,a=w().Vector.fromAngle(-r*n-n,o);return console.log({pc:e,opc:r,distance:o,mpp:a},a.mag()),new ie(this.p,a)}))}moveMetas(){const e=S.mainSketch;e&&this.frondPoints.forEach((t=>{const i=.006*e.sin(e.frameCount/t.period)*t.speed;t.pos.rotate(i)}))}draw(){const e=S.resourceGraphic;if(!e)return;e.push();let t=this.color;e.translate(this.position.x,this.position.y),e.stroke(t),e.noFill();for(const i of this.frondPoints){e.strokeWeight(i.weight),e.beginShape(),e.vertex(0,0);const r=i.makeZiggyPoints();for(const t of r)e.curveVertex(t.x,t.y);e.vertex(i.pos.x,i.pos.y),e.endShape(),t=e.color((e.hue(t)+2)%360,e.saturation(t),e.brightness(t),e.alpha(t)),e.stroke(t)}e.pop(),this.moveMetas()}}class ie{constructor(e,t){Object.defineProperty(this,"p",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"pos",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"waveSpeed",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"period",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"weight",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"waves",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.speed=e.random(.5,1.5),this.waveSpeed=e.random(0,2),this.period=e.random(8,32),this.weight=e.random(1,4),this.waves=e.random(50,10)}makeZiggyPoints(){const e=this.pos,t=e.mag(),i=[],r=Math.pow(t/this.waves,1.2);for(let o=0;o<r;o++){const t=o/r,n=w().Vector.mult(e,t),a=o%2==0?-1:1,s=this.p.createVector(e.y,-e.x);s.setMag(a*this.p.sin(this.p.frameCount/144)*4*this.waveSpeed),n.add(s),i.push(n)}return i}}class re{constructor(){Object.defineProperty(this,"buddies",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"eggs",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"plants",{enumerable:!0,configurable:!0,writable:!0,value:[]})}get maxBuddies(){return X.maxBuddies}clearSomeOfTheBuddies(){while(this.buddies.length>this.maxBuddies)this.buddies.shift()}killEverything(){this.buddies=[],this.eggs=[],this.plants=[]}makeAllTheBuddies(){const e=Math.floor(2*Math.random());let t=0;while(this.buddies.length<this.maxBuddies&&t<e)++t,this.addNewBuddy()}layEgg(e){const t=S.mainGraphic;t?e&&this.eggs.push(new I(t,e,t.color(T.focusedColor.color))):console.error("No graphics in SketchStore",S.mainGraphic)}plantSeed(e){const t=S.mainSketch;t?e&&this.plants.push(new ee(t,e,t.color(T.focusedColor.color))):console.error("No Main Sketch in SketchStore",S.mainSketch)}addNewBuddy(e){const t=S.mainGraphic;if(!t)return void console.error("No graphics in SketchStore",S.mainGraphic);if(e)return void this.buddies.push(new H(t,e));const i=this.findEggToHatch();i&&this.buddies.push(i.hatch(t))}findEggToHatch(){if(0===this.eggs.length)return;const e=this.eggs.findIndex((e=>e.ready));return e<0?void 0:this.eggs.splice(e,1)[0]}doTheThing(){this.updateThings(),this.checkEggspiration(),this.cleanupHibernateHatch()}cleanupHibernateHatch(){const[e,t]=$(this.buddies,(e=>!e.allDone));this.buddies=e,this.eggs=[...this.eggs,...t.map((e=>e.toEgg()))],this.makeAllTheBuddies()}checkEggspiration(){const e=this.eggs.length;this.eggs=this.eggs.filter((e=>!e.expired));const t=e-this.eggs.length;for(let i=0;i<t;i++)J.uhOhEggWentBad()}updateThings(){this.buddies.forEach((e=>{e.update(this),e.draw()})),this.eggs.forEach((e=>{e.update(),e.draw()})),this.plants.forEach((e=>{e.update(),e.draw()}))}}const oe=e=>t=>{let i,r,o,n,a;const s=600,l=600;function c(){const e=t.createGraphics(s,l);return e.colorMode(t.HSB,360,100,100,1),e}function u(){o&&i&&(o.clear(),null===r||void 0===r||r.clear())}function d(){n&&(n.push(),n.stroke(0,0,100,.8),n.strokeWeight(1),n.noFill(),n.circle(t.mouseX,t.mouseY,20),n.fill(t.color(T.focusedColor.color)),n.circle(t.mouseX,t.mouseY,10),n.pop())}function h(){return[i,r,o,n]}function p(){h().filter((e=>void 0!==e)).forEach((e=>{t.image(e,0,0)})),S.debugOn&&a&&t.image(a,0,0)}t.setup=()=>{t.createCanvas(s,l),t.frameRate(144),t.noCursor(),t.colorMode(t.HSB,360,100,100,1),S.initP(t),o=c(),S.initGraphics(o),i=c(),i.background(0,1),S.initBackground(i),r=c(),S.initResources(r),n=c(),S.initOverlay(n),a=c(),S.initDebugOverlay(a),e||(e=new re)},t.draw=()=>{null===a||void 0===a||a.clear(),u(),null===e||void 0===e||e.doTheThing(),n&&(n.background(0),n.clear(),d()),p()},t.keyPressed=()=>{" "===t.key&&(null===o||void 0===o||o.background(o.color(0,0,0,1)))},t.mousePressed=i=>{if(i.preventDefault(),t.mouseX>0&&t.mouseX<t.width&&t.mouseY>0&&t.mouseY<t.height)switch(i.button){case 0:null===e||void 0===e||e.layEgg(t.createVector(t.mouseX,t.mouseY));break;case 2:null===e||void 0===e||e.plantSeed(t.createVector(t.mouseX,t.mouseY));break}return!1}},ne=(0,r.HX)("data-v-48f0eb55");(0,r.dD)("data-v-48f0eb55");const ae={class:"game-controls column justify-evenly"},se={class:"column col justify-evenly wrap"},le={class:"column col justify-evenly"},ce={class:"column col justify-evenly"},ue={class:"column col justify-evenly"},de={class:"column col justify-evenly"};(0,r.Cn)();const he=ne(((e,t,i,o,n,a)=>{const s=(0,r.up)("q-slider"),l=(0,r.up)("q-field"),c=(0,r.up)("q-toggle"),u=(0,r.up)("q-btn"),d=(0,r.up)("q-btn-group"),h=(0,r.up)("buddy-details-selector");return(0,r.wg)(),(0,r.j4)("div",ae,[(0,r.Wm)("div",se,[(0,r.Wm)(l,{filled:"",hint:`Max Buddies ${e.maxBuddies}`},{control:ne((()=>[(0,r.Wm)(s,{modelValue:e.maxBuddies,"onUpdate:modelValue":t[1]||(t[1]=t=>e.maxBuddies=t),class:"col self-center buddies-slider",color:"green",step:1,min:0,max:20,snap:"",label:"",dark:"",onWheel:e.maxBuddiesScroll},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)("div",le,[(0,r.Wm)(l,{filled:"",hint:`Fog ${e.fogValue}`},{control:ne((()=>[(0,r.Wm)(s,{modelValue:e.fogValue,"onUpdate:modelValue":t[2]||(t[2]=t=>e.fogValue=t),class:"col self-center buddies-slider",color:"red",step:1,min:0,max:10,snap:"",label:"",dark:"",onWheel:e.fogValueScroll},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)("div",ce,[(0,r.Wm)(l,{filled:"",hint:`FrameRate ${e.frameRate}`},{control:ne((()=>[(0,r.Wm)(s,{modelValue:e.frameRate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.frameRate=t),class:"col self-center buddies-slider",color:"blue",step:1,min:0,max:144,snap:"",label:"",dark:"",onWheel:e.frameRateScroll},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)("div",ue,[(0,r.Wm)(l,{filled:"",hint:`Lifetime ${e.buddyMaxAge}`},{control:ne((()=>[(0,r.Wm)(s,{modelValue:e.buddyMaxAge,"onUpdate:modelValue":t[4]||(t[4]=t=>e.buddyMaxAge=t),class:"col self-center buddies-slider",color:"orange",step:10,min:0,max:600,snap:"",label:"",dark:"",onWheel:e.buddyMaxAgeScroll},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)("div",de,[(0,r.Wm)(l,{filled:"",hint:`Buddy Length ${e.buddyLength}`},{control:ne((()=>[(0,r.Wm)(s,{modelValue:e.buddyLength,"onUpdate:modelValue":t[5]||(t[5]=t=>e.buddyLength=t),class:"col self-center buddies-slider",color:"amber",step:1,min:1,max:100,snap:"",label:"",dark:"",onWheel:e.buddyLength},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)(d,null,{default:ne((()=>[(0,r.Wm)(c,{modelValue:e.debug,"onUpdate:modelValue":t[6]||(t[6]=t=>e.debug=t),class:"col-grow",title:"Debug",icon:"fa fa-bug fa-stack-1x"},null,8,["modelValue"]),(0,r.Wm)(u,{title:e.playButtonText,icon:e.playButtonIcon,push:"",color:"accent",onClick:e.clickPlayPause},null,8,["title","icon","onClick"]),(0,r.Wm)(u,{title:"Step Forward",icon:"fa fa-step-forward",disable:e.playing,push:"",color:"accent",onClick:e.clickStepForward},null,8,["disable","onClick"]),(0,r.Wm)(u,{title:"Clear Screen",icon:"fa fa-eraser",push:"",color:"accent",onClick:e.clearScreen},null,8,["onClick"]),(0,r.Wm)(u,{title:"Kill Everything",icon:"fa fa-skull-crossbones",push:"",color:"accent",onClick:e.killEverything},null,8,["onClick"])])),_:1}),(0,r.Wm)(h)])})),pe=(0,r.HX)("data-v-6cbf6438");(0,r.dD)("data-v-6cbf6438");const ge={class:"q-pa-md row q-gutter-sm justify-between items-center"};(0,r.Cn)();const be=pe(((e,t,i,o,n,a)=>{const s=(0,r.up)("q-btn"),l=(0,r.up)("q-toggle");return(0,r.wg)(),(0,r.j4)(r.HY,null,[(0,r.Wm)("div",ge,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.colors,((t,i)=>((0,r.wg)(),(0,r.j4)(s,{key:t,color:t.color,icon:e.toIcon(t),glossy:i===e.focused,outline:i!==e.focused,disable:e.marching,round:"",push:"",size:"lg",onClick:i=>e.clickColor(t)},null,8,["color","icon","glossy","outline","disable","onClick"])))),128))]),(0,r.Wm)("div",null,[(0,r.Wm)(l,{modelValue:e.marching,"onUpdate:modelValue":t[1]||(t[1]=t=>e.marching=t),icon:"fa fa-tachometer-alt"},null,8,["modelValue"])])],64)}));var fe=i(8940),me=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ye=class extends m.w3{constructor(){super(...arguments),Object.defineProperty(this,"marchSub",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"marching",{enumerable:!0,configurable:!0,writable:!0,value:!1})}get colors(){return T.colors}get focused(){return T.focused}mounted(){this.marchSub=(0,fe.H)(0,100).subscribe((()=>{this.marching&&T.incrementFocus()}))}unmounted(){var e;null===(e=this.marchSub)||void 0===e||e.unsubscribe()}toIcon(e){return`fa fa-${e.animal}`}clickColor(e){T.setFocus(e),console.log(`${JSON.stringify(e)} Clicked`)}};ye=me([(0,m.Ei)({name:"Buddy Details Selector"})],ye);const ve=ye;var we=i(4607),Oe=i(2582),Pe=i(7518),je=i.n(Pe);ve.render=be,ve.__scopeId="data-v-6cbf6438";const xe=ve;je()(ve,"components",{QBtn:we.Z,QToggle:Oe.Z});var ke=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let Se=class extends m.w3{get fogValue(){return X.fogValue}set fogValue(e){X.setFogValue(e)}get maxBuddies(){return X.maxBuddies}set maxBuddies(e){X.setMaxBuddies(e)}get frameRate(){return S.frameRate}set frameRate(e){S.setFrameRate(e)}get buddyMaxAge(){return T.ageLimit}set buddyMaxAge(e){T.setAgeLimit(e)}get buddyLength(){return T.buddyLength}set buddyLength(e){T.setBuddyLength(e)}get debug(){return S.debugOn}set debug(e){S.setDebug(e)}get playing(){return S.playing}clickPlayPause(){S.togglePlayState()}clickStepForward(){S.step()}clearScreen(){S.clearScreen()}killEverything(){X.posseMaybe().killEverything()}get playButtonIcon(){return"fa fa-"+(S.playing?"pause":"play")}get playButtonText(){return S.playing?"Pause":"Play"}maxBuddiesScroll(e){this.maxBuddies=this.maxBuddies-Math.sign(e.deltaY)}fogValueScroll(e){this.fogValue=this.fogValue-Math.sign(e.deltaY)}frameRateScroll(e){this.frameRate=this.frameRate-Math.sign(e.deltaY)}buddyMaxAgeScroll(e){this.buddyMaxAge=this.buddyMaxAge-Math.sign(e.deltaY)}buddyMaxLengthScroll(e){this.buddyLength=this.buddyLength-Math.sign(e.deltaY)}};Se=ke([(0,m.Ei)({name:"Buddies Controls",components:{BuddyDetailsSelector:xe}})],Se);const We=Se;var Be=i(7916),Ve=i(2064),Ee=i(6375);We.render=he,We.__scopeId="data-v-48f0eb55";const Re=We;je()(We,"components",{QField:Be.Z,QSlider:Ve.Z,QBtnGroup:Ee.Z,QToggle:Oe.Z,QBtn:we.Z});var Me=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let Ce=class extends m.w3{constructor(){super(...arguments),Object.defineProperty(this,"p5Container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"p5Handle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"posse",{enumerable:!0,configurable:!0,writable:!0,value:new re})}mounted(){this.p5Handle||(this.p5Handle=new(w())(oe(this.posse),this.p5Container)),X.initPosse(this.posse)}unmounted(){var e;null===(e=this.p5Handle)||void 0===e||e.noLoop()}get activeBuddies(){return this.posse.buddies.length}get unhatchedBuddies(){return this.posse.eggs.length}get readyEggs(){return this.posse.eggs.filter((e=>e.ready)).length}get expiredEggs(){return J.eggsExpired}get hatchedEggs(){return J.eggsHatched}doNothing(e){e.shiftKey||e.preventDefault()}};Me([(0,y.R)()],Ce.prototype,"p5Container",void 0),Ce=Me([(0,m.Ei)({name:"Buddies!",components:{BuddiesControls:Re}})],Ce);const De=Ce;var Ae=i(151),Fe=i(5589);De.render=f,De.__scopeId="data-v-406a8cd2";const Ge=De;je()(De,"components",{QCard:Ae.Z,QCardSection:Fe.Z});var _e=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let Te=class extends m.w3{created(){}};Te=_e([(0,m.Ei)({components:{BuddiesComponent:Ge}})],Te);const Le=Te;var Ie=i(4379);Le.render=n,Le.__scopeId="data-v-18f41d65";const ze=Le;je()(Le,"components",{QPage:Ie.Z})}}]);