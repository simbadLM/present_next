import Link from 'next/link';
import Image from 'next/image';

export default function Projet () {
    return ( 
        <section className="sm:p-20 mt-0 sm:align-items  justify-center">
            <h2 className='flex mb-5 sm:align-items  justify-center'>Projets</h2>

            
            <div className=' flex sm:justify-center items-center'>
                <div id="projet" >
                    <Image  
                            
                            className="resize w-[461px] h-[260px] "
                            src="/mu2.png" 
                            alt="Photo de profil" 
                            width={922}
                            height={519}
                    />
                </div>
                <div className='border-solid border-4 border-red w-[461px] h-[260px] flex items-center justify-center' id="projet_hid">
                    <div className=" mt-4 block space-2">
                        <Link className=" text-center  m-2 block focus:bg-[#a5b4fc] focus:opacity-20 hover:opacity-70 rounded-md bg-[#a5b4fc] opacity-85 py-3 px-8 text-base font-semibold text-white outline-none" href="http://localhost:3000/" target='blank'>Accès à la page</Link>
                        <Link className=" text-center m-2 block focus:bg-[#a5b4fc] focus:opacity-20 hover:opacity-70 rounded-md bg-[#a5b4fc] opacity-85 py-3 px-8 text-base font-semibold text-white outline-none"   href="https://github.com/XP3rS0na" target='blank'>Accès au projet Github</Link>
                    </div>
                </div>
            
            </div>
          
    </section>
    )
}