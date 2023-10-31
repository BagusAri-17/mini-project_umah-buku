import TimImage from "../../assets/image/team-kami-1.png"
import IconLily from "../../assets/icons/icon-lily-flower.svg"
import IconDiamond from "../../assets/icons/icon-diamond.svg"
import { BiLogoInstagramAlt, BiLogoTwitter, BiLogoLinkedinSquare } from "react-icons/bi"

const Tim = () => {
  return (
    <section className="my-20 lg:my-40">
        <div className="container">
            {/* Title */}
            <div>
                <div>
                    <img className="mx-auto w-6 lg:w-9" src={IconLily} alt="Flower Icon" />
                </div>
                <div className="mt-2 md:mt-4">
                    <div className="flex items-center gap-4 justify-center">
                        <img src={IconDiamond} alt="Diamond Icon" />
                        <h2 className="section-title">Tim Kami</h2>
                        <img src={IconDiamond} alt="Diamond Icon" />
                    </div>
                    <p className="section-description">Orang dibalik Umah Buku</p>
                </div>
            </div>

            {/* Content */}
            <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="mx-auto">
                    <img src={TimImage} alt="" />
                    <div className="mt-6 flex flex-col gap-2">
                        <p className="text-primary/60 text-base">FrontEnd</p>
                        <p className="uppercase text-primary text-xl">Maria Smith</p>
                        <div className="flex gap-2">
                            <a href="">
                                <BiLogoTwitter size={20} />
                            </a>
                            <a href="">
                                <BiLogoInstagramAlt size={20} />
                            </a>
                            <a href="">
                                <BiLogoLinkedinSquare size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-0 lg:mt-8">
                    <img src={TimImage} alt="" />
                    <div className="mt-6 flex flex-col gap-2">
                        <p className="text-primary/60 text-base">FrontEnd</p>
                        <p className="uppercase text-primary text-xl">Maria Smith</p>
                        <div className="flex gap-2">
                            <a href="">
                                <BiLogoTwitter size={20} />
                            </a>
                            <a href="">
                                <BiLogoInstagramAlt size={20} />
                            </a>
                            <a href="">
                                <BiLogoLinkedinSquare size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <img src={TimImage} alt="" />
                    <div className="mt-6 flex flex-col gap-2">
                        <p className="text-primary/60 text-base">FrontEnd</p>
                        <p className="uppercase text-primary text-xl">Maria Smith</p>
                        <div className="flex gap-2">
                            <a href="">
                                <BiLogoTwitter size={20} />
                            </a>
                            <a href="">
                                <BiLogoInstagramAlt size={20} />
                            </a>
                            <a href="">
                                <BiLogoLinkedinSquare size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-0 lg:mt-8">
                    <img src={TimImage} alt="" />
                    <div className="mt-6 flex flex-col gap-2">
                        <p className="text-primary/60 text-base">FrontEnd</p>
                        <p className="uppercase text-primary text-xl">Maria Smith</p>
                        <div className="flex gap-2">
                            <a href="">
                                <BiLogoTwitter size={20} />
                            </a>
                            <a href="">
                                <BiLogoInstagramAlt size={20} />
                            </a>
                            <a href="">
                                <BiLogoLinkedinSquare size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tim