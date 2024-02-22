import { Col } from "react-bootstrap"
import './charity.css'
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";
const Charity = ({ct}) => {
    const { name, img, id } = ct;
    // console.log(name, img, id)
    const navigate = useNavigate();
    const supportCharity = (id) => {
        navigate(`/volunteer/${id}`)
        // console.log(id)
    }
    // console.log(randomColor())
    return (
        <Col xs={4} md={3} sm={2} className="card-field" onClick={() => supportCharity(id)}>
            <img className="w-100" src={img} alt={name} />
            <p style={{ backgroundColor: randomColor() }}>{name.slice(0, 15)}</p>
        </Col>
    )
}

export default Charity