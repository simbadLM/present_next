import Image from "next/image"  
import Header  from '../header/page'
import Link from "next/link"

export default function Section () {
    return ( 
        <body id="projetGlobal">
            <Header />
                <main className="relative min-h-screen flex flex-col justify-center bg-[#1f2039] overflow-hidden">
                    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

                            <div className="w-full max-w-3xl mx-auto">
                            
                                <div className="-my-6">

                                    </div>
                                    <div className="relative pl-8 sm:pl-32 py-6 group">
                                        <div className="font-caveat font-medium text-2xl text-[#a5b4fc] mb-1 sm:mb-0"><p>BlackJack</p></div>
                                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 mb-3 sm:mb-0 text-black bg-[#a5b4fc] rounded-full">11/2023</time>
                                            <div className="text-l italic text-white">HTML, CSS, JavaScript</div>
                                        </div>
                                        <div className="text-gray-400 font-semibold ">Ce projet a pour but principal d&aposapprendre à manipuler JavaScript. Il consiste à réaliser une application web de jeu du BlackJack.</div>
                                    </div>
                                    
                                    <div className="relative pl-8 sm:pl-32 py-6 group">
                                        <div className="font-caveat font-medium text-2xl text-[#a5b4fc] mb-1 sm:mb-0">Portfolio</div>
                                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-[#a5b4fc] rounded-full"><p>12/2023</p></time>
                                            <div className="text-l italic text-white">NextJS, React, TypeScript</div>
                                        </div>
                                        <div className="text-gray-400 font-semibold ">
                                            <p>Ce projet personnel (que vous parcourez en ce moment même) a pour but de prendre en main le Framework NextJS, basé sur React.</p>
                                            <p>Utilisation de Nodemailer pour créer un service de mailing.</p>
                                        </div>
                                        <div className="text-[#a5b4fc]"><a target="_blank" href="https://github.com/simbadLM/present_next"><p>→ Lien GitHub ←</p></a></div>
                                    </div>
                                    
                                    <div className="relative pl-8 sm:pl-32 py-6 group">
                                        <div className="font-caveat font-medium text-2xl text-[#a5b4fc] mb-1 sm:mb-0">Click & Clean</div>
                                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-[#a5b4fc] rounded-full">02/2024</time>
                                            <div className="text-l italic text-white">Java EE, JavaFX, Maven, MySQL</div>
                                        </div>
                                        <div className="text-gray-400 font-semibold ">
                                            <p>Click & Clean est une application de mise en relation entre prestataires de ménage et propriétaires de biens.</p>
                                        </div>
                                        <div className="text-[#a5b4fc]"><a target="_blank" href="https://github.com/simbadLM/ClickNClean"><p>→ Lien GitHub ←</p></a></div>
                                    </div>
                                    <div className="relative pl-8 sm:pl-32 py-6 group">
                                        <div className="font-caveat font-medium text-2xl text-[#a5b4fc] mb-1 sm:mb-0">Centrale Inertielle</div>
                                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-[#a5b4fc] rounded-full">03/2024</time>
                                            <div className="text-l italic text-white">C++, Python, JavaScript</div>
                                        </div>
                                        <div className="text-gray-400 font-semibold ">
                                            <p>Ce projet consiste à réaliser une centrale inertielle et à l&aposutiliser pour intéragir avec le simulateur de vol FlightGear et des instruments de vol (interface web).</p>
                                            <li>Lecture des données de modules(gyroscopes + accéléromètres  3 axes (MPU6050) / magnétomètre (QMC5883L)) avec un Arduino Uno(C++).</li>
                                            <li>Interaction avec le modèle 3D de la simulation de vol FlightGear (Python).</li>
                                            <li>Interaction avec les instruments de vols dans une page web (Python + JavaScript).</li>
                                        </div>
                                        <div className="text-[#a5b4fc]"><a target="_blank" href="https://github.com/simbadLM/centrale_inertielle"><p>→ Lien GitHub ←</p></a></div>
                                    </div>

                                </div>
                        </div>
                    </div>
                </main>
        </body>  
    )}