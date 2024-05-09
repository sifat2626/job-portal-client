function Slider({ img, text }) {
  return (
    <div className="min-h-[600px]">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default Slider;
