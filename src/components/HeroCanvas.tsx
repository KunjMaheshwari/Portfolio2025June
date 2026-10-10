import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const smallViewport = window.matchMedia('(max-width: 767px)').matches;
    if (!mount || reduceMotion || smallViewport) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 6.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(1.55, 5);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xf5f7ff,
      metalness: 0.26,
      roughness: 0.18,
      transmission: 0.35,
      thickness: 0.9,
      transparent: true,
      opacity: 0.54,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
    });
    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.72, 1),
      new THREE.MeshBasicMaterial({ color: 0x6aa4ff, wireframe: true, transparent: true, opacity: 0.18 }),
    );
    group.add(wire);

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({ color: 0x90b8ff, size: 0.016, transparent: true, opacity: 0.68 }),
    );
    scene.add(particles);

    const light = new THREE.DirectionalLight(0xffffff, 2.4);
    light.position.set(4, 5, 6);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x9fbaff, 1.6));

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.004;
      wire.rotation.y -= 0.0025;
      particles.rotation.y += 0.0008;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[72%] opacity-70 dark:opacity-80 md:block" aria-hidden="true" />;
}
