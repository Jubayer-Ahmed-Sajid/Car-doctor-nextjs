import CheckoutForm from '@/components/form/CheckoutForm';
import React from 'react';

const Checkout =async ({params}) => {
    const {id} = await params;
  const res = await fetch(`https://car-dotcor-nextjs.vercel.app/api/services/${id}`)
  const service = await res.json()
    return (
        <div>
            <p> Checkout Page</p>
            <CheckoutForm service={service}></CheckoutForm>
        </div>
    );
};

export default Checkout;