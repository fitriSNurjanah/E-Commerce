import styled from "styled-components";
import img from "../../assets/img/banner/b1.jpg";

export const StyledHeader = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 40vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 14px;

  h2,
  p {
    color: #fff;
  }
`;

export const Cart = styled.div`
  padding: 40px 80px;
  overflow-x: auto;
`;

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  white-space: nowrap;

  img {
    width: 70px;
  }

  td:nth-child(1) {
    width: 100px;
    text-align: center;
  }
  td:nth-child(2) {
    width: 150px;
    text-align: center;
  }
  td:nth-child(3) {
    width: 250px;
    text-align: center;
  }
  td:nth-child(4) td:nth-child(5) #cart table td:nth-child(6) {
    width: 150px;
    text-align: center;
  }

  td:nth-child(5) input {
    width: 50px;
    text-align: center;
    line-height: 20px;
    padding: 10px, 5px, 10px, 15px;
  }
`;

export const Thead = styled.table`
  border: 1px solid #e2e9e1;
  line-height: 50px;
  border-left: none;
  border-right: none;
`;

export const Tbody = styled.table`
  padding-top: 15px;
`;

export const CardAdd = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const coupon = styled.div`
  width: 50%;
  margin-bottom: 30px;

  h3 {
    padding-bottom: 15px;
  }

  input {
    padding: 10px 20px;
    outline: none;
    width: 60%;
    margin-right: 10px;
    border: 1px solid #e2e9e1;
  }
`;