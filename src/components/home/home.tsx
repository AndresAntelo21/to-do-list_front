import { Navigator } from "@/components/navigator/navigator";
import { ProgressDay } from "@/components/progress/progress-day";
export const Home = () => {
    return (
        <>
            <Navigator />
            <main className="px-4">
                <ProgressDay />
            </main>
        </>
    )
}
