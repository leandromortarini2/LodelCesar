import SplitLayoutSection from "../../../components/SplitLayoutSection";
import { Element } from "react-scroll";

interface Props {
  handleDrawer: () => void;
}

export default function IntroductionView({ handleDrawer }: Props) {
  return (
    <div>
      <Element name="intro-1">
        <SplitLayoutSection
          onclick={handleDrawer}
          image="/Images/info 1.png"
          positionImage="left"
          title="Introducción"
          description="Los informes comerciales sobre riesgo crediticio son una herramienta esencial para cualquier empresa que desee minimizar el riesgo de impago y proteger su flujo de efectivo. Estos informes proporcionan información detallada sobre los antecedentes financieros de un cliente potencial, incluyendo su historial de pagos, solvencia y capacidad de pago. En esta presentación, exploraremos cómo nuestro servicio de informes comerciales puede ayudar a su empresa a tomar decisiones más informadas y reducir el riesgo de pérdidas financieras."
          textButton="Estamos Para Acompañar su Negocio"
          background="bg-[url('/backgrounds/BG-1.png')]"
        />
      </Element>
      <Element name="intro-2">
        {" "}
        <SplitLayoutSection
          onclick={handleDrawer}
          image="/Images/info 2.png"
          title="Qué son los informes comerciales sobre riesgo crediticio"
          positionImage="right"
          description="Los informes comerciales sobre riesgo crediticio son documentos que contienen información detallada sobre la solvencia financiera de un individuo o empresa. Estos informes se utilizan para evaluar el riesgo de impago y determinar si es seguro otorgar crédito a un cliente potencial. Nuestros informes comerciales incluyen información sobre el historial de pagos del cliente, su capacidad de pago y su solvencia financiera general. También proporcionamos una calificación de riesgo crediticio, que ayuda a las empresas a evaluar rápidamente el riesgo asociado con un cliente potencial."
          textButton="Información"
          background="bg-[url('/backgrounds/BG-2.png')]"
        />
      </Element>
      <Element name="intro-3">
        <SplitLayoutSection
          onclick={handleDrawer}
          image="/Images/info 3.png"
          positionImage="left"
          title="Por qué son importantes los informes comerciales sobre riesgo crediticio"
          description="Los informes comerciales sobre riesgo crediticio son importantes porque ayudan a las empresas a tomar decisiones informadas sobre la concesión de crédito. Al evaluar el historial de pagos de un cliente potencial, su solvencia financiera y su capacidad de pago, las empresas pueden reducir el riesgo de impago y proteger su flujo de efectivo. Además, los informes comerciales también pueden ayudar a las empresas a identificar posibles fraudes financieros y a evitar trabajar con clientes poco fiables o de alto riesgo."
          textButton="Utilice nuestra información a su favor"
          background="bg-[url('/backgrounds/BG-1.png')]"
        />
      </Element>
      <Element name="intro-4">
        <SplitLayoutSection
          onclick={handleDrawer}
          image="/Images/info 4.png"
          positionImage="right"
          title="Conclusión"
          description="Los informes comerciales sobre riesgo crediticio son una herramienta esencial para cualquier empresa que desee minimizar el riesgo de impago y proteger su flujo de efectivo. Nuestro servicio de informes comerciales ofrece información detallada y precisa sobre el riesgo crediticio de un cliente potencial, lo que permite a las empresas tomar decisiones más informadas y reducir el riesgo de pérdidas financieras. Si está interesado en utilizar nuestro servicio de informes comerciales, no dude en ponerse en contacto con nosotros hoy mismo. Estamos aquí para ayudarlo a proteger su negocio y maximizar sus ganancias."
          textButton="No Pierdas Tiempo y Comienza Ahora"
          background="bg-[url('/backgrounds/BG-2.png')]"
        />
      </Element>
    </div>
  );
}
