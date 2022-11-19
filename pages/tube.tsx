import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import styles from '../styles/Home.module.css'

const tube: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Shadow Instruments</title>
        <meta name='description' content='Just a simple Asset Manager/Suite in the Solana Blockchain. Coded in the Shadows | 👻 The Shady Class Buidl' />
        <link rel='icon' href='/newth.ico' />
      </Head>



      <main className={styles.main}>
        {/* <h1 className={styles.title}>

        <br/>SHADOW INSTRUMENTS
        </h1>
        <br/> */}
              <Navbar />
          {/* <div className='pl-20 mt-2 w-9/12 md:w-3/12 sm:w-3/12 xs:w-3/12 rounded-none justify-center'>
              <img src='/arc.png' />
          </div> */}
          {/* <div className='mt-12 w-3/6 md:w-3/12 sm:w-3/12 xs:w-3/12 rounded-full align-items-center justify-center'>
              <img src='/vessel.gif' />
          </div> */}
        {/* <p className={styles.description}>
          Get started by checking out our tools below<br/>
        </p> */}
                  <div className='mt-12 w-3/6 md:w-3/12 sm:w-3/12 xs:w-3/12 rounded-full align-items-center justify-center'>
              <img src='/txt.png' />
          </div>
          <div className={styles.pic}>
          <div className='w-3/6 lg:w-1/12 mt-4'>
              <img src='/solwyt2.png' />
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
        

        <div className='text-3xl mt-8 justify-center text-center'>
          <a  className='text-lg justify-center text-center text-white' >
            <h4 className='font-bold'>DEMO SITE</h4>
          </a>

        </div>

        <div className='grid grid-col-2 text-xs'>
          <a  
          href="https://solfaucet.com/"
          className={styles.card} >
            <h4 className='font-bold md:pl-12'>1. SWITCH TO DEVNET</h4>
            <p className='text-amber-500 md:pl-12'>Click here to request SOL on DEVNET (Not TestNet). Up to 2 SOL at a time.<br/>
            Has a 2-5minute cooldown before you can request again.</p>

              <img className='w-full mt-4 mb-4'
              src='/dev1.png' />

          </a>
          <br/>
          <br/>
          <br/>
          <br/>        
          <br/>
          <br/>
          <br/>        
          <br/>
          <br/>
          <br/>        
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>



          {/* <a href="stove" className={styles.card}>
          <h4 className='font-bold  md:pl-12'> STOVE / TOKEN BURNER</h4>
            <p className=' md:pl-12'>Burn any known/unknown spl-token or NFT.</p>
          </a>
          <br/> */}


          <a
            href="https://vesselshadiesxxx.netlify.app/"
            className={styles.card}
          >
          <h4 className='font-bold  md:pl-12'>2. MINT A DEVNET VESSEL HERE</h4>
            <p className='text-amber-500 md:pl-12'>Click to proceed to mint site.<br/></p>

          </a>

          <a
            
            className={styles.card}
          >
          <h4 className='font-bold  md:pl-12'>3. REQUEST DEVNET $CRIM TOKEN</h4>
            <p className='text-amber-500  md:pl-12'>Tag Yunuk or Traffy in discord to request for Test $CRIM tokens.<br/></p>

          </a>

          <a
            href="https://632f77cdc6f2620008d50a32--sparkling-alpaca-c3da01.netlify.app/recipe/D2bkk3xuBKSpxhyUGyPE1zjnEMi26a3WpCJwtBpc7uoV"
            className={styles.card}
          >
          <h4 className='font-bold  md:pl-12'>4. GO TO DEVNET TUBE SITE HERE</h4>
            <p className='text-amber-500  md:pl-12'>Evolution duration is 5mins per evolution.<br/></p>

          </a>
          <a
            
            className={styles.card}
          >
          <h4 className='font-bold  md:pl-12'>5. WAIT FOR THE PAGE TO LOAD</h4>
            {/* <p className='text-amber-500  md:pl-12'><b>(SOON)</b> View NFTs from multiple different wallets.<br/></p> */}

          </a>
          <a
            
            className={styles.card}
          >
          <h4 className='font-bold  md:pl-12'>6. CHAMBER 1 - VESSEL</h4>
            {/* <p className='text-amber-500  md:pl-12'><b>(SOON)</b> Send SOL or Tokens to more than 1 wallet in one go.<br/></p> */}

          </a>

          <a
            
            className={styles.card}
          >
          <h4 className='font-bold  md:pl-12'>7. CHAMBER 2 - $CRIM</h4>
            {/* <p className='text-amber-500  md:pl-12'><b>(SOON)</b> NFT Sniper and Automated Trading in Solana Marketplaces.<br/></p> */}

          </a>

          <a
            
            className={styles.card}
          >
          <h4 className='font-bold  md:pl-12'>8. SHAKE THE TUBE.<br/><br/> CONFIRM ALL WALLET PROMPTS.</h4>
            <p className='text-amber-500  md:pl-12'>Around 6-7 prompts. Will cost around 0.03-0.04 SOL.<br/></p>

          </a>
          <br/>
          <br/>
          <a
            
            className={styles.card}
          >
          <h2 className='font-bold text-amber-500 md:pl-12'>⚜️ GO TO DEVNET SITE HERE ⚜️</h2>
          {/* <p className='text-white md:pl-12'>Advanced and Free Access to holders. Check out our NFT collection in Magiceden.<br/></p> */}

          </a>

          <a
            
            className={styles.card}
          >
          <h2 className='font-bold text-amber-500 md:pl-12'>✨UNSEAL AND EVOLVE!🔜✨</h2>
          <p className='text-white md:pl-12 text-center'>GO GET THAT SHINY!!<br/></p>

          </a>
          <br/>
          <br/>
        </div>
        <br/>
          <br/>
          <br/>
          <br/>
          


        <br/>
          <br/>
        <a href="https://discord.gg/7SrNbVyHDD">
        <h2 className='md:ml-22 p-12 mb-6 text-xs pt-1 pb-1 text-white text-center w-full bg-red-700 rounded-box'>          
        Coded in the Shadows | 👻 The Shady Class Buidl</h2>
        </a>
        <div className={styles.pic}>
          <div className='w-3/6 lg:w-3/12 mb-8'>
              <img src='/shad.png' />
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

export default tube
