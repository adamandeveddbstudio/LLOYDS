// Banner duration timer start time
var startTime;

// timelaine vars
var lightSwitchDelay = 0.15

// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = gsap.timeline({ onComplete: endTime });

  animate();
  // setRollover(); CALLED IN endTime()
}

function animate() {
  tl.set(['#main_content'], { autoAlpha: 1, rotation: 0.1, force3D: true });
  tl.set(['#copy1, #copy2'], { rotation: 0.1, force3D: true });

  tl.set(['#lineone, #linetwo, #linethree'], { y: '100%' });

  tl.set(['.copy4 span'], { x: "-970px", ease: Power2.easeOut })
  tl.set(['.copy2 span',], { y: "100%", ease: Power2.easeOut })
  tl.set(['#horse,#logo_text,#copy3'], { x: "-970px", ease: Power2.easeOut })

  tl.addLabel('frame1', 0)
    .staggerTo(['.copy1 span',], 1, { y: "0", autoAlpha: 1, ease: 'back.out', yoyo: true }, 0.5, 'frame2+=0')
    .to(['#copy2'], 0, { autoAlpha: 1, ease: 'none', yoyo: true }, 'frame2+=2.5')
    .staggerTo(['.copy2 span',], 1, { y: "0", autoAlpha: 1, ease: 'back.out', yoyo: true }, 0.25, '<')


  tl.addLabel('frame2', 5)
    .to(['#copy1','#copy2'], 0.5, { autoAlpha: 0, ease: "power1.inOut", yoyo: true }, 'frame3')
    .to(['#green'], 0.5, { left: '0px', autoAlpha: 1, ease: "power1.inOut", }, 'frame3+=.5')
    .to(['#legal'], 0.5, { color: '#000', ease: "power1.inOut", }, '<')
    .to(['#horse'], 1, { x:0, autoAlpha: 1, ease: "power1.inOut", yoyo: true }, 'frame3+=.6')
    .to(['#logo_text'], 1, { x:0, autoAlpha: 1, ease: "power1.inOut", yoyo: true }, 'frame3+=.7')
    .to(['#copy3'], 1, { x:0, autoAlpha: 1, ease: "power1.inOut", yoyo: true }, 'frame3+=.7')
    .to(['#copy4'], { autoAlpha: 1, ease: "power1.inOut", }, 'frame3+=1.7')
    .staggerTo(['.copy4 span',], 1, { x: "0", ease: Power2.easeOut, }, 0.05, '<')


    .to(['#cta'], 0.5, { autoAlpha: 1, ease: "power1.inOut", }, 'frame3+=3.2')


}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  gsap.to(["#cta"], 0.3, { scale: 1.1, ease: Power1.easeInOut });
}

function default_out(event) {
  gsap.to(["#cta"], 0.3, { scale: 1, ease: Power1.easeInOut });
}

// End timer

function endTime() {
  setRollover()
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
