import { createContext, useContext, useEffect, useState } from 'react'
import getWeb3 from 'services/web3'

type Web3ContextType = {
  web3: any
  setWeb3: any
  account: string
  setAccount: any
}

const Web3ContextF = createContext<Web3ContextType>({
  web3: null,
  setWeb3: () => ({}),
  account: null,
  setAccount: () => ({}),
})

export default function Web3ContextProvider({ children }) {
  useEffect(() => {
    const runWeb3 = async () => {
      const web3 = await getWeb3()
      setWeb3(web3)
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts()
      setAccount(accounts[0])
    }
    runWeb3()
  }, [])

  const [web3, setWeb3] = useState(null)
  const [account, setAccount] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <Web3ContextF.Provider value={{ web3, setWeb3, account, setAccount }}>
      {children}
    </Web3ContextF.Provider>
  )
}

export const useWeb3 = () => useContext(Web3ContextF)
