import React from "react";
import { Unbounded, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import EtoileSvg from "@/components/etoile";
import Fleche from "@/components/fleche";
import motor from "@/app/picture/moteur.jpg";
import soudure from "@/app/picture/soudure.jpg";
import Trend from "@/components/trend";
import Humaan from "@/components/humaan";
import Random from "@/components/random";

//fonts loading
const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "700"] });
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Page = () => {
  return (
    <section className="w-full h-full bg-white">
      <header className="flex flex-col justify-center items-center p-4 bg-primary h-fit pt-[200px] pb-[200px] gap-10 ">
        <div>
          <h2
            className={
              "font-bold antialiased lg:text-9xl md:text-8xl text-4xl " +
              unbounded.className
            }
          >
            ROADSTER
          </h2>
        </div>
        <nav
          className={
            space_Grotesk.className +
            " font-extrabold leading-[1.2em] flex items-end h-20 w-fit gap-2"
          }
        >
          <a
            href=""
            className=" md:text-3xl text-2xl text-[40px] text-highlight underline "
          >
            Acceuil
          </a>
          <a href="" className=" md:text-3xl text-2xl text-[20px] ">
            boutique
          </a>
          <a href="" className=" md:text-3xl text-2xl text-[20px] ">
            contact
          </a>
        </nav>
      </header>
      <section className="relative h-fit bg-white pt-[100px] pb-[100px] p-[100px] flex flex-col justify-center items-center gap-24 text-[#b54747]">
        <EtoileSvg />
        <section className="max-w-[1000px] flex gap-10 md:flex-row flex-col justify-center items-center min-w-[310px]">
          <h2
            className={`${unbounded.className} text-black text-4xl font-bold leading-[1.2em] text-left z-20`}
          >
            bienvenue chez Roadster!
          </h2>
          <p
            className={`${space_Grotesk.className} text-black antialiased m-0 p-0 text-[20px] font-normal leading-[1.5em] text-left`}
          >
            prenez place a board de nos superbe bolide de luxe et dexeption pour
            une route safe et sans probleme
          </p>
        </section>
        <section>
          <div className="flex gap-10 flex-col md:flex-row justify-center items-center flex-wrap">
            <div className="max-w-[360px] w-1/3 min-w-[310px] flex flex-col gap-6 h-[496px]">
              <Image
                src={motor}
                alt="img1"
                width={500}
                height={500}
                className="object-cover text-[12px] overflow-clip w-[326px] h-[326px]"
              />
              <h3
                className={
                  space_Grotesk.className +
                  " text-black text-2xl leading-[1.2em] text-left font-semibold text-primary"
                }
              >
                Des bolide au moteur digne dune fusée spacial a votre demande{" "}
              </h3>
            </div>
            <div className="max-w-[360px] w-1/3 min-w-[310px] flex flex-col gap-6 h-[496px]">
              <Image
                src={soudure}
                alt="img1"
                width={500}
                height={500}
                className="object-cover text-[12px] overflow-clip w-[326px] h-[326px]"
              />
              <h3
                className={
                  space_Grotesk.className +
                  " text-black text-2xl leading-[1.2em] text-left font-semibold text-primary"
                }
              >
                Des voiture fais de materiaux assurant votre protection vous
                guarentissant une securité maximal
              </h3>
            </div>
            <div className="max-w-[360px] w-1/3 min-w-[310px] flex flex-col gap-6 h-[496px]">
              <Image
                src={motor}
                alt="img1"
                width={500}
                height={400}
                className="object-cover text-[12px] overflow-clip w-[326px] h-[326px]"
              />
              <h3
                className={
                  space_Grotesk.className +
                  " text-black text-2xl leading-[1.2em] text-left font-semibold text-primary"
                }
              >
                Des bolide au moteur digne dune fusée spacial a votre demande{" "}
              </h3>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-white md:p-32 sm:p-8 p-2 ">
        <section className=" w-[100%] flex flex-col sm:gap-10 gap-2 items-center">
          <div className="flex flex-col sm:gap-10 gap-2 max-w-[1162px] w-full ">
            <div className="w-full bg-[#f2f2f2] h-[113px] rounded-[25px] flex flex-row justify-between items-center text-[#01161e] ">
              <div className="flex flex-row sm:gap-10 gap-2 items-center p-2">
                <Fleche className="" strokeWidth="8" />
                <div className="min-w-[200px]">
                  <h3
                    className={
                      space_Grotesk.className +
                      " text-[#01161e] text-2xl leading-[1.2em] text-left font-semibold "
                    }
                  >
                    Satisfaction des client
                  </h3>
                  <p className={unbounded.className + " font-thin"}>
                    un servive traiteur toujours disponible
                  </p>
                </div>
              </div>
              <Fleche className="hidden sm:block" />
            </div>
          </div>
          <div className="flex flex-col sm:gap-10 gap-2 max-w-[1162px] w-full ">
            <div className="w-full bg-[#f2f2f2] h-[113px] rounded-[25px] flex flex-row justify-between items-center text-[#01161e] ">
              <div className="flex flex-row sm:gap-10 gap-2 items-center">
                <EtoileSvg
                  className="relative w-[90px] h-full text-[#01161e] stroke-current rot"
                  strokeWidth="10"
                />
                <div className="min-w-[200px]">
                  <h3
                    className={
                      space_Grotesk.className +
                      " text-[#01161e] text-2xl leading-[1.2em] text-left font-semibold "
                    }
                  >
                    Des auportunité sans concurence
                  </h3>
                  <p className={unbounded.className + " font-thin"}>
                    jusqua -70% pour des offre limitée
                  </p>
                </div>
              </div>
              <Fleche className="hidden sm:block" />
            </div>
          </div>
          <div className="flex flex-col sm:gap-10 gap-2 max-w-[1162px] w-full ">
            <div className="w-full bg-[#f2f2f2] h-[113px] rounded-[25px] flex flex-row justify-between items-center text-[#01161e] ">
              <div className="flex flex-row sm:gap-10 gap-2 items-center">
                <Trend
                  className="relative w-[90px] h-full text-[#01161e] stroke-current rot"
                  strokeWidth="10"
                />
                <div className="min-w-[200px]">
                  <h3
                    className={
                      space_Grotesk.className +
                      " text-[#01161e] text-2xl leading-[1.2em] text-left font-semibold "
                    }
                  >
                    Achat
                  </h3>
                  <p className={unbounded.className + " font-thin"}>
                    Achat et livraison simple sans tracat
                  </p>
                </div>
              </div>
              <Fleche className="hidden sm:block" />
            </div>
          </div>
        </section>
      </section>
      <section className="text-black md:p-32 sm:p-8 p-2 relative">
        <h2
          className={unbounded.className + " text-secondary text-4xl font-bold"}
        >
          pourquoi acheter chez nous
        </h2>
        <div className=" p-4 flex justify-between items-center gap-4 flex-wrap lg:flex-nowrap">
          <div className=" min-w-[63%] flex flex-col gap-4 max-w-[700px]">
            <p className={space_Grotesk.className + " text-xl "}>
              parceque nous analyson chaque detail relative au voiture que nous
              vendons pour vous assurer les meilleure affaire et les meilleure
              qualité{" "}
            </p>
            <p className={space_Grotesk.className + " text-xl "}>
              notre service de Profesionel disponible pout toute reparation sur
              votre voiture en cas de deffailance avec les meilleure outils du
              marché
            </p>
            <p className={space_Grotesk.className + " text-xl "}>
              notre equipe de profesionel qui annalyse les marché vous denichant
              du premium a des prix sans concurence
            </p>
          </div>
          <Humaan />
        </div>
        <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              backgroundImage:
                "radial-gradient(rgb(1, 22, 30) 1px, transparent 1px), radial-gradient(rgb(1, 22, 30) 1px, rgb(255, 255, 255) 1px)",
              backgroundPosition: "0 0, 30px 30px",
              backgroundSize: "60px 60px",
              borderRadius: "0",
            }}
            className="w-[300px] h-[300px] -z-10 bg-[#f2f2f2] top-0 left-0 absolute"
          ></div>
      </section>
      <section className="flex flex-col justify-center items-center gap-10  md:p-32 sm:p-8 p-2 ">
        <Random />
        <h2 className={unbounded.className+" text-2xl text-secondary text-center text-black md:text-6xl sm:text-4xl "}>La route vers lincroyable est juste un click vers notre boutique, soyez pret a mettre en marche les moteur</h2>
        <div className="flex gap-10 flex-row">
          <div className={space_Grotesk.className+" font-semibold text-xl bg-black p-3 text-[#aec3b0]"}>Find my car</div>
          <div className={space_Grotesk.className+" font-semibold text-xl bg-[#598392] p-3 text-[#ffffff]"}>Login</div>
        </div>
      </section>
      <section className="p-[100px] bg-[#ffffff] flex justify-center items-center gap-10 text-primary">
            <Random />
            <Fleche className="w-[100px] h-[100px] text-[#01161e] min-w-[100px]"/>
            <Random />
      </section>
      <footer className={unbounded.className+" text-black flex justify-center font-bold p-2"}>© 2024, RoadsterHQ, where your dream ride comes to life.</footer>
    </section>
  );
};

export default Page;
