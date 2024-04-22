
gsap.from("#nav",{
    y:-100,
    opacity:0,
    // duration:1,
    delay:0.5,
    stagger:1
});
gsap.from(".elem",{
    x:"-100%",
    opacity:0,
    delay:1,
    stagger:0.2
});
gsap.from("#left-hero button",{
    scale:0.7,
    opacity:0,
    duration:1,
    delay:1.5
});
gsap.from("#right-hero",{
    x:"100%",
    opacity:0,
    duration:1,
    delay:1.5
})
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.3,
  });
Shery.makeMagnet("#left-hero button" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.imageEffect("#bg-images",{
    style:5,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":"-1","range":[-9999999,9999999]},"aspect":{"value":1.9693430656934308},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0.02125349981646373},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2],"_gsap":{"id":11}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true
  })