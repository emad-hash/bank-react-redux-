import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

function Home(props) {
    const dispatch = useDispatch()
    const deleteAccount = (e) => {
        const id = e.target.value;
        const accounts = props.accounts.filter((account) => account.id != id);
        dispatch({ type: "REMOVE_ACCOUNT", payload: accounts });
    };
    return (
        <div>
            <Link to="CreateForm">   <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-10">Create Bank Serve </button></Link>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg p-10">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                customerName
                            </th>
                            <th scope="col" class="py-3 px-6">
                                accountNumber
                            </th>
                            <th scope="col" class="py-3 px-6">
                                accountType
                            </th>

                            <th scope="col" class="py-3 px-6">
                                Delete
                            </th>

                        </tr>
                        {console.log(props.accounts)}
                        {props.accounts.map(acount => {
                            return (
                                <>




                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                                        <th scope="row" class="py-10 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {acount.customerName}
                                        </th>
                                        <td class="py-4 px-6">
                                            {acount.accountNumber}                </td>
                                        <td class="py-4 px-6">
                                            {acount.accountType}
                                        </td>

                                        <td class="py-4 px-6">
                                            <button
                                                className="bg-red-500 p-4 rounded-full text-white"
                                                onClick={(e) => deleteAccount(e)}
                                                value={acount.id}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>


                                </>
                            )
                        })}
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const readState = (state) => {
    return {
        accounts: state.accounts
    }
}
export default connect(readState)(Home)
// export default Home