import { useState } from "react"
import {useGlobalState} from '../../context/GlobalState'

function TransactionForm() {
  const {addTransaction} = useGlobalState()
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)

  const onSumit =(e)=>{
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    })
    setAmount(0)
    setDescription("")
  }
  return (
    <div >
      <form onSubmit={onSumit}>
      <input type="text" placeholder="Enter a Description"
      onChange={(e)=> setDescription(e.target.value)}
      className="bg-zinc-600 text-white rounded-lg px-3 py-2 block w-full mb-2"
      value={description}
      />
      <input type="number"
      step={"0.01"} 
      placeholder="00"
      onChange={(e)=> setAmount(e.target.value)}
      className="bg-zinc-600 px-3 py-2 rounded-lg w-full block text-white mb-2"
      value={amount}
      />
      <button className="bg-indigo-700 block w-full px-3 py-2 rounded-md mb-2 hover:bg-indigo-500">Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm