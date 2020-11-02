import { Component, ReactNode, createElement } from "react";
import LottieInit from "./components/LottieInit";

import { LottiemendixwidgetContainerProps } from "../typings/LottiemendixwidgetProps";

export default class Lottiemendixwidget extends Component<LottiemendixwidgetContainerProps> {
    render(): ReactNode {
        const { jsonUrl, jsonString, loop, width, height, onMicroflowComplete, triggerStart } = this.props;
        return (
            <LottieInit
                loop={loop}
                width={width}
                height={height}
                jsonUrl={jsonUrl}
                jsonString={jsonString}
                triggerStart={triggerStart}
                onMicroflowComplete={onMicroflowComplete}
            />
        );
    }
}
