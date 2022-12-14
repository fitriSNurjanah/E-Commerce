import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Spartan", sans-serif;
}
body {
  width: 100%;
}
h1 {
  font-size: 50px;
  line-height: 64px;
  color: #222;
}
h2 {
  font-size: 46px;
  line-height: 54px;
  color: #222;
}
h4 {
  font-size: 20px;
  color: #222;
}
h7 {
  font-weight: 700;
  font-size: 12px;
}
p {
  font-size: 16px;
  color: #465b52;
  margin: 15px 0 20px 0;
}

sectionP1{
  padding: 40px 80px;
}

section-m1 {
  margin: 400px 0;
}
`;

export default StyledGlobal;
