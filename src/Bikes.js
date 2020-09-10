import React, {useEffect, useState} from "react"
import createEnturService from '@entur/sdk'


const service = createEnturService(
    {clientName: 'solbakken-infoskjerm'}
);


const Bikes = () => {
    const[bikeStations, setBikes] = useState([]);

    useEffect(() => {
        service.getBikeRentalStationsByPosition(
            {latitude: 63.428311, longitude: 10.392514},
            230
        ).then((data) => setBikes(data));

    }, []);


    return (
        <div className={"Bikes"}>
            {
                bikeStations.map((station)=>(<Station key={station.id} station={station}/>))
            }
        </div>
    );
}

export default Bikes;

const Station = (props) => {
    const {name, bikesAvailable, spacesAvailable} = props.station;

    console.log(name, bikesAvailable, spacesAvailable);

    return (<div className={"Station"}>
        {name}: {bikesAvailable}/{bikesAvailable + spacesAvailable}
    </div>);
}