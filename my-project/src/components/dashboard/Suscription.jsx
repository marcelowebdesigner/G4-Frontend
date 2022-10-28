import axios from 'axios';
import React, { useState, useEffect } from 'react';

//git stash
//git stash pop
const ShowSuscriptions = () => {

    const [Suscriptions, setSuscriptions] = useState([])

    const fetchSuscriptions = async () => {
        const result = await axios.get('http://localhost:8000/contract/contract-list');

        console.log(result.data)
        setSuscriptions(result.data)
    }

    useEffect(() => {
        fetchSuscriptions();
    }, [])

    const goToDetail = () => {
        alert("detail page")
    }


    return (
        <div className="flex flex-col space-y-4 flex-wrap h-0">
            <div className="bg-purple-400 py-2 ml-80 mr-80 mt-8">

                <table>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>State</th>

                    {
                        Suscriptions.map((suscription, index) => (
                            <tr>
                                <td>{suscription.platforms.name}</td>
                                <td>{suscription.amount}</td>
                                {suscription.is_active == true ? (
                                    <td>Active</td>

                                ) : (

                                    <td>Inactive</td>
                                )}
                            </tr>

                        ))

                    }
                </table>

            </div>
        </div>
    )
};

export default ShowSuscriptions;