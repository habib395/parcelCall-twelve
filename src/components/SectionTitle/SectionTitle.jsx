

const SectionTitle = ({ heading, Subheading }) => {
    return (
        <div className="mx-auto text-center">
            <h3 className="text-5xl uppercase py-5">{heading}</h3>
            <h5 className="text-2xl uppercase py-3">{Subheading}</h5>
        </div>
    );
};

export default SectionTitle;