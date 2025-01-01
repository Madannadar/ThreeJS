// three js cdn method outdated method
import * as THREE from 'three';

//1. create the scene
const scene1 = new THREE.Scene();
scene1.background = new THREE.Color("#F0f0f0")

//2. add the camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//3. create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#468585", emissive: "#468585"})
const cube = new THREE.Mesh(geometry, material);
scene1.add(cube);

//4. add lighiting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1)
scene1.add(light)

//5. set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//6. animate the scene
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene1, camera);
}
animate()