import { Accordion, AccordionTab } from "primereact/accordion";
 
import "../../../styles/accordion-theme.css";
import { useEffect } from "react";
import AngularPerformance from "./AngularPerformance/AngularPerformance";
 
 
const AngularPresentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="angular-presentation" className="min-h-screen   px-2 mt-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-1  items-center">
        <Accordion multiple>
          <AccordionTab
            header={
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold text-2xl pl-2">
                  Angular Performance Optimization
                </span>
                <span className="text-slate-400 text-sm">

                </span>
              </div>
            }
          >
            
            <AngularPerformance />
          </AccordionTab>

         

        </Accordion>
      </div>
    </section>
  );
};

export default AngularPresentation;