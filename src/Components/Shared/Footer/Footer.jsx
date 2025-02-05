import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const Footerr = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Footer bgDark className="bg-slate-300 mt-10">
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <FooterTitle title="Company" />
                        <FooterLinkGroup col className="mt-5">
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Brand Center</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="help center" />
                        <FooterLinkGroup col className="mt-5">
                            <FooterLink href="#">Discord Server</FooterLink>
                            <FooterLink href="#">Twitter</FooterLink>
                            <FooterLink href="#">Facebook</FooterLink>
                            <FooterLink href="#">Contact Us</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="legal" />
                        <FooterLinkGroup col className="mt-5">
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Licensing</FooterLink>
                            <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="download" />
                        <FooterLinkGroup col className="mt-5">
                            <FooterLink href="#">iOS</FooterLink>
                            <FooterLink href="#">Android</FooterLink>
                            <FooterLink href="#">Windows</FooterLink>
                            <FooterLink href="#">MacOS</FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright className="text-center" href="#"  by=" HL-Dream™"  year={currentYear} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 justify-between">
                        <FooterIcon href="#" icon={BsFacebook} />
                        <FooterIcon href="#" icon={BsInstagram} />
                        <FooterIcon href="#" icon={BsTwitter} />
                        <FooterIcon href="#" icon={BsGithub} />
                        <FooterIcon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default Footerr;
