import { loadStripe } from '@stripe/stripe-js';

export const checkout = async ({ lineItems }) => {
  let stripePromise = null;

  // Load Stripe
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  // Redirect to Stripe checkout page
  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}/shopping`,
    cancelUrl: `${window.location.origin}`
  });
};
