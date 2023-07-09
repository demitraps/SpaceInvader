const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
  constructor() {
    this.velocity = {
      x: 0,
      y: 0,
    };

    const image = new Image();
    image.src = "./media/spaceship.png";
    image.onload = () => {
      const SCALE = 0.15;
      this.image = image;
      this.width = image.width * SCALE;
      this.height = image.height * SCALE;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 15,
      };
    };
  }

  draw() {
    // c.fillStyle = "red";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    if (this.image)
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

const player = new Player();
player.draw();

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.draw();
}

animate();
