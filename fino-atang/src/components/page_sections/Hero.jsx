import { onMount } from "solid-js";

export default function Hero() {
    let mouse_X = 0;
    let mouse_Y = 0;
    onMount(()=>{
        window.addEventListener('mousemove', (e)=>{
            mouse_X = e.clientX;
            mouse_Y = e.clientY;
        })
    })
    return (
        <main class="hero_container" id="hero" >
            <h1>Hero</h1>
        </main>
    );
}