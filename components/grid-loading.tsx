
export default function GridLoadingSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-[30px]">
            {Array.from({length: 8}).map((_, idx) => (
                <div key={idx} className="group rounded-xl shadow-xl p-6 border border-gray-300 animate-pulse">
                    <div className="relative overflow-hidden rounded-md bg-gray-300 h-[240px] w-full mb-5"></div>
                    <div className="flex flex-col space-y-2">
                        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            ))
        }
        </div>
    )
}