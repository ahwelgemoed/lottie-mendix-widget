import { createElement, useEffect, Fragment } from "react";

import { useLottie, Lottie } from "react-lottie-hook";

import { useFetchRemoteJson } from "../util/useFetchRemoteJson";
import { transformStringToJsonConfig } from "../util";

import { LottiemendixwidgetContainerProps } from "../../typings/LottiemendixwidgetProps";

type ExcludedLottiemendixwidgetContainerProps = Omit<LottiemendixwidgetContainerProps, "class" | "name" | "tabIndex">;

const LottieInit = ({ jsonUrl, jsonString, loop, width, height }: ExcludedLottiemendixwidgetContainerProps) => {
    const { response } = useFetchRemoteJson(jsonUrl);

    useEffect(() => {
        if (jsonString) {
            const transformedJson = transformStringToJsonConfig(jsonString.value);
            controls.selectAnimation(transformedJson);
        }
    }, [jsonString]);

    useEffect(() => {
        if (jsonUrl) {
            controls.selectAnimation(response);
        }
    }, [response]);

    const [lottieRef, {}, controls] = useLottie({
        renderer: "svg",
        autoplay: true,
        loop,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: false
        }
    });

    return (
        <Fragment>
            <Lottie lottieRef={lottieRef} width={width} height={height} />
        </Fragment>
    );
};

export default LottieInit;
