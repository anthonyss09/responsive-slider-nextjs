import Slider from "./components/Slider";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <main className="main">
      <div className="center">
        {" "}
        <h1>Responsive Slider</h1>
        <Slider>
          <Slide slideNumber="one" />
          <Slide slideNumber="two" />
          <Slide slideNumber="three" />
          <Slide slideNumber="four" />
        </Slider>
      </div>
    </main>
  );
}
