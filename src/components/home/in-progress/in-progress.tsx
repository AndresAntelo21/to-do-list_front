import { InProgressCard } from "./in-progress-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export const InProgress = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex gap-4 items-center z-2">
                <h1 className="text-3xl font-bold">In Progress</h1>
                <div className="size-7 rounded-full bg-blue-600/30 flex items-center justify-center">
                    <span className="font-semibold">7</span>
                </div>
            </div>
            <InProgressCard />
        </div >
    );
};