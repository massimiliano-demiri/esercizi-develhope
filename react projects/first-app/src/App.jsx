import { AllertClock } from "./AllertClock";
function handleClick() {
    const now = new Date();
    alert(`The current time is: ${now.toLocaleTimeString()}`);
}
export function App(){
    return (
        <AllertClock handleClick={handleClick} />
    )
}