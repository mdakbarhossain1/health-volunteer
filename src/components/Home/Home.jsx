import { useEffect, useState } from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Charity from '../Charity/Charity';


const Home = () => {

    const [charity,setCharity] = useState([])

    useEffect(() => {
        fetch('charity.json')
            .then(res => res.json())
            .then(data => setCharity(data))
    }, [])

    return (
        <Container>
            <div className="text-center heading py-3">
                <p>I GROW BY HELPPING PEAPOLE IN NEED</p>
            </div>
            <div className="d-flex justify-content-center">
                <InputGroup className="mb-3 w-50">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2 ">
                        Button
                    </Button>
                </InputGroup>
            </div>
            <div className="my-2">

                <Row className="my-5">
                    {
                        charity.map(ct => <Charity key={ct.id} ct={ct}/>)
                    }

                </Row>
            </div>
        </Container>

    )
}

export default Home