---
title: ThreeJS入门
tags: 
  - WebGL
categories: 
  - FrontEnd
date: 2023-06-16 20:20:03
summary: ThreeJS通用模板
description: ThreeJS通用模板
---



## ThreeJS入门学习



## 概念

## 基础知识

场景：

```js
// 1. 创建场景
const scene = new THREE.Scene();
```

相机：

```js
// 1. 创建场景
const scene = new THREE.Scene();

// 2. 创建相机
// const camera = new THREE.Camera()
// PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
// fov — 摄像机视锥体垂直视野角度
// aspect — 摄像机视锥体长宽比
// near — 摄像机视锥体近端面
// far — 摄像机视锥体远端面
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // 透视相机
// 添加相机到场景中,否则不会显示
scene.add(camera);
```

物体|材质|纹理：

```js
// 导入纹理
const textureLoader = new THREE.TextureLoader();
const doorColorTexture = textureLoader.load('./textures/door/color.jpg');

// 添加物体
const cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
// 材质
const basicMaterial = new THREE.MeshBasicMaterial({
  color: '#ffff00'
});
// 创建几何体 点线面
const cube = new THREE.Mesh(cubeGeometry, basicMaterial);
// 将物体添加到场景中，否则不会显示
scene.add(cube);
```

渲染器：

```js
// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
// console.log(renderer);
// 将webgl渲染的canvas内容选择到body上
document.body.appendChild(renderer.domElement);

function render() {
  controls.update()
  // 相机旋转
  renderer.render(scene, camera);
  // 渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render);
  // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
  // 参数为需要触发的函数
};
render();
```



辅助工具：GUI（第三方）、坐标轴辅助器

dat.gui

```js
// 导入dat.gui
import * as dat from "dat.gui";

// 创建对象
const gui = new dat.GUI()

// 添加属性
gui
  .add(directionalLight.shadow.camera, "near")
  .min(0)
  .max(10)
  .step(0.1)
  .onChange(() => {
    // 请注意，在大多数属性发生改变之后，你将需要调用.updateProjectionMatrix来使得这些改变生效。
    directionalLight.shadow.camera.updateProjectionMatrix();
  })
```



## 灯光阴影

需满足以下条件：

```js
// 目标：灯光与阴影
// 灯光阴影
// 1、材质要满足能够对光照有反应
// 2、设置渲染器开启阴影的计算 renderer.shadowMap.enabled = true;
// 3、设置光照投射阴影 directionalLight.castShadow = true;
// 4、设置物体投射阴影 sphere.castShadow = true;
// 5、设置物体接收阴影 plane.receiveShadow = true;
```



## 粒子效果

### 将粒子绑定在普通几何体上

```js
// 绑定的几何体
const sphereGeometry = new THREE.SphereBufferGeometry(3, 30, 30);
// 设置点材质的大小
const pointsMaterial = new THREE.PointsMaterial()
pointsMaterial.size = 0.05;
pointsMaterial.color.set(0xfff000);
// pointsMaterial.sizeAttenuation = false; // 是否因相机的距离而衰减

// 载入纹理
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("./textures/particles/2.png");
// 设置点材质纹理
pointsMaterial.map = texture; // 使用来自Texture的数据设置点的颜色。可以选择包括一个alpha通道，通常与 .transparent或.alphaTest。
pointsMaterial.alphaMap = texture; // alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null。
pointsMaterial.transparent = true; // 定义此材质是否透明。这对渲染有影响，因为透明对象需要特殊处理，并在非透明对象之后渲染。设置为true时，通过设置材质的opacity属性来控制材质透明的程度。默认值为false。
pointsMaterial.depthWrite = false; // 渲染此材质是否对深度缓冲区有任何影响。默认为true。
pointsMaterial.blending = THREE.AdditiveBlending; // 在使用此材质显示对象时要使用何种混合。必须将其设置为CustomBlending才能使用自定义blendSrc, blendDst 或者 [page:Constant blendEquation]。 混合模式所有可能的取值请参阅constants。默认值为NormalBlending。

// 设置点粒子绑定的几何体和材质
const points = new THREE.Points(sphereGeometry,pointsMaterial)
// 将粒子添加到场景
scene.add(points);
```



### 将粒子绑定在BufferGeometry上

`BufferAttribute( array : TypedArray, itemSize : Integer, normalized : Boolean )`

