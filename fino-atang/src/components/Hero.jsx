import { onMount } from "solid-js";
import { gsap } from "gsap/dist/gsap";

export default function headi(props){

    let container;

    
    onMount(()=>{


        //TODO: WHAT THE F IS gsap.context??




        //TODO: Set the transform styles on parent container
        gsap.set(".title_container", {   
            transformPerspective: 800,
            transformStyle: 'preserve-3d',
        });

        // Define gsap tween here so that we can control it from events
        console.log(gsap)
        container.addEventListener('pointerenter', (event)=>{
            /**
             * flip text divs using gsap method
             * dont forget to stagger them
             * dont forget to make equal divs for both text sides of the
             */
        });

        title_container.addEventListener('pointerleave', (e)=>{
            console.log(e);
        });
    })

    return (
        <div class="title_container" ref={container}>
            <h1 class='title' style='font-size: 4rem;' >Hello</h1>
        </div>
    );
}