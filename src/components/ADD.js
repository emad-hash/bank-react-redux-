import React, { useState } from 'react'
import { connect,useDispatch} from 'react-redux';

function CreateForm(props) {
    const [CustomerName, setCustomerName] = useState("");
    const [AccountNumber,setAccountNumber]=useState("");
    const [AccountType,setAccountType]=useState("");
const dispatch = useDispatch()
    const AddAccount = (e) => {
        e.preventDefault();
    
        const account = {
          id: props.count + 1,
          customerName: CustomerName,
          accountNumber: AccountNumber,
          accountType: AccountType,
        };
    
        dispatch({ type: "ADD_ACCOUNT", payload: account });
      };
    
    return (
        <div>




            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg">
                    <h1 class=" text-2xl font-bold text-indigo-600 sm:text-3xl">
                        Get started today
                    </h1>

                    <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                        dolores deleniti inventore quaerat mollitia?
                    </p>

                    <form class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl" onSubmit={AddAccount}>


                        <div>
                            <label for="email" class="text-sm font-medium">CustomerName</label>

                            <div class="relative mt-1">
                                <input

                                    value={CustomerName}
                                    onChange={(e) => setCustomerName(e.target.value)}

                                    type="text"
                                    id="email"
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="CustomerName"
                                />


                            </div>
                        </div>

                        <div>
                            <label for="password" class="text-sm font-medium">AccountNumber</label>

                            <div class="relative mt-1">
                                <input
                                    value={AccountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)}

                                    type="text"
                                    id="password"
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="AccountNumber"
                                />


                            </div>
                        </div>
                        <div>
                            <label class="text-sm font-medium">AccountType</label>

                            <div class="relative mt-1">
                                <input
                                 value={AccountType}
                                 onChange={(e) => setAccountType(e.target.value)}
                                    type="text"
                                    id="password"
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="AccountType"
                                />


                            </div>
                        </div>
                        <button

                            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Submit
                        </button>


                    </form>
                </div>
            </div>



        </div>
    )
}

const manageStateToProps = (state) => {
    return {
      accounts: state.accounts,
      count: state.numberOfAccounts,
    };
  };
  
  export default connect(manageStateToProps)(CreateForm);
  