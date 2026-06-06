import { Accordion, AccordionTab } from "primereact/accordion"
import MicroFrontendOverview from "./MicroFrontendOverview"
import MicroFrontendCommunication from "./MicrofrontendCommunication"

const MicroFrontend = () => {
    return (
        <section id="microfrontends" className="sub-accordion">
            <Accordion multiple>
                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Microfrontends Overview
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <MicroFrontendOverview />
                </AccordionTab>
                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Microfrontends Communication
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <MicroFrontendCommunication />
                </AccordionTab>

            </Accordion>
        </section>
    )
}

export default MicroFrontend