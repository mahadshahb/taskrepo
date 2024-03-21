import logo from './logo.svg';
import './App.css';
import FloatingSlider from './components/Floating/Floating_slider';
import NavBar from './components/Hover/HoverEffect';
import FallingImageSlider from './components/FallingSliderImage/FallingImageSlider';

function App() {
  return (
    <div className="App">

      {/* ....Floating_slider..... */}
      <FloatingSlider />

      <p className=' text-black font-semibold text-4xl text-center py-12'>
        Task Number 2 <span>
          Hover Effect
        </span>
      </p>

      {/* ....hover_effect..... */}
      <NavBar />

      <p className=' text-black font-semibold text-4xl text-center py-12'>
        Task Number 3 <span>
          Falling Cards
        </span>
      </p>

      {/* ....Falling_Image_Slider..... */}

      <FallingImageSlider />


    </div>
  );
}

export default App;
