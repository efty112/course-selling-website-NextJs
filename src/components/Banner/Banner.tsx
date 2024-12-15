const Banner = ({ name }: { name: string }) => {

    return (
        <div className='w-full lg:h-96 h-64 mb-10'>
            <div className="h-full bg-gradient-to-tr from-[#3205a9] to-[#040404]">
                <div className="w-full h-full flex items-center justify-center">
                    <h1 className="text-5xl text-white text-center uppercase font-bold">{name}</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;