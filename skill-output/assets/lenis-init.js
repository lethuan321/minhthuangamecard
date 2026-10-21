// Source: script.js initLenis. The stale 0.6s comment was omitted.
// Integration excerpt: requires state and syncModalLock from the host app.
// Load Lenis first; GSAP and ScrollTrigger are optional globals.
function initLenis(){
  if(state.lenis)return state.lenis;
  try {
    if(!window.Lenis)throw new Error('CDN did not provide Lenis');
    const lenis=new window.Lenis({
      smoothWheel:true, duration:1.2, infinite:false,
      orientation:'vertical', gestureOrientation:'vertical', autoRaf:true, autoToggle:true,
      anchors:{ offset:-72 }, allowNestedScroll:true, syncTouch:false, stopInertiaOnNavigate:true,
      respectReducedMotion:false
    });
    state.lenis=window.lenis=lenis;
    if(window.gsap&&window.ScrollTrigger){window.gsap.registerPlugin(window.ScrollTrigger);window.ScrollTrigger.config({ignoreMobileResize:true,autoRefreshEvents:'visibilitychange,DOMContentLoaded,load'});lenis.on('scroll',window.ScrollTrigger.update);}
    document.documentElement.dataset.lenisState='ready';
    window.dispatchEvent(new CustomEvent('lenisready',{detail:{lenis}}));
    syncModalLock();
    return lenis;
  } catch(err) {
    state.lenis?.destroy();state.lenis=null;delete window.lenis;
    document.documentElement.dataset.lenisState='native';
    document.documentElement.style.removeProperty('overflow');
    console.error('[Lenis] failed',err);
    return null;
  }
}
