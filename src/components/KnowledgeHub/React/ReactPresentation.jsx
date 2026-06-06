import { Accordion, AccordionTab } from "primereact/accordion";
import ReactMemoCard from "./Performance/ReactMemoCard";
import "../../../styles/accordion-theme.css";
import { useEffect } from "react";
import ReactUseMemo from "./Performance/ReactUseMemo";
import Performance from "./Performance/Performance";
import Tanstack from "./TanStack/TanStack";
import MicroFrontend from "./MicroFrontEnd/MicroFrontend";
import ModuleFederation from "./ModuleFederation/ModuleFederation";
import ReactCommunication from "./ReactCommunication/ReactCommunication";
import ReactAdvancedStateManagement from "./AdvancedStateManagement/ReactAdvancedStateManagement";

const ReactPresentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="react-presentation" className="min-h-screen   px-2 mt-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-1  items-center">
        <Accordion multiple>
          <AccordionTab
            header={
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold text-2xl pl-2">
                  React Component Communication
                </span>
                <span className="text-slate-400 text-sm">

                </span>
              </div>
            }
          >
            
            <ReactCommunication />
          </AccordionTab>

          <AccordionTab
            header={
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold text-2xl pl-2">
                  React performance optimization
                </span>
                <span className="text-slate-400 text-sm">

                </span>
              </div>
            }
          >
            {/* Performance */}
            <Performance />
          </AccordionTab>

          <AccordionTab
            header={
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold text-2xl pl-2">
                  TanStack Query (React Query)
                </span>
                <span className="text-slate-400 text-sm">

                </span>
              </div>
            }
          >
            {/* TanStack Query */}
            <Tanstack />
          </AccordionTab>

          <AccordionTab
            header={
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold text-2xl pl-2">
                  Microfrontends Architecture
                </span>
                <span className="text-slate-400 text-sm">

                </span>
              </div>
            }
          >
            {/* Microfrontends Architecture */}
            <MicroFrontend />
          </AccordionTab>

          <AccordionTab
            header={
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold text-2xl pl-2">
                  Module Federation
                </span>
                <span className="text-slate-400 text-sm">

                </span>
              </div>
            }
          >
            {/* Microfrontends Architecture */}
            <ModuleFederation />
          </AccordionTab>

          <AccordionTab
            header={
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold text-2xl pl-2">
                  Advanced State Management
                </span>
                <span className="text-slate-400 text-sm">

                </span>
              </div>
            }
          >
            {/* Microfrontends Architecture */}
            <ReactAdvancedStateManagement />
          </AccordionTab>
        </Accordion>
      </div>
    </section>
  );
};

export default ReactPresentation;