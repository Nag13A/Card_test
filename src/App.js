import Mobile from "Pages/MobileVersion/Mobile";
import { useResize } from "Shared/hooks/useResize";
import Desktop from "Pages/DesktopVersion/Desktop";

function App() {
  const { width } = useResize();
  const mobileWidth = width <= 768;
  const desktopWidth = width > 768;

  return (
    <div className="App">
      {desktopWidth && <Desktop />}
      {mobileWidth && <Mobile />}
    </div>
  );
}

export default App;
