import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import * as THREE from 'three/build/three.module.js';
import { ActivatedRoute } from '@angular/router';

import Stats from 'three/examples/jsm/libs/stats.module.js';

import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
import { PcdbuttonrendererComponent } from '../pcdbuttonrenderer/pcdbuttonrenderer.component';

@Component({
  providers : [PcdbuttonrendererComponent],
  selector: 'app-pcddisplay',
  templateUrl: './pcddisplay.component.html',
  styleUrls: ['./pcddisplay.component.css']
})

export class PcddisplayComponent implements OnInit, AfterViewInit {

    @ViewChild('pcd', {read: ElementRef})
    pcd:ElementRef;
	public params: any;
    // private accessS3: string = 'https://dev-pcls.s3.us-east-2.amazonaws.com/dev/pcl/processed/1613952351.826255_down.pcd';
  	constructor(private comp: PcdbuttonrendererComponent, private route: ActivatedRoute, private renderer2: Renderer2) {
		console.log('Route: ' + route);
  		this.params = comp.params;
  	}

  container: any;

pcdrender = fileName => {

    console.log('Filename: ' + fileName);

    let stats;
    let camera, controls, scene, renderer;

			const init = () => {
				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0x00000 );

				camera = new THREE.PerspectiveCamera( 15, 1.5, 15, 1000 );
				camera.position.x = -10;
				camera.position.z = 30;
				camera.up.set( -3, 0, 2);

				scene.add( camera );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				console.log(this.renderer2)
				this.renderer2.appendChild(this.pcd.nativeElement, renderer.domElement);

				const loader = new PCDLoader();
				console.log(fileName);
				
				loader.load('https://dev-pcls.s3.us-east-2.amazonaws.com/dev/pcl/processed/' + fileName , function ( points ) {

					console.log(points);
					points.material.size = 0.15;
					// points.material.color.setHex("0xffffff")
					scene.add( points );
					const center = points.geometry.boundingSphere.center;
					controls.target.set( center.x, center.y, center.z );
					controls.update();

				} 
				// ,(event) => console.log("onProgress") ,  (event) => console.log(event)
				
				);

				const container = this.renderer2.createElement( 'div' );
				this.renderer2.appendChild( this.pcd.nativeElement, container );
				this.renderer2.appendChild(container, renderer.domElement )
				this.renderer2.appendChild(this.pcd.nativeElement, container);

				controls = new TrackballControls( camera, renderer.domElement );

				controls.rotateSpeed = 2.0;
				controls.zoomSpeed = 0.3;
				controls.panSpeed = 0.2;

				controls.staticMoving = true;

				controls.minDistance = 0.5;
				controls.maxDistance = 0.3 * 1000;

				stats = new Stats();
				container.appendChild( stats.dom );

				window.addEventListener( 'resize', onWindowResize );

				window.addEventListener( 'keypress', keyboard );
				

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				controls.handleResize();

			}

			function keyboard( ev ) {

				const points = scene.getObjectByName( fileName );

				// eslint-disable-next-line default-case
				switch ( ev.key || String.fromCharCode( ev.keyCode || ev.charCode ) ) {

					case '+':
						points.material.size *= 1.2;
						points.material.needsUpdate = true;
						break;

					case '-':
						points.material.size /= 1.2;
						points.material.needsUpdate = true;
						break;

					case 'c':
						points.material.color.setHex( Math.random() * 0xffffff );
						points.material.needsUpdate = true;
						break;

				}

			}

			const animate = () => {

				requestAnimationFrame( animate );
				controls.update();
				renderer.render( scene, camera );
				stats.update();

			}
			init();
			animate();

  }
  
ngOnInit(){

}

ngAfterViewInit(): void {
	this.route.queryParams.subscribe(params =>{
		console.log("in display component");
		console.log(params);
		this.pcdrender(params.Name);
	  });
}

}
