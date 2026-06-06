import { Accordion, AccordionTab } from "primereact/accordion";
import ReactMemoCard from "./ReactMemoCard";
import ReactUseMemo from "./ReactUseMemo";
import ReactUseCallback from "./ReactUseCallBack";
import ReactLazyLoading from "./ReactLazyLoading";
import ReactVirtualization from "./ReactVirtualization";
const Performance = () => {
    return (
        <section id="performance" className="sub-accordion">
            <Accordion multiple>
                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold txt-white  ">
                                <span className="text-yellow-400 ">React.memo </span> — <span className="text-lg">Prevent Unnecessary Re-renders</span>
                            </h1>
                        </div>
                    }
                >
                    {/* React memo */}
                    <ReactMemoCard />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold  ">
                                <span className="text-yellow-400 ">React.useMemo </span> — <span className="text-lg">Memoize Expensive Computations</span>
                            </h1>

                        </div>
                    }
                >
                    {/* React useMemo */}
                    <ReactUseMemo />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold  ">
                                <span className="text-yellow-400 ">React.useCallback </span> — <span className="text-lg">Memoize Functions</span>
                            </h1>

                        </div>
                    }
                >
                    {/* React useCallback */}
                    <ReactUseCallback />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold  ">
                                <span className="text-yellow-400 "> Lazy Loading </span> — <span className="text-lg">Load Components On Demand</span>
                            </h1>

                        </div>
                    }
                >
                    {/* React lazy loading */}
                    <ReactLazyLoading />
                </AccordionTab>

                <AccordionTab
                    header={
                        <div className="ml-8 flex items-center gap-3">
                            <h1 className="text-xl font-bold  ">
                                <span className="text-yellow-400 "> Virtualization </span> — <span className="text-lg">Render Only Visible Rows</span>
                            </h1>

                        </div>
                    }
                >
                    {/* React lazy loading */}
                    <ReactVirtualization />
                </AccordionTab>

            </Accordion>
        </section>
    )
}

export default Performance