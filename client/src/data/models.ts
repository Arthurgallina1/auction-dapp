export enum AuctionStateEnum {
  'Started' = 'Started',
  'Running' = 'Running',
  'Ended' = 'Ended',
  'Canceled' = 'Canceled',
}

export const AuctionState = {
  0: 'Started',
  1: 'Running',
  2: 'Ended',
  3: 'Canceled',
}

export type ContractFunctionType = {
  call: () => void
  sendTransaction: () => void
  estimateGas: () => void
  request: () => void
}
