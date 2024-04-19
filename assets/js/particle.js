window.onload = function () {
  // Calculate the connection radius based on the screen width
  var screenWidth = window.innerWidth;
  var connectionRadius = screenWidth * 0.01; // Adjust the multiplier as needed

  Particles.init({
    selector: ".background",
    color: "#99cd32",
    connectParticles: true,
    sizeVariations: 5,
    maxParticles: 150,
    connectParticles: true,
    connectParticles: connectionRadius
  });
};
