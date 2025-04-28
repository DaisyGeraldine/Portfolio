import{d as nt}from"./chunk-CWTPBX7D.js";var ot=nt((R,I)=>{(function(z,M){typeof R=="object"&&typeof I=="object"?I.exports=M():typeof define=="function"&&define.amd?define([],M):typeof R=="object"?R._vantaEffect=M():z._vantaEffect=M()})(typeof self<"u"?self:R,()=>(()=>{"use strict";var z={d:(i,t)=>{for(var e in t)z.o(t,e)&&!z.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:t[e]})},o:(i,t)=>Object.prototype.hasOwnProperty.call(i,t),r:i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})}},M={};function X(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}z.r(M),z.d(M,{default:()=>it}),Number.prototype.clamp=function(i,t){return Math.min(Math.max(this,i),t)};function Y(i){for(;i.children&&i.children.length>0;)Y(i.children[0]),i.remove(i.children[0]);i.geometry&&i.geometry.dispose(),i.material&&(Object.keys(i.material).forEach(t=>{i.material[t]&&i.material[t]!==null&&typeof i.material[t].dispose=="function"&&i.material[t].dispose()}),i.material.dispose())}let E=typeof window=="object",P=E&&window.THREE||{};E&&!window.VANTA&&(window.VANTA={});let T=E&&window.VANTA||{};T.register=(i,t)=>T[i]=e=>new t(e),T.version="0.5.24";let F=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};T.VantaBase=class{constructor(i={}){if(!E)return!1;T.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);let t=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},t),(i instanceof HTMLElement||typeof i=="string")&&(i={el:i}),Object.assign(this.options,i),this.options.THREE&&(P=this.options.THREE),this.el=this.options.el,this.el==null)F('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){let a=this.el;if(this.el=(e=a,document.querySelector(e)),!this.el)return void F("Cannot find element",a)}var e,o;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(a){return F("Init error",a),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(o=this.options.backgroundColor,typeof o=="number"?"#"+("00000"+o.toString(16)).slice(-6):o)))}this.initMouse(),this.resize(),this.animationLoop();let n=window.addEventListener;n("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(n("scroll",this.windowMouseMoveWrapper),n("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(n("touchstart",this.windowTouchWrapper),n("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&n("deviceorientation",this.windowGyroWrapper)}setOptions(i={}){Object.assign(this.options,i),this.triggerMouseMove()}prepareEl(){let i,t;if(typeof Node<"u"&&Node.TEXT_NODE)for(i=0;i<this.el.childNodes.length;i++){let e=this.el.childNodes[i];if(e.nodeType===Node.TEXT_NODE){let o=document.createElement("span");o.textContent=e.textContent,e.parentElement.insertBefore(o,e),e.remove()}}for(i=0;i<this.el.children.length;i++)t=this.el.children[i],getComputedStyle(t).position==="static"&&(t.style.position="relative"),getComputedStyle(t).zIndex==="auto"&&(t.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(i,t={}){Object.assign(i.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(i.style,t),i.classList.add("vanta-canvas")}initThree(){P.WebGLRenderer?(this.renderer=new P.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new P.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){let i=this.getCanvasElement();return!!i&&i.getBoundingClientRect()}windowMouseMoveWrapper(i){let t=this.getCanvasRect();if(!t)return!1;let e=i.clientX-t.left,o=i.clientY-t.top;e>=0&&o>=0&&e<=t.width&&o<=t.height&&(this.mouseX=e,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(e,o))}windowTouchWrapper(i){let t=this.getCanvasRect();if(!t)return!1;if(i.touches.length===1){let e=i.touches[0].clientX-t.left,o=i.touches[0].clientY-t.top;e>=0&&o>=0&&e<=t.width&&o<=t.height&&(this.mouseX=e,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(e,o))}}windowGyroWrapper(i){let t=this.getCanvasRect();if(!t)return!1;let e=Math.round(2*i.alpha)-t.left,o=Math.round(2*i.beta)-t.top;e>=0&&o>=0&&e<=t.width&&o<=t.height&&(this.mouseX=e,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(e,o))}triggerMouseMove(i,t){i===void 0&&t===void 0&&(this.options.mouseEase?(i=this.mouseEaseX,t=this.mouseEaseY):(i=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=i/this.scale,this.uniforms.iMouse.value.y=t/this.scale);let e=i/this.width,o=t/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(e,o)}setSize(){this.scale||(this.scale=1),X()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){let i=this.el.offsetHeight,t=this.el.getBoundingClientRect(),e=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,o=t.top+e;return o-window.innerHeight<=e&&e<=o+i}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);let i=performance.now();if(this.prevNow){let t=(i-this.prevNow)/16.666666666666668;t=Math.max(.2,Math.min(t,5)),this.t+=t,this.t2+=(this.options.speed||1)*t,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=i,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();let i=window.removeEventListener;i("touchstart",this.windowTouchWrapper),i("touchmove",this.windowTouchWrapper),i("scroll",this.windowMouseMoveWrapper),i("mousemove",this.windowMouseMoveWrapper),i("deviceorientation",this.windowGyroWrapper),i("resize",this.resize),window.cancelAnimationFrame(this.req);let t=this.scene;t&&t.children&&Y(t),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),T.current===this&&(T.current=null)}};let Q=T.VantaBase,Z=typeof window=="object"&&window.THREE,{Camera:_,ClampToEdgeWrapping:O,DataTexture:j,FloatType:W,Mesh:q,NearestFilter:S,PlaneBufferGeometry:G,RGBAFormat:N,Scene:L,ShaderMaterial:k,WebGLRenderTarget:H}=Z||{},$=function(i,t,e,o){o&&({Camera:_,ClampToEdgeWrapping:O,DataTexture:j,FloatType:W,Mesh:q,NearestFilter:S,PlaneBufferGeometry:G,RGBAFormat:N,Scene:L,ShaderMaterial:k,WebGLRenderTarget:H}=o),this.variables=[],this.currentTextureIndex=0;var n=W,a=new L,l=new _;l.position.z=1;var h={passThruTexture:{value:null}},f=p(`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`,h),g=new q(new G(2,2),f);function d(s){s.defines.resolution="vec2( "+i.toFixed(1)+", "+t.toFixed(1)+" )"}function p(s,r){var u=new k({uniforms:r=r||{},vertexShader:`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`,fragmentShader:s});return d(u),u}a.add(g),this.setDataType=function(s){return n=s,this},this.addVariable=function(s,r,u){var m={name:s,initialValueTexture:u,material:this.createShaderMaterial(r),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:S,magFilter:S};return this.variables.push(m),m},this.setVariableDependencies=function(s,r){s.dependencies=r},this.init=function(){if(!e.capabilities.isWebGL2&&!e.extensions.get("OES_texture_float"))return"No OES_texture_float support for float textures.";if(e.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(var s=0;s<this.variables.length;s++){var r=this.variables[s];r.renderTargets[0]=this.createRenderTarget(i,t,r.wrapS,r.wrapT,r.minFilter,r.magFilter),r.renderTargets[1]=this.createRenderTarget(i,t,r.wrapS,r.wrapT,r.minFilter,r.magFilter),this.renderTexture(r.initialValueTexture,r.renderTargets[0]),this.renderTexture(r.initialValueTexture,r.renderTargets[1]);var u=r.material,m=u.uniforms;if(r.dependencies!==null)for(var v=0;v<r.dependencies.length;v++){var y=r.dependencies[v];if(y.name!==r.name){for(var w=!1,x=0;x<this.variables.length;x++)if(y.name===this.variables[x].name){w=!0;break}if(!w)return"Variable dependency not found. Variable="+r.name+", dependency="+y.name}m[y.name]={value:null},u.fragmentShader=`
uniform sampler2D `+y.name+`;
`+u.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){for(var s=this.currentTextureIndex,r=this.currentTextureIndex===0?1:0,u=0,m=this.variables.length;u<m;u++){var v=this.variables[u];if(v.dependencies!==null)for(var y=v.material.uniforms,w=0,x=v.dependencies.length;w<x;w++){var C=v.dependencies[w];y[C.name].value=C.renderTargets[s].texture}this.doRenderTarget(v.material,v.renderTargets[r])}this.currentTextureIndex=r},this.getCurrentRenderTarget=function(s){return s.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(s){return s.renderTargets[this.currentTextureIndex===0?1:0]},this.addResolutionDefine=d,this.createShaderMaterial=p,this.createRenderTarget=function(s,r,u,m,v,y){return new H(s=s||i,r=r||t,{wrapS:u=u||O,wrapT:m=m||O,minFilter:v=v||S,magFilter:y=y||S,format:N,type:n,stencilBuffer:!1,depthBuffer:!1})},this.createTexture=function(){var s=new Float32Array(i*t*4);return new j(s,i,t,N,W)},this.renderTexture=function(s,r){h.passThruTexture.value=s,this.doRenderTarget(f,r),h.passThruTexture.value=null},this.doRenderTarget=function(s,r){var u=e.getRenderTarget();g.material=s,e.setRenderTarget(r),e.render(a,l),g.material=f,e.setRenderTarget(u)}},c=typeof window=="object"&&window.THREE,B=!X(),b=32,D=b*b,A=800,tt=(i={})=>{let t=new c.BufferGeometry,e=[];function o(a,l,h){let f=1.5*(i.birdSize||1);e.push(new c.Vector3(a*f,l*f,h*f))}o(5,0,0),o(-5,-1,1),o(-5,0,0),o(-5,-2,-1),o(0,2,-6),o(0,2,6),o(2,0,0),o(-3,0,0),t.setFromPoints(e);let n=[];return n.push(0,2,1),n.push(4,7,6),n.push(5,6,7),t.setIndex(n),t};class et{constructor(t){var e,o,n=new c.Vector3,a=500,l=500,h=200,f=.1,g=t;this.position=new c.Vector3,this.velocity=new c.Vector3,e=new c.Vector3,this.setGoal=function(d){o=d},this.setWorldSize=function(d,p,s){a=d,l=p,h=s},this.run=function(d){n.set(-a,this.position.y,this.position.z),(n=this.avoid(n)).multiplyScalar(5),e.add(n),n.set(a,this.position.y,this.position.z),(n=this.avoid(n)).multiplyScalar(5),e.add(n),n.set(this.position.x,-l,this.position.z),(n=this.avoid(n)).multiplyScalar(5),e.add(n),n.set(this.position.x,l,this.position.z),(n=this.avoid(n)).multiplyScalar(5),e.add(n),n.set(this.position.x,this.position.y,-h),(n=this.avoid(n)).multiplyScalar(5),e.add(n),n.set(this.position.x,this.position.y,h),(n=this.avoid(n)).multiplyScalar(5),e.add(n),Math.random()>.5&&this.flock(d),this.move()},this.flock=function(d){o&&e.add(this.reach(o,.005)),e.add(this.alignment(d)),e.add(this.cohesion(d)),e.add(this.separation(d))},this.move=function(){this.velocity.add(e);var d=this.velocity.length();d>2.5&&this.velocity.divideScalar(d/2.5),this.position.add(this.velocity),e.set(0,0,0)},this.checkBounds=function(){this.position.x>a&&(this.position.x=-a),this.position.x<-a&&(this.position.x=a),this.position.y>l&&(this.position.y=-l),this.position.y<-l&&(this.position.y=l),this.position.z>h&&(this.position.z=-h),this.position.z<-h&&(this.position.z=h)},this.avoid=function(d){var p=new c.Vector3;return p.copy(this.position),p.sub(d),p.multiplyScalar(1/this.position.distanceToSquared(d)),p},this.repulse=function(d){var p=this.position.distanceTo(d);if(p<150){var s=new c.Vector3;s.subVectors(this.position,d),s.multiplyScalar(.5/p),e.add(s)}},this.reach=function(d,p){var s=new c.Vector3;return s.subVectors(d,this.position),s.multiplyScalar(p),s},this.alignment=function(d){var p,s,r=new c.Vector3,u=0;let m=100*g.alignment/20;for(var v=0,y=d.length;v<y;v++)Math.random()>.6||(s=(p=d[v]).position.distanceTo(this.position))>0&&s<=m&&(r.add(p.velocity),u++);if(u>0){r.divideScalar(u);var w=r.length();w>f&&r.divideScalar(w/f)}return r},this.cohesion=function(d){var p,s,r=new c.Vector3,u=new c.Vector3,m=0;let v=100*g.cohesion/20;for(var y=0,w=d.length;y<w;y++)Math.random()>.6||(s=(p=d[y]).position.distanceTo(this.position))>0&&s<=v&&(r.add(p.position),m++);m>0&&r.divideScalar(m),u.subVectors(r,this.position);var x=u.length();return x>f&&u.divideScalar(x/f),u},this.separation=function(d){var p,s,r=new c.Vector3,u=new c.Vector3;let m=100*g.separation/20;for(var v=0,y=d.length;v<y;v++)Math.random()>.6||(s=(p=d[v]).position.distanceTo(this.position))>0&&s<=m&&(u.subVectors(this.position,p.position),u.normalize(),u.divideScalar(s),r.add(u));return r}}}class J extends Q{static initClass(){this.prototype.defaultOptions={backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}constructor(t){c=t.THREE||c,super(t)}initComputeRenderer(){this.gpuCompute=new $(b,b,this.renderer,c);let t=this.gpuCompute.createTexture(),e=this.gpuCompute.createTexture();(function(n){let a=n.image.data,l=0,h=a.length;(()=>{let f=[];for(;l<h;){let g=Math.random()*A-400,d=Math.random()*A-400,p=Math.random()*A-400;a[l+0]=g,a[l+1]=d,a[l+2]=p,a[l+3]=1,f.push(l+=4)}})()})(t),function(n){let a=n.image.data,l=0,h=a.length;(()=>{let f=[];for(;l<h;){let g=Math.random()-.5,d=Math.random()-.5,p=Math.random()-.5;a[l+0]=10*g,a[l+1]=10*d,a[l+2]=10*p,a[l+3]=1,f.push(l+=4)}})()}(e),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",`uniform float time;
uniform float testing;
uniform float delta; // about 0.016
uniform float separationDistance; // 20
uniform float alignmentDistance; // 40
uniform float cohesionDistance;
uniform float speedLimit;
uniform float freedomFactor;
uniform vec3 predator;

const float width = resolution.x;
const float height = resolution.y;

const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;
// const float VISION = PI * 0.55;

float zoneRadius = 40.0;
float zoneRadiusSquared = 1600.0;

float separationThresh = 0.45;
float alignmentThresh = 0.65;

const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {

  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;


  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;

  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;

  float dist;
  vec3 dir; // direction
  float distSquared;

  float separationSquared = separationDistance * separationDistance;
  float cohesionSquared = cohesionDistance * cohesionDistance;

  float f;
  float percent;

  vec3 velocity = selfVelocity;

  float limit = speedLimit;

  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;
  // dir.z *= 0.6;
  dist = length( dir );
  distSquared = dist * dist;

  float preyRadius = 150.0;
  float preyRadiusSq = preyRadius * preyRadius;

  // move birds away from predator
  if (dist < preyRadius) {

    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }

  // if (testing == 0.0) {}
  // if ( rand( uv + time ) < freedomFactor ) {}

  // Attract flocks to the center
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );

  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;

  for (float y=0.0;y<height;y++) {
    for (float x=0.0;x<width;x++) {

      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;

      dir = birdPosition - selfPosition;
      dist = length(dir);

      if (dist < 0.0001) continue;

      distSquared = dist * dist;

      if (distSquared > zoneRadiusSquared ) continue;

      percent = distSquared / zoneRadiusSquared;

      if ( percent < separationThresh ) { // low

        // Separation - Move apart for comfort
        f = (separationThresh / percent - 1.0) * delta;
        velocity -= normalize(dir) * f;

      } else if ( percent < alignmentThresh ) { // high

        // Alignment - fly the same direction
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;

        birdVelocity = texture2D( textureVelocity, ref ).xyz;

        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize(birdVelocity) * f;

      } else {

        // Attraction / Cohesion - move closer
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

        velocity += normalize(dir) * f;

      }
    }
  }

  // this make tends to fly around than down or up
  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);

  // Speed Limits
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }

  gl_FragColor = vec4( velocity, 1.0 );

}`,e),this.positionVariable=this.gpuCompute.addVariable("texturePosition",`uniform float time;
uniform float delta;

