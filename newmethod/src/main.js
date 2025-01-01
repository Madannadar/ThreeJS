import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('canvas');

//1. create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#fofofo')

//2. camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5;

//3. object
const geometry = new THREE.DodecahedronGeometry();
const meterial = new THREE.MeshLambertMaterial({color: "#468585", emissive: "#468585"});
const Dodecahedron = new THREE.Mesh(geometry, meterial);

const BoxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const Boxmeterial = new THREE.MeshLambertMaterial({color: "#B4B4B3", emissive: "#B4B4B3"});
const box = new THREE.Mesh(BoxGeometry, Boxmeterial)
box.position.y = -1.5;

scene.add(Dodecahedron);
scene.add(box)

//4. light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

//5. renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)


//6. add orbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true // smother
controls.DampingFactor = 0.05
controls.enableZoom = true;
controls.enablePan = true;

//7. add animations
function animate(){
  requestAnimationFrame(animate);

  Dodecahedron.rotation.x += 0.001;
  Dodecahedron.rotation.y += 0.001;
  box.rotation.y += 0.001;
  controls.update();
  renderer.render(scene, camera);
}

//8. handel window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight)
})
animate()