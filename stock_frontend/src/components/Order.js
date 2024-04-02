import OrderedItem from "./OrderedItem";

const Order = ({ order, orderedItems }) => {

    const mappedItems = orderedItems.map(item => {
        return <OrderedItem orderedItem={item}/>
    })

    return (
        <>
            <h3>Order ID:{order.id}</h3>
            <p>Order status: {order.orderStatus}</p>
            <p>Supermarket: {order.supermarket.name}, {order.supermarket.location}</p>
            <h4>Items ordered:</h4>
            <ul>{mappedItems}</ul>
        </>
    );
}
 
export default Order;