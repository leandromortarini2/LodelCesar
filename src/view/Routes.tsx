import LandingPage from "./auth/view/landing/LandingPage";
import DashboardLayout from "./app/view/layout/DashboardLayout";
import type { AppRoute } from "../interfaces/Routes";
import PersonManagement from "./app/view/person-management/PersonManagement";
import DisaffectView from "./app/view/disaffect/DisaffectView";
import DashboardView from "./app/view/dashboard/DashboardView";
import AffectView from "./app/view/affect/AffectView";
import CommentsView from "./app/view/comments/CommentsView";
import ReportView from "./app/view/report/ReportView";
import CreditSummaryView from "./app/view/report/view/creditSummary/CreditSummaryView";
import ContactView from "./app/view/report/view/Contact/ContactView";
import DetailsOperations from "./app/view/report/view/detailsOperations/DetailsOperations";
import WorkView from "./app/view/report/view/work/WorkView";
import VerificationView from "./app/view/report/view/verification/VerificationView";
import RegulatoryReports from "./app/view/report/view/regulatoryReports/RegulatoryReports";
import PartnerCreditsView from "./app/view/report/view/partner-credits/PartnerCreditsView";
import OutDatedDateView from "./app/view/report/view/outdated-date/OutDatedDateView";
import StateCreditView from "./app/view/report/view/state-credit/StateCreditView";
import { ProtectedRoute } from "./app/components/ProtectedRoute";

export const routes: AppRoute[] = [
  { path: "/", element: <LandingPage /> },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          { path: "", element: <DashboardView /> },
          { path: "afectaciones", element: <AffectView /> },
          { path: "desafectaciones", element: <DisaffectView /> },
          { path: "comentarios", element: <CommentsView /> },
          { path: "gestion-personas", element: <PersonManagement /> },
          {
            path: "informe",
            element: <ReportView />,
            children: [
              { path: "resumen-crediticio", element: <CreditSummaryView /> },
              { path: "identificacion-contacto", element: <ContactView /> },
              { path: "verificacion-oficial", element: <VerificationView /> },
              { path: "situacion-laboral", element: <WorkView /> },
              { path: "detalle-operaciones", element: <DetailsOperations /> },
              { path: "informes-regulatorios", element: <RegulatoryReports /> },
            ],
          },
          {
            path: "informe/detalle-operaciones/creditos-socios",
            element: <PartnerCreditsView />,
          },
          {
            path: "informe/detalle-operaciones/datos-atrasos",
            element: <OutDatedDateView />,
          },
          {
            path: "informe/detalle-operaciones/estado-credito",
            element: <StateCreditView />,
          },
        ],
      },
    ],
  },
];
