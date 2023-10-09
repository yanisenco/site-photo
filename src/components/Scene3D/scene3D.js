import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import modelScene3d from '../assets/3d/accueil_portfolio_photographie.gltf';

const Homepage = () => {
	const sceneContainerRef = useRef(null);

	useEffect(() => {
		console.log(sceneContainerRef)
		// Accédez à l'élément DOM une fois que le composant est monté
		const container = sceneContainerRef.current;

		if (container) {
			// Créez votre scène Three.js ici et attachez le moteur de rendu au container
			// Vous pouvez également définir la taille de la scène ici en fonction de la taille du container
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
			const renderer = new THREE.WebGLRenderer();
			 renderer.setSize(container.clientWidth, container.clientHeight);

			container.appendChild(renderer.domElement);

			// Créez un cube blanc
			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
			const cube = new THREE.Mesh(geometry, material);

			// Ajoutez le cube à la scène
			scene.add(cube);

			// Mettez en place la boucle d'animation
			const animate = () => {
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
		
				renderer.render(scene, camera);
				requestAnimationFrame(animate);
			};

			animate(); // Démarrez la boucle d'animation
		}

	}, [sceneContainerRef]);

  return (
    <div ref={sceneContainerRef} style={{ width: '800px', height: '600px', backgroundColor: 'blue'}}></div>
  );
}

export default Homepage;