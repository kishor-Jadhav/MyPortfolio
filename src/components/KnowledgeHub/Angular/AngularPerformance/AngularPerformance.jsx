
import { Accordion, AccordionTab } from "primereact/accordion";
import AnguarOnPush from "./AngularOnPush";
import AngularStandaloneComponents from "./AngularStandaloneComponents";
import AngularSignals from "./AngularSignals";
import AngularVirtualScrolling from "./AngularVirtualScrolling";
import AngularAsyncPipe from "./AngularAsyncPipe";
import AngularPurePipes from "./AngularPurePipes";
import AngularLazyLoading from "./AngularLazyLoading";
import AngularTrackBy from "./AngularTrackBy";
const AngularPerformance = () => {
    return (
        <section id="angular-performance" className="sub-accordion">
            <Accordion multiple>
                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">OnPush Change Detection in Angular
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <AnguarOnPush />
                </AccordionTab>
                <AccordionTab
                    header={
                         <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">TrackBy Function in Angular
                                </span>
                            </h1>
                        </div>
                    }
                >

                    <AngularTrackBy />
                </AccordionTab>

                <AccordionTab
                    header={
                         <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Lazy Loading 
                                </span>
                            </h1>
                        </div>
                    }
                >

                    <AngularLazyLoading />
                </AccordionTab>

                <AccordionTab
                    header={
                         <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Pure Pipes  
                                </span>
                            </h1>
                        </div>
                    }
                >

                    <AngularPurePipes />
                </AccordionTab>

                <AccordionTab
                    header={
                         <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Async Pipe in Angular
                                </span>
                            </h1>
                        </div>
                    }
                >

                    <AngularAsyncPipe />
                </AccordionTab>

                <AccordionTab
                    header={
                         <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Virtual Scrolling in Angular
                                </span>
                            </h1>
                        </div>
                    }
                >

                    <AngularVirtualScrolling />
                </AccordionTab>

                <AccordionTab
                    header={
                         <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Signals in Angular
                                </span>
                            </h1>
                        </div>
                    }
                >

                    <AngularSignals />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Standalone Components 
                                </span>
                            </h1>
                        </div>
                    }
                >

                    <AngularStandaloneComponents />
                </AccordionTab>

            </Accordion>
        </section>
    )
}
export default AngularPerformance;