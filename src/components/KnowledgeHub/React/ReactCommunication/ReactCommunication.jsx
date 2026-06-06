import { Accordion, AccordionTab } from "primereact/accordion"
import ReactParentToChildCommunication from "./ReactParentToChildCommunication"
import ReactChildToParentCommunication from "./ReactChildToParentCommunication"
import ReactContextAPICommunication from "./ReactContextAPICommunication"
import ReactParentCallingChildMethods from "./ReactParentCallingChildMethods"
import ReactSiblingCommunication from "./ReactSiblingCommunication"
import ReactCustomHook from "./ReactCustomHook"
import ReactEventBusPattern from "./ReactEventBusPattern"
const ReactCommunication = () => {
    return (
        <section id="microfrontends" className="sub-accordion">
            <Accordion multiple>
                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">React Parent-to-Child Communication
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <ReactParentToChildCommunication />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">React Child-to-Parent Communication
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <ReactChildToParentCommunication />
                </AccordionTab>                

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">React Context API Communication
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <ReactContextAPICommunication />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">React Parent Calling Child Methods
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <ReactParentCallingChildMethods />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">React Sibling Communication
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <ReactSiblingCommunication />
                </AccordionTab>

                 <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">React Custom Hooks
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <ReactCustomHook />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">React Event Bus Pattern
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <ReactEventBusPattern />
                </AccordionTab>

            </Accordion>
        </section>
    )
}

export default ReactCommunication