import { Navigator } from "@/components/navigator/navigator";
import { ActionBar } from "../action-bar/action-bar";
import { ProgressDay } from "../progress/progress-day";
import { InProgress } from "./in-progress/in-progress";
// import { ProgressDay } from "@/components/progress/progress-day";
// import { ActionBar } from "@/components/action-bar/action-bar";
export const Home = () => {
    return (
        <div className="flex flex-col" >
            <Navigator />
            <main className="flex flex-col p-4 gap-4 h-auto mb-70">
                <ProgressDay />
                <InProgress />
                <ProgressDay />
                <ProgressDay />
                <ProgressDay />
                <ProgressDay />
            </main>
            <ActionBar />
        </div>
    )
}
