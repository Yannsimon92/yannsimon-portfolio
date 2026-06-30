/**
 * Hero Background Animation - Three.js
 * Lightweight particle system with geometric shapes
 * Optimized for performance
 */

// Check if Three.js is loaded
if (typeof THREE !== 'undefined') {
    
    // Configuration
    const config = {
        particleCount: 50,
        particleSize: 0.03,
        particleColor: 0x2563eb,
        geometryCount: 3,
        rotationSpeed: 0.1,
        cameraDistance: 6,
        enableParallax: true
    };
    
    // Get canvas element
    const canvas = document.getElementById('hero-canvas');
    
    if (canvas) {
        // Scene setup
        const scene = new THREE.Scene();
        
        // Camera
        const camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.z = config.cameraDistance;
        
        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const pointLight1 = new THREE.PointLight(0x2563eb, 1, 100);
        pointLight1.position.set(10, 10, 10);
        scene.add(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0xdc2626, 0.5, 100);
        pointLight2.position.set(-10, -10, -10);
        scene.add(pointLight2);
        
        // Materials
        const material = new THREE.MeshPhongMaterial({
            color: 0x0a0f1e,
            shininess: 100,
            transparent: true,
            opacity: 0.8
        });
        
        // Create geometric shapes
        const geometries = [];
        
        // Torus
        const torus = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.4, 16, 32),
            material
        );
        torus.position.set(-2, 1, 0);
        geometries.push(torus);
        scene.add(torus);
        
        // Icosahedron
        const icosahedron = new THREE.Mesh(
            new THREE.IcosahedronGeometry(1, 0),
            material
        );
        icosahedron.position.set(2, -1, -2);
        geometries.push(icosahedron);
        scene.add(icosahedron);
        
        // Octahedron
        const octahedron = new THREE.Mesh(
            new THREE.OctahedronGeometry(0.8, 0),
            material
        );
        octahedron.position.set(0, -2, -1);
        geometries.push(octahedron);
        scene.add(octahedron);
        
        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(config.particleCount * 3);
        
        for (let i = 0; i < config.particleCount; i++) {
            particlePositions[i * 3] = (Math.random() - 0.5) * 10;
            particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        
        particlesGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(particlePositions, 3)
        );
        
        const particlesMaterial = new THREE.PointsMaterial({
            color: config.particleColor,
            size: config.particleSize,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.6
        });
        
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        
        // Mouse movement for parallax
        const mouse = { x: 0, y: 0 };
        const targetMouse = { x: 0, y: 0 };
        
        if (config.enableParallax) {
            window.addEventListener('mousemove', (event) => {
                targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            });
        }
        
        // Handle window resize
        window.addEventListener('resize', () => {
            // Update camera
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            
            // Update renderer
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
        
        // Animation loop
        const clock = new THREE.Clock();
        
        function animate() {
            requestAnimationFrame(animate);
            
            const elapsedTime = clock.getElapsedTime();
            
            // Rotate geometries
            geometries.forEach((geometry, index) => {
                geometry.rotation.x = elapsedTime * config.rotationSpeed * (index + 1) * 0.5;
                geometry.rotation.y = elapsedTime * config.rotationSpeed * (index + 1) * 0.3;
            });
            
            // Rotate particles slowly
            particles.rotation.y = elapsedTime * 0.05;
            
            // Smooth parallax effect
            if (config.enableParallax) {
                mouse.x += (targetMouse.x - mouse.x) * 0.05;
                mouse.y += (targetMouse.y - mouse.y) * 0.05;
                
                camera.position.x = mouse.x * 0.5;
                camera.position.y = mouse.y * 0.5;
            }
            
            // Render
            renderer.render(scene, camera);
        }
        
        // Start animation
        animate();
        
        // Pause animation when tab is not visible (performance)
        let animationPaused = false;
        
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                animationPaused = true;
                clock.stop();
            } else {
                animationPaused = false;
                clock.start();
            }
        });
    }
} else {
    console.warn('Three.js not loaded. Hero animation disabled.');
}