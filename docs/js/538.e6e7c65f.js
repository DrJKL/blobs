(self["webpackChunkblobs"]=self["webpackChunkblobs"]||[]).push([[538],{8538:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Fe});var r=i(3673);const o=(0,r.HX)("data-v-18f41d65"),a=o(((e,t,i,a,n,l)=>{const s=(0,r.up)("buddies-component"),c=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(c,{class:"row items-start justify-around ummmm"},{default:o((()=>[(0,r.Wm)(s)])),_:1})}));var n=i(2323);const l=(0,r.HX)("data-v-406a8cd2");(0,r.dD)("data-v-406a8cd2");const s={class:"game-canvas-container col row justify-around"},c=(0,r.Uk)("Info"),u=(0,r.Uk)("Buddies: "),d=(0,r.Uk)("Eggs "),h=(0,r.Uk)("Unhatched"),g=(0,r.Uk)("Ready To Hatch"),p=(0,r.Uk)("Expired"),b={class:"col-3 column"};(0,r.Cn)();const m=l(((e,t,i,o,a,m)=>{const f=(0,r.up)("q-card-section"),y=(0,r.up)("q-card"),v=(0,r.up)("buddies-controls");return(0,r.wg)(),(0,r.j4)("div",s,[(0,r.Wm)(y,{bordered:"",class:"col-3 info-column"},{default:l((()=>[(0,r.Wm)(f,{class:"text-h3"},{default:l((()=>[c])),_:1}),(0,r.Wm)(f,{horizontal:"",class:"text-h5 justify-between"},{default:l((()=>[(0,r.Wm)(f,null,{default:l((()=>[u])),_:1}),(0,r.Wm)(f,{class:"value"},{default:l((()=>[(0,r.Uk)((0,n.zw)(e.activeBuddies),1)])),_:1})])),_:1}),(0,r.Wm)(f,{class:"text-h5 justify-between"},{default:l((()=>[d])),_:1}),(0,r.Wm)(f,{horizontal:"",class:"column"},{default:l((()=>[(0,r.Wm)(f,{horizontal:"",class:"justify-between"},{default:l((()=>[(0,r.Wm)(f,null,{default:l((()=>[h])),_:1}),(0,r.Wm)(f,{class:"value"},{default:l((()=>[(0,r.Uk)((0,n.zw)(e.unhatchedBuddies),1)])),_:1})])),_:1}),(0,r.Wm)(f,{horizontal:"",class:"justify-between"},{default:l((()=>[(0,r.Wm)(f,null,{default:l((()=>[g])),_:1}),(0,r.Wm)(f,{class:"value"},{default:l((()=>[(0,r.Uk)((0,n.zw)(e.readyEggs),1)])),_:1})])),_:1}),(0,r.Wm)(f,{horizontal:"",class:"justify-between"},{default:l((()=>[(0,r.Wm)(f,null,{default:l((()=>[p])),_:1}),(0,r.Wm)(f,{class:"value"},{default:l((()=>[(0,r.Uk)((0,n.zw)(e.expiredEggs),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)("div",{id:"p5-container",ref:"p5Container",class:"col-auto column items-center buddies-plate",onSelectstart:t[1]||(t[1]=t=>e.doNothing(t)),onContextmenu:t[2]||(t[2]=t=>e.doNothing(t))},null,544),(0,r.Wm)("div",b,[(0,r.Wm)(v)])])}));var f=i(5777),y=i(2943),v=i(930),w=i.n(v),O=i(5718),j=i(556),x=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const P="sketchstore";j.storeInstance.hasModule(P)&&j.storeInstance.unregisterModule(P);let k=class extends O.g4{constructor(){super(...arguments),Object.defineProperty(this,"mainSketch",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"resourceGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"mainGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"overlayGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"debugGraphic",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"debugOn",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"frameRate",{enumerable:!0,configurable:!0,writable:!0,value:144})}initP(e){this.mainSketch=e}initBackground(e){this.backgroundGraphic=e}initResources(e){this.resourceGraphic=e}initGraphics(e){this.mainGraphic=e}initOverlay(e){this.overlayGraphic=e}initDebugOverlay(e){this.debugGraphic=e}setDebug(e){this.debugOn=e}setFrameRate(e){var t;this.frameRate=e,null===(t=this.mainSketch)||void 0===t||t.frameRate(e)}play(){var e;null===(e=this.mainSketch)||void 0===e||e.loop()}pause(){var e;null===(e=this.mainSketch)||void 0===e||e.noLoop()}togglePlayState(){this.playing?this.pause():this.play()}setLoopState(e){e?this.play():this.pause()}step(){var e;null===(e=this.mainSketch)||void 0===e||e.redraw()}get playing(){var e;return(null===(e=this.mainSketch)||void 0===e?void 0:e.isLooping())||!1}clearScreen(){var e,t;null===(e=this.mainGraphic)||void 0===e||e.clear(),null===(t=this.mainGraphic)||void 0===t||t.background(0)}get isDebug(){return this.debugOn}toggleDebug(){this.setDebug(!this.debugOn)}};x([O.mm],k.prototype,"initP",null),x([O.mm],k.prototype,"initBackground",null),x([O.mm],k.prototype,"initResources",null),x([O.mm],k.prototype,"initGraphics",null),x([O.mm],k.prototype,"initOverlay",null),x([O.mm],k.prototype,"initDebugOverlay",null),x([O.mm],k.prototype,"setDebug",null),x([O.mm],k.prototype,"setFrameRate",null),x([O.mm],k.prototype,"play",null),x([O.mm],k.prototype,"pause",null),x([O.aU],k.prototype,"togglePlayState",null),x([O.aU],k.prototype,"setLoopState",null),x([O.mm],k.prototype,"step",null),x([O.mm],k.prototype,"clearScreen",null),x([O.aU],k.prototype,"toggleDebug",null),k=x([(0,O.Yl)({name:P,store:j.storeInstance,dynamic:!0,namespaced:!0,stateFactory:!0})],k);const W=(0,O.rT)(k);class S{getGoals(e,t,i){const r=t.position;if(!r)return[];const o=[],a=25;return r.x<a&&o.push(e.createVector(t.maxSpeed,t.velocity.y)),r.x>e.width-a&&o.push(e.createVector(-t.maxSpeed,t.velocity.y)),r.y<a&&o.push(e.createVector(t.velocity.x,t.maxSpeed)),r.y>e.height-a&&o.push(e.createVector(t.velocity.x,-t.maxSpeed)),o}getForces(e,t,i){return[]}}class B{getGoals(e,t,i){return[]}getForces(e,t,i){const r=[];for(const o of i){if(t===o)continue;const i=o.body.entries();for(let o=0;o<i.length;o+=5){const a=i[o];r.push(V(e,a.position,t.position))}}return r}}class R{constructor(){Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.ticks=0}getGoals(e,t,i){return[]}getForces(e,t,i){this.ticks++;const r=[];return r.push(v.Vector.random2D()),r}}function V(e,t,i){const r=v.Vector.sub(t,i),o=r.mag();if(o>500)return e.createVector();const a=-100/(o*o);return r.normalize(),a&&!isNaN(a)&&isFinite(a)&&r.mult(a),r}function E(e,t){const i=e.hue(t),r=e.saturation(t),o=e.brightness(t),a=(i+180)%360,n=e.color(a,r,o);return[t,n]}function C(e,t){const i=e.hue(t),r=e.saturation(t),o=e.brightness(t),a=(i+5)%360,n=(i-5)%360,l=e.color(a,r,o),s=e.color(n,r,o);return[t,l,s]}function M(e){return e.color(e.random(360),e.random(40,100),e.random(80,100))}var D=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const _="buddystore";j.storeInstance.hasModule(_)&&j.storeInstance.unregisterModule(_);let A=class extends O.g4{constructor(){super(...arguments),Object.defineProperty(this,"ageLimit",{enumerable:!0,configurable:!0,writable:!0,value:300}),Object.defineProperty(this,"buddyLength",{enumerable:!0,configurable:!0,writable:!0,value:50}),Object.defineProperty(this,"colorRange",{enumerable:!0,configurable:!0,writable:!0,value:[0,90]}),Object.defineProperty(this,"focused",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"colors",{enumerable:!0,configurable:!0,writable:!0,value:[{color:"red",animal:"cat"},{color:"orange",animal:"crow"},{color:"yellow",animal:"dog"},{color:"green",animal:"dove"},{color:"blue",animal:"dragon"},{color:"purple",animal:"fish"},{color:"cyan",animal:"frog"},{color:"grey",animal:"hippo"},{color:"brown",animal:"horse"},{color:"lime",animal:"kiwi-bird"},{color:"teal",animal:"otter"},{color:"indigo",animal:"spider"}]})}incrementFocus(){this.focused++,this.focused%=this.colors.length}setFocus(e){this.focused=this.colors.indexOf(e)}setAgeLimit(e){this.ageLimit=Math.max(0,e)}setBuddyLength(e){this.buddyLength=e}get focusedColor(){return this.colors[this.focused]}};D([O.mm],A.prototype,"incrementFocus",null),D([O.mm],A.prototype,"setFocus",null),D([O.mm],A.prototype,"setAgeLimit",null),D([O.mm],A.prototype,"setBuddyLength",null),A=D([(0,O.Yl)({name:_,store:j.storeInstance,dynamic:!0,namespaced:!0})],A);const F=(0,O.rT)(A);class G{constructor(){Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"tail",{enumerable:!0,configurable:!0,writable:!0,value:0})}enqueue(e){this.data[this.tail]=e,this.tail++}dequeue(){if(this.isEmpty())throw Error("Nothing in Queue");const e=this.data[this.head];return delete this.data[this.head],this.head++,this.isEmpty()&&(this.head=0,this.tail=0),e}peek(){if(!this.isEmpty())return this.data[this.head]}peekTail(){if(!this.isEmpty())return this.data[this.tail-1]}size(){return this.tail-this.head}isEmpty(){return this.tail===this.head}entries(){return Object.values(this.data)}}class L{constructor(e,t,i=M(e),r=1){Object.defineProperty(this,"p",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"position",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"generation",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"age",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"hatchAge",{enumerable:!0,configurable:!0,writable:!0,value:500}),Object.defineProperty(this,"expirationAge",{enumerable:!0,configurable:!0,writable:!0,value:1e3}),Object.defineProperty(this,"outline",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.outline=E(e,i)[1],this.color.setAlpha(.1)}update(){this.age++}draw(){this.render(),this.renderDebug()}render(){const e=W.mainGraphic;e&&(e.push(),e.translate(this.position.x,this.position.y),e.fill(this.alphaColor(this.color)),e.stroke(this.alphaColor(this.outline)),e.rotate(e.random(-.05,.05)*e.TWO_PI),e.ellipse(0,0,this.width,this.height),e.pop())}renderDebug(){const e=W.debugGraphic;e&&W.isDebug&&(e.push(),e.fill(0,0,100,1),e.textSize(32),e.textAlign(e.CENTER,e.BASELINE),e.text(this.debugText,this.position.x,this.position.y-32),e.pop())}alphaColor(e){const t=this.p.color(e);return t.setAlpha(this.alpha),t}get debugText(){return this.expired?`<${this.age}>`:this.ready?`(${this.age})`:`[${this.age}]`}get size(){const e=this.expired?10:this.ready?this.expirationAge-this.age:this.age;return 5*Math.pow(e,.3)}get width(){return.8*this.size+(this.almostReady?5*this.p.sin((this.age+50)/100*(50/this.timeUntilReady)*this.p.TWO_PI):0)}get height(){return this.size+(this.almostReady?4*this.p.sin(this.age/100*(100/this.timeUntilReady)*this.p.TWO_PI):0)}get alpha(){return this.ready?(this.expirationAge-this.age)/(this.expirationAge-this.hatchAge):1}get almostReady(){return this.timeUntilReady<.4*this.hatchAge}get timeUntilReady(){return Math.abs(this.hatchAge-this.age)}get ready(){return this.age>=this.hatchAge}get expired(){return this.age>=this.expirationAge}hatch(e){return new I(e,this.position,C(this.p,this.color),this.generation)}}function T(){return[new S,new B,new R]}class U{constructor(e,t,i=M(e)){Object.defineProperty(this,"p",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"position",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,writable:!0,value:i}),this.color.setAlpha(.27)}render(){this.p.push(),this.p.noStroke(),this.p.fill(this.color),this.p.translate(this.position.x,this.position.y),this.p.circle(0,0,this.position.z),this.p.pop()}renderDebug(){const e=W.debugGraphic,t=W.mainSketch;if(!e||!t||!W.debugOn)return;e.push();const i=this.position.x,r=this.position.y,o=t.mouseX-i,a=t.mouseY-r;e.stroke(0,0,100,1),e.strokeWeight(1),e.noFill();const n=t.atan2(a,o)-t.atan2(r,i);e.translate(i,r),e.rotate(n),e.line(0,0,30,30),e.pop()}copy(e,t,i){const r=v.Vector.add(this.position,e);return r.z=t,new U(this.p,r,i)}}class I{constructor(e,t,i=C(e,M(e)),r=1){Object.defineProperty(this,"p",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"colors",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"generation",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"age",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"alive",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"velocity",{enumerable:!0,configurable:!0,writable:!0,value:v.Vector.random2D()}),Object.defineProperty(this,"acceleration",{enumerable:!0,configurable:!0,writable:!0,value:new v.Vector}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:15}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"secondaryColor",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"drives",{enumerable:!0,configurable:!0,writable:!0,value:T()}),Object.defineProperty(this,"stomach",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"stomachCapacity",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"calories",{enumerable:!0,configurable:!0,writable:!0,value:100}),this.secondaryColor=M(e),this.secondaryColor.setAlpha(.2),t.z=this.velocity.mag(),this.body=new G,this.body.enqueue(new U(e,t.copy(),this.colors[0]))}get maxSpeed(){return this.size/4}get maxLength(){return F.buddyLength}get position(){var e,t;return null!==(t=null===(e=this.body.peekTail())||void 0===e?void 0:e.position)&&void 0!==t?t:new v.Vector}get allDone(){return 1===this.body.size()}update(e){this.age++,this.age>F.ageLimit&&(this.alive=!1),this.move(e.buddies)}draw(){this.render(),this.renderDebug()}render(){this.p.noStroke();const e=this.body.entries();for(let t=0;t<e.length-1;t++){const i=e[t];i.render(),i.position.z*=.99}this.alive&&this.drawForce(this.velocity,this.position)}renderDebug(){const e=W.debugGraphic;e&&W.isDebug&&(e.push(),e.fill(0,0,100,1),e.textSize(32),e.textAlign(e.CENTER),e.text(this.debugText,this.position.x,this.position.y-20),e.pop())}get debugText(){return`${this.age} - ${this.generation}`}move(e){for(const t of this.drives){for(const i of t.getGoals(this.p,this,e))this.steer(i);for(const i of t.getForces(this.p,this,e))this.applyForce(i)}this.changeVelocity()}applyForce(e){e.div(this.size),this.acceleration.add(e)}drawForce(e,t){const i=w().Vector.mult(e,10).add(t);this.p.push(),this.p.stroke(this.secondaryColor),this.p.strokeWeight(4),this.p.noFill(),this.p.line(t.x,t.y,i.x,i.y),this.p.pop()}changeVelocity(){if(this.velocity.add(this.acceleration).limit(this.maxSpeed),!this.alive){const e=this.body.size()/10;for(let t=0;t<e;t++)this.body.dequeue();return}while(this.body.size()>=this.maxLength)this.body.dequeue();const e=this.body.peekTail();if(!e)return;const t=Math.floor(this.age/10)%this.colors.length,i=this.colors[t],r=e.copy(this.velocity,2*this.size/this.p.max(this.velocity.mag(),1),i);this.body.enqueue(r),this.acceleration.mult(0)}steer(e){e.sub(this.velocity),e.limit(3),this.applyForce(e)}toEgg(){return new L(this.p,this.position,this.colors[0],this.generation+1)}}var z=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const H="gamestore";j.storeInstance.hasModule(H)&&j.storeInstance.unregisterModule(H);let q=class extends O.g4{constructor(){super(...arguments),Object.defineProperty(this,"maxBuddies",{enumerable:!0,configurable:!0,writable:!0,value:2}),Object.defineProperty(this,"fogValue",{enumerable:!0,configurable:!0,writable:!0,value:10}),Object.defineProperty(this,"MAX_FOG_VALUE",{enumerable:!0,configurable:!0,writable:!0,value:10}),Object.defineProperty(this,"MAX_MAX_BUDDIES",{enumerable:!0,configurable:!0,writable:!0,value:50}),Object.defineProperty(this,"posseGetter",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}get posseMaybe(){return this.posseGetter}setMaxBuddies(e){this.maxBuddies=Math.max(0,Math.min(e,this.MAX_MAX_BUDDIES))}setFogValue(e){this.fogValue=Math.max(0,Math.min(e,this.MAX_FOG_VALUE))}alterFog(e){this.fogValue+=e}initPosse(e){this.posseGetter=()=>e}isItGettingDarker(){this.alterFog(1)}iThinkItsClearingUp(){this.alterFog(-1)}};z([O.mm],q.prototype,"setMaxBuddies",null),z([O.mm],q.prototype,"setFogValue",null),z([O.mm],q.prototype,"alterFog",null),z([O.mm],q.prototype,"initPosse",null),z([O.aU],q.prototype,"isItGettingDarker",null),z([O.aU],q.prototype,"iThinkItsClearingUp",null),q=z([(0,O.Yl)({name:H,store:j.storeInstance,dynamic:!0,namespaced:!0})],q);const Y=(0,O.rT)(q);function X(e,t){const i=[],r=[];return e.forEach((e=>{t(e)?i.push(e):r.push(e)})),[i,r]}var N=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const $="statsstore";j.storeInstance.hasModule($)&&j.storeInstance.unregisterModule($);let Q=class extends O.g4{constructor(){super(...arguments),Object.defineProperty(this,"eggsHatched",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"eggsExpired",{enumerable:!0,configurable:!0,writable:!0,value:0})}addEgg(){this.eggsHatched++}uhOhEggWentBad(){this.eggsExpired++}};N([O.mm],Q.prototype,"addEgg",null),N([O.mm],Q.prototype,"uhOhEggWentBad",null),Q=N([(0,O.Yl)({name:$,store:j.storeInstance,dynamic:!0,namespaced:!0})],Q);const Z=(0,O.rT)(Q);class K{constructor(){Object.defineProperty(this,"buddies",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"eggs",{enumerable:!0,configurable:!0,writable:!0,value:[]})}get maxBuddies(){return Y.maxBuddies}clearSomeOfTheBuddies(){while(this.buddies.length>this.maxBuddies)this.buddies.shift()}killEverything(){this.buddies=[],this.eggs=[]}makeAllTheBuddies(){const e=Math.floor(2*Math.random());let t=0;while(this.buddies.length<this.maxBuddies&&t<e)++t,this.addNewBuddy()}layEgg(e){const t=W.mainGraphic;t?e&&this.eggs.push(new L(t,e,t.color(F.focusedColor.color))):console.error("No graphics in SketchStore",W.mainGraphic)}addNewBuddy(e){const t=W.mainGraphic;if(!t)return void console.error("No graphics in SketchStore",W.mainGraphic);if(e)return void this.buddies.push(new I(t,e));const i=this.findEggToHatch();i&&this.buddies.push(i.hatch(t))}findEggToHatch(){if(0===this.eggs.length)return;const e=this.eggs.findIndex((e=>e.ready));return e<0?void 0:this.eggs.splice(e,1)[0]}doTheThing(){this.updateThings(),this.checkEggspiration(),this.cleanupHibernateHatch()}cleanupHibernateHatch(){const[e,t]=X(this.buddies,(e=>!e.allDone));this.buddies=e,this.eggs=[...this.eggs,...t.map((e=>e.toEgg()))],this.makeAllTheBuddies()}checkEggspiration(){const e=this.eggs.length;this.eggs=this.eggs.filter((e=>!e.expired));const t=e-this.eggs.length;for(let i=0;i<t;i++)Z.uhOhEggWentBad()}updateThings(){this.buddies.forEach((e=>{e.update(this),e.draw()})),this.eggs.forEach((e=>{e.update(),e.draw()}))}}const J=e=>t=>{let i,r,o,a,n;const l=600,s=600;function c(){const e=t.createGraphics(l,s);return e.colorMode(t.HSB,360,100,100,1),e}function u(){return[i,r,o,a]}function d(){if(!o)return;const e=Y.fogValue;if(10===e)return void o.background(o.color(0,0,0,1));const t=o.color(0,0,0,.05*e);o.background(t)}function h(){a&&(a.push(),a.stroke(0,0,100,.8),a.strokeWeight(1),a.noFill(),a.circle(t.mouseX,t.mouseY,20),a.fill(t.color(F.focusedColor.color)),a.circle(t.mouseX,t.mouseY,10),a.pop())}function g(){u().filter((e=>void 0!==e)).forEach((e=>{t.image(e,0,0)})),W.debugOn&&n&&t.image(n,0,0)}t.setup=()=>{t.createCanvas(l,s),t.frameRate(144),t.noCursor(),W.initP(t),o=c(),W.initGraphics(o),i=c(),W.initBackground(i),r=c(),W.initResources(r),a=c(),W.initOverlay(a),n=c(),W.initDebugOverlay(n),e||(e=new K)},t.draw=()=>{null===n||void 0===n||n.clear(),d(),null===e||void 0===e||e.doTheThing(),a&&(a.clear(),h()),g()},t.keyPressed=()=>{" "===t.key&&(null===o||void 0===o||o.background(o.color(0,0,0,1)))},t.mousePressed=i=>(i.preventDefault(),t.mouseX>0&&t.mouseX<t.width&&t.mouseY>0&&t.mouseY<t.height&&(null===e||void 0===e||e.layEgg(t.createVector(t.mouseX,t.mouseY))),!1)},ee=(0,r.HX)("data-v-8c322a58");(0,r.dD)("data-v-8c322a58");const te={class:"game-controls column justify-evenly"},ie={class:"column col justify-evenly wrap"},re={class:"column col justify-evenly"},oe={class:"column col justify-evenly"},ae={class:"column col justify-evenly"},ne={class:"column col justify-evenly"};(0,r.Cn)();const le=ee(((e,t,i,o,a,n)=>{const l=(0,r.up)("q-slider"),s=(0,r.up)("q-field"),c=(0,r.up)("q-toggle"),u=(0,r.up)("q-btn"),d=(0,r.up)("q-btn-group"),h=(0,r.up)("buddy-details-selector");return(0,r.wg)(),(0,r.j4)("div",te,[(0,r.Wm)("div",ie,[(0,r.Wm)(s,{filled:"",hint:`Max Buddies ${e.maxBuddies}`},{control:ee((()=>[(0,r.Wm)(l,{modelValue:e.maxBuddies,"onUpdate:modelValue":t[1]||(t[1]=t=>e.maxBuddies=t),class:"col self-center buddies-slider",color:"green",step:1,min:0,max:20,snap:"",label:"",dark:"",onWheel:e.maxBuddiesScroll},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)("div",re,[(0,r.Wm)(s,{filled:"",hint:`Fog ${e.fogValue}`},{control:ee((()=>[(0,r.Wm)(l,{modelValue:e.fogValue,"onUpdate:modelValue":t[2]||(t[2]=t=>e.fogValue=t),class:"col self-center buddies-slider",color:"red",step:1,min:0,max:10,snap:"",label:"",dark:"",onWheel:e.fogValueScroll},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)("div",oe,[(0,r.Wm)(s,{filled:"",hint:`FrameRate ${e.frameRate}`},{control:ee((()=>[(0,r.Wm)(l,{modelValue:e.frameRate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.frameRate=t),class:"col self-center buddies-slider",color:"blue",step:1,min:0,max:144,snap:"",label:"",dark:"",onWheel:e.frameRateScroll},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)("div",ae,[(0,r.Wm)(s,{filled:"",hint:`Lifetime ${e.buddyMaxAge}`},{control:ee((()=>[(0,r.Wm)(l,{modelValue:e.buddyMaxAge,"onUpdate:modelValue":t[4]||(t[4]=t=>e.buddyMaxAge=t),class:"col self-center buddies-slider",color:"orange",step:10,min:0,max:600,snap:"",label:"",dark:"",onWheel:e.buddyMaxAgeScroll},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)("div",ne,[(0,r.Wm)(s,{filled:"",hint:`Buddy Length ${e.buddyLength}`},{control:ee((()=>[(0,r.Wm)(l,{modelValue:e.buddyLength,"onUpdate:modelValue":t[5]||(t[5]=t=>e.buddyLength=t),class:"col self-center buddies-slider",color:"amber",step:1,min:0,max:100,snap:"",label:"",dark:"",onWheel:e.buddyLength},null,8,["modelValue","onWheel"])])),_:1},8,["hint"])]),(0,r.Wm)(d,null,{default:ee((()=>[(0,r.Wm)(c,{modelValue:e.debug,"onUpdate:modelValue":t[6]||(t[6]=t=>e.debug=t),class:"col-grow",title:"Debug",icon:"fa fa-bug fa-stack-1x"},null,8,["modelValue"]),(0,r.Wm)(u,{title:e.playButtonText,icon:e.playButtonIcon,push:"",color:"accent",onClick:e.clickPlayPause},null,8,["title","icon","onClick"]),(0,r.Wm)(u,{title:"Step Forward",icon:"fa fa-step-forward",disable:e.playing,push:"",color:"accent",onClick:e.clickStepForward},null,8,["disable","onClick"]),(0,r.Wm)(u,{title:"Clear Screen",icon:"fa fa-eraser",push:"",color:"accent",onClick:e.clearScreen},null,8,["onClick"]),(0,r.Wm)(u,{title:"Kill Everything",icon:"fa fa-skull-crossbones",push:"",color:"accent",onClick:e.killEverything},null,8,["onClick"])])),_:1}),(0,r.Wm)(h)])})),se=(0,r.HX)("data-v-6cbf6438");(0,r.dD)("data-v-6cbf6438");const ce={class:"q-pa-md row q-gutter-sm justify-between items-center"};(0,r.Cn)();const ue=se(((e,t,i,o,a,n)=>{const l=(0,r.up)("q-btn"),s=(0,r.up)("q-toggle");return(0,r.wg)(),(0,r.j4)(r.HY,null,[(0,r.Wm)("div",ce,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.colors,((t,i)=>((0,r.wg)(),(0,r.j4)(l,{key:t,color:t.color,icon:e.toIcon(t),glossy:i===e.focused,outline:i!==e.focused,disable:e.marching,round:"",push:"",size:"lg",onClick:i=>e.clickColor(t)},null,8,["color","icon","glossy","outline","disable","onClick"])))),128))]),(0,r.Wm)("div",null,[(0,r.Wm)(s,{modelValue:e.marching,"onUpdate:modelValue":t[1]||(t[1]=t=>e.marching=t),icon:"fa fa-tachometer-alt"},null,8,["modelValue"])])],64)}));var de=i(8940),he=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ge=class extends f.w3{constructor(){super(...arguments),Object.defineProperty(this,"marchSub",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"marching",{enumerable:!0,configurable:!0,writable:!0,value:!1})}get colors(){return F.colors}get focused(){return F.focused}mounted(){this.marchSub=(0,de.H)(0,100).subscribe((()=>{this.marching&&F.incrementFocus()}))}unmounted(){var e;null===(e=this.marchSub)||void 0===e||e.unsubscribe()}toIcon(e){return`fa fa-${e.animal}`}clickColor(e){F.setFocus(e),console.log(`${JSON.stringify(e)} Clicked`)}};ge=he([(0,f.Ei)({name:"Buddy Details Selector"})],ge);const pe=ge;var be=i(4607),me=i(2582),fe=i(7518),ye=i.n(fe);pe.render=ue,pe.__scopeId="data-v-6cbf6438";const ve=pe;ye()(pe,"components",{QBtn:be.Z,QToggle:me.Z});var we=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Oe=class extends f.w3{get fogValue(){return Y.fogValue}set fogValue(e){Y.setFogValue(e)}get maxBuddies(){return Y.maxBuddies}set maxBuddies(e){Y.setMaxBuddies(e)}get frameRate(){return W.frameRate}set frameRate(e){W.setFrameRate(e)}get buddyMaxAge(){return F.ageLimit}set buddyMaxAge(e){F.setAgeLimit(e)}get buddyLength(){return F.buddyLength}set buddyLength(e){F.setBuddyLength(e)}get debug(){return W.debugOn}set debug(e){W.setDebug(e)}get playing(){return W.playing}clickPlayPause(){W.togglePlayState()}clickStepForward(){W.step()}clearScreen(){W.clearScreen()}killEverything(){Y.posseMaybe().killEverything()}get playButtonIcon(){return"fa fa-"+(W.playing?"pause":"play")}get playButtonText(){return W.playing?"Pause":"Play"}maxBuddiesScroll(e){this.maxBuddies=this.maxBuddies-Math.sign(e.deltaY)}fogValueScroll(e){this.fogValue=this.fogValue-Math.sign(e.deltaY)}frameRateScroll(e){this.frameRate=this.frameRate-Math.sign(e.deltaY)}buddyMaxAgeScroll(e){this.buddyMaxAge=this.buddyMaxAge-Math.sign(e.deltaY)}buddyMaxLengthScroll(e){this.buddyLength=this.buddyLength-Math.sign(e.deltaY)}};Oe=we([(0,f.Ei)({name:"Buddies Controls",components:{BuddyDetailsSelector:ve}})],Oe);const je=Oe;var xe=i(7916),Pe=i(2064),ke=i(6375);je.render=le,je.__scopeId="data-v-8c322a58";const We=je;ye()(je,"components",{QField:xe.Z,QSlider:Pe.Z,QBtnGroup:ke.Z,QToggle:me.Z,QBtn:be.Z});var Se=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Be=class extends f.w3{constructor(){super(...arguments),Object.defineProperty(this,"p5Container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"p5Handle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"posse",{enumerable:!0,configurable:!0,writable:!0,value:new K})}mounted(){this.p5Handle||(this.p5Handle=new(w())(J(this.posse),this.p5Container)),Y.initPosse(this.posse)}unmounted(){var e;null===(e=this.p5Handle)||void 0===e||e.noLoop()}get activeBuddies(){return this.posse.buddies.length}get unhatchedBuddies(){return this.posse.eggs.length}get readyEggs(){return this.posse.eggs.filter((e=>e.ready)).length}get expiredEggs(){return Z.eggsExpired}get hatchedEggs(){return Z.eggsHatched}doNothing(e){e.shiftKey||e.preventDefault()}};Se([(0,y.R)()],Be.prototype,"p5Container",void 0),Be=Se([(0,f.Ei)({name:"Buddies!",components:{BuddiesControls:We}})],Be);const Re=Be;var Ve=i(151),Ee=i(5589);Re.render=m,Re.__scopeId="data-v-406a8cd2";const Ce=Re;ye()(Re,"components",{QCard:Ve.Z,QCardSection:Ee.Z});var Me=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let De=class extends f.w3{created(){}};De=Me([(0,f.Ei)({components:{BuddiesComponent:Ce}})],De);const _e=De;var Ae=i(4379);_e.render=a,_e.__scopeId="data-v-18f41d65";const Fe=_e;ye()(_e,"components",{QPage:Ae.Z})}}]);