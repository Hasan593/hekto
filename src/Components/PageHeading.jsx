/* eslint-disable react/prop-types */

const PageHeading = ({ pagename }) => {
    return (
      <section className="bg-gradient-to-r from-[#F6F5FF] to-[#E9E8FF] py-24 shadow-lg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-[34px] lg:text-[42px] font-extrabold text-[#101750] pb-4">
              {pagename}
            </h2>
            <h4 className="text-[14px] lg:text-[16px] font-lato font-medium text-[#000000]">
              Home <span className="text-gray-400">•</span> Pages{" "}
              <span className="text-gray-400">•</span>{" "}
              <span className="text-[#FB2E86]">{pagename}</span>
            </h4>
          </div>
        </div>
      </section>
    );
  };
  
  export default PageHeading;
  
