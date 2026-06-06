import { Accordion, AccordionTab } from "primereact/accordion"
import ModuleFederationIntro from "./ModuleFederationIntro"
import MFConfigureRemoteApp from "./MFConfigureRemoteApp"
 

const ModuleFederation = () => {
    return (
        <section id="microfrontends" className="sub-accordion">
            <Accordion multiple>
                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Module Federation Introduction
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <ModuleFederationIntro />
                </AccordionTab>
           <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Configure Remote App
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <MFConfigureRemoteApp />
                </AccordionTab>
            </Accordion>
        </section>
    )
}

export default ModuleFederation