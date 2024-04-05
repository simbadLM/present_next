import Link from 'next/link';
import Image from 'next/image';

export default function Projet () {
    return ( 
        <section className="sm:p-20 mt-0 sm:items-center block justify-center">
            <h2 className='flex mb-5 sm:align-items  justify-center'>Projets</h2>

            <div id="projetGlobal" className='m-auto resize w-[461px]  h-[260px] block sm:justify-center sm:items-center'>
                <div id="animRotate" className=' sm:items-center resize w-[461px] h-[260px] '>
                    <div id="projet" >
                        <Link href="/project/">
                            <Image  
                                    className="resize w-[461px] h-[260px]"
                                    src="/mu2.png" 
                                    alt="Photo de profil" 
                                    width={922}
                                    height={519}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}