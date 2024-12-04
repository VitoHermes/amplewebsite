const Card = ({ title, description, image }) => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center ">
            <img src={image} alt={title} />
            <h1 className="text-[19px] font-bold text-black">{title}</h1>
            <p className="text-[16px] text-black">{description}</p>
        </div>
    )
}

const HomeDetails = () => {
    return (
        <div className="flex flex-row gap-10 items-center justify-center px-12">
            <Card
                title="One Award"
                description="Financial Sector Technology and Innovation (FSTI) Innovation Acceleration From Monetary Authority of Singapore(MAS)"
                image="https://via.placeholder.com/100"
            />
            <Card
                title="Two Pilots"
                description="RBA CBDC Pilot: CBDC, Stablecoin, Invoice Tokenization Project DESFT: Credential, PBM-based Escrow Payment, Forex"
                image="https://via.placeholder.com/100"
            />
            <Card
                title="Three Central Banks"
                description="Monetary Authority of Singapore(MAS), Bank of Ghana(BOG) and Reserve Bank of Australia (RBA) "
                image="https://via.placeholder.com/100"
            />
        </div>
    )
}

export default HomeDetails