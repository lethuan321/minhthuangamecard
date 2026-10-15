/* Full-effects policy: device hints and frame rate never reduce visual quality. */
(function(root){
  'use strict';
  function chooseTier({flag}={}){return flag==='off'?'OFF':'HIGH';}
  const full=Object.freeze({dpr:2,cards:3,coins:10,particles:700,texture:1024});
  const budgets=Object.freeze({HIGH:full,MEDIUM:full,LOW:full});
  function resizeNeeded(width,height,previousWidth,previousHeight){return width!==previousWidth||Math.abs(height-previousHeight)>=150;}
  function frameRate(){return Infinity;}
  class Monitor{constructor(tier='HIGH',apply){this.tier=tier;this.apply=apply;}sample(){}reset(){}}
  const api={chooseTier,budgets,resizeNeeded,frameRate,Monitor};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.MobileFX=api;
})(typeof window==='undefined'?globalThis:window);
