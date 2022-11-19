function showfirstandlastfour (str: string) {
  if (str.length > 4) {
    return str.substr(0, 4) + '...' + str.substr(str.length - 4, 4)
  }
  return str
}

interface NftRowProps {
  image: string
  name: String
  mintAddress: String
  select(): void
  unselect(): void
  selected: Boolean
  showHidden?: Boolean
  owner?: string
  address: string
  symbol: String
}

export const NftRow = (props: NftRowProps) => {
  let hideme = props.name == '' && !props.showHidden ? ' hidden ' : ''

  let amSelected = props.selected ? ' border-amber-500 border-8 ' : ''
  return (
    <div
      className={'nftcard stats rounded-none m-2 border-8 rounded-lg w-6/6 overflow-x-hidden lg:mx-8' + hideme + amSelected}
      onClick={() => {
        if (props.selected) {
          props.unselect()
        } else {
          props.select()
        }
      }}
    >
      <div className='w-full bg-black text-white '>

        <div className='stat-figure text-secondary overflow-x-hidden '>
        <div className='text-xs stat-title text-white text-center overflow-x-hidden'>{props.name}</div>
        {props.owner && (
          <div className='stat-desc'>
            <h1>owner: {showfirstandlastfour(props.owner)}</h1>
          </div>
        )}
          <div className={'avatar'}>
            <div className='w-12/12 rounded-none'>
              <img src={props.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
