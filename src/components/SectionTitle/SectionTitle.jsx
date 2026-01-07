

const SectionTitle = ({ heading, Subheading }) => {
    return (
        <div className="mx-auto text-center">
            <h3 className=" text-3xl sm:text-5xl uppercase sm:py-5 font-bold text-blue-600 dark:text-white text-center sm:mb-10">{heading}</h3>
            <h5 className="text-2xl uppercase py-3">{Subheading}</h5>
        </div>
    );
};

export default SectionTitle;