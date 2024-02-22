import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Volunteer = () => {
    const { id } = useParams();

    const [activities, setActivities] = useState([]);

    // Data from Data base 
    useEffect(() => {
        fetch('/charity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const myActivities = activities.filter(active => active.id == id);
    console.log(myActivities)
    return (
        <div>
            <div>Volunteer {id}</div>
            <img className="w-25" src={myActivities[0]?.img} alt={myActivities[0]?.name} />
        </div>
    )
}

export default Volunteer