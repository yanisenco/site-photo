import { Application } from '@splinetool/runtime';
import * as THREE from 'three';

const Homepage = () => {

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
	.load('https://prod.spline.design/JwCvJv2MI2TFb1Nv/scene.splinecode')
	.then(() => {
		spline.setZoom(3);
	});

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Ajoutez un cube à la scène
// scene.add(app);

// camera.position.z = 5;

// let canMove = false;

  return (
   <></>
  );
}

export default Homepage;