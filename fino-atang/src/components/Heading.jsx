import { For, onMount } from "solid-js";
import { gsap } from "gsap/dist/gsap";
import Styles from "./Heading.module.css";

export default function heading(props){

    let container;

    onMount(()=>{
        gsap.set(".title_container", {   
            transformPerspective: 800,
            transformStyle: 'preserve-3d',
        });

        let flipper = gsap.to( ".title_sections" , {
            rotateY: 180,
            rotateZ: 180,
            stagger: 0.1,
        });

        container.addEventListener('pointerenter', ()=>{
            flipper.play();
        });

        title_container.addEventListener('pointerleave', ()=>{
            flipper.reverse();
        });
    })

    return (
        <div class="title_container" ref={container}>
            <For each={props.textOne}>{(section, i) => <div class="title_sections" id="front-side">{section}</div>}</For>
            <For each={props.textTwo}>{(section, i) => <div class="title_sections" id="back-side" >{section}</div>}</For>
        </div>
    );
}