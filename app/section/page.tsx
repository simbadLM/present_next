import Link from 'next/link';
import Image from 'next/image';

export default function Section () {
    return ( 
        <section className="p-20 flex">
            <div>
            <Image  
                        className="m-20 p-10 rounded-full"
                        src="/profile.jpg" 
                        alt="Photo de profil" 
                        width={250}
                        height={250}
                    />
            </div>
            <div  className="m-20">
            <h2>Mon Parcours</h2>
                <p>Après un bac littéraire et un bac professionnel en mécanique, j'ai commencé à travailler. 
                    Pendant le confinement, j'ai décidé de me lancer dans l'e-commerce en utilisant le CMS Shopify. 
                    C'est là que j'ai mis un premier pied dans le monde du code en cherchant à personnaliser mes projets par moi-même.</p>
                <p>J'ai appris les bases du HTML, du CSS et du langage C, ce qui a éveillé mon intérêt pour la programmation. 
                    J'ai développé le désir de me reconvertir dans ce domaine. Malheureusement, le confinement a pris fin, et j'ai dû reprendre une activité salariée. 
                    Pendant deux ans, j'ai travaillé dans le secteur de la restauration, occupant des postes de management et d'exécutif pur.</p>
                <p>En 2022, j'ai ressenti à nouveau l'appel de la formation en développement. Cela m'a conduit à une décision importante : en septembre 2023, 
                    j'ai intégré le BTS SIO au Greta de Quimper pour devenir développeur.</p>
            </div>
    </section>
    )
}