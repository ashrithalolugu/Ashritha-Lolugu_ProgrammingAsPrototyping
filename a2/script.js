let fontRadio;
let slider1, slider2, slider3, slider4;
let textInput1, textInput2;
let dropdown;
let selectedImage;
let textPositions = {};

function preload() {
  image1 = loadImage('assets/two choices meme.jpg');
  image2 = loadImage('assets/drake meme.jpg');
  image3 = loadImage('assets/traumatised meme.jpg');
}

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('column-two'); //sets <div id="column-two"></div> as parent container of the canvas
    
    //Example of an input element (button) --- Replace this with your own inputs/controls
    // Assign all your input elements the parent - 'column-one'

    let btn1 = createButton('Click Me'); //creates a button element called btn1

    btn1.parent('column-one'); //sets div id="column-two"></div> as the parent container of the element
    btn1.class('buttons'); //assigns the class 'buttons' to the element
    btn1.id('button1'); //assigns the id 'button1' to element

    dropdown=createSelect();
    dropdown.position(10, height +10);
    dropdown.option('Choose Image');
    dropdown.option('image1');
    dropdown.option('image2');
    dropdown.option('image3');
    dropdown.changed(changeImage);
    
    textInput1=createInput(' ');
    textInput1.position(10, height + 40);
    
    
    textInput2=createInput(' ');
    textInput2.position(200, height +40);
    
    
    radio=createRadio();
    radio.option('helvetica');
    radio.option('calibri');
    radio.option('times new roman');
    radio.style('color', '#2FFFA8');
    radio.position(10, height + 90)
    
    slider1=createSlider(0,100, 5);
    slider1.position(10, height +120);
    slider2=createSlider(0, 100, 5);
    slider2.position(150, height +120);
    slider3=createSlider(0,100,5);
    slider3.position(290, height +120);
    
    slider4=createSlider(0,100,5);
    slider4.position(10, height +150);
    
      let btn = createButton('Save Image');
    btn.mousePressed(saveimg);
    btn.position(400, height +170)
    
      // Define fixed text positions for each image
    textPositions.image1 = { x: 124, y: 132 };
    textPositions.image2 = { x: 200, y: 300 };
    textPositions.image3 = { x: 50, y: 50 };
    
    function saveimg(){
      saveCanvas(cnv, 'mycanvas', 'jpeg')
    }
  }
  
  function draw() {
    background('white');
    textFont('roboto');
    textAlign(CENTER);
    
    textSize(30);
    text('Create your own meme!', width / 2, height / 2);
    
    textSize(17);
    text('start by toggling the functions below', width/2, height/1.7);
    
    if (selectedImage) {
      image(selectedImage, width / 2 - selectedImage.width / 2, height /2 - selectedImage.height / 2);
    }
    
    let text1 = textInput1.value();
    let text2 = textInput2.value();
   
    let position = textPositions[selectedImage] || { x: 0, y: 0 };
    
    textSize(20);
    fill(0)
    text(text1, position.x, position.y + 70);
    text(text2, position.x, position.y + 40);
    
    textSize(10);
    text('x: ' +mouseX, 10, 10);
    text('y: ' +mouseY, 10, 20);
  }

  function changeImage() {
    let selectedOption = dropdown.value();
    
    let text1 = textInput1.value();
    let text2 = textInput2.value();
    
    if (selectedOption === 'image1') {
      selectedImage = image1;
    } else if (selectedOption === 'image2') {
      selectedImage = image2;
    } else if (selectedOption === 'image3') {
      selectedImage = image3;
    } else {
      selectedImage = null; 
    }
    
  }
  
  
  