import Logo from '../assets/gameverselogo.png'

export default function Hero(){
    return(
        <section id='hero'>
            <div className="header w-screen my-8  grid grid-cols-[0.75fr_3fr_0.75fr] items-center">
                <div className="logo justify-self-end">
                  <img src={Logo} alt='gameverse-logo' />
                </div>
                <div className="navbar text-lg font-light text-[#868e96] justify-self-center">
                    <ul className='flex gap-4'>
                        <button>Latest</button>
                        <button>Explore</button>
                        <button>Categories</button>
                        <button>Subsriptions</button>
                        <button>Collections</button>
                    </ul>
                </div>
                <div className='auth text-lg font-light text-[#868e96] justify-self-start'>
                    <ul className='flex gap-3'>
                        <button>Login</button>
                        <button className='bg-amber-50 text-[#212529] px-2 py-1.25 font-normal rounded-2xl hover:bg-[#ced4da] hover:text-[#212529]'>Sign up</button>
                    </ul>
                </div>
            </div>
            <div className="title text-center">
                <h2 className="audiowide text-9xl mt-48 mb-8 ">Gameverse</h2>
                <p className='text-xl font-thin text-[#dee2e6] tracking-widest'>Interactive interface for discovering and exploring games</p>
            </div>            
        </section>
    )
}