let myFont;
let speed =0.5;
let Text;

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  myFont = loadFont('arial.ttf')
  textFont(myFont);
  Text = new movingText("Hope terminal set up with networking\nBleach for filler water\nFilters for filler\nTransition section between filler and infeed conveyor\nLevel indicatorfor fill bowl\nPaint transfer tray\nVerify hose connections 'c' and 'd' for push arm\nRotate the discharge 5' conveyor load section\nAttach guide rails\nInstall conveyor side covers\nAlign reject conveyor for lid detect\nLag conveyor to floor\nAdd pencil roller and guide to rejector arm\nAdd end plate on rejector conveyor lid detect\nLangguth FAT testing items and expectation\nBleach flush 2% bleach solution\nGrease Heisler\nDoor #1 faulted\nLangguth labeler photo eye mount\nPaint transfer HMI screen completed\nDoor locks for lid dropper doors\nGuarding lid press\nHigh level indicator clamp\nGrease the grease points\nMotors VFD rewired opposite direction\nValve wiring checked\nE-stop #4 added to code\nLabel reject not firing\nWiring to blocking valve\nNo input for label scan faults\nPrinter ready signal\nSet up security to prevent Orlando network going down in Parma\nReview transition between label rejector and main conveyor\nJump box for networking\nGuest SW networking password\nFiller outfeed photo eye mounted\nPE-30 moved by Hibar\nPurchase 3 bumpers for forklift truck area\nKeyence photo eye mounted\nScanner and photo eye mounted\nEthernet cable for UPC and Keyence\nVerify air hose connections 'c' and 'd' for push arm\nLower wiper blade height on filler\nI/O mapping for focus palletizer\nCIP tray needs to be larger to prevent splashing\nPencil rollers to lid dropper\n70 lbs of weight for calibrating\n Bladder stop going to filler installed\nLabel rejector tested with scanner\nReview FAT result\nRejector design to be reviewed with regard to splashing\nFault codes are not coming into the SCADA\nMove container count to PE_20_1\nAdd parameter to allow site to enter the quantity for start using PE\nAdd parameter to allow site to set speed multiplier\nTest the AUTO-start after discharge backup\nMove second lid detection right after lid press\nAdd third lid detect on good container conveyor\nDocument the red light functionality\nClose container gate when conveyor 52 stops\nMake sure that two pallets are staged on gravity conveyor section\nAdd ability to track number of pallets staged\nPIF controls put in auto after drain mode\nAuto PIF will not do all heads\nDrain mode span and angle\nConfirm load cell wiring\nGrounding to load cells\nGrounding to door switch\nAdd additional PE on conveyor 2\nAdditional PE raised up per Heisler\nRe-enforce pallet tines\nOverride safety switch/e-stop in manual\nE-stop/door open, line could run at reduced speed\nUpdate pictures and SOP for standard work\nFiller does not automatically raise in CIP mode\nAbility to run drain mode with top valve open\nPump bracing improved for increased line speed\nAuto PIF programming IE min speed\nHeisler denester door #14 moved\nGuarding around Heisler lid press\nOrlando site confirm I/O check\nInterlock documentation\nPaint transfer bolts, flanges, water testing\nLock out procedure for line\nPM on e-stops in eAM\nAnsi for air and pipe paint colors\nAdd Plexi glass on the side of robot\nReplace bent shaft on conveyor down from filler\nMove light curtains to prevent tooling crossing\nCommunication set up between lid dropper and PLC\nDoor switch #4/5 interfere with each other\nFloat containers do not have lid\nFloat containers do not have level control\nPrint&Apply testing\nReplace PC on filling line\nSecond scanner for Valspar labels\nAdjust photo eye before lid rejector\nMove photo eye for no label to prevent hang up\nPallet short stop in palletizer\nNylon brushes to clean labeler parts\nBreaker issues with lidder\nHibar installation\n4 inch end cap support\nInstall new drain pan\nAdditional photo eye prior to lid press\nE-stop locations for overhead conveyors", 0, height);
}

function draw() {
  background(0);
  Text.drawText(speed);
}

class movingText{
  constructor(_text, _x, _y){
    this.text = _text;
    this.x = _x;
    this.y = _y;
}

  drawText(move) {
    rotateX(PI/3.8);
    textAlign(CENTER);
    textSize(35);
    fill(255,204,0);
    text(this.text,this.x,this.y)
    this.y += -1*move;
    //print(this.y);
    if (this.y<-5100){
      this.y = height;
    }
  }
}
