export default function Slide({ slideNumber }) {
  return (
    <div className={`slide slide-${slideNumber}`}>
      <span>
        {" "}
        <p className="slide-number-p">Slide {slideNumber}</p>
        <p>Swipe with touch, arrow or mouse pad.</p>
      </span>
    </div>
  );
}
