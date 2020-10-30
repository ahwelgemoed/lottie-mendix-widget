import { Component, ReactNode, createElement } from "react";
import LottieInit from "./components/LottieInit";

import { LottiemendixwidgetContainerProps } from "../typings/LottiemendixwidgetProps";

// import "./ui/Lottiemendixwidget.css";

export default class Lottiemendixwidget extends Component<LottiemendixwidgetContainerProps> {
    render(): ReactNode {
        const { jsonUrl, jsonString, loop, width, height } = this.props;
        return <LottieInit jsonUrl={jsonUrl} jsonString={jsonString} loop={loop} width={width} height={height} />;
    }
}
