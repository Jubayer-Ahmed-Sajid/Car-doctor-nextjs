
import BookingsTable from '@/components/table/BookingsTable';
import { headers } from 'next/headers';


export const getBookingsData = async() => {
    const res = await fetch('https://car-dotcor-nextjs.vercel.app/api/services',{
    headers: new Headers(await headers())
    })
   
    const data = await res.json();
    return data;
}

const MyBookings =async () => {
    const bookings =await getBookingsData();
   
    return (
        <div>
            My bookings
            <BookingsTable bookings={bookings}></BookingsTable>
        </div>
    );
};

export default MyBookings;