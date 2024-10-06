import { For, onMount } from "solid-js";
import { gsap } from "gsap/dist/gsap";
import Card from "./FlippableCard";
import "./heading.css";

export default function heading(){

    let container;
    let frontText = "creatives";
    let backText = "freelance";

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
    });

    return (
        <div class="title_container" ref={container}>
            <For each={frontText}>{
            (letter, i)=>{
                <Card frontLetter={letter} backLetter={backText[i]}/>
            }
            }</For>
        </div>
    );
}