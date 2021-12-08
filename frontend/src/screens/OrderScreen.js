// import React, { useEffect, useState } from "react";
// import { Row, Col, ListGroup, Image } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../Components/Loader";
// import Message from "../Components/Message";
// import { Link } from "react-router-dom";
// import { getOrderDetails, payOrder } from "../actions/OrderAction";
// import axios from "axios";
// import { PayPalButton } from "react-paypal-button-v2";
// import { ORDER_PAY_RESET } from "../constants/OrderConstants";

// const OrderScreen = ({ match, history }) => {
//   const [sdkready, setsdkready] = useState(false);
//   const orderId = match.params.id;
//   const dispatch = useDispatch();
//   const orderDetails = useSelector((state) => state.orderDetails);
//   const { order, loading, error } = orderDetails;

//   const orderPay = useSelector((state) => state.orderPay);
//   const { loading: loadingPay, success: successPay } = orderPay;

//   // const orderDeliver = useSelector((state) => state.orderDeliver);
//   // const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   if (!loading) {
//     //   Calculate prices
//     const addDecimals = (num) => {
//       return (Math.round(num * 100) / 100).toFixed(2);
//     };

//     // order.itemsPrice = addDecimals(
//     //   order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
//     // );
//   }

//   useEffect(() => {
//     dispatch(getOrderDetails(orderId));

//     // if (!userInfo) {
//     //   history.push("/login");
//     // }
//     // const addPayPalScript = async () => {
//     //   const { data: clientId } = await axios.get("/api/config/paypal");
//     //   // console.log(clientId);
//     //   const script = document.createElement("script");
//     //   script.type = "text/javascript";
//     //   script.async = true;
//     //   script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
//     //   script.async = true;
//     //   script.onload = () => {
//     //     setsdkready(true);
//     //   };

//     //   document.body.appendChild(script);
//     // };
//     // // addPayPalScript();
//     // if (!order || successPay) {
//     //   dispatch({ type: ORDER_PAY_RESET });
//     //   //after paying I wanna see the order details
//     //   dispatch(getOrderDetails(orderId));
//     // } else if (!order.isPaid) {
//     //   if (!window.paypal) {
//     //     addPayPalScript();
//     //   } else {
//     //     setsdkready(true);
//     //   }
//     // }
//   }, []);

//   const sucessPayment = (paymentResult) => {
//     console.log(paymentResult);

//     dispatch(payOrder(orderId, paymentResult));
//   };

//   return loading ? (
//     // <Loader />
//     <h2>H</h2>
//   ) : error ? (
//     <Message variant="danger">{error}</Message>
//   ) : (
//     <>
//       <Row className="">
//         <Col>
//           <ListGroup.Item>
//             <h2 className="font-weight-bold">Shipping</h2>
//             <p>
//               <strong>Name : </strong>
//               {order.user.name}
//             </p>
//             <p>
//               <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
//             </p>
//             <p className="text-capitalize">
//               <strong>Address : </strong>
//               {order.shippingAddress.address} , {order.shippingAddress.city} ,
//               {order.shippingAddress.postalCode},{" "}
//               {order.shippingAddress.country}
//             </p>
//             {order.isDelivered ? (
//               <Message variant="success">
//                 Delivered on {order.DeisDeliveredAt}
//               </Message>
//             ) : (
//               <Message variant="warning">Amount not Delivered</Message>
//             )}
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <h2>Payment Method</h2>
//             <p>
//               <strong>Method : </strong>
//               {order.paymentMethod}
//             </p>
//             {order.isPaid ? (
//               <Message variant="success">Paid on {order.paidAt}</Message>
//             ) : (
//               <Message variant="warning">Amount not paid</Message>
//             )}
//           </ListGroup.Item>

//           <ListGroup.Item>
//             <h2>Ordered items</h2>
//             {/* <strong>Method : </strong> */}
//             {order.orderItems.length === 0 ? (
//               <Message>Your cart is empty</Message>
//             ) : (
//               <ListGroup variant="flush">
//                 {order.orderItems.map((item, idx) => (
//                   <ListGroup.Item key={idx}>
//                     <Row>
//                       <Col md={2}>
//                         <Image src={item.image} alt={item.name} fluid rounded />
//                       </Col>
//                       <Col>
//                         <Link to={`/product/${item.product}`}>{item.name}</Link>
//                       </Col>
//                       <Col md={4}>
//                         {item.qty} x ${item.price} = $
//                         {parseInt(item.qty * item.price)}
//                       </Col>
//                     </Row>
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//             )}
//           </ListGroup.Item>
//         </Col>

//         <Col md={4}>
//           <ListGroup>
//             <ListGroup.Item>
//               <h2>Order summary</h2>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Row>
//                 <Col>Items</Col>
//                 <Col>${order.itemsPrice}</Col>
//               </Row>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Row>
//                 <Col>Shipping</Col>
//                 <Col>${order.shippingPrice}</Col>
//               </Row>
//             </ListGroup.Item>
//           </ListGroup>
//           <ListGroup>
//             <ListGroup.Item>
//               <Row>
//                 <Col>Tax</Col>
//                 <Col>${order.taxPrice}</Col>
//               </Row>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Row>
//                 <Col>Total</Col>
//                 <Col>${order.totalPrice}</Col>
//               </Row>
//             </ListGroup.Item>
//             {!order.isPaid && (
//               <ListGroup.Item>
//                 {loadingPay && <Loader />}
//                 {!sdkready ? (
//                   <Loader />
//                 ) : (
//                   <PayPalButton
//                     amount={order.totalPrice}
//                     onSuccess={sucessPayment}
//                   ></PayPalButton>
//                 )}
//               </ListGroup.Item>
//             )}
//           </ListGroup>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default OrderScreen;
