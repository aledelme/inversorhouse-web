import { Tooltip } from "flowbite-react";
import { QuestionCircleIcon } from "./icons/QuestionCircle";

export default function Explainer({ message, className }: { message: string, className?: string }) {
    return <Tooltip content={message} className={'max-w-xs ' + className}><QuestionCircleIcon /></Tooltip>;
}