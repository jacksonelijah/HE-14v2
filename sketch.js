let wordArray = ["Apple", "Blaze", "Crisp", "Dream", "Event", "Flair", "Glaze", "Haste", "Ideal", "Jolly", "Kneel", "Latch", "Magic", "Novel", "Oasis", "Pause", "Quest", "Rival", "Style", "Trust", "Unity", "Valor", "Witty", "Yield", "Zephyr", "Angst", "Brick", "Craft", "Dwell", "Eager", "Folly", "Gloat", "Humor", "Ivory", "Knack", "Lurid", "Mirth", "Niche", "Orbit", "Pique", "Quiet", "Roast", "Savor", "Tweak", "Usher", "Vault", "Whirl", "Yearn", "Zesty", "Chime", "Grasp", "Fable", "Quirk", "Slink", "Thrive", "Ample", "Brisk", "Clasp", "Deity", "Forge", "Hover", "Inlet", "Joint", "Knead", "Lodge", "Maple", "Nudge", "Opium", "Prawn", "Rinse", "Smirk", "Tonic", "Usurp", "Woven", "Yanky", "Zonal", "Blush", "Crave", "Drift", "Exile", "Frost", "Grief", "Jelly", "Knoll", "Lemon", "Nifty", "Ozone", "Plume", "Quota", "Rusty", "Sworn", "Tinge", "Unzip", "Vivid", "Whisk", "Xylol", "Qualm"];

let noteImageArray = ['noteImages/a.png']; // Add more image paths as needed
let randomWord = "";
let randomImage;

function preload() {
  // Preload images
  randomImage = loadImage(noteImageArray[0]); // Default image
}

function setup() {
  createCanvas(400, 400);

  // Create button and set its position
  let button = createButton('Generate Random Word');
  button.position(10, 420);
  button.mousePressed(generateRandomWordAndImage);
}

function draw() {
  background(220);

  // Display the image
  image(randomImage, 150, 100, 100, 100); // Position and size the image

  // Display the random word
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(0);
  text(randomWord, width / 2, 250); // Position below the image
}

function generateRandomWordAndImage() {
  // Generate a random word and image
  randomWord = random(wordArray);
  let randomImagePath = random(noteImageArray);
  randomImage = loadImage(randomImagePath); // Load the random image
}
