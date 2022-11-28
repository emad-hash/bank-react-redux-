import React from 'react';
import { connect } from 'react-redux'
import '../App.css'



const Main = (props) => {
    const users = props.users;
    return (
        <div className='d-flex justify-content-center align-items-center m-5 p-5 '>
            <table className="table table-striped" id='table' >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">name</th>
                        <th scope="col">Account number</th>
                        <th scope="col">Account type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(users => {
                            return (
                                <tr key={users.id}>
                                    <th scope="row">{users.id}</th>
                                    <td>{users.customerName}</td>
                                    <td>{users.accountNumber}</td>
                                    <td>{users.accountType}</td>
                                </tr>

                            );
                        })
                    }
                </tbody>
            </table >
        </div>
    );
}

const connecter = (state) => {
    return {
        users: state.accounts
    }
}

export default connect(connecter)(Main);