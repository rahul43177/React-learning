import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";
import CortanaImage from "./images/cortana.png";

console.log(AlexaImage);
console.log(SiriImage);
console.log(CortanaImage);
function App() {
  return (
    <div>
        <section className="hero is-link">
            <div className="hero-body">
                <p className="title">
                    Personal Assistance 
                </p>
            </div>
        </section>


        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard
                            title="Alexa"
                            handle="@alexa"
                            image={AlexaImage}
                            description="Alexa was created by Amazon and it helps you buy things"
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard
                            title="Siri"
                            handle="@siri"
                            image={SiriImage}
                            description = "Cortana was made by microsoft"
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard
                            title="Cortana"
                            handle="@cortana"
                            image={CortanaImage}
                            description = "Siri is an apple product"
                        />
                    </div>
                </div>
            </section>
        </div>


      </div>
      
  );
}

export default App;
