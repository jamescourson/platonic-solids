import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  HemisphereLight
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { browser } from '$app/environment';

const defaultModel = 'dodecahedron';
const modelPath = `src/lib/models/${defaultModel}/scene.gltf`;

const scene = new Scene();
const loader = new GLTFLoader();
if (browser) {
  loader.load(
    modelPath,
    (/** @type {any} */ gltf) => scene.add(gltf.scene),
    undefined,
    (/** @type {any} */ error) => console.log(error)
  );
}

let camera:PerspectiveCamera;

if (browser) {
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
}

const directionalLight = new DirectionalLight(0x9090aa);
directionalLight.position.set(-10, 10, -10).normalize();
scene.add(directionalLight);

const hemisphereLight = new HemisphereLight(0xffffff, 0x444444);
hemisphereLight.position.set(1, 1, 1);
scene.add(hemisphereLight);

let renderer:WebGLRenderer;
let controls:OrbitControls;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
};

const resize = () => {
  if (browser) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
  }
  camera.updateProjectionMatrix();
};

export const createScene = (canvasElement:HTMLCanvasElement) => {
  renderer = new WebGLRenderer({ antialias: true, canvas: canvasElement });
  controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 3;
	resize();
	animate();
};

if (browser) window.addEventListener('resize', resize);
