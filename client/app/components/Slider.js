export default function Slider({ children }) {
  return (
    <div id="slider-container" className="slider-container">
      <div id="slider-inner" className="slider-inner">
        {children}
      </div>
    </div>
  );
}
