import DashboardNav from "@components/dashboardNav";
import { Inter } from "next/font/google";

import Modal from "@components/modal";


const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        {children}
        <Modal/>
        </body>

    </html>
  );
}