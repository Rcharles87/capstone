import veggies from "../assets/veggies.jpg"
import veggies2 from "../assets/veggies2.jpg"
import "../Styles/home.css"

let sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper tincidunt augue, eu rutrum nunc venenatis ut. Donec vel lacinia mi. Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum. In sollicitudin arcu et felis ornare, eu ullamcorper diam rutrum. Morbi sit amet ligula urna. Nunc id varius neque. Quisque ultricies dapibus ante id pharetra. Aliquam sit amet odio malesuada, dapibus lorem quis, imperdiet orci. Donec venenatis lacus et mi facilisis volutpat et in ligula. Nunc nulla diam, semper in justo ut, rhoncus ullamcorper massa. Cras nisl eros, accumsan vitae elementum id, auctor sed velit. Nulla venenatis consectetur lorem quis malesuada. Aenean mollis tellus sit amet luctus bibendum. Praesent sodales tincidunt leo consequat aliquam.Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum."

function Home() {
  return (
    <div className="home">
        <div>
          <img src={veggies} id="img1"/>
        </div>
        <p>
            {sampleText}
        </p>
       
        <img src={veggies2} id="img2"/>
        
    </div>
  )
}

export default Home