function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();
// ===================================Page=======================================================================================
gsap.to("#page>video", {
  scrollTrigger: {
    trigger: "#page>video",
    start: "2% top",
    end: "bottom top",
    // markers: true,
    scroller: "#main",
  },
  onStart: () => {
    document.querySelector("#page>video").play();
  },
});
gsap.to("#page>video", {
  scrollTrigger: {
    trigger: "#page",
    start: "top top",
    end: "bottom top",
    scroller: "#main",
    pin: true,
  },
});
gsap.to("#page>#page-bottom", {
  scrollTrigger: {
    trigger: "#page-bottom",
    start: "5% top",
    end: "bottom top",
    scroller: "#main",
  },
  opacity: 0,
});
// ==================================  page1 and page2 and page4 =============================================================================================
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    pin: true,
  },
});
tl.to("#page1>h1", {
  top: "-50%",
});
var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    pin: true,
  },
});
tl1.to("#page2>h1", {
  top: "-50%",
});
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    pin: true,
  },
});
tl2.to("#page4>#center-block", {
  top: "-50%",
});
// ========================== canvas 1 start      ===================================================================================

function canvas() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
.//canvas1/0000.jpeg
.//canvas1/0001.jpeg
.//canvas1/00002.jpeg
.//canvas1/0003.jpeg
.//canvas1/0004.jpeg
.//canvas1/0005.jpeg
.//canvas1/0006.jpeg
.//canvas1/0007.jpeg
.//canvas1/0008.jpeg
.//canvas1/0009.jpeg
.//canvas1/0010.jpeg
.//canvas1/0011.jpeg
.//canvas1/0012.jpeg
.//canvas1/0013.jpeg
.//canvas1/0014.jpeg
.//canvas1/0015.jpeg
.//canvas1/0016.jpeg
.//canvas1/0017.jpeg
.//canvas1/0018.jpeg
.//canvas1/0019.jpeg
.//canvas1/0020.jpeg
.//canvas1/0021.jpeg
.//canvas1/0022.jpeg
.//canvas1/0023.jpeg
.//canvas1/0024.jpeg
.//canvas1/0025.jpeg
.//canvas1/0026.jpeg
.//canvas1/0027.jpeg
.//canvas1/0028.jpeg
.//canvas1/0029.jpeg
.//canvas1/0030.jpeg
.//canvas1/0031.jpeg
.//canvas1/0032.jpeg
.//canvas1/0033.jpeg
.//canvas1/0034.jpeg
.//canvas1/0035.jpeg
.//canvas1/0036.jpeg
.//canvas1/0037.jpeg
.//canvas1/0038.jpeg
.//canvas1/0039.jpeg
.//canvas1/0040.jpeg
.//canvas1/0041.jpeg
.//canvas1/0042.jpeg
.//canvas1/0043.jpeg
.//canvas1/0044.jpeg
.//canvas1/0045.jpeg
.//canvas1/0046.jpeg
.//canvas1/0047.jpeg
.//canvas1/0048.jpeg
.//canvas1/0049.jpeg
.//canvas1/0050.jpeg
.//canvas1/0051.jpeg
.//canvas1/0052.jpeg
.//canvas1/0053.jpeg
.//canvas1/0054.jpeg
.//canvas1/0055.jpeg
.//canvas1/0056.jpeg
.//canvas1/0057.jpeg
.//canvas1/0058.jpeg
.//canvas1/0059.jpeg
.//canvas1/0060.jpeg
.//canvas1/0061.jpeg
.//canvas1/0062.jpeg
.//canvas1/0063.jpeg
.//canvas1/0064.jpeg
.//canvas1/0065.jpeg
.//canvas1/0066.jpeg
.//canvas1/0067.jpeg
.//canvas1/0068.jpeg
.//canvas1/0069.jpeg
.//canvas1/0070.jpeg
.//canvas1/0071.jpeg
.//canvas1/0072.jpeg
.//canvas1/0073.jpeg
.//canvas1/0074.jpeg
.//canvas1/0075.jpeg
.//canvas1/0076.jpeg
.//canvas1/0077.jpeg
.//canvas1/0078.jpeg
.//canvas1/0079.jpeg
.//canvas1/0080.jpeg
.//canvas1/0081.jpeg
.//canvas1/0082.jpeg
.//canvas1/0083.jpeg
.//canvas1/0084.jpeg
.//canvas1/0085.jpeg
.//canvas1/0086.jpeg
.//canvas1/0087.jpeg
.//canvas1/0088.jpeg
.//canvas1/0089.jpeg
.//canvas1/0090.jpeg
.//canvas1/0091.jpeg
.//canvas1/0092.jpeg
.//canvas1/0093.jpeg
.//canvas1/0094.jpeg
.//canvas1/0095.jpeg
.//canvas1/0096.jpeg
.//canvas1/0097.jpeg
.//canvas1/0098.jpeg
.//canvas1/0099.jpeg
.//canvas12/0100.jpeg
.//canvas12/0101.jpeg
.//canvas12/0102.jpeg  
.//canvas12/0103.jpeg
.//canvas12/0104.jpeg
.//canvas12/0105.jpeg
.//canvas12/0106.jpeg
.//canvas12/0107.jpeg
.//canvas12/0108.jpeg
.//canvas12/0109.jpeg
.//canvas12/0110.jpeg
.//canvas12/0111.jpeg
.//canvas12/0112.jpeg
.//canvas12/0113.jpeg
.//canvas12/0114.jpeg
.//canvas12/0115.jpeg
.//canvas12/0116.jpeg
.//canvas12/0117.jpeg
.//canvas12/0118.jpeg
.//canvas12/0119.jpeg
.//canvas12/0120.jpeg
.//canvas12/0121.jpeg
.//canvas12/0122.jpeg
.//canvas12/0123.jpeg
.//canvas12/0124.jpeg
.//canvas12/0125.jpeg
.//canvas12/0126.jpeg
.//canvas12/0127.jpeg
.//canvas12/0128.jpeg
.//canvas12/0129.jpeg
.//canvas12/0130.jpeg
.//canvas12/0131.jpeg
.//canvas12/0132.jpeg
.//canvas12/0133.jpeg
.//canvas12/0134.jpeg
.//canvas12/0135.jpeg
.//canvas12/0136.jpeg
.//canvas12/0137.jpeg
.//canvas12/0138.jpeg
.//canvas12/0139.jpeg
.//canvas12/0140.jpeg
.//canvas12/0141.jpeg
.//canvas12/0142.jpeg
.//canvas12/0143.jpeg
.//canvas12/0144.jpeg
.//canvas12/0145.jpeg
.//canvas12/0146.jpeg
.//canvas12/0147.jpeg
.//canvas12/0148.jpeg
.//canvas12/0149.jpeg
.//canvas12/0150.jpeg
.//canvas12/0151.jpeg
.//canvas12/0152.jpeg
.//canvas12/0153.jpeg
.//canvas12/0154.jpeg
.//canvas12/0155.jpeg
.//canvas12/0156.jpeg
.//canvas12/0157.jpeg
.//canvas12/0158.jpeg
.//canvas12/0159.jpeg
.//canvas12/0160.jpeg
.//canvas12/0161.jpeg
.//canvas12/0162.jpeg
.//canvas12/0163.jpeg
.//canvas12/0164.jpeg
.//canvas12/0165.jpeg
.//canvas12/0166.jpeg
.//canvas12/0167.jpeg
.//canvas12/0168.jpeg
.//canvas12/0169.jpeg
.//canvas12/0170.jpeg
.//canvas12/0171.jpeg
.//canvas12/0172.jpeg
.//canvas12/0173.jpeg
.//canvas12/0174.jpeg
.//canvas12/0175.jpeg
.//canvas12/0176.jpeg
.//canvas12/0177.jpeg
.//canvas12/0178.jpeg
.//canvas12/0179.jpeg
.//canvas12/0180.jpeg
.//canvas12/0181.jpeg
.//canvas12/0182.jpeg
.//canvas12/0183.jpeg
.//canvas12/0184.jpeg
.//canvas12/0185.jpeg
.//canvas12/0186.jpeg
.//canvas12/0187.jpeg
.//canvas12/0188.jpeg
.//canvas12/0189.jpeg
.//canvas12/0190.jpeg
.//canvas12/0191.jpeg
.//canvas12/0192.jpeg
.//canvas12/0193.jpeg
.//canvas12/0194.jpeg
.//canvas12/0195.jpeg
.//canvas12/0196.jpeg
.//canvas12/0197.jpeg
.//canvas12/0198.jpeg
.//canvas12/0199.jpeg               
 `;
    return data.split("\n")[index];
  }

  const frameCount = 199;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page7`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page7",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
}
canvas();
// ============= page17=====================================================
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page17",
    start: "top top",
    scrub: 1,
    scroller: "#main",
    pin: true,
  },
});
tl3.to("#page17>#center-block", {
  top: "-50%",
});
// ================== canvas 2 ====================================================================
function canvas1(){
  const canvas = document.querySelector("#page19>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
.//canvas2/Vision00001.png
.//canvas2/Vision00002.png
.//canvas2/Vision00003.png
.//canvas2/Vision00004.png
.//canvas2/Vision00005.png
.//canvas2/Vision00006.png
.//canvas2/Vision00007.png
.//canvas2/Vision00008.png
.//canvas2/Vision00009.png
.//canvas2/Vision00010.png
.//canvas2/Vision00011.png
.//canvas2/Vision00012.png
.//canvas2/Vision00013.png
.//canvas2/Vision00014.png
.//canvas2/Vision00015.png
.//canvas2/Vision00016.png
.//canvas2/Vision00017.png
.//canvas2/Vision00018.png
.//canvas2/Vision00019.png
.//canvas2/Vision00020.png
.//canvas2/Vision00021.png
.//canvas2/Vision00022.png
.//canvas2/Vision00023.png
.//canvas2/Vision00024.png
.//canvas2/Vision00025.png
`;
return data.split("\n")[index];
}

const frameCount = 25;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page19`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page19",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `bottom top`,
});
}
canvas1();
var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page21>#troff",{
  opacity:0
})

var tl5 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl5.to("#page22>#snroff",{
  opacity:0
})



gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
})
