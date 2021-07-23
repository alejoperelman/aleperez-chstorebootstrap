import react from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext/CartContext';
import { Button, Form, Container, Alert }  from 'react-bootstrap';
import { database } from '../../firebase/firebase';
//import '@firebase/firestore';

export const EndPurcharse = () => {
    const {cart, setCart } = useContext(CartContext);
    const { totalAmount, setTotalAmount} = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [idOrden, setOrderId] = useState();
    const [formData, setFormData] = useState({
            nombre:'',
            apellido:'',
            telefono:'',
            email:''
    });
    const [isFormDisabled, setIsFormDisabled] = useState(true);
    const onNameChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    function onSubmit(event) {
        const { nombre, apellido, telefono, email} = formData
        event.preventDefault();
        setLoading(true)
        const orden = database.collection("orders");
        const newOrder = {
            buyer: formData,
            items: cart,
            //date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalAmount,
        };
        orden.add(newOrder).then(({id})=> {
            setOrderId(id);
            setLoading(true);
        }).catch (err => {

        }).finally (() => {
            setLoading(false)
        });
      }
//PONER UN useEffect para el tema de las cargadas y salvADAS EN base de datos
    return (
        <>
        <Container>
            <h1>Finalice su Compra<br></br></h1>
            <Form onClick={onSubmit}>
                <Form.Group className="mb-3" controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name ="nombre" onChange={ evt => onNameChange(evt)} placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridLastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control name ="apellido" onChange={ evt => onNameChange(evt)} placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridTel">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control name ="telefono"  onChange={ evt => onNameChange(evt)} placeholder="Telefono" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name ="email"  type="email" onChange={ evt => onNameChange(evt)} placeholder="Ingrese email" />
                </Form.Group>
                <Button variant="success" type="submit" onClick={evt => onSubmit(evt)}>Comprar</Button>
            </Form>
            {loading ? <Alert variant="success">Gracias por su Compra, Orden: {idOrden}</Alert> : <Alert variant="warning">Error</Alert>} 
        </Container>
        </>
    )
}
export default EndPurcharse;

