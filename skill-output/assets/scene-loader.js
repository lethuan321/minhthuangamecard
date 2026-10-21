// Source: index.html loadDesktopModules; names generalized only.
// Requires the import map in import-map.json. Returns constructors and optional font.
    let sceneModules;
    function loadSceneModules() {
      return sceneModules ||= Promise.all([
        import('three/addons/postprocessing/EffectComposer.js'),
        import('three/addons/postprocessing/RenderPass.js'),
        import('three/addons/postprocessing/UnrealBloomPass.js'),
        import('three/addons/postprocessing/ShaderPass.js'),
        import('three/addons/postprocessing/OutputPass.js'),
        import('three/addons/loaders/FontLoader.js'),
        import('three/addons/geometries/TextGeometry.js')
      ]).then(async modules => {
        const result=Object.assign({},...modules);
        try { result.font=await Promise.race([new result.FontLoader().loadAsync('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_bold.typeface.json'),new Promise(resolve=>setTimeout(()=>resolve(null),2200))]); }
        catch { result.font=null; }
        return result;
      });
    }

