import veggies from "../assets/veggies.jpg";
import veggies2 from "../assets/veggies2.jpg";
import fastfood from "../assets/fast_food.jpeg";
import bagicon from "../assets/bag.png";
import signupicon from "../assets/standing.png";
import "../Styles/home.css";

let sampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper tincidunt augue, eu rutrum nunc venenatis ut. Donec vel lacinia mi. Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum Praesent sodales tincidunt leo consequat aliquam.Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum.";

function Home() {
  return (
    <main>
      <div id="fast-food-img">
        {/* <div id="fast-food-text">Meals 4 NYC</div> */}
      </div>
      <div id="main-content">
        <div id="sign-up">
          <img src={signupicon} alt="illustration of girl on laptop" />
        </div>
        <div id="faq">
          <img src={bagicon} alt="illustration of green recycle bag" />
        </div>
        <div id="veggies-img">
          <img src={veggies} alt="vegetables in a basket" />
        </div>
        <div id="main-content-text">{sampleText}</div>
        <div id="veggies2-img">
          <img src={veggies2} alt="vegetables in a basket" />
        </div>
        <div id="main-content-text2">{sampleText}</div>
      </div>
    </main>
  );
}

export default Home;