void main() {

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;

  float phase = tmpPos.w;

  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

  gl_FragColor = vec4( position + velocity * delta * 15. , phase );

}`,t),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new c.Vector3},this.velocityVariable.material.defines.BOUNDS=A.toFixed(2),this.velocityVariable.wrapS=c.RepeatWrapping,this.velocityVariable.wrapT=c.RepeatWrapping,this.positionVariable.wrapS=c.RepeatWrapping,this.positionVariable.wrapT=c.RepeatWrapping;let o=this.gpuCompute.init();o!==null&&console.error(o)}initGpgpuBirds(){let t=(n=>{let a=new c.BufferGeometry;n.quantity&&(b=Math.pow(2,n.quantity),D=b*b);let l=3*D,h=3*l,f=new c.BufferAttribute(new Float32Array(3*h),3),g=new c.BufferAttribute(new Float32Array(3*h),3),d=new c.BufferAttribute(new Float32Array(2*h),2),p=new c.BufferAttribute(new Float32Array(h),1);a.setAttribute||(a.setAttribute=a.addAttribute),a.setAttribute("position",f),a.setAttribute("birdColor",g),a.setAttribute("reference",d),a.setAttribute("birdVertex",p);let s=0,r=function(){for(let y=0;y<arguments.length;y++)f.array[s++]=arguments[y]},u=n.wingSpan||20,m=n.birdSize||1;for(let y=0;y<D;y++)r(0,-0,-20*m,0,4*m,-20*m,0,0,30*m),r(0,0,-15*m,-u*m,0,0,0,0,15*m),r(0,0,15*m,u*m,0,0,0,0,-15*m);let v={};for(s=0;s<3*l;s++){let y=~~(s/3),w=y%b/b,x=~~(y/b)/b,C=~~(s/9)/D,U=C.toString(),K=n.colorMode.indexOf("Gradient")!=-1,V;V=!K&&v[U]?v[U]:n.effect.getNewCol(C),K||v[U]||(v[U]=V),g.array[3*s+0]=V.r,g.array[3*s+1]=V.g,g.array[3*s+2]=V.b,d.array[2*s]=w,d.array[2*s+1]=x,p.array[s]=s%9}return a.scale(.2,.2,.2)})(Object.assign({},this.options,{effect:this}));this.birdUniforms={color:{value:new c.Color(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:this.options.birdSize}};let e=new c.ShaderMaterial({uniforms:this.birdUniforms,vertexShader:`attribute vec2 reference;
attribute float birdVertex;

