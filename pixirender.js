(async function () {
  // Create a new application
  const app = new PIXI.Application();

  // Initialize with options
  await app.init({
    width: 800, // Canvas width
    height: 600, // Canvas height
    backgroundColor: "#ffffff", // Background color
    antialias: true, // Enable antialiasing
    resolution: 1, // Resolution / device pixel ratio
    preference: "webgl", // or 'webgpu' // Renderer preference
  });

  document.body.appendChild(app.canvas);
  var texture = await PIXI.Assets.load("person1.svg");
  const sprite = new PIXI.Sprite(texture);
  app.stage.addChild(sprite);
  sprite.scale = 3;
  texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
})();
