import { ReactNode } from "react";

export default function InvestorLayout({ children }: { children: ReactNode }) {
    // หน้านี้จะไม่ดึง Navigation หรือ Footer จาก [locale]/layout.tsx มาใช้
    // มันจะเป็น 'Blank Canvas' ให้คุณสร้างสิ่งใหม่ได้เต็มที่
    return (
        <div className="investor-platform-root">
            {children}
        </div>
    );
}
