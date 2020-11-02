import { createElement, useEffect, Fragment, useState, ReactElement } from "react";

import { useLottie, Lottie } from "react-lottie-hook";

import { useFetchRemoteJson } from "../util/useFetchRemoteJson";
import { transformStringToJsonConfig } from "../util";

import { LottiemendixwidgetContainerProps } from "../../typings/LottiemendixwidgetProps";

type ExcludedLottiemendixwidgetContainerProps = Omit<LottiemendixwidgetContainerProps, "class" | "name" | "tabIndex">;

const LottieInit = ({
    jsonUrl,
    jsonString,
    loop,
    width,
    height,
    onMicroflowComplete,
    triggerStart
}: ExcludedLottiemendixwidgetContainerProps): ReactElement => {
    const { response } = useFetchRemoteJson(jsonUrl);
    const [autoPlay, setAutoPlay] = useState<boolean>(false);

    useEffect(() => {
        if (triggerStart) {
            if (triggerStart.value) {
                setAutoPlay(triggerStart.value);
                controls.play();
            } else {
                setAutoPlay(false);
                controls.stop();
            }
        } else {
            setAutoPlay(true);
        }
    }, [triggerStart]);

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

    const [lottieRef, , controls] = useLottie({
        renderer: "svg",
        autoplay: autoPlay,
        loop,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: false
        },
        eventListeners: {
            complete: () => {
                return onMicroflowComplete && onMicroflowComplete.execute();
            }
        }
    });
    return (
        <Fragment>
            <Lottie lottieRef={lottieRef} width={width} height={height} />
        </Fragment>
    );
};

export default LottieInit;
