import React from 'react';
// import { Dashboard, Orders } from "@pages";
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

interface Route {
    path: string;
    content: string;
    icon: React.ReactElement;
}

const routes: Route[] = [
    {
        path: "/main/dashboard",
        content: "Asosiy",
        icon: <DashboardCustomizeRoundedIcon />
    },
    {
        path: "/main/orders",
        content: "Buyurtmalar",
        icon: <DryCleaningIcon />
    },
];

export default routes;
