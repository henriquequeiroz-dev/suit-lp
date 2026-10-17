'use client'

import { useState } from 'react'
import Image from 'next/image'
import logoHeader from '../../../public/logo-text-white.png'
import { ListIcon, XIcon } from '@phosphor-icons/react/dist/ssr'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        <section>
            <div className="bg-[linear-gradient(to_right,#020F43_20%,#0340E9_50%,#4443B8_100%)]
                text-white relative overflow-hidden">

                <div className="container mx-auto mb-3 mt-3">

                    <article className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center lg:gap-6">

                        <div className="flex overflow-hidden items-center justify-center">
                            <Image
                                src={logoHeader}
                                alt='Image logo'
                                width={220}
                                className='w-45 sm:w-55 h-auto'
                                priority
                            />
                                {menuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
                            <button
                                type='button'
                                className='lg:hidden p-2'
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label={menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
                                aria-expanded={menuOpen}
                                aria-controls='header-navigation'
                            >

                            </button>

                        </div>

                        <nav
                            id='header-navigation'
                            aria-label='Menu principal'
                            className={`
                                    ${menuOpen ? 'flex' : 'hidden'}
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-5
                                    py-5
                                    text-[15px]
                                    font-bold
                                    whitespace-nowrap
                                    lg:flex
                                    lg:flex-row
                                    lg:justify-end
                                    lg:gap-4
                                    lg:py-0
                                `}
                        >
                            <a href="#" onClick={() => setMenuOpen(false)}>Início</a>
                            <a href="#" onClick={() => setMenuOpen(false)}>Sobre</a>
                            <a href="#" onClick={() => setMenuOpen(false)}>Lookbook</a>
                            <a href="#" onClick={() => setMenuOpen(false)}>Depoimentos</a>
                            <a href="#" onClick={() => setMenuOpen(false)}>Como Funciona</a>
                            <a href="#" onClick={() => setMenuOpen(false)}>Contato</a>
                        </nav>

                    </article>
                </div>
            </div>
        </section>
    )
}