import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";

const width = 400
const height = 300

//basics

const scene = new THREE.Scene()
const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 50000, );
scene.add( camera );
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#mod"),
    antialias: true,
    alpha: true
});

const loader = new GLTFLoader()
const controls = new OrbitControls( camera, renderer.domElement );

renderer.setClearColor(0xFFFFFF, 0)

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height)

camera.position.x = 40
camera.position.y = 20
camera.position.z = -40
camera.zoom = 125
camera.updateProjectionMatrix();

//model

var mixer;
var mesh;

loader.load("../src/assets/naps/scene.gltf", function (gltf) {

    mixer = new THREE.AnimationMixer(gltf.scene)

    mesh = gltf.scene
    mesh.position.y = -1
    mesh.rotation.y = Math.PI * 0.5

    scene.add(mesh)
})

//light

const light = new THREE.AmbientLight(0xFFFFFF, 1)
light.position.y = 10
scene.add(light)

controls.autoRotate = true;
controls.autoRotateSpeed = 0.5

//animate

var clock = new THREE.Clock()

function animate() {
    requestAnimationFrame(animate)

    var delta =  clock.getDelta() * 0.3

    if(mixer) mixer.update(delta)

    controls.update()

    
    
    renderer.render(scene, camera)
}

animate()

