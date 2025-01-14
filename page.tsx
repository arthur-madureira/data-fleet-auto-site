"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function Logo({ className = "", size = "medium", showText = true }: { className?: string, size?: "small" | "medium" | "large", showText?: boolean }) {
  const sizes = {
    small: {
      container: "p-2",
      svg: "w-8 h-8",
      text: "text-lg"
    },
    medium: {
      container: "p-4",
      svg: "w-16 h-16",
      text: "text-2xl"
    },
    large: {
      container: "p-6",
      svg: "w-24 h-24",
      text: "text-4xl"
    }
  }

  const sizeClass = sizes[size]

  return (
    <div className={`flex items-center ${sizeClass.container} ${className}`}>
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`mr-3 ${sizeClass.svg}`}
      >
        <path d="M47.3889 0.0195503C43.2473 0.37344 40.2748 1.17196 37.0214 2.79622C29.1732 6.72529 23.772 14.3838 22.6936 23.1131C22.6211 23.7301 22.5576 24.3018 22.5576 24.3925C22.5576 24.5468 22.8023 24.5558 27.5148 24.5377L32.472 24.5105L32.5807 23.6394C33.5776 15.6996 40.1207 9.69251 48.1592 9.33862C53.8051 9.09363 59.3786 11.9973 62.4689 16.8157C63.6832 18.7031 64.5714 21.0805 64.8795 23.2401C64.9339 23.6394 64.9973 24.1021 65.0245 24.2564L65.0698 24.5558H70.0451C74.7667 24.5558 75.0295 24.5468 75.0295 24.3925C75.0295 24.3018 74.9661 23.7301 74.8936 23.1131C73.4073 11.1444 63.9551 1.68011 52.0017 0.191957C50.887 0.0558472 48.1682 -0.0439682 47.3889 0.0195503Z" fill="white"></path>
        <path d="M14.8996 24.8825C11.8364 25.2909 9.07238 26.4251 6.65269 28.2581C5.85519 28.8661 4.31457 30.3905 3.66207 31.2253C0.934257 34.7098 -0.370742 39.1742 0.091445 43.4118C0.444882 46.7329 1.63207 49.6729 3.66207 52.2772C4.43238 53.2663 6.10894 54.8724 7.15113 55.6074C8.77332 56.7598 11.0571 57.8033 12.9693 58.2661C13.8664 58.4838 14.0205 58.4929 16.8208 58.4929H19.748L19.5577 58.0211C18.878 56.297 18.6514 53.7744 19.0139 51.9051C19.1771 51.0613 19.4308 50.1538 19.7027 49.4824C19.7661 49.3372 19.6664 49.3281 18.4158 49.3281C16.9296 49.3281 16.3224 49.2464 15.3074 48.9107C13.1958 48.2211 11.2474 46.2701 10.5586 44.1559C9.82457 41.9237 10.0511 39.6279 11.2021 37.6679C11.9814 36.325 13.5674 34.9638 14.9539 34.4375C16.1955 33.9566 16.2046 33.9566 20.4277 33.9113L24.4061 33.8568L28.3302 29.3651C30.478 26.897 32.2452 24.8462 32.2452 24.8009C32.2542 24.7646 28.5568 24.7374 24.0346 24.7464C17.6908 24.7555 15.5974 24.7827 14.8996 24.8825Z" fill="white"></path>
        <path d="M29.1549 45.4353C27.433 45.6894 25.7565 46.4788 24.4877 47.6403C22.5574 49.4098 21.479 52.377 21.8233 54.9903C22.3671 59.0555 25.3305 61.9864 29.4268 62.4946C31.8918 62.8031 34.6377 61.8503 36.4321 60.0446C38.2355 58.2479 39.1871 55.4985 38.879 53.0303C38.6887 51.4605 38.2083 50.2083 37.3111 48.9016C35.5893 46.4062 32.2361 44.9816 29.1549 45.4353Z" fill="white"></path>
      </svg>
      {showText && (
        <span className={`text-white font-bold ${sizeClass.text}`}>DATA FLEET AUTO</span>
      )}
    </div>
  )
}

export default function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(19,51,139)] to-[rgb(29,77,192)]">
      <header
        className={`fixed w-full transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="bg-[rgb(19,51,139)] px-4 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="text-white">
              <Logo size="small" showText={false} />
            </Link>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => scrollToSection("sobre-nos")}
                  className="text-white hover:text-gray-200 transition-colors text-sm font-medium"
                >
                  Sobre nós
                </button>
                <button
                  onClick={() => scrollToSection("parceiros")}
                  className="text-white hover:text-gray-200 transition-colors text-sm font-medium"
                >
                  Parceiros
                </button>
                <button
                  onClick={() => scrollToSection("solucoes")}
                  className="text-white hover:text-gray-200 transition-colors text-sm font-medium"
                >
                  Soluções
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-20">
        <section className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center py-12">
          <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <Logo size="large" className="w-full max-w-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transformando dados em{" "}
              <span className="text-blue-300">eficiência</span> para sua frota automotiva
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Oferecemos soluções inteligentes para toda a cadeia automotiva, entregando o{" "}
              <span className="font-semibold">sistema de gestão</span> mais completo do setor
            </p>
          </div>
        </section>

        <section id="sobre-nos" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Sobre nós</h2>
          <div className="bg-white bg-opacity-10 p-8 rounded-lg">
            <p className="text-gray-200 text-lg">
              A Data Fleet Auto é uma empresa inovadora especializada em soluções de gestão de dados para o setor automotivo. 
              Nossa missão é transformar e otimizar a operação de frotas e negócios automotivos, oferecendo tecnologia de ponta 
              e insights valiosos para nossos parceiros e clientes.
            </p>
          </div>
        </section>

        <section id="parceiros" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Parceiros</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="bg-white bg-opacity-10 p-4 rounded-lg flex items-center justify-center">
                <div className="text-white text-xl font-semibold">Parceiro {partner}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="solucoes" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Soluções</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Gestão de Frota', 'Manutenção Preditiva', 'Análise de Desempenho'].map((solution) => (
              <div key={solution} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{solution}</h3>
                <p className="text-gray-200">
                  Nossa solução de {solution.toLowerCase()} utiliza tecnologia avançada para otimizar a eficiência
                  e reduzir custos em sua operação automotiva.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

