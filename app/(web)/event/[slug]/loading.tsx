import Container from "@/components/container";

export default function EventLoadingSkeleton() {
    return (
        <div className="my-8">
            <Container>
                <div
                    className="relative h-[765px] lg:h-[595px] rounded-md overflow-hidden flex flex-col gap-10 lg:flex-row items-start lg:items-center justify-between py-10 px-10 xl:px-20 bg-gray-200 animate-pulse">
                    <div className="absolute inset-0 bg-gray-300 opacity-60"></div>

                    <div className="relative top-16 lg:top-0 max-w-[590px] flex flex-col gap-6">
                        <div className="h-10 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-6 bg-gray-300 rounded w-5/6"></div>
                    </div>

                    <div className="relative p-6 bg-white rounded-[10px] md:min-w-[385px]">
                        <div className="h-8 bg-gray-300 rounded mb-3"></div>
                        <div className="h-6 bg-gray-300 rounded"></div>
                        <div className="h-6 bg-gray-300 rounded mt-2"></div>
                    </div>
                </div>

                <div className="mt-10 px-10 xl:px-20 flex flex-col lg:flex-row items-start gap-20">
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="h-8 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-16 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="h-8 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-16 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </Container>
        </div>
    );
}