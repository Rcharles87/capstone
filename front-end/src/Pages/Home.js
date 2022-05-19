import veggies from "../assets/veggies.jpg";
import veggies2 from "../assets/veggies2.jpg";
import fastfood from "../assets/fast_food.jpeg";
import greenbag from "../assets/bag.png";
import standing from "../assets/standing.png";
import "../Styles/home.css";

let sampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper tincidunt augue, eu rutrum nunc venenatis ut. Donec vel lacinia mi. Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum. In sollicitudin arcu et felis ornare, eu ullamcorper diam rutrum. Morbi sit amet ligula urna. Nunc id varius neque. Praesent sodales tincidunt leo consequat aliquam.Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum.";

function Home() {
  return (
    <div className="home">
      <img src={fastfood} alt="fastfood" id="fastfood" />

      <div className="links-container">
          <div className="standing-container">
          <img src={standing} alt="person on computer" id="standing-img" />
          <p>Sign Up</p>
          </div>
          <div className="faq-container">
          <img src={greenbag} alt="recycle bag" id="bag-img" />
          <h6>FAQ</h6>
          </div>
      </div>

      <img src={veggies} alt="vegetables" id="img1" />

      <p>{sampleText}</p>

      <img src={veggies2} alt="vegetables" id="img2" />
    </div>
  );
}

export default Home;