attribute vec3 birdColor;

uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;

varying vec4 vColor;
varying float z;

uniform float time;
uniform float birdSize;

void main() {

  vec4 tmpPos = texture2D( texturePosition, reference );
  vec3 pos = tmpPos.xyz;
  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);

  vec3 newPosition = position;

  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
    // flap wings
    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;
  }

  newPosition = mat3( modelMatrix ) * newPosition;

  velocity.z *= -1.;
  float xz = length( velocity.xz );
  float xyz = 1.;
  float x = sqrt( 1. - velocity.y * velocity.y );

  float cosry = velocity.x / xz;
  float sinry = velocity.z / xz;

  float cosrz = x / xyz;
  float sinrz = velocity.y / xyz;

  mat3 maty =  mat3(
    cosry, 0, -sinry,
    0    , 1, 0     ,
    sinry, 0, cosry
  );

  mat3 matz =  mat3(
    cosrz , sinrz, 0,
    -sinrz, cosrz, 0,
    0     , 0    , 1
  );
  newPosition =  maty * matz * newPosition;
  newPosition += pos;
  z = newPosition.z;

  vColor = vec4( birdColor, 1.0 );
  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );
}`,fragmentShader:`varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  // Fake colors for now
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`,side:c.DoubleSide}),o=new c.Mesh(t,e);return o.rotation.y=Math.PI/2,o.matrixAutoUpdate=!1,o.updateMatrix(),this.scene.add(o)}getNewCol(t){let e=this.options,o=e.color1!=null?e.color1:4456448,n=e.color2!=null?e.color2:6684672,a=new c.Color(o),l=new c.Color(n),h,f;if(f=e.colorMode.indexOf("Gradient")!=-1?Math.random():t,e.colorMode.indexOf("variance")==0){let g=(a.r+Math.random()*l.r).clamp(0,1),d=(a.g+Math.random()*l.g).clamp(0,1),p=(a.b+Math.random()*l.b).clamp(0,1);h=new c.Color(g,d,p)}else h=e.colorMode.indexOf("mix")==0?new c.Color(o+f*n):a.lerp(l,f);return h}onInit(){this.camera=new c.PerspectiveCamera(75,this.width/this.height,1,3e3),this.camera.position.z=350,this.fog=new c.Fog(16777215,100,1e3),this.mouseX=this.mouseY=0;let t=this.birds=[],e=this.boids=[],o=this.options,n,a;if(B)try{this.initComputeRenderer(),this.valuesChanger=this.valuesChanger.bind(this),this.valuesChanger(),this.initGpgpuBirds()}catch(g){console.error("[vanta.js] birds init error: ",g)}else{let g=6*Math.pow(2,o.quantity);for(var l=0;l<g;l++){n=e[l]=new et(o),n.position.x=400*Math.random()-200,n.position.y=400*Math.random()-200,n.position.z=400*Math.random()-200,n.velocity.x=2*Math.random()-1,n.velocity.y=2*Math.random()-1,n.velocity.z=2*Math.random()-1,n.setWorldSize(500,500,300);let d=o.colorMode.indexOf("Gradient")!=-1,p=tt(o),s=p.attributes.position.length,r=new c.BufferAttribute(new Float32Array(s),3);if(d)for(var h=0;h<p.index.array.length;h+=3)for(var f=0;f<=2;f++){let u=p.index.array[h+f],m=this.getNewCol();r.array[3*u]=m.r,r.array[3*u+1]=m.g,r.array[3*u+2]=m.b}else{let u=this.getNewCol(l/g);for(h=0;h<r.array.length;h+=3)r.array[h]=u.r,r.array[h+1]=u.g,r.array[h+2]=u.b}p.setAttribute("color",r),a=t[l]=new c.Mesh(p,new c.MeshBasicMaterial({color:16777215,side:c.DoubleSide,vertexColors:c.VertexColors})),a.phase=Math.floor(62.83*Math.random()),a.position.x=e[l].position.x,a.position.y=e[l].position.y,a.position.z=e[l].position.z,this.scene.add(a)}}}valuesChanger(){this.velocityUniforms&&(this.velocityUniforms.separationDistance.value=this.options.separation,this.velocityUniforms.alignmentDistance.value=this.options.alignment,this.velocityUniforms.speedLimit.value=this.options.speedLimit,this.velocityUniforms.cohesionDistance.value=this.options.cohesion)}onUpdate(){this.now=performance.now(),this.last||(this.last=this.now);let t=(this.now-this.last)/1e3;if(t>1&&(t=1),this.last=this.now,B)this.positionUniforms.time.value=this.now,this.positionUniforms.delta.value=t,this.velocityUniforms.time.value=this.now,this.velocityUniforms.delta.value=t,this.birdUniforms.time.value=this.now,this.birdUniforms.delta.value=t,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;else{let n=this.birds,a=this.boids,l,h;for(var e=0,o=n.length;e<o;e++){l=a[e],l.run(a),h=n[e],h.rotation.y=Math.atan2(-l.velocity.z,l.velocity.x),h.rotation.z=Math.asin(l.velocity.y/l.velocity.length()),h.phase=(h.phase+(Math.max(0,h.rotation.z)+.1))%62.83;let f=16,g=13;h.geometry.attributes.position.array[f]=h.geometry.attributes.position.array[g]=5*Math.sin(h.phase)*this.options.birdSize,h.geometry.attributes.position.needsUpdate=!0,h.geometry.computeVertexNormals(),h.position.x=a[e].position.x,h.position.y=a[e].position.y,h.position.z=a[e].position.z}}}onMouseMove(t,e){if(this.mouseX=t-.5,this.mouseY=e-.5,!B){let l=this.boids,h;for(var o=new c.Vector3(this.mouseX*this.width,-this.mouseY*this.height,0),n=0,a=l.length;n<a;n++)h=l[n],o.z=h.position.z,h.repulse(o)}}onDestroy(){}onResize(){}}J.initClass();let it=T.register("BIRDS",J);return M})())});export default ot();
