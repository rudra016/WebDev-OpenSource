import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const doortexture1 = textureLoader.load('/textures/door/color.jpg');
const doortexture2 = textureLoader.load('/textures/door/alpha.jpg');
const doortexture3 = textureLoader.load('/textures/door/normal.jpg');
const doortexture4 = textureLoader.load('/textures/door/roughness.jpg');
const doortexture5 = textureLoader.load('/textures/door/metalness.jpg');
const doortexture6 = textureLoader.load('/textures/door/height.jpg');
const doortexture7 = textureLoader.load('/textures/door/ambientOcclusion.jpg');
const bricktexture1 = textureLoader.load('/textures/bricks/color.jpg');
const bricktexture2 = textureLoader.load('/textures/bricks/normal.jpg');
const bricktexture3 = textureLoader.load('/textures/bricks/roughness.jpg');
const bricktexture4 = textureLoader.load('/textures/bricks/ambientOcclusion.jpg');
const grasstexture1 = textureLoader.load('/textures/grass/ambientOcclusion.jpg');
const grasstexture2 = textureLoader.load('/textures/grass/color.jpg');
const grasstexture3 = textureLoader.load('/textures/grass/normal.jpg');
const grasstexture4 = textureLoader.load('/textures/grass/roughness.jpg');

grasstexture1.repeat.set(8, 8);
grasstexture2.repeat.set(8, 8);
grasstexture3.repeat.set(8, 8);
grasstexture4.repeat.set(8, 8);

grasstexture1.wrapS = THREE.RepeatWrapping;
grasstexture2.wrapS = THREE.RepeatWrapping;
grasstexture3.wrapS = THREE.RepeatWrapping;
grasstexture4.wrapS = THREE.RepeatWrapping;

grasstexture1.wrapT = THREE.RepeatWrapping;
grasstexture2.wrapT = THREE.RepeatWrapping;
grasstexture4.wrapT = THREE.RepeatWrapping;
grasstexture3.wrapT = THREE.RepeatWrapping;
grasstexture1.wrapT = THREE.RepeatWrapping;





/**
 * House
 */
const House = new THREE.Group();
scene.add(House);
//walls
const walls = new THREE.Mesh(new THREE.BoxBufferGeometry(4, 2.5, 4), new THREE.MeshStandardMaterial({
    color: '#ac8e82',
    map: bricktexture1,
    transparent: true,
    // alphaMap: bricktexture2,
    aoMap: bricktexture4,
    roughnessMap: bricktexture3,
    normalMap: bricktexture2,
    // displacementMap: bricktexture4,
    // displacementScale:0.1,




}),)
walls.geometry.setAttribute(
    'uv2',
    new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
)
walls.position.y = 2.5 / 2;
House.add(walls);
//roof
const roof = new THREE.Mesh(new THREE.ConeBufferGeometry(3.5, 1, 4), new THREE.MeshStandardMaterial({ color: '#b35f45' }),)
roof.position.y = 2.5 + 1 / 2;
roof.rotation.y = Math.PI / 4;
House.add(roof);

//door
const door = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2.8, 100, 100), new THREE.MeshStandardMaterial({
    color: '#b35f45',
    map: doortexture1,
    transparent: true,
    alphaMap: doortexture2,
    aoMap: doortexture7,
    displacementMap: doortexture6,
    displacementScale: 0.1,

    normalMap: doortexture3,
    roughnessMap: doortexture4,
    metalnessMap: doortexture5
    // heightMap: doortexture6,


    //

}))
door.position.z = 2 + 0.001;
door.position.y = 1;
House.add(door);

//bushes
const bushGeometry = new THREE.SphereBufferGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({
    color: '#89c854'
})
const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.position.x = 2.5;
bush1.position.z = 1;
bush1.position.y = 0.2;
bush1.scale.set(0.5, 0.5, 0.5);
House.add(bush1);
const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.position.x = -2.5;
bush2.position.z = 2;
bush2.position.y = 0.2;
bush2.scale.set(0.5, 0.5, 0.5);
House.add(bush2);
const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.position.x = 1.5;
bush3.position.z = 5;
bush3.scale.set(0.25, 0.25, 0.25);
bush3.position.y = 0.2;
House.add(bush3);
const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.position.x = 0.5;
bush4.position.z = 5;
bush4.position.y = 0.1;
bush3.scale.set(0.25, 0.25, 0.25);
bush1.castShadow = true;
bush2.castShadow = true;
bush3.castShadow = true;
bush4.castShadow = true;

House.add(bush4);
/**
 * graves
 * 
 */
const graves = new THREE.Group();
scene.add(graves);
const graveGeometry = new THREE.BoxBufferGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({ color: '#b2b6b1' });
for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 6 + Math.random() * 3;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    const grave = new THREE.Mesh(graveGeometry, graveMaterial);
    grave.position.x = x;
    grave.position.z = z;
    grave.position.y = 0.3;
    grave.rotation.y = (Math.random() - 0.5) * 0.4;
    grave.rotation.z = (Math.random() - 0.5) * 0.4;
    grave.castShadow = true;
    graves.add(grave);


}

// Temporary sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshStandardMaterial({ roughness: 0.7 })
)
sphere.position.y = 1
// scene.add(sphere)

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({
        map: grasstexture2,
        roughnessMap: grasstexture4,
        normalMap: grasstexture3,
        aoMap: grasstexture1
    })
)
floor.geometry.setAttribute(
    'uv2',
    new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)
// ambientLight.castShadow = true

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
moonLight.castShadow = true
scene.add(moonLight)
//door light
const doorLight = new THREE.PointLight('#ff7d46', 1, 7);
doorLight.position.set(0, 2.2, 2.7);
House.add(doorLight);
//fog
const fog = new THREE.Fog(0x262837, 1, 15)

scene.fog = fog;

walls.castShadow = true
/**
 * Ghosting
 * 
 */
const ghost1 = new THREE.PointLight('#ff00ff', 2, 3);
scene.add(ghost1);
ghost1.castShadow = true;
const ghost2 = new THREE.PointLight('#00ffff', 2, 3);
ghost2.castShadow = true;
scene.add(ghost2);
const ghost3 = new THREE.PointLight('#00ff00', 2, 3);
ghost3.castShadow = true;
scene.add(ghost3);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#262837')
renderer.shadowMap.enabled = true;

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    /*
    ghoseing
     */
    const ghost1angle = elapsedTime * 0.5;
    ghost1.position.x = Math.cos(ghost1angle) * 4;
    ghost1.position.z = Math.sin(ghost1angle) * 4;
    ghost1.position.y = Math.sin(elapsedTime * 3)
    const ghost2angle = -elapsedTime * 0.32;
    ghost2.position.x = Math.cos(ghost2angle) * 5;
    ghost2.position.z = Math.sin(ghost2angle) * 5;
    ghost2.position.y = Math.sin(elapsedTime * 4)
    const ghost3angle = elapsedTime     ;
    ghost3.position.x = Math.cos(ghost3angle) * 7;
    ghost3.position.z = Math.sin(ghost3angle) * 7;
    ghost3.position.y = Math.sin(elapsedTime * 3)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()