import TanStackFeature from "./TanstackFeature";
import TanstackReactExample from "./TanstackReactExample";
import WhyTanstack from "./WhyTanstack";
import { Accordion, AccordionTab } from "primereact/accordion";
const Tanstack = () => {
    return (
        <section id="tan-stack" className="sub-accordion">
            <Accordion multiple>
                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">What is TanStack Query?
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <WhyTanstack />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Features of TanStack Query
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <TanStackFeature />
                </AccordionTab>

<AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">Tanstack Query in Action: React Example
                                </span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <TanstackReactExample />
                </AccordionTab>
            </Accordion>
        </section>
    )
}
export default Tanstack;