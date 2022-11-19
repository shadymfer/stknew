import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import styles from '../styles/Home.module.css'

const Staking: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Shadow Instruments</title>
        <meta name='description' content='Just a simple Asset Manager/Suite in the Solana Blockchain. Coded in the Shadows | 👻 The Shady Class Buidl' />
        <link rel='icon' href='/newth.ico' />
      </Head>



      <main className={styles.main}>
        <Navbar />
        <div className={styles.pic}>
          <div className='w-5/6 lg:w-9/12 mt-12'>
              <img src='/staking.png' />
              </div>
          </div>

        {/* <div className='text-xs mt-8 justify-center text-center w-3/6 lg:w-3/12 p-4 border-4 border-violet-700 bg-gray-900 rounded-xl'>
          <a href="https://mint.theshadyclass.xyz/" className='text-lg mt-20 justify-center text-center text-white' >
            <h4 className='font-bold '>The vesseLs are here!</h4>
            <p className='text-white '>🧬VESSEL MINTING EVENT!🧬</p>
            <p className='text-white '>2000 Supply  ▪  2.5% Royalty</p>
            <p className='text-white '>0.1 ◉ Whitelist  ▪ 0.25 ◉ Public</p>
            <p className='text-white font-bold text-xl'>MINT HERE</p>
          </a>
          <div className={styles.pic}>
          <div className='w-3/6 lg:w-12/12 mt-4'>
              <img src='/meden.png' />
              </div>
          </div>
        </div> */}


        <div className='text-3xl mt-8 mb-8 justify-center text-center'>
          <a className='text-lg justify-center text-center text-white' >
            <h4 className='font-bold'>CHOOSE YOUR JOURNEY ⌛</h4>
            <p className='text-sm'>Stake your TSC Gen1 NFTs for $CRIM token yields.</p>
          </a>

        </div>

        <div className='grid grid-col-2 text-sm w-5/6 lg:w-4/12'>
          <a
            href="https://staking2x.theshadyclass.xyz/29MgtLuX8ByGMZoreUoY7hsP2YY935gJ3wRB1fhiSF8o"
            className={styles.code} >
            <h4 className='font-bold md:pl-12'>♦ EXPEDITION (2x)</h4>
            <p className='text-amber-300 md:pl-12'>Expedition staking has a minimum lock period of 15 days.<br />
              This rewards twice the standard rate.</p>

          </a>

          <br />
          <br />
          <a
            href="https://staking1x.theshadyclass.xyz/zNt5nnEaL87rG9DT2cxvdVMf8sLBe6qEuZK8D5K4r9M"
            className={styles.code} >
            <h4 className='font-bold md:pl-12'>♦ QUEST</h4>
            <p className='text-amber-300 md:pl-12'>Quest staking has no lock period.<br />
              The rewards are given on a standard rate.</p>

          </a>
          <br />
          <br />
          <a
            href="https://staking.theshadyclass.xyz/"
            className={styles.code} >
            <h4 className='font-bold md:pl-12'>♦ OLD STAKING PLATFORM</h4>
            <p className='text-amber-300 md:pl-12'>Still got Gen1s staked in the old platform?<br />
              Access it here.</p>
              <br />
              <p className='text-xs md:pl-12'>
              Note: This staking pool does not reward $CRIM anymore.</p>

          </a>
 
        </div>
        <br />
        <br />
        <br />
        <br />



        <br />
        <br />
        <a href="https://discord.gg/7SrNbVyHDD">
          <h2 className='md:ml-22 p-12 mb-6 text-xs pt-1 pb-1 text-white text-center w-full bg-red-700 rounded-box'>
            Coded in the Shadows | 👻 The Shady Class Buidl</h2>
        </a>
        <div className={styles.pic}>
          <div className='w-3/6 lg:w-3/12 mb-2'>
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
      </main>
      {/* <div className='pl-auto text-center bg-none w-full'>
        <a href="https://discord.gg/b39NXR6">
        <h2 className='text-xs pt-2 pb-2 text-white bg-red-700 rounded-box w-6/12'>          
        Coded in the Shadows | 👻 TSC Buidl | CLICK HERE TO JOIN OUR DISCORD</h2>
        </a>
        </div> */}
    </div>
  )
}

export default Staking
