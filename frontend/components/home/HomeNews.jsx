const NewsCard = ({ time, title, image }) => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center w-[100%]">
            <img src={image} alt={title} className="w-full h-auto object-cover" />
            <h1 className="text-[12px] text-black">{time}</h1>
            <p className="text-[16px] text-black">{title}</p>
        </div>
    )
}


const HomeNews = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 gap-10 px-12">
            <h1 className="text-4xl font-bold text-center text-black">Recent News</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <NewsCard time="2024-12-04" title="title" image="https://via.placeholder.com/100" />
                <NewsCard time="2024-12-04" title="title" image="https://via.placeholder.com/100" />
                <NewsCard time="2024-12-04" title="title" image="https://via.placeholder.com/100" />
            </div>
        </div>
    )
}

export default HomeNews