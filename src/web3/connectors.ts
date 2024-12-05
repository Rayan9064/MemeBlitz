import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
})

export const walletConnect = new WalletConnectConnector({
  rpc: {
    1: process.env.REACT_APP_RPC_URL_1!,
    // Add other networks as needed
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true
}) 