import "./heading.css"

export default function Card(props){
    return (
        <div class="title_sections" >
            <div id="flippable-card" class="card_front" >{props.frontLetter}</div>
            <div id="flippable-card" class="card_back" >{props.backLetter}</div>
        </div>
    )
}