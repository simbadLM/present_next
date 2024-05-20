import Link from 'next/link';
import Image from 'next/image';

export default function Section () {
    return ( 
        <section className="sm:p-20 mt-10 sm:flex">
            <div id="present"></div>
            <div>
            <Image  
                        className="m-20 mb-0 sm:mb-0 p-10 rounded-full"
                        src="/profile.jpg" 
                        alt="Photo de profil" 
                        width={250}
                        height={250}
                    />
            </div>
            <div  className="inline-block mb-10 mt-5 sm:mt-5 m-20">
            <h2>Mon Parcours</h2>
                <p> Après un bac littéraire et un bac professionnel en mécanique, j&apos;ai travillé dans les secteurs qui m&apos;attiraient ou me permettaient de voyager. 
                    Pendant le 1er confinement, j&apos;ai décidé de lancer une boutique d&apos;e-commerce en utilisant le CMS Shopify. 
                </p>
                <p className="mt-3">En cherchant à personnaliser mes projets par moi-même, j&apos;ai appris les bases du HTML, du CSS et du langage C. 
                    J&apos;ai commencé alors à mûrir un projet de formation dans le développement. Malheureusement, le confinement a pris fin, et j&apos;ai dû reprendre une activité salariée. 
                    Pendant deux ans, j&apos;ai travaillé dans le secteur de la restauration, occupant des postes de management ou d&apos;exécutif et gardant en tête cette appétence nouvellement découverte pour la programmation.</p>
                <p className="mt-3">En 2022, l&apos;arrivée de ma fille m&apos;a conduit à repenser ma balance vie professionnelle / personnelle et j&apos;ai décidé de m&apos;inscrire à la rentrée 2023 du BTS SIO au GRETA de Quimper.</p>
                <p className="mt-3">Ce BTS Services Informatiques aux Organisations option SLAM (Solutions Logicielles et Applications Métiers) que je suis est une formation pour adulte proposé par l&apos;agence de Quimper du GRETA de Bretagne Occidentale. Réalisé en un an (soit environ 1100 heures),
                    il permet d&apos;obtenir les bases nécessaires à une professionnalisation dans le secteur du développement. Du HTML à Java, en passant par CSS, JavaScript, PHP, et MySQL, j&apos;ai pu obtenir une vue d&apos;ensemble sur les langages de programmation. 
                    Pensée pour des stagiaires adultes, l&apos;approche pédagogique des formateurs (en quasi-totalité des encadrants professionnels) permet d&apos;être proactif dans la formation et de progresser rapidement. Étant un diplôme d&apos;État, des matières générales 
                    (Culture Générale et Expression, Culture économique, juridique et managériale) et professionnelles (Informatique du développement, bases de données, réseaux, mathématiques appliquées) se complètent au sein de ce BTS et permettent d&apos;envisager sereinement une poursuite d&apos;études à l&apos;issu de la formation.</p>
            </div>
    </section>
    )
}