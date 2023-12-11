import Link from 'next/link'
import Image from 'next/image'

export default function Header () {
    return (
        <header className="text-black fixed top-0 left-0 right-0 bg-white m-auto p-8 z-1 flex ">
        <nav className="items-center m-auto">
            <ul className="flex space-x-8 ">
                <li className="left-10 fixed content-center">
                    <Image  
                        className="rounded-3xl"
                        src="/profile.jpg" 
                        alt="Photo de profil" 
                        width={50}
                        height={50}
                    />
                </li>
                <li><a id="a" href="#present">Présentation</a></li>
                <li><a id="a" href="#project">Projets</a></li>
            
            </ul>
    </nav>
    <nav  className="flex justify-end">
        <ol className="flex right-10 absolute content-center space-x-4">
            <li><Link 
                    href="https://www.linkedin.com/in/quentin-balloy-02469a297/">
                    <Image
                        src="/linkedin.png" 
                        title="Linkedin de Quentin Balloy" 
                        alt="logo de linkedin" 
                        width={18}
                        height={18}   
                    />
                </Link>
            </li>
            <li>
                <Link 
                    href="https://github.com/XP3rS0na">
                    <Image 
                        src="/github.png" 
                        title="Github de Quentin Balloy" 
                        alt="logo de Github"
                        width={20}
                        height={20}
                    />
                </Link>
            </li>
        </ol>
    </nav>
    
    </header>
    )
}