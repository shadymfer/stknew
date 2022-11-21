import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { useMemo, useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Transaction, PublicKey, TransactionInstruction } from '@solana/web3.js'
import { gql } from '@apollo/client'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import client from '../client'
import { Button } from 'antd'
import styles from '../styles/Home.module.css'


//@ts-ignore
import { createAssociatedTokenAccountInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, createTransferInstruction } from '@solana/spl-token'
import { NftRow } from '../components/nftRow'
import * as ga from '../lib/ga'

import { Nft } from '../types'

const approvedAccounts = ['Web3 Chibis in the Solana network. 3,333 chibified avatars ready to take on the metaverse and save the decentralization movement. The Shady Class is the OG NFT Collection under under W3B Industries.', 'vesseLs of SHADIES NFTs waiting to be awakened for their evolution. An evolution experience from The Shady Class.']


const BulkTransfer: NextPage = () => {

  const { publicKey, signTransaction, connected } = useWallet()
  const { connection } = useConnection()
  const [nfts, setNfts] = useState<Nft[]>([])
  const [sending, setSending] = useState<Nft[]>([])
  const [to, setTo] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  const [feedbackStatus, setFeedbackStatus] = useState("")
  // if (sending.length > 7) {	
  //   toast(	
  //     `Warning! You may not be able to send ${sending.length} NFTs in one transaction. Send fewer NFTs to ensure success`,	
  //     {	
  //       toastId: 'TooManyNFTs'	
  //     }	
  //   )	
  // }	
  const massSend = async (list: Nft[], to: string) => {
    setLoading(true)

    if (to == '') {
      toast.error('no dest')
      setLoading(false)
      setFeedbackStatus("🤦‍♂️ NO RECEIVER SER, YOU DUMMY...")

      return {
        feedbackStatus,
      }
    } else {
      try {
        console.log('to: ', to)
        new PublicKey(to)
        console.log('valid dest address: ', to)
      } catch (e) {
        console.log('Invalid address')
        setTo('')
        setLoading(false)
        setFeedbackStatus("🤦‍♂️ Wrong address ser.. Fool of a took.")

        return {
          feedbackStatus,
        }
      }
    }

    if (!list || !connection || !publicKey || !signTransaction) {
      console.log('returning')
      setLoading(false)
      setFeedbackStatus("🤦‍♂️ NO SIG SER..")
      return {
        feedbackStatus,
      }
    }
    if (!list.length) {
      console.log('probably want to select some nfts')
      setLoading(false)
      return
    }
    setFeedbackStatus(`Processing ${list.length} send request..`)
    setFeedbackStatus(`✍️ Sending in ${Math.ceil(list.length / 7)} packages..`)

    for (var i = 0; i < list.length / 8; i++) {
      const tx = new Transaction()
      for (var j = 0; j < 7; j++) {
        if (list[i * 7 + j]) {
          const mintPublicKey = new PublicKey(list[i * 7 + j].mintAddress)
          const fromTokenAccount = await getAssociatedTokenAddress(
            mintPublicKey,
            publicKey
          )
          const fromPublicKey = publicKey
          const destPublicKey = new PublicKey(to)
          const destTokenAccount = await getAssociatedTokenAddress(
            mintPublicKey,
            destPublicKey
          )
          const receiverAccount = await connection.getAccountInfo(
            destTokenAccount
          )
          if (receiverAccount === null) {
            tx.add(
              createAssociatedTokenAccountInstruction(
                fromPublicKey,
                destTokenAccount,
                destPublicKey,
                mintPublicKey,
                TOKEN_PROGRAM_ID,
                ASSOCIATED_TOKEN_PROGRAM_ID
              )
            )
          }
          tx.add(
            createTransferInstruction(
              fromTokenAccount,
              destTokenAccount,
              fromPublicKey,
              1
            )
          )
        }
      }
      tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
      tx.feePayer = publicKey
      // setFeedbackStatus("✍️ SIGN yer Phantom ser..")

      let signed: Transaction | undefined = undefined
      try {
        signed = await signTransaction(tx)
      } catch (e: any) {
        toast(e.message)
        setLoading(false)
        return
      }
      let signature: string | undefined = undefined
      try {
        signature = await connection.sendRawTransaction(signed.serialize())
        await connection.confirmTransaction(signature, 'confirmed')
        toast.success('Transaction successful')
        ga.event({
          action: 'multisend_success',
          params: { count: sending.length }
        })
        sending.map(n => {
          setNfts(nfts.filter(n => !sending.includes(n)))
          setFeedbackStatus("🤝 SUCCESS SER! If BULK packaged, wait for all of it to finish.")
        })
      } catch (e: any) {
        setFeedbackStatus("😒 IT ERROR'D SER. Try again.")
        toast.error(e.message)
        setLoading(false)
        ga.event({
          action: 'multisend_error',
          params: { msg: e.message }
        })

      }
    }
    setSending([])
    setLoading(false)

    return {
      feedbackStatus,
    }
  }


  const [allowed, setAllowed] = useState(false)

  const GET_NFTS = gql`
    query GetNfts($owners: [PublicKey!], $limit: Int!, $offset: Int!) {
      nfts(owners: $owners, limit: $limit, offset: $offset) {
        address
        mintAddress
        name
        description
        image
        owner {
          address
          associatedTokenAccountAddress
        }
      }
    }
  `

  useMemo(() => {
    if (publicKey?.toBase58()) {
      client
        .query({
          query: GET_NFTS,
          variables: {
            owners: [publicKey?.toBase58()],
            offset: 0,
            limit: 10000
          }
        })
        .then(res => setNfts(res.data.nfts))
    } else {
      setNfts([])
      setSending([])
      setTo('')
    }
  }, [publicKey?.toBase58()])

  useMemo(() => {
    nfts.map((nft) => {
      if (approvedAccounts.includes(nft.description)) {
        console.log('approved')
        setAllowed(true)
      }
    })
  }, [nfts])

  return (
    <div>


      <Head>
        <title>BULK NFT TRANSFER</title>
        <meta name='description' content='Send multiple NFTs at once!' />
        <link rel='icon' href='/newth.ico' />
      </Head>

      <div className='drawer drawer-end'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content bg-stone-900 text-white tracking-tight text-center bg-[url("/ky.jpg")]'>
          <Navbar sending={sending} />

          <div className=' w-full text-center m-6'>
            {!connected && (<h1>HOLDER VERIFICATION</h1>)}
            {connected && (<>
              {/* <h1 className='font-bold text-xs'>Wallet: {publicKey?.toBase58()}</h1> */}
              {allowed ? <h1 className='text-sm font-bold text-green-500 mr-10'>VERIFIED HOLDER 👥🈯</h1>
                :
                <a
                  href="https://magiceden.io/marketplace/tshc"
                >
                  <h1 className='text-center text-md text-red-500 font-bold mr-10'>You do not hold any TSC/SHADIES NFT. 🤷⛔</h1>
                </a>}
            </>)
            }
          </div>

          <div className={styles.pic}>
            <div className='w-3/6 lg:w-3/12'>
              <img src='/bulk.png' />
            </div>
          </div>
          {/* <h2 className='font-bold mt-6'>⚡ BULK NFT TRANSFER - FEE-FREE ⚡<br/></h2> */}
          {/* <p className='text-green-500 font-bold mb-6'>&nbsp;HOLDERS ONLY. 👻
            </p> */}
          <div className='w-full mb-4'>

            <h2 className='font-bold text-sm'>HOW MANY :&nbsp;&nbsp;&nbsp;
              <span className='indicator-item badge-lg rounded-full bg-amber-500 text-xl text-white'>
                {sending.length}
              </span></h2>
            <h1 className='mr-10 ml-10 mt-4 mb-4'>STATUS : {feedbackStatus} </h1>

          </div>
          <div className='w-full mb-6'>
            <input
              type='text'

              placeholder='NFT SEARCH..'
              className='w-8/12 h-80% input input-bordered rounded-none border-black text-black'
              onChange={e => setSearch(e.target.value)}

            />
          </div>

          {allowed ? <div className='w-full mb-4'>
            {sending.length > 0 ? (
              <>

                <input
                  type='text'
                  className='w-6/12 max-w-xs input input-bordered m-1 text-gray-600 rounded-none'
                  placeholder='Paste the recipient wallet'
                  onChange={e => {
                    setTo(e.target.value)
                  }}
                />


                <Button
                  loading={loading}
                  id='btn-copy '
                  type='primary'
                  className='btn max-w-sm hover:text-white hover:bg-red-500 m-1 tracking-wider rounded-none w-6/12'
                  onClick={() => {
                    // setLoading(true)
                    massSend(sending, to)
                    // setLoading(false)
                  }}
                >
                  FLY YOU FOOLS
                </Button>

              </>
            ) : (
              <>
                SELECT WHAT YOU WANNA TRANSFER
              </>
            )}
          </div>
            :
            <a
              href="https://magiceden.io/marketplace/tshc"
            >
              <h1 className='text-sm text-amber-300 font-bold mb-8'>Access our UTILITIES! 👻<br /> Click here to get a Shady NFT in Magiceden!</h1>
            </a>}

          <p className='m-2 mt-6 text-center text-xs tracking-wider'>
            Notes:<br />
            1. &nbsp;<b>(UPDATED - Closed access to holders only.)</b><br /> Live version supports unlimited transfers for SHADIES AND TSC NFT holders.<br />
            2. &nbsp;All transactions are fee free. You only pay gas.<br />
            3. &nbsp;Unnamed NFTs are those who were most likely setup and minted in LMNFT.<br /></p>
          <div className='w-12/12 align-center justify-center text-center rounded-lg mb-12'>
            <div className='lg:mx-12 mb-12 mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
              {nfts
                .filter(n => n.name.toLowerCase().includes(search.toLowerCase()))
                .sort((a: Nft, b: Nft) => {
                  if (a.name > b.name) return 1;
                  else if (a.name < b.name) return -1;
                  else return 0;
                })
                .map(n => (
                  <NftRow
                    key={Math.random()}
                    name={n.name}
                    address={n.address}
                    mintAddress={n.mintAddress}
                    image={n.image}
                    symbol={n.symbol}
                    showHidden
                    unselect={() => {
                      setSending(sending.filter(item => item !== n))
                    }}
                    select={() => {
                      setSending([...sending, n])
                    }}
                    selected={sending.includes(n)}
                  />
                ))}
            </div>

          </div>


          <a href="https://discord.gg/7SrNbVyHDD">
            <h2 className='ml-12 md:ml-20 mb-6 text-xs pt-1 pb-1 text-white justify-center text-center w-9/12 md:w-3/12 sm:w-2/12 xs:w-1/12 bg-red-700 rounded-box'>
              Coded in the Shadows | 👻 The Shady Class Buidl</h2>
          </a>

          <div className={styles.pic}>
            <div className='w-3/6 lg:w-2/12 mb-2'>
              <img src='/shad.png' />
            </div>
          </div>
          <div className={styles.pic}>
            <div className='w-4/12 lg:w-1/12 mt-2'>
              <img src='/solwyt2.png' />
            </div>
          </div>
          <div className='lg:mx-96 mb-4 mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2'>
            <div className={styles.pic2}>
              <div className='ml-32 w-10 h-10 lg:w-12 lg:h-12 lg:ml-80 mb-2'>
                <a href="https://discord.gg/7SrNbVyHDD">
                  <img src='/dc.png' />
                </a>
              </div>

            </div>
            <div className={styles.pic2}>
              <div className='mr-32 w-10 h-10 lg:w-12 lg:h-12 lg:mr-80 mb-2'>
                <a href="https://twitter.com/shadies_NFT">
                  <img src='/twt.png' />
                </a>
              </div>

            </div>
          </div>
          {/* <div className='pl-auto text-center bg-red-700 w-full'>
        <a href="https://discord.gg/b39NXR6">
        <h2 className='text-xs pt-2 pb-2 text-white bg-red-700 rounded-box'>          
        Coded in the Shadows | 👻 TSC Buidl | CLICK HERE TO JOIN OUR DISCORD</h2>
        </a>
        </div> */}
        </div>

        {/* <div className='drawer-side'>
          <label htmlFor='my-drawer' className='drawer-overlay'></label>
          <ul className='p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content'>
              {sending.map(n => (
              <li key={Math.random()}>
                <NftRow
                  key={Math.random()}
                  name={n.name}
                  address={n.address}
                  mintAddress={n.mintAddress}
                  image={n.image}
                  symbol={n.symbol}
                  showHidden
                  unselect={() => {
                    setSending(sending.filter(item => item !== n))
                  }}
                  select={() => {
                    setSending([...sending, n])
                  }}
                  selected={sending.includes(n)}
                />
              </li>
            ))}
            {sending.length > 0 ? (
              <>
                <li key={Math.random()}>
                  <input
                    type='text'
                    className='w-full max-w-xs input input-bordered rounded-none'
                    placeholder='Enter Wallet Address'
                    onChange={e => {
                      setTo(e.target.value)
                    }}
                  />
                </li>
                <li key={Math.random()}>
                  <Button
                    loading={loading}
                    id='btn-copy'
                    type='primary'
                    className='block btn btn-secondary hover:text-black rounded-none m-4'
                    onClick={() => {
                      // setLoading(true)
                      massSend(sending, to)
                      // setLoading(false)

                    }
                  }
                  >
                    TRANSFER!
                  </Button>
                </li>
              </>
            ) : (
              <>
                👻
              </>
            )}


          </ul>
        </div> */}
      </div>
    </div>
  )


}

export default BulkTransfer