import styled from "styled-components/macro";
import Header from "./components/Header";
import Product from "./components/Product";
import { PRODUCT } from "./data";
import { QUERIES } from "./constants";
import { CartContextProvider } from "./store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Main>
        <Product product={PRODUCT} />
      </Main>
    </CartContextProvider>
  );
}

const Main = styled.main`
  padding-left: 24px;
  padding-right: 24px;
  height: 100%;
  @media ${QUERIES.tabletAndUp} {
    margin: auto;
    max-width: 1110px;
    padding: 48px;
  }
`;

export default App;
