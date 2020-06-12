import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51Gt6PzKiB84cEpJIdnu7K5IUoX9hVRKn0SwdgS0YljbJyNUIKnQVqfTPuw7B7fYhAl8PUUXkv0QmD6MClCTvbIvc00UIXrQk7o";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Mapple Clothing"
      currency="INR"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Total: Rs ${price}/-`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