array -- 必须是 [TypedArray](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray). 类型，用于实例化缓存。
该队列应该包含：`itemSize * numVertices`个元素，numVertices 是 [BufferGeometry](https://threejs.org/docs/index.html#api/zh/core/BufferGeometry)中的顶点数目

itemSize -- 队列中与顶点相关的数据值的大小。举例，如果 attribute 存储的是三元组（例如顶点空间坐标、法向量或颜色值）则itemSize的值应该是3。

normalized -- (可选) 指明缓存中的数据如何与GLSL代码中的数据对应。例如，如果array是 UInt16Array类型，且normalized的值是 true，则队列中的值将会从 0 - +65535 映射为 GLSL 中的 0.0f - +1.0f。 如果array是 Int16Array (有符号)，则值将会从 -32768 - +32767 映射为 -1.0f - +1.0f。若 normalized 的值为 false，则数据映射不会归一化，而会直接映射为 float 值，例如，32767 将会映射为 32767.0f.

```js
// 是面片、线或点几何体的有效表述。包括顶点位置，面片索引、法相量、颜色值、UV 坐标和自定义缓存属性值。使用 BufferGeometry 可以有效减少向 GPU 传输上述数据所需的开销。
// 读取或编辑 BufferGeometry 中的数据，见 BufferAttribute 文档。
const particlesGeometry = new THREE.BufferGeometry();
// 粒子数量
const count = 5000;

// Float32Array 类型数组代表的是平台字节顺序为 32 位的浮点数型数组 (对应于 C 浮点数据类型) 。如果需要控制字节顺序，使用 DataView 替代。其内容初始化为 0。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。

// 设置缓存区数组
const positions = new Float32Array(count * 3);
// 设置顶点颜色
const colors = new Float32Array(count * 3);
// 设置顶点
for (let i = 0; i < count * 3; i++) {
    // x,y,z坐标随机
  positions[i] = (Math.random() - 0.5) * 100 - 5;
    // 颜色随机
  colors[i] = Math.random();
};

// setAttribute：为当前几何体设置一个 attribute 属性。在类的内部，有一个存储 .attributes 的 hashmap， 通过该 hashmap，遍历 attributes 的速度会更快。而使用该方法，可以向 hashmap 内部增加 attribute。 所以，你需要使用该方法来添加 attributes。
// 这个类用于存储与BufferGeometry相关联的 attribute（例如顶点位置向量，面片索引，法向量，颜色值，UV坐标以及任何自定义 attribute ）。 利用 BufferAttribute，可以更高效的向GPU传递数据。详情和例子见该页。

// 在 BufferAttribute 中，数据被存储为任意长度的矢量（通过itemSize进行定义），下列函数如无特别说明， 函数参数中的index会自动乘以矢量长度进行计算。 当想要处理类似向量的数据时， 可以使用在Vector2，Vector3， Vector4以及Color这些类中的.fromBufferAttribute( attribute, index ) 方法来更为便捷地处理。
particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);
particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
// 设置点材质
const pointsMaterial = new THREE.PointsMaterial();
pointsMaterial.size = 0.5;
// pointsMaterial.color.set(0xfff000);
// 相机深度而衰减
pointsMaterial.sizeAttenuation = true;

// 载入纹理
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("./textures/particles/1.png");
// 设置点材质纹理
pointsMaterial.map = texture;
pointsMaterial.alphaMap = texture;
pointsMaterial.transparent = true;
pointsMaterial.depthWrite = false;
pointsMaterial.blending = THREE.AdditiveBlending;
// 设置启动顶点颜色
pointsMaterial.vertexColors = true;
// console.log(THREE.VertexColors);

const points = new THREE.Points(particlesGeometry, pointsMaterial)
scene.add(points);
```



## 光线投射Raycaster

```js
const cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  wireframe: true,
});
const redMaterial = new THREE.MeshBasicMaterial({
  color: "#ff0000",
});

// 1000立方体
let cubeArr = [];
for (let i = -5; i < 5; i++) {
  for (let j = -5; j < 5; j++) {
    for (let z = -5; z < 5; z++) {
      const cube = new THREE.Mesh(cubeGeometry, material);
      cube.position.set(i, j, z);
      scene.add(cube);
      cubeArr.push(cube);
    }
  }
}

// 创建投射光线对象
const raycaster = new THREE.Raycaster();

// 鼠标的位置对象
const mouse = new THREE.Vector2();

// 监听鼠标的位置
// window.addEventListener("mousemove", (event) => {
//   //   console.log(event);
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);
//   raycaster.setFromCamera(mouse, camera);
//   let result = raycaster.intersectObjects(cubeArr);
//   //   console.log(result);
//   //   result[0].object.material = redMaterial;
//   result.forEach((item) => {
//     item.object.material = redMaterial;
//   });
// });

// 监听鼠标的位置
window.addEventListener("click", (event) => {
  //   console.log(event);
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);
  raycaster.setFromCamera(mouse, camera);
  let result = raycaster.intersectObjects(cubeArr);
  //   console.log(result);
  //   result[0].object.material = redMaterial;
  result.forEach((item) => {
    item.object.material = redMaterial;
  });
});
```

