import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const activateParallaxStyles = makeStyles((theme: Theme) =>
  createStyles({
    parallax_img: {
      width: "100vmax",
      z_index: -1,
      position: 'absolute',
      top: 0,
      left: "50%",
      transform: 'translate(-50%,0)',
      pointerEvents: 'none'
    }
  })
);

export function parallaxImg(img: HTMLDivElement | null | HTMLSourceElement) {
  if (img !== null) {
    let imgParent: HTMLDivElement | null = img.parentElement as HTMLDivElement;
    if (imgParent !== null) {
      let speed = 2;
      let imgY = imgParent.offsetTop;  //how far is the block from the top of the viewport? 
      let winY = window.scrollY * -1   // get the scroll point from the top of the viewport
      let winH = window.innerHeight;   // current height of the window
      let parentH = imgParent.offsetHeight
      // The next pixel to show on screen      
      var winBottom = winY + winH;
      // If block is shown on screen
      if (winBottom > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = ((winBottom - imgY) * speed);
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        img.style.top = imgPercent + '%';
        img.style.transform = 'translate(-50%, -' + imgPercent + '%)'
      }
    }
  }
}