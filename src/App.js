import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-4">
        <Container>
          <Route path="/" component={HomeScreen} exact/>
          <ProductScreen path="/product/:id" component={HomeScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
