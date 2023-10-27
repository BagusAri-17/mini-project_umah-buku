import {BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter, BiLogoYoutube, BiMailSend} from 'react-icons/bi'

const Footer = () => {
  return (
    <>
        <footer className="mt-20 py-10 bg-primary">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className=" md:col-start-1">
                        <h4 className="footer-title">Follow Us</h4>
                        <div className="flex items-center gap-2 mt-4 justify-start md:justify-center">
                            <BiLogoFacebook color='#ffffff' size={24} />
                            <div className="w-8 h-[1px] bg-[#CECECA]"></div>
                            <BiLogoInstagramAlt color='#ffffff' size={24} />
                            <div className="w-8 h-[1px] bg-[#CECECA]"></div>
                            <BiLogoTwitter color='#ffffff' size={24} />
                            <div className="w-8 h-[1px] bg-[#CECECA]"></div>
                            <BiLogoYoutube color='#ffffff' size={24} />
                        </div>
                        <p className="mt-6 footer-description">umahbuku.official@gmail.com</p>
                    </div>
                    <div className="md:col-start-3">
                        <h4 className="footer-title">Newsletter</h4>
                        <p className="mt-2 footer-description">Follow our latest stories.</p>
                        <form className="w-full">
                            <div className="flex items-center border-b border-white py-2">
                                <input
                                    className="newsletter w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none bg-primary"
                                    type="text"
                                    placeholder="E-Mail"
                                    aria-label="Full name"
                                />
                                <BiMailSend color='#ffffff' size={24} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer