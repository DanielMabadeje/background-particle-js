var canvasDiv = document.getElementById('container');
var options = {
  particleColor: '#fff',
  background: 'https://webdevtrick.com/wp-content/uploads/coding.jpg',
  interactive: true,
  speed: 'high',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);